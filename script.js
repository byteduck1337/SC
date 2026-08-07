/* ============================================================
   ЦИФРОВОЙ ЩИТ v3.1 · Аудит-движок 2026
   25 проверок · Все проверки выполняются локально
   ============================================================ */
'use strict';

/* ================= SVG-ИКОНКИ ================= */
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
  check:'<path d="M20 6 9 17l-5-5"/>',
  /* --- новые иконки v3.1 --- */
  type:'<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
  tabs:'<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  tabBack:'<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>',
  pin:'<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  terminal:'<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  layers:'<path d="m12 2 8.5 4.5L12 11 3.5 6.5 12 2Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 17 8.5 4.5 8.5-4.5"/>',
  split:'<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/>',
  bot:'<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>'
};
const icon = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

/* ================= ЭНЦИКЛОПЕДИЯ УГРОЗ ================= */
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
    text:'Ваше устройство становится частью сети ботов: рассылает спам, участвует в DDoS и майнит — без вашего ведома.' },
  /* --- новые угрозы v3.1 --- */
  { icon:'type', name:'Typosquatting', level:'high', levelName:'Высокая',
    text:'Домены-двойники с опечатками (g00gle.com, yandeks.ru): пользователь не замечает подмену и сам вводит пароль.' },
  { icon:'tabs', name:'Tabnabbing', level:'med', levelName:'Средняя',
    text:'Атака на неактивную вкладку: пока вы на другой странице, эта вкладка перерисовывается под страницу входа и крадёт пароль.' },
  { icon:'tabBack', name:'Reverse Tabnabbing', level:'med', levelName:'Средняя',
    text:'Открытая по ссылке страница через window.opener переписывает адрес исходной вкладки и превращает её в фишинговую.' },
  { icon:'pin', name:'Session Fixation', level:'high', levelName:'Высокая',
    text:'Злоумышленник заранее навязывает жертве известный session ID, а после входа жертвы получает полный доступ к аккаунту.' },
  { icon:'globe', name:'DNS Spoofing', level:'high', levelName:'Высокая',
    text:'Подмена DNS-записей: запрос к настоящему домену приводит на сервер атакующего. Особенно опасна без HTTPS и HSTS.' },
  { icon:'terminal', name:'DevTools-атаки', level:'med', levelName:'Средняя',
    text:'Self-XSS и вредоносные скрипты в консоли: жертву убеждают выполнить код, передающий доступ к аккаунту.' },
  { icon:'layout', name:'UI Redressing', level:'high', levelName:'Высокая',
    text:'Видимый интерфейс страницы подменяется: кнопки и поля оказываются не там и не те, что видит пользователь.' },
  { icon:'layers', name:'Heap Spraying', level:'crit', levelName:'Критическая',
    text:'Заполнение памяти браузера вредоносным кодом для эксплуатации уязвимостей движка. Защита — только актуальный браузер.' },
  { icon:'split', name:'Man-in-the-Middle', level:'crit', levelName:'Критическая',
    text:'Перехват и подмена трафика между вами и сайтом: в открытых сетях атакующий видит пароли, сообщения и платежи.' },
  { icon:'bot', name:'AI-фишинг', level:'crit', levelName:'Критическая',
    text:'Фишинг, сгенерированный нейросетями: идеальный язык, персонализация, поддельные «помощники». Отличить можно только по домену.' }
];

