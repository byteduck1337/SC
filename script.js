'use strict';

const ICONS = {
  shieldCheck:'<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  bug:'<path d="M8 2l1.9 1.9M16 2l-1.9 1.9"/><path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M12 20a6 6 0 0 0 6-6v-3a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6 6 0 0 0 6 6Z"/><path d="M12 20v-7"/><path d="M6 13H2M6 17H3M6 9H3M22 13h-4M21 17h-3M21 9h-3"/>',
  plug:'<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v5"/>',
  code:'<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-2.64-6.36L21 8"/><path d="M21 3v5h-5"/>',
  cursor:'<path d="m9 9 5 12 1.8-5.2L21 14 9 9Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/>',
  fish:'<path d="M6.5 12c1-3.5 5-6 8.5-6 3.6 0 6.1 2.5 7 6-.9 3.5-3.4 6-7 6s-7.5-2.5-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.9a9.8 9.8 0 0 1 0-11.8"/><path d="M7 10.7C7 8 5.6 6 2.7 5.5c-1 1.5-1 5 .3 6.5-1.3 1.5-1.3 5-.3 6.5C5.6 18 7 16 7 13.3"/>',
  browserLock:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20"/><path d="M5.5 6.5h.01M8.5 6.5h.01"/><rect x="10" y="13" width="6" height="4.5" rx="1"/><path d="M11.5 13v-1a1.5 1.5 0 0 1 3 0v1"/>',
  cookie:'<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M15 11v.01"/>',
  fingerprint:'<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .13-5.35 0-6"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
  cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  alert:'<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4M12 17h.01"/>',
  key:'<path d="m21 2-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8Zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
  network:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  external:'<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  check:'<path d="M20 6 9 17l-5-5"/>'
};
const icon = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

const THREATS = [
  { icon:'download', name:'Drive-by Download', level:'high', levelName:'Высокая',
    text:'Скрытая загрузка вредоносных файлов при простом посещении страницы — без кликов и подтверждений. Использует ошибки браузера и устаревшее ПО.' },
  { icon:'bug', name:'Эксплойты браузера', level:'crit', levelName:'Критическая',
    text:'Атаки на уязвимости движков Chromium, WebKit и Gecko позволяют выполнить произвольный код при простом открытии страницы.' },
  { icon:'plug', name:'Эксплойты плагинов', level:'high', levelName:'Высокая',
    text:'Flash, Java-апплеты и сторонние PDF-просмотрщики — исторически самые уязвимые компоненты. Каждый лишний плагин — открытая дверь.' },
  { icon:'code', name:'XSS-атаки', level:'high', levelName:'Высокая',
    text:'Внедрение чужого скрипта в доверенную страницу: кража сессий, паролей и выполнение действий от вашего имени.' },
  { icon:'refresh', name:'CSRF', level:'med', levelName:'Средняя',
    text:'Незаметная отправка запросов от вашего имени: перевод средств, смена пароля — пока вы авторизованы на сайте.' },
  { icon:'cursor', name:'Кликджекинг', level:'med', levelName:'Средняя',
    text:'Невидимый слой поверх интерфейса: вы думаете, что нажимаете одно, а подтверждаете совсем другое.' },
  { icon:'fish', name:'Фишинг', level:'crit', levelName:'Критическая',
    text:'Поддельные страницы входа банков и сервисов, неотличимые от настоящих. Цель — ваши пароли и карты.' },
  { icon:'browserLock', name:'Спуфинг', level:'high', levelName:'Высокая',
    text:'Подмена адресной строки, домена или SSL-сертификата: сайт выглядит легитимным, но принадлежит атакующему.' },
  { icon:'cookie', name:'Session Hijacking', level:'crit', levelName:'Критическая',
    text:'Кража cookies и токенов сессии даёт злоумышленнику полный доступ к вашим аккаунтам — без пароля.' },
  { icon:'fingerprint', name:'Fingerprinting', level:'med', levelName:'Средняя',
    text:'Сбор десятков параметров браузера в уникальный «отпечаток»: вас отслеживают даже в приватном режиме.' },
  { icon:'cpu', name:'Криптоджекинг', level:'med', levelName:'Средняя',
    text:'Скрытый майнинг: чужой сайт использует ваш процессор и электричество, замедляя устройство и сажая батарею.' },
  { icon:'target', name:'Атака «Водопой»', level:'high', levelName:'Высокая',
    text:'Взлом сайтов, которыми пользуется нужная атакующим аудитория: вы заражаетесь на доверенном ресурсе.' },
  { icon:'alert', name:'Scareware', level:'high', levelName:'Высокая',
    text:'«Ваш компьютер заражён!» — фальшивая паника с предложением купить «лечение», которое само является вредоносом.' },
  { icon:'key', name:'Брутфорс', level:'med', levelName:'Средняя',
    text:'Автоматический подбор паролей через формы входа, не защищённые капчей и ограничениями на число попыток.' },
  { icon:'network', name:'Ботнет', level:'crit', levelName:'Критическая',
    text:'Ваше устройство становится частью сети ботов: рассылает спам, участвует в DDoS и майнит — без вашего ведома.' }
];

