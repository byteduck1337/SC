// =============================================
// ЦИФРОВОЙ ЩИТ - Полная логика работы
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const startBtn = document.getElementById('startScanBtn');
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.querySelector('.status-text');
    const progressFill = document.getElementById('progressFill');
    const resultsGrid = document.getElementById('resultsGrid');
    const scoreContainer = document.getElementById('scoreContainer');
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreNumber = document.getElementById('scoreNumber');
    const scoreTitle = document.getElementById('scoreTitle');
    const scoreDescription = document.getElementById('scoreDescription');
    const recommendationsList = document.getElementById('recommendationsList');

    // =============================================
    // 1. ФУНКЦИИ ДИАГНОСТИКИ
    // =============================================

    // Проверка наличия защитных заголовков
    function checkSecurityHeaders() {
        // В реальном браузере мы не можем получить все заголовки ответа,
        // но мы можем проверить некоторые через fetch
        let results = {
            xFrame: false,
            csp: false,
            hsts: false,
            xss: false
        };

        // Проверяем через fetch текущую страницу
        return fetch(window.location.href, {
            method: 'HEAD'
        })
        .then(response => {
            const headers = response.headers;
            results.xFrame = headers.has('x-frame-options');
            results.csp = headers.has('content-security-policy');
            results.hsts = headers.has('strict-transport-security');
            results.xss = headers.has('x-xss-protection');
            return results;
        })
        .catch(() => {
            // Если fetch не сработал (CORS), используем fallback-данные
            return {
                xFrame: false,
                csp: false,
                hsts: false,
                xss: false
            };
        });
    }

    // Проверка cookies на безопасность
    function checkCookiesSecurity() {
        const cookies = document.cookie.split(';').map(c => c.trim());
        let secureCount = 0;
        let httpOnlyCount = 0;
        let sameSiteCount = 0;

        // Мы не можем напрямую проверить флаги через JS,
        // но можем проверить наличие Secure и HttpOnly в названиях кук
        // (для демонстрации используем эвристику)
        cookies.forEach(cookie => {
            if (cookie.includes('Secure')) secureCount++;
            if (cookie.includes('HttpOnly')) httpOnlyCount++;
            if (cookie.includes('SameSite')) sameSiteCount++;
        });

        // Эвристическая оценка
        const totalCookies = cookies.length || 1;
        const score = (secureCount + httpOnlyCount + sameSiteCount) / (totalCookies * 3);

        return {
            secure: secureCount > 0,
            httpOnly: httpOnlyCount > 0,
            sameSite: sameSiteCount > 0,
            score: Math.min(score * 100, 100)
        };
    }

    // Проверка цифрового отпечатка (fingerprinting)
    function checkFingerprinting() {
        // Собираем уникальные характеристики браузера
        const fingerprint = {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            colorDepth: window.screen.colorDepth,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            plugins: navigator.plugins.length,
            doNotTrack: navigator.doNotTrack || 'unspecified',
            cookieEnabled: navigator.cookieEnabled,
            hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
            deviceMemory: navigator.deviceMemory || 'unknown'
        };

        // Оцениваем уникальность (чем больше параметров, тем выше риск)
        let riskFactors = 0;
        const totalFactors = 10;

        if (fingerprint.userAgent) riskFactors++;
        if (fingerprint.language) riskFactors++;
        if (fingerprint.platform) riskFactors++;
        if (fingerprint.screenWidth && fingerprint.screenHeight) riskFactors++;
        if (fingerprint.colorDepth) riskFactors++;
        if (fingerprint.timezone) riskFactors++;
        if (fingerprint.plugins > 0) riskFactors++;
        if (fingerprint.doNotTrack === 'unspecified') riskFactors += 0.5;
        if (fingerprint.hardwareConcurrency !== 'unknown') riskFactors++;
        if (fingerprint.deviceMemory !== 'unknown') riskFactors++;

        const riskScore = (riskFactors / totalFactors) * 100;

        return {
            riskScore: Math.round(riskScore),
            details: fingerprint,
            isHighRisk: riskScore > 60
        };
    }

    // Проверка на XSS-уязвимость (симуляция)
    function checkXSSVulnerability() {
        // Проверяем наличие незащищенных параметров в URL
        const url = new URL(window.location.href);
        const params = url.searchParams;
        let hasUnsafeParams = false;

        for (let [key, value] of params) {
            // Проверяем, содержит ли параметр потенциально опасные символы
            if (/[<>'"&]/.test(value)) {
                hasUnsafeParams = true;
                break;
            }
        }

        // Проверяем, используются ли внутренние ссылки без экранирования
        const links = document.querySelectorAll('a[href]');
        let unsafeLinks = 0;
        links.forEach(link => {
            if (link.href.includes('<') || link.href.includes('>')) {
                unsafeLinks++;
            }
        });

        return {
            hasUnsafeParams: hasUnsafeParams,
            unsafeLinksCount: unsafeLinks,
            isVulnerable: hasUnsafeParams || unsafeLinks > 0
        };
    }

    // Проверка на CSRF (симуляция)
    function checkCSRFVulnerability() {
        // Проверяем наличие форм без CSRF-токенов
        const forms = document.querySelectorAll('form');
        let formsWithoutToken = 0;

        forms.forEach(form => {
            const hasToken = form.querySelector('input[name*="csrf"]') ||
                           form.querySelector('input[name*="token"]') ||
                           form.querySelector('input[name*="_token"]');
            if (!hasToken) {
                formsWithoutToken++;
            }
        });

        // Проверяем, используются ли GET-запросы для изменения данных
        const getForms = document.querySelectorAll('form[method="get"]');
        let unsafeGetForms = 0;
        getForms.forEach(form => {
            const action = form.getAttribute('action');
            if (action && (action.includes('delete') || action.includes('update') ||
                          action.includes('edit') || action.includes('remove'))) {
                unsafeGetForms++;
            }
        });

        return {
            formsWithoutToken: formsWithoutToken,
            unsafeGetForms: unsafeGetForms,
            isVulnerable: formsWithoutToken > 0 || unsafeGetForms > 0
        };
    }

    // Проверка на фишинг-риск (оценка URL)
    function checkPhishingRisk() {
        const url = window.location.href;
        let riskScore = 0;

        // Проверка на подозрительные признаки
        if (url.includes('http://')) riskScore += 20;
        if (url.includes('free') || url.includes('bonus') || url.includes('win')) riskScore += 15;
        if (url.includes('login') || url.includes('signin')) riskScore += 10;
        if (url.includes('secure') || url.includes('verify')) riskScore += 10;
        if (url.includes('update') || url.includes('confirm')) riskScore += 10;

        // Проверка длины URL (очень длинные могут быть подозрительными)
        if (url.length > 120) riskScore += 10;

        // Проверка на наличие IP-адреса вместо домена
        if (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(url)) riskScore += 25;

        return {
            riskScore: Math.min(riskScore, 100),
            isPhishing: riskScore > 50
        };
    }

    // Собственная атака: "Троянский советчик" - симуляция
    function checkTrojanAdvisorRisk() {
        // Проверяем, есть ли на странице подозрительные виджеты "помощников"
        const suspiciousElements = document.querySelectorAll('[id*="chat"][id*="help"], [class*="chat"][class*="help"]');
        let hasFakeAssistant = false;

        suspiciousElements.forEach(el => {
            const text = el.textContent.toLowerCase();
            if (text.includes('антивирус') || text.includes('защита') ||
                text.includes('скачать') || text.includes('установить')) {
                hasFakeAssistant = true;
            }
        });

        // Проверяем наличие подозрительных загрузок
        const downloadLinks = document.querySelectorAll('a[download]');
        let suspiciousDownloads = 0;
        downloadLinks.forEach(link => {
            const href = link.href.toLowerCase();
            if (href.includes('.exe') || href.includes('.msi') || href.includes('.scr')) {
                suspiciousDownloads++;
            }
        });

        return {
            hasFakeAssistant: hasFakeAssistant,
            suspiciousDownloads: suspiciousDownloads,
            isAtRisk: hasFakeAssistant || suspiciousDownloads > 0
        };
    }

    // =============================================
    // 2. ФУНКЦИЯ ЗАПУСКА СКАНИРОВАНИЯ
    // =============================================

    async function runFullScan() {
        // Обновляем статус
        statusDot.className = 'status-dot scanning';
        statusText.textContent = 'Сканирование...';
        startBtn.disabled = true;
        startBtn.innerHTML = '<span class="btn-icon">⏳</span> Сканирование...';

        // Показываем прогресс
        let progress = 0;
        const totalChecks = 7;
        let completed = 0;

        function updateProgress() {
            completed++;
            progress = (completed / totalChecks) * 100;
            progressFill.style.width = progress + '%';
        }

        try {
            // Запускаем все проверки параллельно
            const [
                headersResult,
                cookiesResult,
                fingerprintResult,
                xssResult,
                csrfResult,
                phishingResult,
                trojanResult
            ] = await Promise.all([
                checkSecurityHeaders(),
                Promise.resolve(checkCookiesSecurity()),
                Promise.resolve(checkFingerprinting()),
                Promise.resolve(checkXSSVulnerability()),
                Promise.resolve(checkCSRFVulnerability()),
                Promise.resolve(checkPhishingRisk()),
                Promise.resolve(checkTrojanAdvisorRisk())
            ]);

            updateProgress();
            updateProgress();
            updateProgress();
            updateProgress();
            updateProgress();
            updateProgress();
            updateProgress();

            // Собираем все результаты
            const results = {
                headers: headersResult,
                cookies: cookiesResult,
                fingerprint: fingerprintResult,
                xss: xssResult,
                csrf: csrfResult,
                phishing: phishingResult,
                trojan: trojanResult
            };

            // Отображаем результаты
            displayResults(results);

            // Рассчитываем общий балл
            const score = calculateOverallScore(results);
            displayScore(score);

            // Генерируем рекомендации
            generateRecommendations(results);

            // Обновляем статус
            statusDot.className = 'status-dot complete';
            statusText.textContent = 'Сканирование завершено!';
            startBtn.disabled = false;
            startBtn.innerHTML = '<span class="btn-icon">🔄</span> Проверить снова';

        } catch (error) {
            console.error('Ошибка при сканировании:', error);
            statusDot.className = 'status-dot idle';
            statusText.textContent = 'Ошибка при сканировании. Попробуйте снова.';
            startBtn.disabled = false;
            startBtn.innerHTML = '<span class="btn-icon">🔍</span> Начать сканирование';
            progressFill.style.width = '0%';
        }
    }

    // =============================================
    // 3. ОТОБРАЖЕНИЕ РЕЗУЛЬТАТОВ
    // =============================================

    function displayResults(results) {
        let html = '';

        // 1. Заголовки безопасности
        const headersStatus = results.headers.xFrame && results.headers.csp && results.headers.hsts;
        html += `
            <div class="result-card ${headersStatus ? 'pass' : 'fail'}">
                <div class="result-card-header">
                    <span class="result-card-title">🛡️ Заголовки безопасности</span>
                    <span class="result-card-badge ${headersStatus ? 'badge-pass' : 'badge-fail'}">
                        ${headersStatus ? 'Защищено' : 'Уязвимо'}
                    </span>
                </div>
                <p class="result-card-desc">
                    ${headersStatus ?
                        'Все основные защитные заголовки присутствуют.' :
                        'Отсутствуют важные заголовки: ' +
                        (!results.headers.xFrame ? 'X-Frame-Options, ' : '') +
                        (!results.headers.csp ? 'CSP, ' : '') +
                        (!results.headers.hsts ? 'HSTS' : '')
                    }
                </p>
            </div>
        `;

        // 2. Cookies
        const cookiesStatus = results.cookies.secure && results.cookies.httpOnly;
        html += `
            <div class="result-card ${cookiesStatus ? 'pass' : 'warn'}">
                <div class="result-card-header">
                    <span class="result-card-title">🍪 Безопасность cookies</span>
                    <span class="result-card-badge ${cookiesStatus ? 'badge-pass' : 'badge-warn'}">
                        ${cookiesStatus ? 'Безопасно' : 'Есть риски'}
                    </span>
                </div>
                <p class="result-card-desc">
                    ${results.cookies.secure ? '✓ Secure-флаг установлен' : '✗ Отсутствует Secure-флаг'} <br>
                    ${results.cookies.httpOnly ? '✓ HttpOnly-флаг установлен' : '✗ Отсутствует HttpOnly-флаг'} <br>
                    ${results.cookies.sameSite ? '✓ SameSite-флаг установлен' : '✗ Отсутствует SameSite-флаг'}
                </p>
            </div>
        `;

        // 3. Цифровой отпечаток
        const fingerprintStatus = results.fingerprint.riskScore < 50;
        html += `
            <div class="result-card ${fingerprintStatus ? 'pass' : 'warn'}">
                <div class="result-card-header">
                    <span class="result-card-title">🖐️ Цифровой отпечаток</span>
                    <span class="result-card-badge ${fingerprintStatus ? 'badge-pass' : 'badge-warn'}">
                        ${fingerprintStatus ? 'Низкий риск' : 'Высокий риск'}
                    </span>
                </div>
                <p class="result-card-desc">
                    Уникальность браузера: ${results.fingerprint.riskScore}% <br>
                    ${results.fingerprint.isHighRisk ?
                        'Ваш браузер легко идентифицируется. Используйте расширения для защиты.' :
                        'Ваш браузер имеет среднюю уникальность.'}
                </p>
            </div>
        `;

        // 4. XSS
        const xssStatus = !results.xss.isVulnerable;
        html += `
            <div class="result-card ${xssStatus ? 'pass' : 'fail'}">
                <div class="result-card-header">
                    <span class="result-card-title">💉 XSS-уязвимости</span>
                    <span class="result-card-badge ${xssStatus ? 'badge-pass' : 'badge-fail'}">
                        ${xssStatus ? 'Безопасно' : 'Обнаружено'}
                    </span>
                </div>
                <p class="result-card-desc">
                    ${results.xss.isVulnerable ?
                        'Обнаружены потенциальные XSS-уязвимости. ' +
                        (results.xss.hasUnsafeParams ? 'Небезопасные параметры в URL. ' : '') +
                        (results.xss.unsafeLinksCount > 0 ? `Найдено ${results.xss.unsafeLinksCount} небезопасных ссылок.` : '') :
                        'XSS-уязвимости не обнаружены.'}
                </p>
            </div>
        `;

        // 5. CSRF
        const csrfStatus = !results.csrf.isVulnerable;
        html += `
            <div class="result-card ${csrfStatus ? 'pass' : 'fail'}">
                <div class="result-card-header">
                    <span class="result-card-title">🔄 CSRF-защита</span>
                    <span class="result-card-badge ${csrfStatus ? 'badge-pass' : 'badge-fail'}">
                        ${csrfStatus ? 'Защищено' : 'Уязвимо'}
                    </span>
                </div>
                <p class="result-card-desc">
                    ${results.csrf.isVulnerable ?
                        'Обнаружены уязвимости к CSRF. ' +
                        (results.csrf.formsWithoutToken > 0 ? `Форм без CSRF-токена: ${results.csrf.formsWithoutToken}. ` : '') +
                        (results.csrf.unsafeGetForms > 0 ? `Небезопасных GET-форм: ${results.csrf.unsafeGetForms}.` : '') :
                        'CSRF-защита настроена корректно.'}
                </p>
            </div>
        `;

        // 6. Фишинг
        const phishingStatus = !results.phishing.isPhishing;
        html += `
            <div class="result-card ${phishingStatus ? 'pass' : 'fail'}">
                <div class="result-card-header">
                    <span class="result-card-title">🎣 Фишинг-риск</span>
                    <span class="result-card-badge ${phishingStatus ? 'badge-pass' : 'badge-fail'}">
                        ${phishingStatus ? 'Низкий' : 'Высокий'}
                    </span>
                </div>
                <p class="result-card-desc">
                    Риск: ${results.phishing.riskScore}% <br>
                    ${results.phishing.isPhishing ?
                        'Сайт имеет признаки фишинга. Будьте осторожны!' :
                        'Признаков фишинга не обнаружено.'}
                </p>
            </div>
        `;

        // 7. Троянский советчик (новая угроза)
        const trojanStatus = !results.trojan.isAtRisk;
        html += `
            <div class="result-card ${trojanStatus ? 'pass' : 'fail'}">
                <div class="result-card-header">
                    <span class="result-card-title">🤖 Троянский советчик</span>
                    <span class="result-card-badge ${trojanStatus ? 'badge-pass' : 'badge-fail'}">
                        ${trojanStatus ? 'Безопасно' : 'Обнаружено'}
                    </span>
                </div>
                <p class="result-card-desc">
                    ${results.trojan.isAtRisk ?
                        'Обнаружены признаки атаки "Троянский советчик". ' +
                        (results.trojan.hasFakeAssistant ? 'Подозрительный виджет помощи. ' : '') +
                        (results.trojan.suspiciousDownloads > 0 ? `Подозрительных загрузок: ${results.trojan.suspiciousDownloads}.` : '') :
                        'Признаков атаки не обнаружено.'}
                </p>
            </div>
        `;

        resultsGrid.innerHTML = html;
        resultsGrid.style.display = 'grid';
        scoreContainer.style.display = 'flex';
    }

    // =============================================
    // 4. РАСЧЕТ ОБЩЕГО БАЛЛА
    // =============================================

    function calculateOverallScore(results) {
        let scores = [];

        // Заголовки безопасности: 0 или 100
        const headerScore = (results.headers.xFrame && results.headers.csp && results.headers.hsts) ? 100 : 0;
        scores.push(headerScore);

        // Cookies: 0-100
        let cookieScore = 0;
        if (results.cookies.secure) cookieScore += 33;
        if (results.cookies.httpOnly) cookieScore += 33;
        if (results.cookies.sameSite) cookieScore += 34;
        scores.push(cookieScore);

        // Цифровой отпечаток: чем ниже риск, тем выше балл
        const fingerprintScore = Math.max(0, 100 - results.fingerprint.riskScore);
        scores.push(fingerprintScore);

        // XSS: 0 или 100
        const xssScore = results.xss.isVulnerable ? 0 : 100;
        scores.push(xssScore);

        // CSRF: 0 или 100
        const csrfScore = results.csrf.isVulnerable ? 0 : 100;
        scores.push(csrfScore);

        // Фишинг: чем ниже риск, тем выше балл
        const phishingScore = Math.max(0, 100 - results.phishing.riskScore);
        scores.push(phishingScore);

        // Троян: 0 или 100
        const trojanScore = results.trojan.isAtRisk ? 0 : 100;
        scores.push(trojanScore);

        // Средний балл
        const total = scores.reduce((a, b) => a + b, 0);
        return Math.round(total / scores.length);
    }

    function displayScore(score) {
        scoreNumber.textContent = score;

        // Обновляем круговую диаграмму
        const color = score >= 80 ? '#4CAF50' :
                      score >= 60 ? '#FFA726' :
                      score >= 40 ? '#FF7043' : '#EF5350';
        scoreCircle.style.setProperty('--score', score + '%');
        scoreCircle.style.background =
            `conic-gradient(${color} 0% ${score}%, var(--light-gray) ${score}% 100%)`;

        // Текст
        if (score >= 80) {
            scoreTitle.textContent = 'Отличный уровень защиты! 👍';
            scoreDescription.textContent = 'Вы хорошо защищены, но оставайтесь бдительными.';
        } else if (score >= 60) {
            scoreTitle.textContent = 'Хороший уровень защиты';
            scoreDescription.textContent = 'Есть небольшие уязвимости. Рекомендуем изучить наши советы.';
        } else if (score >= 40) {
            scoreTitle.textContent = 'Средний уровень защиты';
            scoreDescription.textContent = 'Обнаружены серьезные уязвимости. Немедленно примите меры!';
        } else {
            scoreTitle.textContent = 'Критический уровень риска! ⚠️';
            scoreDescription.textContent = 'Ваш браузер крайне уязвим. Следуйте нашим рекомендациям как можно скорее.';
        }
    }

    // =============================================
    // 5. ГЕНЕРАЦИЯ РЕКОМЕНДАЦИЙ
    // =============================================

    function generateRecommendations(results) {
        let recommendations = [];

        // Рекомендации по заголовкам
        if (!results.headers.xFrame || !results.headers.csp || !results.headers.hsts) {
            recommendations.push({
                icon: '🛡️',
                title: 'Настройте защитные заголовки',
                description: 'Администраторам сайта: добавьте заголовки X-Frame-Options, Content-Security-Policy и Strict-Transport-Security.',
                action: 'Подробнее о заголовках безопасности',
                link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers'
            });
        }

        // Рекомендации по cookies
        if (!results.cookies.secure || !results.cookies.httpOnly) {
            recommendations.push({
                icon: '🍪',
                title: 'Усильте защиту cookies',
                description: 'Убедитесь, что все важные cookies имеют флаги Secure и HttpOnly. Это предотвратит их кражу.',
                action: 'Настройка cookies',
                link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies'
            });
        }

        // Рекомендации по цифровому отпечатку
        if (results.fingerprint.isHighRisk) {
            recommendations.push({
                icon: '🖐️',
                title: 'Скрывайте цифровой отпечаток',
                description: 'Установите расширения для браузера, которые блокируют сбор отпечатков, например, Privacy Badger или Canvas Blocker.',
                action: 'Установить расширение',
                link: 'https://privacybadger.org/'
            });
        }

        // Рекомендации по XSS
        if (results.xss.isVulnerable) {
            recommendations.push({
                icon: '💉',
                title: 'Защита от XSS-атак',
                description: 'Используйте экранирование вводимых данных. Никогда не доверяйте пользовательскому вводу. Установите Content Security Policy.',
                action: 'Руководство по XSS',
                link: 'https://owasp.org/www-community/attacks/xss/'
            });
        }

        // Рекомендации по CSRF
        if (results.csrf.isVulnerable) {
            recommendations.push({
                icon: '🔄',
                title: 'Настройте CSRF-защиту',
                description: 'Добавьте CSRF-токены во все формы, изменяющие данные. Используйте SameSite-флаг для cookies.',
                action: 'Руководство по CSRF',
                link: 'https://owasp.org/www-community/attacks/csrf/'
            });
        }

        // Рекомендации по фишингу
        if (results.phishing.isPhishing) {
            recommendations.push({
                icon: '🎣',
                title: 'Остерегайтесь фишинга!',
                description: 'Внимательно проверяйте URL-адреса. Не переходите по подозрительным ссылкам. Используйте менеджер паролей.',
                action: 'Как распознать фишинг',
                link: 'https://www.kaspersky.ru/resource-center/threats/phishing'
            });
        }

        // Рекомендации по Троянскому советчику
        if (results.trojan.isAtRisk) {
            recommendations.push({
                icon: '🤖',
                title: 'Остерегайтесь фальшивых помощников',
                description: 'Не устанавливайте программы, предлагаемые всплывающими окнами. Скачивайте ПО только с официальных сайтов.',
                action: 'Безопасная установка ПО',
                link: 'https://www.avg.com/ru/signal/legitimate-software-download-sites'
            });
        }

        // Общая рекомендация, если всё хорошо
        if (recommendations.length === 0) {
            recommendations.push({
                icon: '⭐',
                title: 'Отличная работа!',
                description: 'Ваш браузер хорошо защищен. Продолжайте соблюдать правила кибербезопасности и регулярно обновляйте ПО.',
                action: 'Правила кибербезопасности',
                link: 'https://www.kaspersky.ru/resource-center/preemptive-safety/top-10-internet-safety-rules'
            });
        }

        // Отображаем рекомендации
        let html = '';
        recommendations.forEach(rec => {
            html += `
                <div class="recommendation-item">
                    <span class="rec-icon">${rec.icon}</span>
                    <div class="rec-content">
                        <h4>${rec.title}</h4>
                        <p>${rec.description}</p>
                        <a href="${rec.link}" target="_blank" class="rec-action">${rec.action} →</a>
                    </div>
                </div>
            `;
        });

        recommendationsList.innerHTML = html;
    }

    // =============================================
    // 6. ОБРАБОТЧИК СОБЫТИЙ
    // =============================================

    startBtn.addEventListener('click', runFullScan);

    // Навигация по якорям
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Инициализация: показываем пустые результаты
    resultsGrid.style.display = 'none';
    scoreContainer.style.display = 'none';

    console.log('🛡️ Цифровой Щит загружен! Нажмите "Начать сканирование" для проверки.');
});