/* ================= РЕКОМЕНДАЦИИ ================= */
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
    link:'https://www.kaspersky.ru/resource-center/threats/botnets', action:'О ботнет-сетях' },
  /* --- новые рекомендации v3.1 --- */
  typosquatting: { title:'Всегда проверяйте написание домена',
    text:'Тайпосквоттеры регистрируют домены, отличающиеся на 1–2 символа от известных брендов. Менеджер паролей не заполнит форму на незнакомом домене, а закладки избавят от ручного ввода адреса.',
    link:'https://en.wikipedia.org/wiki/Typosquatting', action:'О тайпосквоттинге' },
  tabnabbing: { title:'Осторожнее с неактивными вкладками',
    text:'Tabnabbing перерисовывает неактивную вкладку под страницу входа. Если вкладка «сама» просит заново ввести пароль — проверьте адрес. Разработчикам: заголовок Cross-Origin-Opener-Policy.',
    link:'https://owasp.org/www-community/attacks/Tabnabbing', action:'OWASP о Tabnabbing' },
  reverseTabnabbing: { title:'Добавьте rel="noopener" к ссылкам',
    text:'Ссылки с target="_blank" без rel="noopener" позволяют открытой странице перенаправить ваш сайт. Современные браузеры ставят noopener автоматически, но явный атрибут надёжнее.',
    link:'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener', action:'Документация MDN' },
  sessionFixation: { title:'Не доверяйте ссылкам с session ID',
    text:'Не переходите по ссылкам, содержащим идентификатор сессии. Разработчикам: пересоздавайте session ID после входа и устанавливайте cookie только с флагами Secure, HttpOnly и SameSite.',
    link:'https://owasp.org/www-community/attacks/Session_fixation', action:'OWASP о Session Fixation' },
  dnsSpoofing: { title:'Включите DNS-over-HTTPS',
    text:'DoH шифрует DNS-запросы и защищает от подмены записей. Включите защищённый DNS в настройках браузера; владельцам сайтов обязателен HSTS.',
    link:'https://www.cloudflare.com/learning/dns/dns-over-tls/', action:'О защищённом DNS' },
  devtools: { title:'Никогда не вставляйте код в консоль',
    text:'Self-XSS: мошенники убеждают вставить «волшебный» скрипт в консоль DevTools и получают доступ к аккаунту. Также настороженно относитесь к сайтам с обилием eval() и anti-debugging.',
    link:'https://en.wikipedia.org/wiki/Self-XSS', action:'О self-XSS' },
  uiRedressing: { title:'Не доверяйте «съехавшему» интерфейсу',
    text:'UI redressing подменяет видимый интерфейс страницы. Если элементы управления ведут себя странно — обновите страницу и проверьте адрес. Разработчикам: frame-ancestors в CSP.',
    link:'https://owasp.org/www-community/attacks/Clickjacking', action:'OWASP о подмене UI' },
  heapSpray: { title:'Обновляйте браузер без исключений',
    text:'Heap spraying эксплуатирует ошибки памяти движков. Патчи выходят каждые 4 недели — автообновление закрывает большинство таких атак. Избегайте сайтов с обфусцированными скриптами.',
    link:'https://en.wikipedia.org/wiki/Heap_spraying', action:'О Heap Spraying' },
  mitm: { title:'VPN в публичных сетях — обязателен',
    text:'В открытых Wi-Fi сетях трафик может перехватываться и подменяться. Используйте только HTTPS-сайты, VPN и никогда не игнорируйте предупреждения браузера о сертификатах.',
    link:'https://www.kaspersky.ru/resource-center/threats/man-in-the-middle-attack', action:'О MITM-атаках' },
  aiPhishing: { title:'Не верьте идеальному тексту',
    text:'AI-фишинг безупречен грамматически и персонализирован. Проверяйте домен отправителя, не вводите данные по ссылкам из писем и мессенджеров, включите 2FA везде, где возможно.',
    link:'https://www.proofpoint.com/us/threat-reference/phishing', action:'Об AI-фишинге' }
};

/* ================= УТИЛИТЫ ================= */
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* Расстояние Левенштейна — для проверки тайпосквоттинга */
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

/* Известные бренды для детекции доменов-двойников */
const POPULAR_DOMAINS = ['google','yandex','youtube','gmail','vk','mail','sberbank','sber','tinkoff','gosuslugi','wildberries','ozon','avito','telegram','whatsapp','facebook','instagram','apple','microsoft','paypal','amazon','wikipedia','kinopoisk'];

/* ================= ПРОВЕРКИ (1–15, базовый набор) ================= */
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

/* ================= НОВЫЕ ПРОВЕРКИ (16–25, v3.1) ================= */