const RECS = {
  driveby: { title:'Отключите автоматические загрузки',
    text:'Включите в браузере подтверждение перед загрузкой файлов и никогда не открывайте исполняемые файлы (.exe, .msi, .apk) с незнакомых сайтов. Блокировщик рекламы с фильтрами малвари снижает риск drive-by-атак на порядок.',
    link:'https://www.kaspersky.ru/resource-center/threats/what-is-a-drive-by-download', action:'Подробнее об угрозе' },
  browserExploit: { title:'Обновите браузер до актуальной версии',
    text:'Установите последнюю стабильную версию и включите автообновление. Подавляющее большинство эксплойтов работают только против устаревших версий движка.',
    link:'https://browser-update.org/ru/', action:'Проверить обновления' },
  plugins: { title:'Избавьтесь от устаревших плагинов',
    text:'Flash и Java-апплеты мертвы: удалите их со всех браузеров. PDF открывайте во встроенном просмотрщике, а не в сторонних программах с собственными уязвимостями.',
    link:'https://www.adobe.com/products/flashplayer/end-of-life.html', action:'Почему Flash опасен' },
  xss: { title:'Усильте Content Security Policy',
    text:'Заголовок CSP ограничивает источники скриптов и блокирует inline-выполнение. Как пользователь — установите uBlock Origin или NoScript: они отсекают большинство XSS-нагрузок.',
    link:'https://developer.mozilla.org/ru/docs/Web/HTTP/CSP', action:'Документация CSP' },
  csrf: { title:'Не оставайтесь авторизованным на чужих сайтах',
    text:'CSRF эксплуатирует активные сессии. Выходите из аккаунтов после работы, а формам необходимы CSRF-токены и cookies с флагом SameSite.',
    link:'https://owasp.org/www-community/attacks/csrf/', action:'Руководство OWASP' },
  clickjacking: { title:'Защититесь от подмены кликов',
    text:'Заголовки X-Frame-Options: DENY или CSP frame-ancestors запрещают встраивание страницы в чужие фреймы. Расширение NoScript дополнительно блокирует фрейминг.',
    link:'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/X-Frame-Options', action:'Документация MDN' },
  phishing: { title:'Проверяйте адрес, а не дизайн',
    text:'Фишинг распознаётся по домену, а не по внешнему виду. Используйте менеджер паролей — он не введёт пароль на поддельном домене — и включите антифишинг-фильтры браузера.',
    link:'https://www.kaspersky.ru/resource-center/threats/phishing', action:'Как распознать фишинг' },
  spoofing: { title:'Работайте только по HTTPS',
    text:'Никогда не вводите данные на HTTP-сайтах. Установите расширение HTTPS Everywhere и проверяйте замок в адресной строке на страницах входа и оплаты.',
    link:'https://www.eff.org/https-everywhere', action:'HTTPS Everywhere' },
  session: { title:'Защитите сессионные данные',
    text:'Не используйте публичный Wi-Fi без VPN — в открытых сетях cookies перехватываются за секунды. Всегда выходите из аккаунтов на чужих устройствах.',
    link:'https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies', action:'О безопасности cookies' },
  fingerprint: { title:'Уменьшите цифровой отпечаток',
    text:'Отключите сторонние cookies, включите встроенную защиту от трекинга (Firefox ETP, Brave Shields) и расширение Privacy Badger. Полностью скрыть отпечаток нельзя — но можно сделать его типовым.',
    link:'https://coveryourtracks.eff.org/', action:'Проверить отпечаток в EFF' },
  crypto: { title:'Заблокируйте криптомайнеры',
    text:'Фильтры uBlock Origin содержат списки известных майнеров. Если вентилятор шумит на пустой вкладке — откройте диспетчер задач браузера (Shift+Esc) и найдите виновника.',
    link:'https://ublockorigin.com/', action:'uBlock Origin' },
  watering: { title:'Держите блокировщик включённым везде',
    text:'Риск «водопоя» растёт с числом сторонних скриптов на странице. Блокировщик рекламы уменьшает поверхность атаки даже на доверенных сайтах, а свежий браузер закрывает payload-эксплойты.',
    link:'https://en.wikipedia.org/wiki/Watering_hole_attack', action:'Об атаке «Водопой»' },
  scareware: { title:'Не верьте всплывающим «пугалкам»',
    text:'Ни один браузер не сообщает о вирусах всплывающим окном. Закрывайте такие страницы через диспетчер задач браузера и никогда не звоните по номерам из подобных предупреждений.',
    link:'https://www.kaspersky.ru/resource-center/threats/scareware', action:'Подробнее о scareware' },
  bruteforce: { title:'Уникальные пароли + 2FA',
    text:'Брутфорс бессмысленен, если пароль уникален и включена двухфакторная аутентификация. Храните пароли в менеджере и не используйте один пароль на нескольких сайтах.',
    link:'https://www.kaspersky.ru/resource-center/definitions/brute-force-attack', action:'О брутфорс-атаках' },
  botnet: { title:'Отзовите лишние разрешения',
    text:'Проверьте выданные сайтам разрешения на уведомления и геолокацию — через них ботнет получает канал управления. Следите за фоновой нагрузкой сети и процессора.',
    link:'https://www.kaspersky.ru/resource-center/threats/botnets', action:'О ботнет-сетях' }
};

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function checkDriveBy() {
  const findings = []; let safety = 100;
  const frames = [...document.querySelectorAll('iframe, frame')];
  let hidden = 0;
  frames.forEach(f => {
    const cs = getComputedStyle(f);
    if (cs.display === 'none' || cs.visibility === 'hidden' || f.offsetWidth < 2 || f.offsetHeight < 2 || parseFloat(cs.opacity) === 0) hidden++;
  });
  if (hidden > 0) { safety -= hidden * 25; findings.push(`Обнаружены скрытые iframe (${hidden}) — типичный вектор drive-by-загрузок`); }
  else if (frames.length) findings.push(`Фреймов на странице: ${frames.length}, все видимые`);
  const risky = [...document.querySelectorAll('a[href]')].filter(a => /\.(exe|msi|scr|bat|cmd|apk|jar|ps1)(\?|$)/i.test(a.href));
  if (risky.length) { safety -= risky.length * 15; findings.push(`Прямые ссылки на исполняемые файлы: ${risky.length}`); }
  if (document.querySelector('meta[http-equiv="refresh" i]')) { safety -= 15; findings.push('Авто-перенаправление через meta-refresh — подозрительный паттерн'); }
  if (!findings.length) findings.push('Скрытых загрузок, невидимых фреймов и исполняемых файлов не найдено');
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkBrowserExploit() {
  const findings = []; let safety = 100;
  const ua = navigator.userAgent;
  let name = 'Неизвестный браузер', ver = 0, engine = 'не определён';
  const edg = ua.match(/Edg\/(\d+)/), chr = ua.match(/Chrome\/(\d+)/), ff = ua.match(/Firefox\/(\d+)/), saf = ua.match(/Version\/(\d+)[\d.]*\s+Safari/);
  if (edg) { name = 'Microsoft Edge'; ver = +edg[1]; engine = 'Blink / Chromium'; }
  else if (chr) { name = 'Google Chrome'; ver = +chr[1]; engine = 'Blink / Chromium'; }
  else if (ff) { name = 'Mozilla Firefox'; ver = +ff[1]; engine = 'Gecko'; }
  else if (saf) { name = 'Safari'; ver = +saf[1]; engine = 'WebKit'; }
  const min = { 'Google Chrome':134, 'Microsoft Edge':134, 'Mozilla Firefox':136, 'Safari':17 }[name];
  if (min && ver < min) {
    safety -= clamp((min - ver) * 12, 20, 90);
    findings.push(`${name} ${ver} устарел: актуальная ветка — ${min}+. Старые версии содержат известные эксплойты`);
  } else if (ver) {
    findings.push(`${name} ${ver} (${engine}) — версия актуальна, известные эксплойты не применимы`);
  } else { safety -= 20; findings.push('Не удалось определить версию браузера из User-Agent'); }
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl');
    const dbg = gl && gl.getExtension('WEBGL_debug_renderer_info');
    if (dbg) findings.push('GPU: ' + String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)).slice(0, 60));
  } catch (e) {}
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkPlugins() {
  const findings = []; let safety = 100;
  const plugCount = navigator.plugins ? navigator.plugins.length : 0;
  let mimes = '';
  try { mimes = [...navigator.mimeTypes].map(m => m.type).join(' '); } catch (e) {}
  if (/x-shockwave-flash|x-java|activex/i.test(mimes)) { safety -= 50; findings.push('Обнаружены следы Flash / Java / ActiveX — критически устаревшие технологии'); }
  const objs = document.querySelectorAll('object, embed, applet').length;
  if (objs) { safety -= objs * 12; findings.push(`Элементов <object>/<embed>/<applet>: ${objs} — потенциальный вектор эксплойта`); }
  if (plugCount > 0) findings.push(`Активных NPAPI-плагинов: ${plugCount}`);
  else findings.push('NPAPI-плагины отсутствуют — соответствует современной норме');
  if (/application\/pdf/i.test(mimes)) findings.push('PDF обрабатывается встроенным модулем браузера');
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkXSS(ctx) {
  const findings = []; let safety = 100;
  const unsafe = [];
  for (const [k, v] of new URL(location.href).searchParams) if (/[<>'")]/.test(v)) unsafe.push(k);
  if (unsafe.length) { safety -= 30; findings.push(`Параметры URL с неэкранированными символами: ${unsafe.join(', ')}`); }
  if (ctx.headers) {
    const csp = ctx.headers.get('content-security-policy');
    if (csp) findings.push('Content-Security-Policy активна — выполнение чужих скриптов ограничено');
    else { safety -= 25; findings.push('Заголовок CSP отсутствует — внедрённые скрипты ничем не ограничены'); }
  } else { safety -= 15; findings.push('Заголовки ответа недоступны (CORS / file://) — оценка частичная'); }
  const inline = document.querySelectorAll('script:not([src])').length;
  if (inline > 8) { safety -= 10; findings.push(`Inline-скриптов: ${inline} — увеличивают поверхность XSS`); }
  if (!findings.length) findings.push('Признаков XSS-уязвимости не обнаружено');
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkCSRF() {
  const findings = []; let safety = 100;
  const forms = [...document.querySelectorAll('form')];
  if (forms.length === 0) {
    findings.push('HTML-формы на странице отсутствуют — CSRF-вектор не применим');
  } else {
    const postForms = forms.filter(f => (f.method || '').toLowerCase() === 'post');
    const noToken = postForms.filter(f => !f.querySelector('input[name*="csrf" i], input[name*="token" i], input[name*="_t" i]')).length;
    if (noToken) { safety -= noToken * 20; findings.push(`POST-форм без CSRF-токена: ${noToken} из ${postForms.length || forms.length}`); }
    else if (postForms.length) findings.push('Все POST-формы содержат токены защиты');
    const getMutate = forms.filter(f => {
      const act = (f.getAttribute('action') || '').toLowerCase();
      return (f.method || 'get').toLowerCase() === 'get' && /(delete|update|edit|remove|save|pay)/.test(act);
    }).length;
    if (getMutate) { safety -= 25; findings.push('Изменяющие операции выполняются GET-запросами — уязвимо к CSRF'); }
    if (!findings.length) findings.push(`Форм найдено: ${forms.length}, риски не выявлены`);
  }
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkClickjacking(ctx) {
  const findings = []; let safety = 100;
  if (window.self !== window.top) { safety -= 50; findings.push('Страница открыта внутри чужого фрейма — кликджекинг возможен прямо сейчас'); }
  if (ctx.headers) {
    const xfo = ctx.headers.get('x-frame-options');
    const frameAnc = /frame-ancestors/i.test(ctx.headers.get('content-security-policy') || '');
    if (xfo) findings.push(`X-Frame-Options: ${xfo} — встраивание страницы запрещено`);
    else if (frameAnc) findings.push('CSP frame-ancestors ограничивает встраивание');
    else { safety -= 45; findings.push('Заголовки защиты от встраивания (X-Frame-Options / frame-ancestors) отсутствуют'); }
  } else { safety -= 40; findings.push('Заголовки ответа недоступны (CORS / file://) — защита от фрейминга не проверена'); }
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkPhishing() {
  const findings = []; let pts = 0;
  const h = location.hostname;
  if (location.protocol === 'http:') { pts += 30; findings.push('Сайт работает по HTTP — соединение не шифруется'); }
  if (/^https?:\/\/\d{1,3}(\.\d{1,3}){3}/.test(location.origin)) { pts += 40; findings.push('Вместо домена используется IP-адрес — частый признак фишинга'); }
  if (h.includes('xn--')) { pts += 25; findings.push('Punycode в домене — возможна подмена символов'); }
  if (/free|bonus|win|prize|gift/i.test(h)) { pts += 15; findings.push('«Приманочные» слова в домене (free / bonus / win)'); }
  if (h.split('.').length > 4) { pts += 10; findings.push('Слишком много поддоменов — приём маскировки'); }
  if (location.href.length > 150) { pts += 10; findings.push('Аномально длинный URL'); }
  if (location.username) { pts += 30; findings.push('В URL присутствуют credentials (user@site) — приём обмана'); }
  if (!findings.length) findings.push('Признаков фишингового домена не обнаружено');
  findings.push(`Проверяемый домен: ${h}`);
  return { safety: clamp(100 - pts, 0, 100), findings };
}

async function checkSpoofing(ctx) {
  const findings = []; let safety = 100;
  if (location.protocol === 'https:') {
    findings.push('Соединение защищено TLS (HTTPS) — сертификат присутствует');
    const mixed = document.querySelectorAll('script[src^="http:"], iframe[src^="http:"], img[src^="http:"]').length;
    if (mixed) { safety -= mixed * 10; findings.push(`Mixed-content: ${mixed} ресурсов загружается по незащищённому HTTP`); }
  } else {
    safety -= 50; findings.push('HTTP-соединение: SSL-сертификат отсутствует, возможна полная подмена сайта');
  }
  if (ctx.headers) {
    if (ctx.headers.get('strict-transport-security')) findings.push('HSTS активен — downgrade-атаки на HTTPS заблокированы');
    else { safety -= 10; findings.push('HSTS не обнаружен — возможно принудительное понижение до HTTP'); }
  } else { safety -= 5; findings.push('HSTS проверить не удалось (заголовки недоступны)'); }
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkSession() {
  const findings = []; let safety = 100;
  const cookies = document.cookie.split(';').filter(c => c.trim());
  if (!window.isSecureContext) { safety -= 15; findings.push('Контекст страницы небезопасен (non-secure context)'); }
  if (location.protocol === 'http:' && cookies.length) { safety -= 40; findings.push('Cookies передаются по незашифрованному каналу — перехват тривиален'); }
  if (cookies.length === 0) {
    findings.push('Сессионные cookies на странице не обнаружены');
  } else {
    findings.push(`Cookies на странице: ${cookies.length}`);
    safety -= clamp(cookies.length * 5, 5, 20);
    findings.push('Все cookies, видимые через JS, доступны любым скриптам на странице (флаг HttpOnly у них отсутствует)');
  }
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkFingerprint() {
  const findings = []; let safety = 100;
  findings.push(`User-Agent доступен: ${navigator.userAgent.slice(0, 48)}…`); safety -= 20;
  try {
    const c = document.createElement('canvas'); c.width = 220; c.height = 30;
    const x = c.getContext('2d');
    x.textBaseline = 'top'; x.font = '14px Arial'; x.fillStyle = '#f60'; x.fillRect(0, 0, 140, 28);
    x.fillStyle = '#069'; x.fillText('Digital Shield 2026', 2, 2);
    const d = c.toDataURL(); let h = 0;
    for (let i = 0; i < d.length; i++) h = (h * 31 + d.charCodeAt(i)) >>> 0;
    safety -= 15; findings.push(`Canvas-отпечаток доступен (хеш ${h.toString(16).slice(0, 6)}) — сайты могут идентифицировать браузер`);
  } catch (e) { findings.push('Canvas API недоступен — снятие canvas-отпечатка заблокировано'); }
  safety -= 10; findings.push(`Экран: ${screen.width}×${screen.height}×${screen.colorDepth}, часовой пояс: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
  if (navigator.hardwareConcurrency) { safety -= 5; findings.push(`Ядер CPU: ${navigator.hardwareConcurrency}${navigator.deviceMemory ? ', RAM ~' + navigator.deviceMemory + ' ГБ' : ''}`); }
  if (!navigator.doNotTrack || navigator.doNotTrack !== '1') { safety -= 10; findings.push('Сигнал Do Not Track не включён'); }
  else findings.push('Сигнал Do Not Track активен');
  if (navigator.userAgentData) findings.push('Браузер поддерживает сокращённый User-Agent (Client Hints)');
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkCrypto() {
  const findings = []; let safety = 100;
  const sig = /coinhive|coinimp|cryptoloot|crypto-loot|jsecoin|minerd|webminer|hashforcash|nimiq|deepminer|authedmine|monero|minero/i;
  let miners = 0;
  document.querySelectorAll('script[src]').forEach(s => { if (sig.test(s.src)) miners++; });
  document.querySelectorAll('script:not([src])').forEach(s => { if (sig.test(s.textContent || '')) miners++; });
  if (miners) { safety = 5; findings.push(`Обнаружены скрипты с сигнатурами криптомайнеров: ${miners}`); }
  else findings.push('Известные сигнатуры криптомайнеров не найдены');
  const wasm = document.querySelectorAll('script[src$=".wasm"]').length;
  if (wasm) { safety -= 15; findings.push(`WebAssembly-модулей: ${wasm} — иногда используется для скрытого майнинга`); }
  findings.push('Косвенные признаки (нагрузка CPU) проверяются только сигнатурно — используйте блокировщик');
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkWateringHole() {
  const findings = []; let safety = 100;
  const scripts = [...document.querySelectorAll('script[src]')];
  const third = new Set(); let httpScripts = 0, badTld = 0;
  scripts.forEach(s => {
    try {
      const u = new URL(s.src, location.href);
      if (u.origin !== location.origin) third.add(u.hostname);
      if (u.protocol === 'http:') httpScripts++;
      if (/\.(tk|ml|ga|cf|gq|top|xyz|click|icu|rest)$/i.test(u.hostname)) badTld++;
    } catch (e) {}
  });
  if (third.size) {
    findings.push(`Сторонних скриптов: ${third.size} (${[...third].slice(0, 3).join(', ')}${third.size > 3 ? '…' : ''})`);
    safety -= clamp(third.size * 5, 5, 35);
    findings.push('Каждый внешний скрипт — потенциальная точка компрометации («водопой» через supply-chain)');
  } else {
    findings.push('Сторонние скрипты не загружаются — поверхность атаки «водопой» минимальна');
  }
  if (httpScripts) { safety -= httpScripts * 25; findings.push(`Скриптов по незащищённому HTTP: ${httpScripts} — могут быть подменены`); }
  if (badTld) { safety -= badTld * 20; findings.push(`Подозрительные доменные зоны: ${badTld}`); }
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkScareware() {
  const findings = []; let safety = 100;
  const alarms = ['ваш компьютер заражен', 'ваш компьютер заражён', 'обнаружен вирус', 'обнаружена угроза', 'срочно скачайте антивирус', 'требуется очистка', 'устройство заблокировано'];
  let text = '';
  document.body.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li,button').forEach(el => {
    if (el.closest('[data-no-scan]') || el.children.length > 0) return;
    text += ' ' + (el.textContent || '');
  });
  text = text.toLowerCase();
  let hits = 0; alarms.forEach(w => { if (text.includes(w)) hits++; });
  if (hits >= 1) { safety -= hits * 25; findings.push(`Пугающая лексика scareware на странице: совпадений ${hits}`); }
  else findings.push('Признаков запугивания на странице нет');
  document.querySelectorAll('body > *').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const cs = getComputedStyle(el);
    if (cs.position === 'fixed' && cs.display !== 'none' &&
        el.offsetWidth > innerWidth * .5 && el.offsetHeight > innerHeight * .4 &&
        /скачать|установить|очистить|вылечить/i.test(el.textContent || '')) {
      safety -= 30; findings.push('Агрессивный фиксированный баннер с призывом установить ПО');
    }
  });
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkBruteforce() {
  const findings = []; let safety = 100;
  const pwd = [...document.querySelectorAll('input[type="password"]')];
  if (pwd.length === 0) {
    findings.push('Формы ввода пароля на странице отсутствуют — брутфорс не применим');
  } else {
    pwd.forEach(p => {
      const form = p.closest('form');
      const cap = form && form.querySelector('[class*="captcha" i],[id*="captcha" i],[class*="turnstile" i],iframe[src*="recaptcha"],iframe[src*="hcaptcha"]');
      if (!cap) { safety -= 25; findings.push('Форма входа без капчи / антибота — уязвима к автоматическому подбору'); }
    });
    if (safety === 100) findings.push('Формы входа защищены антибот-механизмами');
  }
  return { safety: clamp(safety, 0, 100), findings };
}

async function checkBotnet() {
  const findings = []; let safety = 100;
  try {
    const p = await navigator.permissions.query({ name: 'notifications' });
    if (p.state === 'granted') { safety -= 20; findings.push('Разрешены уведомления сайтов — канал для спама и команд ботнета'); }
    else findings.push('Уведомления: ' + (p.state === 'denied' ? 'запрещены' : 'запрашиваются при необходимости'));
  } catch (e) {}
  try {
    const g = await navigator.permissions.query({ name: 'geolocation' });
    if (g.state === 'granted') { safety -= 10; findings.push('Геолокация выдана сайтам бессрочно — лишняя поверхность злоупотребления'); }
  } catch (e) {}
  if ('serviceWorker' in navigator) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      if (regs.length) { safety -= 10; findings.push(`Зарегистрировано Service Worker'ов: ${regs.length} — проверьте их происхождение`); }
      else findings.push('Service Worker не зарегистрирован');
    } catch (e) {}
  }
  findings.push('Активные WebSocket-соединения из JS не перечислить — следите за фоновой сетевой нагрузкой');
  return { safety: clamp(safety, 0, 100), findings };
}

const CHECKS = [
  { id:'driveby',        name:'Drive-by Download',   sub:'Скрытые загрузки',          icon:'download',    weight:1.2, run:checkDriveBy },
  { id:'browserExploit', name:'Эксплойты браузера',  sub:'Chromium · WebKit · Gecko', icon:'bug',         weight:1.5, run:checkBrowserExploit },
  { id:'plugins',        name:'Эксплойты плагинов',  sub:'Flash · Java · PDF',        icon:'plug',        weight:1.0, run:checkPlugins },
  { id:'xss',            name:'XSS',                 sub:'Межсайтовый скриптинг',     icon:'code',        weight:1.1, run:checkXSS },
  { id:'csrf',           name:'CSRF',                sub:'Подделка запросов',         icon:'refresh',     weight:0.8, run:checkCSRF },
  { id:'clickjacking',   name:'Кликджекинг',         sub:'Подмена кликов',            icon:'cursor',      weight:0.9, run:checkClickjacking },
  { id:'phishing',       name:'Фишинг',              sub:'Поддельные страницы входа', icon:'fish',        weight:1.2, run:checkPhishing },
  { id:'spoofing',       name:'Спуфинг',             sub:'Адресная строка · SSL',     icon:'browserLock', weight:1.0, run:checkSpoofing },
  { id:'session',        name:'Session Hijacking',   sub:'Кража cookies и сессий',    icon:'cookie',      weight:1.2, run:checkSession },
  { id:'fingerprint',    name:'Fingerprinting',      sub:'Цифровой отпечаток',        icon:'fingerprint', weight:0.7, run:checkFingerprint },
  { id:'crypto',         name:'Криптоджекинг',       sub:'Скрытый майнинг',           icon:'cpu',         weight:1.0, run:checkCrypto },
  { id:'watering',       name:'Атака «Водопой»',     sub:'Заражённые ресурсы',        icon:'target',      weight:0.8, run:checkWateringHole },
  { id:'scareware',      name:'Scareware',           sub:'Запугивание «лечением»',    icon:'alert',       weight:0.9, run:checkScareware },
  { id:'bruteforce',     name:'Брутфорс',            sub:'Подбор паролей',            icon:'key',         weight:0.7, run:checkBruteforce },
  { id:'botnet',         name:'Ботнет',              sub:'Устройство как прокси',     icon:'network',     weight:0.8, run:checkBotnet }
];

const $ = sel => document.querySelector(sel);
const state = { running: false };
let elDot, elStatusText, elProgress, elPercent, elTerm, elScannerCard;

function log(msg, type = 'info') {
  const t = new Date().toTimeString().slice(0, 8);
  const line = document.createElement('div');
  line.className = 't-line t-' + type;
  line.innerHTML = `<span class="ts">[${t}]</span>${msg}`;
  elTerm.appendChild(line);
  elTerm.scrollTop = elTerm.scrollHeight;
}

function setProgress(done, total) {
  const p = Math.round((done / total) * 100);
  elProgress.style.width = p + '%';
  elPercent.textContent = p + '%';
}

function statusOf(safety) {
  if (safety >= 80) return 'low';
  if (safety >= 50) return 'med';
  return 'high';
}

const STATUS_LABEL = { low:'Низкий риск', med:'Средний риск', high:'Высокий риск' };
const LOG_ICON     = { low:'✓', med:'▲', high:'✕' };

function verdictFor(v) {
  if (v < 15) return { t:'Минимальный уровень уязвимости', c:['#34d399','#34d399'],
    d:'Ваш браузер соответствует актуальным стандартам защиты 2026 года. Продолжайте обновлять ПО и соблюдать цифровую гигиену.' };
  if (v < 35) return { t:'Низкий уровень уязвимости', c:['#34d399','#a3e635'],
    d:'Базовая защита присутствует, но отдельные векторы атак остаются открытыми. Изучите рекомендации ниже.' };
  if (v < 55) return { t:'Средний уровень уязвимости', c:['#fbbf24','#fb923c'],
    d:'Часть критичных механизмов защиты отсутствует или настроена неправильно. Примите меры в ближайшее время.' };
  if (v < 75) return { t:'Высокий уровень уязвимости', c:['#fb923c','#fb7185'],
    d:'Ваш браузер — удобная мишень для атак. Настоятельно выполните рекомендации из списка.' };
  return { t:'Критический уровень уязвимости', c:['#fb7185','#fb7185'],
    d:'Немедленно обновите браузер и примените все рекомендации. Работа в интернете в таком состоянии опасна.' };
}

function openModal() {
  $('#consentModal').classList.add('open');
  $('#consentBox').checked = false;
  $('#startScanBtn').disabled = true;
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  $('#consentModal').classList.remove('open');
  document.body.style.overflow = '';
}

async function fetchHeaders() {
  try {
    const res = await fetch(location.href, { method: 'HEAD', cache: 'no-store' });
    return res.headers;
  } catch (e) { return null; }
}

async function runAudit() {
  if (state.running) return;
  state.running = true;

  const start = performance.now();
  const results = {};

  elTerm.innerHTML = '';
  elScannerCard.classList.add('scanning');
  elDot.className = 'status-dot scanning';
  elStatusText.textContent = 'Сканирование…';
  $('#resultsSection').hidden = true;
  $('#recsSection').hidden = true;
  setProgress(0, CHECKS.length);

  log('Инициализация аудит-движка v3.0…', 'run');
  await sleep(300);

  log('Запрос заголовков безопасности (HEAD ' + esc(location.host || 'localhost') + ')…', 'dim');
  const headers = await fetchHeaders();
  log(headers ? 'Заголовки ответа получены' : 'Заголовки недоступны (CORS / file://) — режим частичной проверки', headers ? 'ok' : 'warn');
  await sleep(350);

  const ctx = { headers };
  let done = 0;

  for (const meta of CHECKS) {
    log(`▸ Проверка: ${esc(meta.name)}…`, 'run');
    let res;
    try {
      res = await meta.run(ctx);
    } catch (e) {
      res = { safety: 50, findings: ['Внутренняя ошибка проверки — оценка приблизительная'] };
    }
    results[meta.id] = res;
    const st = statusOf(res.safety);
    log(`&nbsp;&nbsp;${LOG_ICON[st]} ${esc(meta.name)}: ${STATUS_LABEL[st]} (риск ${100 - res.safety}%)`, st === 'low' ? 'ok' : st === 'med' ? 'warn' : 'fail');
    done++;
    setProgress(done, CHECKS.length);
    await sleep(200 + Math.random() * 260);
  }

  elScannerCard.classList.remove('scanning');
  elDot.className = 'status-dot complete';
  elStatusText.textContent = 'Аудит завершён';

  const seconds = ((performance.now() - start) / 1000).toFixed(1);
  log(`Готово за ${seconds} c · проверок: ${CHECKS.length}/${CHECKS.length}`, 'info');

  renderResults(results);
  renderRecommendations(results);

  $('#resultsSection').hidden = false;
  $('#recsSection').hidden = false;
  setTimeout(() => $('#resultsSection').scrollIntoView({ behavior:'smooth', block:'start' }), 150);

  state.running = false;
}

function renderResults(results) {
  let riskSum = 0, wSum = 0, pass = 0, warn = 0, fail = 0;
  CHECKS.forEach(meta => {
    const r = results[meta.id];
    const risk = 100 - r.safety;
    riskSum += risk * meta.weight;
    wSum += meta.weight;
    const st = statusOf(r.safety);
    if (st === 'low') pass++; else if (st === 'med') warn++; else fail++;
  });
  const vuln = Math.round(riskSum / wSum);
  const verdict = verdictFor(vuln);

  $('#resultsSub').textContent =
    `Отчёт сформирован локально · ${new Date().toLocaleString('ru-RU')} · проверок: ${CHECKS.length}`;

  const R = 94, C = 2 * Math.PI * R;
  const fill = $('#gaugeFill');
  fill.style.strokeDasharray = C;
  fill.style.strokeDashoffset = C;
  $('#gStop1').setAttribute('stop-color', verdict.c[0]);
  $('#gStop2').setAttribute('stop-color', verdict.c[1]);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    fill.style.strokeDashoffset = C * (1 - vuln / 100);
  }));

  const numEl = $('#gaugeNum');
  numEl.style.color = verdict.c[0];
  const t0 = performance.now(), DUR = 1500;
  (function tick(now) {
    const p = Math.min((now - t0) / DUR, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    numEl.textContent = Math.round(vuln * eased) + '%';
    if (p < 1) requestAnimationFrame(tick);
  })(t0);

  $('#verdictTitle').textContent = verdict.t;
  $('#verdictTitle').style.color = verdict.c[0];
  $('#verdictText').textContent = verdict.d;
  $('#cntPass').textContent = pass;
  $('#cntWarn').textContent = warn;
  $('#cntFail').textContent = fail;

  const grid = $('#checksGrid');
  grid.innerHTML = CHECKS.map((meta, i) => {
    const r = results[meta.id];
    const st = statusOf(r.safety);
    const risk = 100 - r.safety;
    const items = r.findings.map(f => `<li>${esc(f)}</li>`).join('');
    return `
      <article class="check-card st-${st}" style="animation-delay:${i * 45}ms" tabindex="0" role="button" aria-expanded="false">
        <div class="check-top">
          <span class="check-ic">${icon(meta.icon)}</span>
          <div class="check-name"><b>${esc(meta.name)}</b><small>${esc(meta.sub)}</small></div>
          <span class="check-badge">${STATUS_LABEL[st]}</span>
        </div>
        <div class="check-details">
          <div class="check-details-inner">
            <div class="risk-row">
              <div class="risk-meter"><div class="risk-meter-fill" style="width:${risk}%"></div></div>
              <span class="risk-val mono">Риск ${risk}%</span>
            </div>
            <ul>${items}</ul>
          </div>
        </div>
        <span class="check-more">${icon('chevron')}</span>
      </article>`;
  }).join('');

  grid.querySelectorAll('.check-card').forEach(card => {
    const toggle = () => {
      const open = card.classList.toggle('open');
      card.setAttribute('aria-expanded', open);
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  });
}

function renderRecommendations(results) {
  const items = [];
  CHECKS.forEach(meta => {
    const r = results[meta.id];
    if (r.safety >= 80 || !RECS[meta.id]) return;
    const prio = r.safety < 40 ? 'crit' : r.safety < 60 ? 'high' : 'med';
    items.push({ prio, order: r.safety, icon: meta.icon, ...RECS[meta.id] });
  });
  items.sort((a, b) => a.order - b.order);

  const PRIO_LABEL = { crit:'Критично', high:'Важно', med:'Рекомендуется' };
  const grid = $('#recsGrid');

  if (!items.length) {
    grid.innerHTML = `
      <article class="rec-card prio-ok">
        <div class="rec-head"><span class="rec-prio">Отличная работа</span><span class="rec-ic">${icon('shieldCheck')}</span></div>
        <h3>Все проверки пройдены</h3>
        <p>Существенных уязвимостей не обнаружено. Продолжайте обновлять браузер, используйте менеджер паролей и не отключайте встроенные механизмы защиты.</p>
        <a class="rec-link" href="https://www.kaspersky.ru/resource-center/preemptive-safety/top-10-internet-safety-rules" target="_blank" rel="noopener">Правила кибербезопасности ${icon('external','ic-xs')}</a>
      </article>`;
    return;
  }

  grid.innerHTML = items.map((rec, i) => `
    <article class="rec-card prio-${rec.prio}" style="animation-delay:${i * 60}ms">
      <div class="rec-head">
        <span class="rec-prio">${PRIO_LABEL[rec.prio]}</span>
        <span class="rec-ic">${icon(rec.icon)}</span>
      </div>
      <h3>${esc(rec.title)}</h3>
      <p>${esc(rec.text)}</p>
      <a class="rec-link" href="${rec.link}" target="_blank" rel="noopener">${esc(rec.action)} ${icon('external','ic-xs')}</a>
    </article>`).join('');
}

function renderThreats() {
  $('#threatsGrid').innerHTML = THREATS.map((t, i) => `
    <article class="threat-card lv-${t.level} reveal" style="transition-delay:${(i % 5) * 70}ms">
      <div class="threat-top">
        <span class="threat-ic">${icon(t.icon)}</span>
        <span class="threat-lv">${t.levelName}</span>
      </div>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.text)}</p>
    </article>`).join('');
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  elDot         = $('#statusDot');
  elStatusText  = $('#statusText');
  elProgress    = $('#progressFill');
  elPercent     = $('#progressPercent');
  elTerm        = $('#terminalBody');
  elScannerCard = $('#scannerCard');

  renderThreats();
  initReveal();

  $('#openConsentBtn').addEventListener('click', openModal);
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalCancel').addEventListener('click', closeModal);
  $('#consentModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  $('#consentBox').addEventListener('change', e => {
    $('#startScanBtn').disabled = !e.target.checked;
  });

  $('#startScanBtn').addEventListener('click', () => {
    closeModal();
    $('#scanner').scrollIntoView({ behavior:'smooth', block:'center' });
    setTimeout(runAudit, 400);
  });

  log('Модуль аудита готов. Нажмите «Начать проверку».', 'dim');
});