/* 16. Typosquatting — домены-двойники известных брендов */
async function checkTyposquatting() {
  const findings = []; let pts = 0;
  const host = location.hostname.toLowerCase();
  const domain = host.replace(/^www\./, '');
  const name = domain.split('.')[0];
  const exact = POPULAR_DOMAINS.includes(name);
  if (!exact && name.length >= 4) {
    for (const brand of POPULAR_DOMAINS) {
      if (name.includes(brand) || brand.includes(name)) continue;
      const d = levenshtein(name, brand);
      if (d === 1 || (d === 2 && brand.length >= 6)) {
        pts += d === 1 ? 35 : 25;
        findings.push(`Домен «${name}» отличается от известного бренда «${brand}» на ${d} символ(а) — признак тайпосквоттинга`);
        break;
      }
    }
  }
  if (!exact && name.length >= 4) {
    const normalized = name.replace(/0/g, 'o').replace(/1/g, 'l').replace(/3/g, 'e').replace(/5/g, 's').replace(/7/g, 't');
    if (normalized !== name) {
      for (const brand of POPULAR_DOMAINS) {
        if (normalized === brand) {
          pts += 30;
          findings.push(`Цифровая маскировка: «${name}» читается как «${brand}» — классический приём тайпосквоттинга`);
          break;
        }
      }
    }
  }
  if (/\.(tk|ml|ga|cf|gq|top|xyz|icu|rest|click|buzz)$/i.test(domain)) {
    pts += 20; findings.push('Домен в зоне, часто используемой для тайпосквоттинга и фишинга');
  }
  if ((name.match(/-/g) || []).length >= 2) {
    pts += 10; findings.push('Много дефисов в имени домена — приём маскировки под известный бренд');
  }
  if (exact) findings.push(`Домен совпадает с известным брендом (${name}) — подмена маловероятна`);
  if (!findings.length) findings.push('Признаков тайпосквоттинга в адресе не обнаружено');
  return { safety: clamp(100 - pts, 0, 100), findings };
}

/* 17. Tabnabbing — подмена неактивной вкладки */
async function checkTabnabbing(ctx) {
  const findings = []; let safety = 100;
  let opener = null;
  try { opener = window.opener; } catch (e) {}
  if (opener) {
    let crossOrigin = false;
    try { void opener.document; } catch (e) { crossOrigin = true; }
    safety -= crossOrigin ? 40 : 25;
    findings.push(crossOrigin
      ? 'Страница открыта из другой вкладки (window.opener активен, источник отличается) — вкладка уязвима к tabnabbing'
      : 'Обнаружен window.opener — вкладка может быть перенаправлена открывшей страницей');
  } else {
    findings.push('window.opener отсутствует — tabnabbing со стороны родительской вкладки невозможен');
  }
  if (ctx.headers) {
    const coop = ctx.headers.get('cross-origin-opener-policy');
    if (coop) findings.push(`COOP: ${coop} — вкладки изолированы, tabnabbing заблокирован на уровне браузера`);
  }
  if (location.protocol === 'http:') { safety -= 15; findings.push('HTTP-соединение: подмена вкладки возможна и на уровне сети'); }
  return { safety: clamp(safety, 0, 100), findings };
}

/* 18. Reverse Tabnabbing — перенаправление родительской вкладки */
async function checkReverseTabnabbing() {
  const findings = []; let safety = 100;
  let opener = null;
  try { opener = window.opener; } catch (e) {}
  if (opener) {
    try {
      if (opener.location) { safety -= 20; findings.push('Страница имеет доступ к window.opener.location — потенциальный reverse tabnabbing против открывшего сайта'); }
    } catch (e) {
      findings.push('Доступ к opener.location заблокирован same-origin policy — reverse tabnabbing невозможен');
    }
  } else {
    findings.push('window.opener отсутствует — reverse tabnabbing не применим');
  }
  const blanks = [...document.querySelectorAll('a[target="_blank"]')];
  const unsafe = blanks.filter(a => !/noopener|noreferrer/i.test(a.rel || ''));
  if (unsafe.length) {
    safety -= clamp(unsafe.length * 12, 12, 45);
    findings.push(`Ссылок с target="_blank" без rel="noopener": ${unsafe.length} — открытые страницы смогут перенаправить этот сайт`);
  } else if (blanks.length) {
    findings.push(`Все ссылки с target="_blank" (${blanks.length}) защищены rel="noopener/noreferrer"`);
  } else {
    findings.push('Ссылок с target="_blank" на странице нет');
  }
  return { safety: clamp(safety, 0, 100), findings };
}

/* 19. Session Fixation — навязывание идентификатора сессии */
async function checkSessionFixation() {
  const findings = []; let safety = 100;
  if (/(jsessionid|phpsessid|sid=|session_id=|sessionid=)/i.test(location.href)) {
    safety -= 45; findings.push('Идентификатор сессии передаётся прямо в URL — классическая предпосылка session fixation');
  }
  const cookies = document.cookie.split(';').map(c => c.trim()).filter(Boolean);
  const sessionCookies = cookies.filter(c => /(sid|session|phpsessid|jsessionid|token|auth)/i.test(c.split('=')[0]));
  if (sessionCookies.length) {
    findings.push(`Похоже на сессионные cookies: ${sessionCookies.length}`);
    if (location.protocol === 'http:') {
      safety -= 30; findings.push('Сессионные cookie передаются по HTTP — возможны перехват и фиксация идентификатора');
    }
  } else {
    findings.push('Сессионные идентификаторы в открытом доступе не обнаружены');
  }
  if (location.protocol === 'http:' && document.querySelector('form input[type="password"]')) {
    safety -= 15; findings.push('Форма входа по HTTP — злоумышленник может заранее навязать session ID');
  }
  return { safety: clamp(safety, 0, 100), findings };
}

/* 20. DNS Spoofing — подмена DNS-записей */
async function checkDNSSpoofing(ctx) {
  const findings = []; let safety = 100;
  if (location.protocol === 'http:') {
    safety -= 50; findings.push('HTTP-соединение: DNS-записи и трафик не защищены от подмены (DNS-spoofing тривиален)');
  } else {
    findings.push('HTTPS-соединение: подмена DNS-записи обнаруживается проверкой сертификата');
    if (ctx.headers) {
      if (ctx.headers.get('strict-transport-security')) {
        findings.push('HSTS активен — даже при DNS-подмене браузер не примет HTTP-версию сайта');
      } else {
        safety -= 15; findings.push('HSTS отсутствует — возможна downgrade-атака после DNS-подмены');
      }
    } else {
      safety -= 5; findings.push('HSTS проверить не удалось (заголовки недоступны)');
    }
  }
  if (/^https?:\/\/\d{1,3}(\.\d{1,3}){3}/.test(location.origin)) {
    safety -= 20; findings.push('Подключение по IP-адресу: защита от DNS-подмены через сертификаты ограничена');
  }
  findings.push('Полную проверку DNSSEC из браузера выполнить нельзя — включите DNS-over-HTTPS в настройках');
  return { safety: clamp(safety, 0, 100), findings };
}

/* 21. DevTools-атаки — self-XSS, anti-debug, подмена консоли */
async function checkDevTools() {
  const findings = []; let safety = 100;
  let debuggerCount = 0, evalCount = 0, consoleOverride = 0;
  document.querySelectorAll('script:not([src])').forEach(s => {
    const code = s.textContent || '';
    debuggerCount += (code.match(/\bdebugger\b/g) || []).length;
    evalCount += (code.match(/\beval\s*\(/g) || []).length;
    if (/console\s*\.\s*(log|warn|error|info|debug|table)\s*=|console\s*\[[^\]]+\]\s*=/.test(code)) consoleOverride++;
  });
  if (debuggerCount) { safety -= 25; findings.push(`Инструкции debugger: ${debuggerCount} — приём anti-debugging, часто встречается в обфусцированных вредоносах`); }
  if (evalCount) { safety -= clamp(evalCount * 10, 10, 40); findings.push(`Вызовы eval(): ${evalCount} — выполнение произвольного кода, типичный вектор инъекций`); }
  if (consoleOverride) { safety -= 15; findings.push('Обнаружена подмена методов консоли — скрипты скрывают свою активность от DevTools'); }
  if (safety === 100) findings.push('Признаков anti-debugging и вредоносного кода в inline-скриптах нет');
  findings.push('Помните: никогда не вставляйте команды в консоль DevTools по просьбе сайтов — это self-XSS');
  return { safety: clamp(safety, 0, 100), findings };
}

/* 22. UI Redressing — подмена видимого интерфейса */
async function checkUIRedressing(ctx) {
  const findings = []; let safety = 100;
  if (window.self !== window.top) { safety -= 45; findings.push('Страница отображается во фрейме — возможна подмена интерфейса (UI redressing)'); }
  if (ctx.headers) {
    const xfo = ctx.headers.get('x-frame-options');
    const fa = /frame-ancestors/i.test(ctx.headers.get('content-security-policy') || '');
    if (!xfo && !fa) { safety -= 30; findings.push('Нет заголовков, запрещающих встраивание интерфейса в чужие страницы'); }
    else findings.push('Встраивание ограничено заголовками X-Frame-Options / frame-ancestors');
  } else { safety -= 20; findings.push('Заголовки недоступны (CORS / file://) — защита интерфейса не проверена'); }
  let overlays = 0;
  document.querySelectorAll('div, section').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const cs = getComputedStyle(el);
    if ((cs.position === 'fixed' || cs.position === 'absolute') &&
        cs.display !== 'none' && parseFloat(cs.opacity) < 0.15 &&
        el.offsetWidth > innerWidth * 0.4 && el.offsetHeight > innerHeight * 0.3) overlays++;
  });
  if (overlays) { safety -= overlays * 20; findings.push(`Полупрозрачные слои поверх страницы: ${overlays} — признак UI-подмены`); }
  return { safety: clamp(safety, 0, 100), findings };
}

/* 23. Heap Spraying — распыление вредоносного кода в памяти */
async function checkHeapSpray() {
  const findings = []; let safety = 100;
  let bigInline = 0, base64Blobs = 0, typedArrayUse = 0;
  document.querySelectorAll('script:not([src])').forEach(s => {
    const code = s.textContent || '';
    if (code.length > 200000) bigInline++;
    const blobs = code.match(/["'][A-Za-z0-9+/=]{10000,}["']/g);
    if (blobs) base64Blobs += blobs.length;
    if (/new\s+(ArrayBuffer|Uint8Array|Uint32Array|Float64Array)\s*\(\s*\d{6,}/.test(code)) typedArrayUse++;
  });
  if (bigInline) { safety -= bigInline * 15; findings.push(`Аномально большие inline-скрипты (>200 КБ): ${bigInline} — могут содержать шелл-код`); }
  if (base64Blobs) { safety -= base64Blobs * 20; findings.push(`Крупные base64-блоки в скриптах: ${base64Blobs} — частый приём heap spraying`); }
  if (typedArrayUse) { safety -= 20; findings.push('Выделение огромных типизированных массивов — паттерн заполнения кучи'); }
  if (safety === 100) findings.push('Подозрительных паттернов заполнения памяти не обнаружено');
  findings.push('Современные движки используют рандомизацию кучи — актуальный браузер резко снижает риск');
  return { safety: clamp(safety, 0, 100), findings };
}

/* 24. Man-in-the-Middle — перехват трафика */
async function checkMITM(ctx) {
  const findings = []; let safety = 100;
  if (location.protocol === 'https:') {
    findings.push('Канал зашифрован TLS (HTTPS)');
    const mixed = document.querySelectorAll('script[src^="http:"], link[rel="stylesheet"][href^="http:"], iframe[src^="http:"], img[src^="http:"], form[action^="http:"]');
    if (mixed.length) { safety -= clamp(mixed.length * 10, 10, 35); findings.push(`Незащищённые ресурсы на HTTPS-странице: ${mixed.length} — точка внедрения при MITM`); }
  } else {
    safety -= 50; findings.push('Трафик не шифрован (HTTP) — перехват и подмена данных возможны в любой точке сети');
  }
  if (!window.isSecureContext) { safety -= 15; findings.push('Страница не в secure context — крипто-API недоступны, контекст небезопасен'); }
  if (ctx.headers) {
    if (ctx.headers.get('strict-transport-security')) findings.push('HSTS защищает от перехвата при первом подключении');
    else { safety -= 10; findings.push('Без HSTS первое подключение может быть перехвачено (SSL stripping)'); }
  }
  try {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && /wifi|cellular/.test(conn.type || '')) {
      findings.push('Мобильное/Wi-Fi-подключение: в публичных сетях используйте VPN');
    }
  } catch (e) {}
  return { safety: clamp(safety, 0, 100), findings };
}

/* 25. AI-Powered Phishing — фишинг, сгенерированный нейросетями */
async function checkAIPhishing() {
  const findings = []; let pts = 0;
  const sensitive = document.querySelectorAll(
    'input[name*="card" i], input[id*="card" i], input[name*="cvv" i], input[name*="passport" i], input[name*="ssn" i], input[name*="pin" i]'
  );
  if (sensitive.length) {
    pts += sensitive.length * 15;
    findings.push(`Поля для крайне чувствительных данных (карты/паспорт/CVV): ${sensitive.length} — нехарактерно для легитимных страниц входа`);
  }
  let text = '';
  document.body.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li,button').forEach(el => {
    if (el.closest('[data-no-scan]') || el.children.length > 0) return;
    text += ' ' + (el.textContent || '');
  });
  text = text.toLowerCase();
  const urgency = ['немедленно', 'срочно', 'заблокирован', 'заблокирована', 'последнее предупреждение', 'аккаунт будет удален', 'аккаунт будет удалён', 'подтвердите личность'];
  let hits = 0; urgency.forEach(w => { if (text.includes(w)) hits++; });
  if (hits >= 2) { pts += hits * 10; findings.push(`Маркеры давления и срочности (${hits}) — типичный стиль AI-генерируемого фишинга`); }
  document.querySelectorAll('[id*="chat" i], [class*="chat" i], [id*="assist" i], [class*="assist" i]').forEach(el => {
    const t = (el.textContent || '').toLowerCase();
    if (/(скачать|установить|антивирус|очистить)/.test(t)) {
      pts += 20; findings.push('«AI-помощник» предлагает установить ПО — признак атаки "Троянский советчик"');
    }
  });
  if (pts === 0) findings.push('Признаков AI-генерируемого фишинга на странице не обнаружено');
  findings.push('AI-фишинг неотличим по вёрстке и тексту — всегда проверяйте домен');
  return { safety: clamp(100 - pts, 0, 100), findings };
}

/* ================= РЕЕСТР ПРОВЕРОК ================= */
const CHECKS = [
  { id:'driveby',         name:'Drive-by Download',   sub:'Скрытые загрузки',           icon:'download',    weight:1.2, run:checkDriveBy },
  { id:'browserExploit',  name:'Эксплойты браузера',  sub:'Chromium · WebKit · Gecko',  icon:'bug',         weight:1.5, run:checkBrowserExploit },
  { id:'plugins',         name:'Эксплойты плагинов',  sub:'Flash · Java · PDF',         icon:'plug',        weight:1.0, run:checkPlugins },
  { id:'xss',             name:'XSS',                 sub:'Межсайтовый скриптинг',      icon:'code',        weight:1.1, run:checkXSS },
  { id:'csrf',            name:'CSRF',                sub:'Подделка запросов',          icon:'refresh',     weight:0.8, run:checkCSRF },
  { id:'clickjacking',    name:'Кликджекинг',         sub:'Подмена кликов',             icon:'cursor',      weight:0.9, run:checkClickjacking },
  { id:'phishing',        name:'Фишинг',              sub:'Поддельные страницы входа',  icon:'fish',        weight:1.2, run:checkPhishing },
  { id:'spoofing',        name:'Спуфинг',             sub:'Адресная строка · SSL',      icon:'browserLock', weight:1.0, run:checkSpoofing },
  { id:'session',         name:'Session Hijacking',   sub:'Кража cookies и сессий',     icon:'cookie',      weight:1.2, run:checkSession },
  { id:'fingerprint',     name:'Fingerprinting',      sub:'Цифровой отпечаток',         icon:'fingerprint', weight:0.7, run:checkFingerprint },
  { id:'crypto',          name:'Криптоджекинг',       sub:'Скрытый майнинг',            icon:'cpu',         weight:1.0, run:checkCrypto },
  { id:'watering',        name:'Атака «Водопой»',     sub:'Заражённые ресурсы',         icon:'target',      weight:0.8, run:checkWateringHole },
  { id:'scareware',       name:'Scareware',           sub:'Запугивание «лечением»',     icon:'alert',       weight:0.9, run:checkScareware },
  { id:'bruteforce',      name:'Брутфорс',            sub:'Подбор паролей',             icon:'key',         weight:0.7, run:checkBruteforce },
  { id:'botnet',          name:'Ботнет',              sub:'Устройство как прокси',      icon:'network',     weight:0.8, run:checkBotnet },
  /* --- v3.1 --- */
  { id:'typosquatting',     name:'Typosquatting',      sub:'Опечаточные домены',         icon:'type',     weight:1.1, run:checkTyposquatting },
  { id:'tabnabbing',        name:'Tabnabbing',         sub:'Подмена неактивной вкладки', icon:'tabs',     weight:0.8, run:checkTabnabbing },
  { id:'reverseTabnabbing', name:'Reverse Tabnabbing', sub:'Перенаправление родителя',   icon:'tabBack',  weight:0.8, run:checkReverseTabnabbing },
  { id:'sessionFixation',   name:'Session Fixation',   sub:'Навязывание сессии',         icon:'pin',      weight:1.0, run:checkSessionFixation },
  { id:'dnsSpoofing',       name:'DNS Spoofing',       sub:'Подмена DNS-записей',        icon:'globe',    weight:1.0, run:checkDNSSpoofing },
  { id:'devtools',          name:'DevTools-атаки',     sub:'Консоль и self-XSS',         icon:'terminal', weight:0.7, run:checkDevTools },
  { id:'uiRedressing',      name:'UI Redressing',      sub:'Подмена интерфейса',         icon:'layout',   weight:0.9, run:checkUIRedressing },
  { id:'heapSpray',         name:'Heap Spraying',      sub:'Распыление в памяти',        icon:'layers',   weight:0.9, run:checkHeapSpray },
  { id:'mitm',              name:'Man-in-the-Middle',  sub:'Перехват трафика',           icon:'split',    weight:1.3, run:checkMITM },
  { id:'aiPhishing',        name:'AI-фишинг',          sub:'Атаки с генеративным ИИ',    icon:'bot',      weight:1.2, run:checkAIPhishing }
];

/* ================= DOM / СОСТОЯНИЕ ================= */
const $ = sel => document.querySelector(sel);
const state = { running: false };
let elDot, elStatusText, elProgress, elPercent, elTerm, elScannerCard;

/* ================= УТИЛИТЫ UI ================= */
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

/* ================= МОДАЛЬНОЕ ОКНО СОГЛАСИЯ ================= */
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

/* ================= АУДИТ ================= */
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

  log('Инициализация аудит-движка v3.1…', 'run');
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
    await sleep(180 + Math.random() * 220);
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

/* ================= РЕНДЕР РЕЗУЛЬТАТОВ ================= */
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
      <article class="check-card st-${st}" style="animation-delay:${i * 40}ms" tabindex="0" role="button" aria-expanded="false">
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

/* ================= РЕНДЕР РЕКОМЕНДАЦИЙ ================= */
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

/* ================= ЭНЦИКЛОПЕДИЯ УГРОЗ ================= */
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

/* ================= REVEAL-АНИМАЦИИ ================= */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ================= ИНИЦИАЛИЗАЦИЯ ================= */
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
