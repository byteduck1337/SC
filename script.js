'use strict';

const ICONS = {
  shieldCheck: '<path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  bug: '<path d="M8 2l1.9 1.9M16 2l-1.9 1.9"/><path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/><path d="M12 20a6 6 0 0 0 6-6v-3a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6 6 0 0 0 6 6Z"/><path d="M12 20v-7"/><path d="M6 13H2M6 17H3M6 9H3M22 13h-4M21 17h-3M21 9h-3"/>',
  plug: '<path d="M9 2v6M15 2v6"/><path d="M6 8h12v3a6 6 0 0 1-12 0V8Z"/><path d="M12 17v5"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-2.64-6.36L21 8"/><path d="M21 3v5h-5"/>',
  cursor: '<path d="m9 9 5 12 1.8-5.2L21 14 9 9Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/>',
  fish: '<path d="M6.5 12c1-3.5 5-6 8.5-6 3.6 0 6.1 2.5 7 6-.9 3.5-3.4 6-7 6s-7.5-2.5-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.9a9.8 9.8 0 0 1 0-11.8"/><path d="M7 10.7C7 8 5.6 6 2.7 5.5c-1 1.5-1 5 .3 6.5-1.3 1.5-1.3 5-.3 6.5C5.6 18 7 16 7 13.3"/>',
  browserLock: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20"/><path d="M5.5 6.5h.01M8.5 6.5h.01"/><rect x="10" y="13" width="6" height="4.5" rx="1"/><path d="M11.5 13v-1a1.5 1.5 0 0 1 3 0v1"/>',
  cookie: '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M15 11v.01"/>',
  fingerprint: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .13-5.35 0-6"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
  cpu: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  alert: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4M12 17h.01"/>',
  key: '<path d="m21 2-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8Zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/>',
  network: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  type: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
  tabs: '<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  tabBack: '<path d="m15 14 5-5-5-5"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>',
  pin: '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  terminal: '<path d="m4 17 6-6-6-6"/><path d="M12 19h8"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  layers: '<path d="m12 2 8.5 4.5L12 11 3.5 6.5 12 2Z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 17 8.5 4.5 8.5-4.5"/>',
  split: '<path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/><path d="m15 9 6-6"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>'
};

const icon = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const esc = s => String(s).replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[c]));

const sleep = ms => new Promise(r => setTimeout(r, ms));

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;

  let prev = Array.from({ length: n + 1 }, (_, j) => j);

  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(
        prev[j] + 1,
        cur[j - 1] + 1,
        prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
    prev = cur;
  }

  return prev[n];
}

const POPULAR_DOMAINS = [
  'google', 'yandex', 'youtube', 'gmail', 'vk', 'mail', 'sberbank', 'sber',
  'tinkoff', 'gosuslugi', 'wildberries', 'ozon', 'avito', 'telegram',
  'whatsapp', 'facebook', 'instagram', 'apple', 'microsoft', 'paypal',
  'amazon', 'wikipedia', 'kinopoisk'
];

const CHECK_CATEGORIES = {
  classic: 'Классические веб-уязвимости',
  network: 'Сетевые атаки',
  social: 'Социальная инженерия',
  modern: 'Современные угрозы 2026',
  privacy: 'Приватность и телеметрия',
  headers: 'Security headers',
  runtime: 'Browser runtime / APIs'
};

const MIN_SAFE_BROWSER_VERSIONS = {
  'Google Chrome': 156,
  'Microsoft Edge': 156,
  'Opera': 156,
  'Mozilla Firefox': 159,
  'Safari': 19
};

const BROWSER_CVE_DB = [
  {
    id: 'CVE-2026-85046',
    name: 'V8 / JIT type confusion',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 9.8,
    knownExploited: true,
    note: 'Критический вектор выполнения кода через движок V8. Требуется обновление Chromium-браузера.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-85046'
  },
  {
    id: 'CVE-2026-87491',
    name: 'Wasm sandbox escape',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 9.1,
    knownExploited: true,
    note: 'Выход из песочницы WebAssembly. Часто используется в цепочке с V8-эксплойтами.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-87491'
  },
  {
    id: 'CVE-2026-106341',
    name: 'Extension / DevTools code execution',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 8.8,
    knownExploited: false,
    note: 'Уязвимость, связанная с расширениями/DevTools.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-106341'
  },
  {
    id: 'CVE-2026-11015',
    name: 'WebGPU use-after-free',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 8.1,
    knownExploited: false,
    note: 'Уязвимость в WebGPU. Основной mitigation — обновление браузера.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-11015'
  },
  {
    id: 'CVE-2026-22165',
    name: 'WebGL / ANGLE memory corruption',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 7.8,
    knownExploited: false,
    note: 'Проблемы в графическом стеке WebGL/ANGLE.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-22165'
  },
  {
    id: 'CVE-2026-19137',
    name: 'WebGPU / WebGL vulnerability',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 8.4,
    knownExploited: false,
    note: 'Уязвимость нового графического API.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-19137'
  },
  {
    id: 'CVE-2026-113186',
    name: 'DevTools vulnerability',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 8.6,
    knownExploited: false,
    note: 'Уязвимость в компоненте DevTools.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-113186'
  },
  {
    id: 'CVE-2026-106331',
    name: 'Browser extension vulnerability',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 8.2,
    knownExploited: false,
    note: 'Уязвимость расширений.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-106331'
  },
  {
    id: 'CVE-2026-87550',
    name: 'Universal CSS Injection',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 7.2,
    knownExploited: false,
    note: 'CSS-инъекции могут приводить к утечке данных.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-87550'
  },
  {
    id: 'CVE-2026-79234',
    name: 'CSS injection data leak',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 6.8,
    knownExploited: false,
    note: 'Ещё один вектор CSS-инъекций.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-79234'
  },
  {
    id: 'CVE-2026-79005',
    name: 'Storage Access API bypass',
    products: ['Google Chrome', 'Microsoft Edge', 'Opera'],
    engines: ['Blink'],
    maxVersion: 155,
    fixedVersion: '156',
    severity: 6.5,
    knownExploited: false,
    note: 'Проблема в Storage Access API.',
    source: 'https://nvd.nist.gov/vuln/detail/CVE-2026-79005'
  }
];

let _browserCVEDataPromise = null;

async function getBrowserCVEData() {
  if (_browserCVEDataPromise) return _browserCVEDataPromise;

  _browserCVEDataPromise = fetch('./cve-data.json', { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error('cve-data.json unavailable');
      return r.json();
    })
    .then(data => Array.isArray(data) && data.length ? data : BROWSER_CVE_DB)
    .catch(() => BROWSER_CVE_DB);

  return _browserCVEDataPromise;
}

function getBrowserInfo() {
  const ua = navigator.userAgent;

  let name = 'Неизвестный браузер';
  let version = 0;
  let engine = 'не определён';

  const opr = ua.match(/OPR\/(\d+)/);
  const edg = ua.match(/Edg\/(\d+)/);
  const chr = ua.match(/Chrome\/(\d+)/);
  const ff = ua.match(/Firefox\/(\d+)/);
  const saf = ua.match(/Version\/(\d+)(?:\.\d+)*\s+Safari/);

  if (opr) {
    name = 'Opera';
    version = chr ? +chr[1] : +opr[1];
    engine = 'Blink / Chromium';
  } else if (edg) {
    name = 'Microsoft Edge';
    version = +edg[1];
    engine = 'Blink / Chromium';
  } else if (chr) {
    name = 'Google Chrome';
    version = +chr[1];
    engine = 'Blink / Chromium';
  } else if (ff) {
    name = 'Mozilla Firefox';
    version = +ff[1];
    engine = 'Gecko';
  } else if (saf) {
    name = 'Safari';
    version = +saf[1];
    engine = 'WebKit';
  }

  return { ua, name, version, engine };
}

function browserMatchesCVE(info, cve) {
  if (!info.version) return false;

  if (cve.products && !cve.products.includes(info.name)) return false;
  if (cve.engines && !cve.engines.some(e => info.engine.includes(e))) return false;

  if (typeof cve.maxVersion === 'number' && info.version > cve.maxVersion) return false;
  if (typeof cve.minVersion === 'number' && info.version < cve.minVersion) return false;

  return true;
}

async function checkDriveBy() {
  const findings = [];
  let safety = 100;

  const frames = [...document.querySelectorAll('iframe, frame')].filter(el => !el.closest('[data-no-scan]'));
  let hidden = 0;

  frames.forEach(f => {
    const cs = getComputedStyle(f);
    if (cs.display === 'none' || cs.visibility === 'hidden' || f.offsetWidth < 2 || f.offsetHeight < 2 || parseFloat(cs.opacity) === 0) {
      hidden++;
    }
  });

  if (hidden > 0) {
    safety -= hidden * 25;
    findings.push(`Обнаружены скрытые iframe (${hidden}) — типичный вектор drive-by-загрузок`);
  } else if (frames.length) {
    findings.push(`Фреймов на странице: ${frames.length}, все видимые`);
  }

  const risky = [...document.querySelectorAll('a[href]')]
    .filter(a => !a.closest('[data-no-scan]'))
    .filter(a => /\.(exe|msi|scr|bat|cmd|apk|jar|ps1)(?:$|[?#])/i.test(a.href));

  if (risky.length) {
    safety -= risky.length * 15;
    findings.push(`Прямые ссылки на исполняемые файлы: ${risky.length}`);
  }

  if (document.querySelector('meta[http-equiv="refresh" i]')) {
    safety -= 15;
    findings.push('Авто-перенаправление через meta-refresh — подозрительный паттерн');
  }

  if (!findings.length) findings.push('Скрытых загрузок, невидимых фреймов и исполняемых файлов не найдено');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkBrowserExploit() {
  const findings = [];
  let safety = 100;
  const info = getBrowserInfo();

  const min = MIN_SAFE_BROWSER_VERSIONS[info.name];

  if (min && info.version < min) {
    safety -= clamp((min - info.version) * 12, 20, 90);
    findings.push(`${info.name} ${info.version} устарел: актуальная ветка — ${min}+. Старые версии содержат известные эксплойты`);
  } else if (info.version) {
    findings.push(`${info.name} ${info.version} (${info.engine}) — версия актуальна, известные эксплойты не применимы`);
  } else {
    safety -= 20;
    findings.push('Не удалось определить версию браузера из User-Agent');
  }

  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl');
    const dbg = gl && gl.getExtension('WEBGL_debug_renderer_info');
    if (dbg) findings.push('GPU: ' + String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL)).slice(0, 60));
  } catch (e) {}

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkPlugins() {
  const findings = [];
  let safety = 100;

  const plugCount = navigator.plugins ? navigator.plugins.length : 0;
  let mimes = '';

  try {
    mimes = Array.from(navigator.mimeTypes || []).map(m => m.type).join(' ');
  } catch (e) {}

  if (/x-shockwave-flash|x-java|activex/i.test(mimes)) {
    safety -= 50;
    findings.push('Обнаружены следы Flash / Java / ActiveX — критически устаревшие технологии');
  }

  const objs = document.querySelectorAll('object, embed, applet').length;
  if (objs) {
    safety -= objs * 12;
    findings.push(`Элементов object/embed/applet: ${objs} — потенциальный вектор эксплойта`);
  }

  if (plugCount > 0) findings.push(`Активных NPAPI-плагинов: ${plugCount}`);
  else findings.push('NPAPI-плагины отсутствуют — соответствует современной норме');

  if (/application\/pdf/i.test(mimes)) findings.push('PDF обрабатывается встроенным модулем браузера');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkXSS(ctx) {
  const findings = [];
  let safety = 100;
  const unsafe = [];

  for (const [, v] of new URL(location.href).searchParams) {
    if (/[<>'")]/.test(v)) unsafe.push(v.slice(0, 20));
  }

  if (unsafe.length) {
    safety -= 30;
    findings.push(`Параметры URL с неэкранированными символами: ${unsafe.length}`);
  }

  if (ctx.headers) {
    const csp = ctx.headers.get('content-security-policy');
    if (csp) findings.push('Content-Security-Policy активна — выполнение чужих скриптов ограничено');
    else {
      safety -= 25;
      findings.push('Заголовок CSP отсутствует — внедрённые скрипты ничем не ограничены');
    }
  } else {
    safety -= 15;
    findings.push('Заголовки ответа недоступны (CORS / file://) — оценка частичная');
  }

  const inline = document.querySelectorAll('script:not([src])').length;
  if (inline > 8) {
    safety -= 10;
    findings.push(`Inline-скриптов: ${inline} — увеличивают поверхность XSS`);
  }

  if (!findings.length) findings.push('Признаков XSS-уязвимости не обнаружено');

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.65 };
}

async function checkCSRF() {
  const findings = [];
  let safety = 100;

  const forms = [...document.querySelectorAll('form')].filter(f => !f.closest('[data-no-scan]'));

  if (forms.length === 0) {
    findings.push('HTML-формы на странице отсутствуют — CSRF-вектор не применим');
  } else {
    const postForms = forms.filter(f => (f.method || '').toLowerCase() === 'post');
    const noToken = postForms.filter(f => !f.querySelector('input[name*="csrf" i], input[name*="token" i], input[name*="_t" i]')).length;

    if (noToken) {
      safety -= noToken * 20;
      findings.push(`POST-форм без CSRF-токена: ${noToken} из ${postForms.length || forms.length}`);
    } else if (postForms.length) {
      findings.push('Все POST-формы содержат токены защиты');
    }

    const getMutate = forms.filter(f => {
      const act = (f.getAttribute('action') || '').toLowerCase();
      return (f.method || 'get').toLowerCase() === 'get' && /(delete|update|edit|remove|save|pay)/.test(act);
    }).length;

    if (getMutate) {
      safety -= 25;
      findings.push('Изменяющие операции выполняются GET-запросами — уязвимо к CSRF');
    }

    if (!findings.length) findings.push(`Форм найдено: ${forms.length}, риски не выявлены`);
  }

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkClickjacking(ctx) {
  const findings = [];
  let safety = 100;

  if (window.self !== window.top) {
    safety -= 50;
    findings.push('Страница открыта внутри чужого фрейма — кликджекинг возможен прямо сейчас');
  }

  if (ctx.headers) {
    const xfo = ctx.headers.get('x-frame-options');
    const frameAnc = /frame-ancestors/i.test(ctx.headers.get('content-security-policy') || '');

    if (xfo) findings.push(`X-Frame-Options: ${xfo} — встраивание страницы запрещено`);
    else if (frameAnc) findings.push('CSP frame-ancestors ограничивает встраивание');
    else {
      safety -= 45;
      findings.push('Заголовки защиты от встраивания (X-Frame-Options / frame-ancestors) отсутствуют');
    }
  } else {
    safety -= 40;
    findings.push('Заголовки ответа недоступны (CORS / file://) — защита от фрейминга не проверена');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.6 };
}

async function checkPhishing() {
  const findings = [];
  let pts = 0;
  const h = location.hostname;

  if (location.protocol === 'http:') {
    pts += 30;
    findings.push('Сайт работает по HTTP — соединение не шифруется');
  }

  if (/^https?:\/\/\d{1,3}(?:\.\d{1,3}){3}/.test(location.origin)) {
    pts += 40;
    findings.push('Вместо домена используется IP-адрес — частый признак фишинга');
  }

  if (h.includes('xn--')) {
    pts += 25;
    findings.push('Punycode в домене — возможна подмена символов');
  }

  if (/free|bonus|win|prize|gift/i.test(h)) {
    pts += 15;
    findings.push('«Приманочные» слова в домене (free / bonus / win)');
  }

  if (h.split('.').length > 4) {
    pts += 10;
    findings.push('Слишком много поддоменов — приём маскировки');
  }

  if (location.href.length > 150) {
    pts += 10;
    findings.push('Аномально длинный URL');
  }

  if (location.username) {
    pts += 30;
    findings.push('В URL присутствуют credentials (user@site) — приём обмана');
  }

  if (!findings.length) findings.push('Признаков фишингового домена не обнаружено');

  findings.push(`Проверяемый домен: ${h}`);

  return { safety: clamp(100 - pts, 0, 100), findings };
}

async function checkSpoofing(ctx) {
  const findings = [];
  let safety = 100;

  if (location.protocol === 'https:') {
    findings.push('Соединение защищено TLS (HTTPS) — сертификат присутствует');
    const mixed = document.querySelectorAll('script[src^="http:"], iframe[src^="http:"], img[src^="http:"]').length;
    if (mixed) {
      safety -= mixed * 10;
      findings.push(`Mixed-content: ${mixed} ресурсов загружается по незащищённому HTTP`);
    }
  } else {
    safety -= 50;
    findings.push('HTTP-соединение: SSL-сертификат отсутствует, возможна полная подмена сайта');
  }

  if (ctx.headers) {
    if (ctx.headers.get('strict-transport-security')) findings.push('HSTS активен — downgrade-атаки на HTTPS заблокированы');
    else {
      safety -= 10;
      findings.push('HSTS не обнаружен — возможно принудительное понижение до HTTP');
    }
  } else {
    safety -= 5;
    findings.push('HSTS проверить не удалось (заголовки недоступны)');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.7 };
}

async function checkSession() {
  const findings = [];
  let safety = 100;
  const cookies = document.cookie.split(';').filter(c => c.trim());

  if (!window.isSecureContext) {
    safety -= 15;
    findings.push('Контекст страницы небезопасен (non-secure context)');
  }

  if (location.protocol === 'http:' && cookies.length) {
    safety -= 40;
    findings.push('Cookies передаются по незашифрованному каналу — перехват тривиален');
  }

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
  const findings = [];
  let safety = 100;

  findings.push(`User-Agent доступен: ${navigator.userAgent.slice(0, 48)}…`);
  safety -= 20;

  try {
    const c = document.createElement('canvas');
    c.width = 220;
    c.height = 30;
    const x = c.getContext('2d');
    x.textBaseline = 'top';
    x.font = '14px Arial';
    x.fillStyle = '#333';
    x.fillRect(0, 0, 140, 28);
    x.fillStyle = '#000';
    x.fillText('Digital Shield 2026', 2, 2);
    const d = c.toDataURL();
    let h = 0;
    for (let i = 0; i < d.length; i++) h = (h * 31 + d.charCodeAt(i)) >>> 0;
    safety -= 15;
    findings.push(`Canvas-отпечаток доступен (хеш ${h.toString(16).slice(0, 6)}) — сайты могут идентифицировать браузер`);
  } catch (e) {
    findings.push('Canvas API недоступен — снятие canvas-отпечатка заблокировано');
  }

  safety -= 10;
  findings.push(`Экран: ${screen.width}×${screen.height}×${screen.colorDepth}, часовой пояс: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);

  if (navigator.hardwareConcurrency) {
    safety -= 5;
    findings.push(`Ядер CPU: ${navigator.hardwareConcurrency}${navigator.deviceMemory ? ', RAM ~' + navigator.deviceMemory + ' ГБ' : ''}`);
  }

  const dnt = navigator.doNotTrack || navigator.globalPrivacyControl;
  if (!dnt || dnt !== '1') {
    safety -= 10;
    findings.push('Сигнал Do Not Track / Global Privacy Control не включён');
  } else {
    findings.push('Сигнал Do Not Track / GPC активен');
  }

  if (navigator.userAgentData) findings.push('Браузер поддерживает сокращённый User-Agent (Client Hints)');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkCrypto() {
  const findings = [];
  let safety = 100;

  const sig = /coinhive|coinimp|cryptoloot|crypto-loot|jsecoin|minerd|webminer|hashforcash|nimiq|deepminer|authedmine|monero|minero/i;
  let miners = 0;

  document.querySelectorAll('script[src]').forEach(s => {
    if (sig.test(s.src)) miners++;
  });

  document.querySelectorAll('script:not([src])').forEach(s => {
    if (sig.test(s.textContent || '')) miners++;
  });

  if (miners) {
    safety = 5;
    findings.push(`Обнаружены скрипты с сигнатурами криптомайнеров: ${miners}`);
  } else {
    findings.push('Известные сигнатуры криптомайнеров не найдены');
  }

  const wasm = document.querySelectorAll('script[src$=".wasm"]').length;
  if (wasm) {
    safety -= 15;
    findings.push(`WebAssembly-модулей: ${wasm} — иногда используется для скрытого майнинга`);
  }

  findings.push('Косвенные признаки (нагрузка CPU) проверяются только сигнатурно — используйте блокировщик');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkWateringHole() {
  const findings = [];
  let safety = 100;

  const scripts = [...document.querySelectorAll('script[src]')];
  const third = new Set();
  let httpScripts = 0;
  let badTld = 0;

  scripts.forEach(s => {
    try {
      const u = new URL(s.src, location.href);
      if (u.origin !== location.origin) third.add(u.hostname);
      if (u.protocol === 'http:') httpScripts++;
      if (/(?:\.tk|\.ml|\.ga|\.cf|\.gq|\.top|\.xyz|\.click|\.icu|\.rest)$/i.test(u.hostname)) badTld++;
    } catch (e) {}
  });

  if (third.size) {
    findings.push(`Сторонних скриптов: ${third.size} (${[...third].slice(0, 3).join(', ')}${third.size > 3 ? '…' : ''})`);
    safety -= clamp(third.size * 5, 5, 35);
    findings.push('Каждый внешний скрипт — потенциальная точка компрометации («водопой» через supply-chain)');
  } else {
    findings.push('Сторонние скрипты не загружаются — поверхность атаки «водопой» минимальна');
  }

  if (httpScripts) {
    safety -= httpScripts * 25;
    findings.push(`Скриптов по незащищённому HTTP: ${httpScripts} — могут быть подменены`);
  }

  if (badTld) {
    safety -= badTld * 20;
    findings.push(`Подозрительные доменные зоны: ${badTld}`);
  }

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkScareware() {
  const findings = [];
  let safety = 100;

  const alarms = [
    'ваш компьютер заражен', 'ваш компьютер заражён', 'обнаружен вирус', 'обнаружена угроза',
    'срочно скачайте антивирус', 'требуется очистка', 'устройство заблокировано'
  ];

  let text = '';

  document.body.querySelectorAll('h1,h2,h3,h4,p,span,div,a,li,button').forEach(el => {
    if (el.closest('[data-no-scan]') || el.children.length > 0) return;
    text += ' ' + (el.textContent || '');
  });

  text = text.toLowerCase();

  let hits = 0;
  alarms.forEach(w => {
    if (text.includes(w)) hits++;
  });

  if (hits >= 1) {
    safety -= hits * 25;
    findings.push(`Пугающая лексика scareware на странице: совпадений ${hits}`);
  } else {
    findings.push('Признаков запугивания на странице нет');
  }

  document.querySelectorAll('body > *').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const cs = getComputedStyle(el);
    if (
      cs.position === 'fixed' &&
      cs.display !== 'none' &&
      el.offsetWidth > innerWidth * .5 &&
      el.offsetHeight > innerHeight * .4 &&
      /скачать|установить|очистить|вылечить/i.test(el.textContent || '')
    ) {
      safety -= 30;
      findings.push('Агрессивный фиксированный баннер с призывом установить ПО');
    }
  });

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkBruteforce() {
  const findings = [];
  let safety = 100;

  const pwd = [...document.querySelectorAll('input[type="password"]')].filter(el => !el.closest('[data-no-scan]'));

  if (pwd.length === 0) {
    findings.push('Формы ввода пароля на странице отсутствуют — брутфорс не применим');
  } else {
    pwd.forEach(p => {
      const form = p.closest('form');
      const cap = form && form.querySelector('[class*="captcha" i],[id*="captcha" i],[class*="turnstile" i],iframe[src*="recaptcha"],iframe[src*="hcaptcha"]');
      if (!cap) {
        safety -= 25;
        findings.push('Форма входа без капчи / антибота — уязвима к автоматическому подбору');
      }
    });

    if (safety === 100) findings.push('Формы входа защищены антибот-механизмами');
  }

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkBotnet() {
  const findings = [];
  let safety = 100;

  try {
    const p = await navigator.permissions.query({ name: 'notifications' });
    if (p.state === 'granted') {
      safety -= 20;
      findings.push('Разрешены уведомления сайтов — канал для спама и команд ботнета');
    } else {
      findings.push('Уведомления: ' + (p.state === 'denied' ? 'запрещены' : 'запрашиваются при необходимости'));
    }
  } catch (e) {}

  try {
    const g = await navigator.permissions.query({ name: 'geolocation' });
    if (g.state === 'granted') {
      safety -= 10;
      findings.push('Геолокация выдана сайтам бессрочно — лишняя поверхность злоупотребления');
    }
  } catch (e) {}

  if ('serviceWorker' in navigator) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      if (regs.length) {
        safety -= 10;
        findings.push(`Зарегистрировано Service Worker'ов: ${regs.length} — проверьте их происхождение`);
      } else {
        findings.push('Service Worker не зарегистрирован');
      }
    } catch (e) {}
  }

  findings.push('Активные WebSocket-соединения из JS не перечислить — следите за фоновой сетевой нагрузкой');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkTyposquatting() {
  const findings = [];
  let pts = 0;

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
    const normalized = name
      .replace(/0/g, 'o')
      .replace(/1/g, 'l')
      .replace(/3/g, 'e')
      .replace(/5/g, 's')
      .replace(/7/g, 't');

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

  if (/(?:\.tk|\.ml|\.ga|\.cf|\.gq|\.top|\.xyz|\.icu|\.rest|\.click|\.buzz)$/i.test(domain)) {
    pts += 20;
    findings.push('Домен в зоне, часто используемой для тайпосквоттинга и фишинга');
  }

  if ((name.match(/-/g) || []).length >= 2) {
    pts += 10;
    findings.push('Много дефисов в имени домена — приём маскировки под известный бренд');
  }

  if (exact) findings.push(`Домен совпадает с известным брендом (${name}) — подмена маловероятна`);
  if (!findings.length) findings.push('Признаков тайпосквоттинга в адресе не обнаружено');

  return { safety: clamp(100 - pts, 0, 100), findings };
}

async function checkTabnabbing(ctx) {
  const findings = [];
  let safety = 100;
  let opener = null;

  try {
    opener = window.opener;
  } catch (e) {}

  if (opener) {
    let crossOrigin = false;
    try {
      void opener.document;
    } catch (e) {
      crossOrigin = true;
    }

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

  if (location.protocol === 'http:') {
    safety -= 15;
    findings.push('HTTP-соединение: подмена вкладки возможна и на уровне сети');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.75 };
}

async function checkReverseTabnabbing() {
  const findings = [];
  let safety = 100;
  let opener = null;

  try {
    opener = window.opener;
  } catch (e) {}

  if (opener) {
    try {
      if (opener.location) {
        safety -= 20;
        findings.push('Страница имеет доступ к window.opener.location — потенциальный reverse tabnabbing против открывшего сайта');
      }
    } catch (e) {
      findings.push('Доступ к opener.location заблокирован same-origin policy — reverse tabnabbing невозможен');
    }
  } else {
    findings.push('window.opener отсутствует — reverse tabnabbing не применим');
  }

  const blanks = [...document.querySelectorAll('a[target="_blank"]')].filter(a => !a.closest('[data-no-scan]'));
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

async function checkSessionFixation() {
  const findings = [];
  let safety = 100;

  if (/(jsessionid|phpsessid|sid=|session_id=|sessionid=)/i.test(location.href)) {
    safety -= 45;
    findings.push('Идентификатор сессии передаётся прямо в URL — классическая предпосылка session fixation');
  }

  const cookies = document.cookie.split(';').map(c => c.trim()).filter(Boolean);
  const sessionCookies = cookies.filter(c => /(sid|session|phpsessid|jsessionid|token|auth)/i.test(c.split('=')[0]));

  if (sessionCookies.length) {
    findings.push(`Похоже на сессионные cookies: ${sessionCookies.length}`);
    if (location.protocol === 'http:') {
      safety -= 30;
      findings.push('Сессионные cookie передаются по HTTP — возможны перехват и фиксация идентификатора');
    }
  } else {
    findings.push('Сессионные идентификаторы в открытом доступе не обнаружены');
  }

  if (location.protocol === 'http:' && document.querySelector('form input[type="password"]')) {
    safety -= 15;
    findings.push('Форма входа по HTTP — злоумышленник может заранее навязать session ID');
  }

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkDNSSpoofing(ctx) {
  const findings = [];
  let safety = 100;

  if (location.protocol === 'http:') {
    safety -= 50;
    findings.push('HTTP-соединение: DNS-записи и трафик не защищены от подмены (DNS-spoofing тривиален)');
  } else {
    findings.push('HTTPS-соединение: подмена DNS-записи обнаруживается проверкой сертификата');

    if (ctx.headers) {
      if (ctx.headers.get('strict-transport-security')) {
        findings.push('HSTS активен — даже при DNS-подмене браузер не примет HTTP-версию сайта');
      } else {
        safety -= 15;
        findings.push('HSTS отсутствует — возможна downgrade-атака после DNS-подмены');
      }
    } else {
      safety -= 5;
      findings.push('HSTS проверить не удалось (заголовки недоступны)');
    }
  }

  if (/^https?:\/\/\d{1,3}(?:\.\d{1,3}){3}/.test(location.origin)) {
    safety -= 20;
    findings.push('Подключение по IP-адресу: защита от DNS-подмены через сертификаты ограничена');
  }

  findings.push('Полную проверку DNSSEC из браузера выполнить нельзя — включите DNS-over-HTTPS в настройках');

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.7 };
}

async function checkDevTools() {
  const findings = [];
  let safety = 100;

  let debuggerCount = 0;
  let evalCount = 0;
  let consoleOverride = 0;

  document.querySelectorAll('script:not([src])').forEach(s => {
    const code = s.textContent || '';
    debuggerCount += (code.match(/\bdebugger\b/g) || []).length;
    evalCount += (code.match(/\beval\s*\(/g) || []).length;

    if (/console\s*\.\s*(?:log|warn|error|info|debug|table)\s*=|console\s*\[[^\]]+\]\s*=/.test(code)) {
      consoleOverride++;
    }
  });

  if (debuggerCount) {
    safety -= 25;
    findings.push(`Инструкции debugger: ${debuggerCount} — приём anti-debugging, часто встречается в обфусцированных вредоносах`);
  }

  if (evalCount) {
    safety -= clamp(evalCount * 10, 10, 40);
    findings.push(`Вызовы eval(): ${evalCount} — выполнение произвольного кода, типичный вектор инъекций`);
  }

  if (consoleOverride) {
    safety -= 15;
    findings.push('Обнаружена подмена методов консоли — скрипты скрывают свою активность от DevTools');
  }

  if (safety === 100) findings.push('Признаков anti-debugging и вредоносного кода в inline-скриптах нет');

  findings.push('Помните: никогда не вставляйте команды в консоль DevTools по просьбе сайтов — это self-XSS');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkUIRedressing(ctx) {
  const findings = [];
  let safety = 100;

  if (window.self !== window.top) {
    safety -= 45;
    findings.push('Страница отображается во фрейме — возможна подмена интерфейса (UI redressing)');
  }

  if (ctx.headers) {
    const xfo = ctx.headers.get('x-frame-options');
    const fa = /frame-ancestors/i.test(ctx.headers.get('content-security-policy') || '');

    if (!xfo && !fa) {
      safety -= 30;
      findings.push('Нет заголовков, запрещающих встраивание интерфейса в чужие страницы');
    } else {
      findings.push('Встраивание ограничено заголовками X-Frame-Options / frame-ancestors');
    }
  } else {
    safety -= 20;
    findings.push('Заголовки недоступны (CORS / file://) — защита интерфейса не проверена');
  }

  let overlays = 0;

  document.querySelectorAll('div, section').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const cs = getComputedStyle(el);

    if (
      (cs.position === 'fixed' || cs.position === 'absolute') &&
      cs.display !== 'none' &&
      parseFloat(cs.opacity) < 0.15 &&
      el.offsetWidth > innerWidth * 0.4 &&
      el.offsetHeight > innerHeight * 0.3
    ) {
      overlays++;
    }
  });

  if (overlays) {
    safety -= overlays * 20;
    findings.push(`Полупрозрачные слои поверх страницы: ${overlays} — признак UI-подмены`);
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.65 };
}

async function checkHeapSpray() {
  const findings = [];
  let safety = 100;

  let bigInline = 0;
  let base64Blobs = 0;
  let typedArrayUse = 0;

  document.querySelectorAll('script:not([src])').forEach(s => {
    const code = s.textContent || '';

    if (code.length > 200000) bigInline++;

    const blobs = code.match(/["'][A-Za-z0-9+/=]{5000,}["']/g);
    if (blobs) base64Blobs += blobs.length;

    if (/new\s+(?:ArrayBuffer|Uint8Array|Uint32Array|Float64Array)\s*\(\s*\d{6,}/.test(code)) typedArrayUse++;
  });

  if (bigInline) {
    safety -= bigInline * 15;
    findings.push(`Аномально большие inline-скрипты (>200 КБ): ${bigInline} — могут содержать шелл-код`);
  }

  if (base64Blobs) {
    safety -= base64Blobs * 20;
    findings.push(`Крупные base64-блоки в скриптах: ${base64Blobs} — частый приём heap spraying`);
  }

  if (typedArrayUse) {
    safety -= 20;
    findings.push('Выделение огромных типизированных массивов — паттерн заполнения кучи');
  }

  if (safety === 100) findings.push('Подозрительных паттернов заполнения памяти не обнаружено');

  findings.push('Современные движки используют рандомизацию кучи — актуальный браузер резко снижает риск');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkMITM(ctx) {
  const findings = [];
  let safety = 100;

  if (location.protocol === 'https:') {
    findings.push('Канал зашифрован TLS (HTTPS)');

    const mixed = document.querySelectorAll(
      'script[src^="http:"], link[rel="stylesheet"][href^="http:"], iframe[src^="http:"], img[src^="http:"], form[action^="http:"]'
    );

    if (mixed.length) {
      safety -= clamp(mixed.length * 10, 10, 35);
      findings.push(`Незащищённые ресурсы на HTTPS-странице: ${mixed.length} — точка внедрения при MITM`);
    }
  } else {
    safety -= 50;
    findings.push('Трафик не шифрован (HTTP) — перехват и подмена данных возможны в любой точке сети');
  }

  if (!window.isSecureContext) {
    safety -= 15;
    findings.push('Страница не в secure context — крипто-API недоступны, контекст небезопасен');
  }

  if (ctx.headers) {
    if (ctx.headers.get('strict-transport-security')) findings.push('HSTS защищает от перехвата при первом подключении');
    else {
      safety -= 10;
      findings.push('Без HSTS первое подключение может быть перехвачено (SSL stripping)');
    }
  }

  try {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn && /wifi|cellular/.test(conn.type || '')) {
      findings.push('Мобильное/Wi-Fi-подключение: в публичных сетях используйте VPN');
    }
  } catch (e) {}

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.7 };
}

async function checkAIPhishing() {
  const findings = [];
  let pts = 0;

  const sensitive = [...document.querySelectorAll(
    'input[name*="card" i], input[id*="card" i], input[name*="cvv" i], input[name*="passport" i], input[name*="ssn" i], input[name*="pin" i]'
  )].filter(el => !el.closest('[data-no-scan]'));

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

  const urgency = [
    'немедленно', 'срочно', 'заблокирован', 'заблокирована', 'последнее предупреждение',
    'аккаунт будет удален', 'аккаунт будет удалён', 'подтвердите личность'
  ];

  let hits = 0;
  urgency.forEach(w => {
    if (text.includes(w)) hits++;
  });

  if (hits >= 2) {
    pts += hits * 10;
    findings.push(`Маркеры давления и срочности (${hits}) — типичный стиль AI-генерируемого фишинга`);
  }

  document.querySelectorAll('[id*="chat" i], [class*="chat" i], [id*="assist" i], [class*="assist" i]').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const t = (el.textContent || '').toLowerCase();
    if (/(скачать|установить|антивирус|очистить)/.test(t)) {
      pts += 20;
      findings.push('«AI-помощник» предлагает установить ПО — признак атаки "Троянский советчик"');
    }
  });

  if (pts === 0) findings.push('Признаков AI-генерируемого фишинга на странице не обнаружено');

  findings.push('AI-фишинг неотличим по вёрстке и тексту — всегда проверяйте домен');

  return { safety: clamp(100 - pts, 0, 100), findings };
}

async function checkV8Exploits() {
  const findings = [];
  let safety = 100;
  const info = getBrowserInfo();

  const shortName = {
    'Google Chrome': 'Chrome',
    'Microsoft Edge': 'Edge',
    'Mozilla Firefox': 'Firefox',
    'Opera': 'Opera',
    'Safari': 'Safari'
  }[info.name] || info.name;

  const minSafe = {
    Chrome: 156,
    Edge: 156,
    Firefox: 159,
    Opera: 156,
    Safari: 19
  }[shortName];

  if (minSafe && info.version < minSafe) {
    const gap = minSafe - info.version;
    safety -= clamp(gap * 15, 30, 95);
    findings.push(`${shortName} ${info.version} уязвим к V8/JIT-эксплойтам 2026 года (CVE-2026-85046, CVE-2026-87491, CVE-2026-106341). Обновитесь до версии ${minSafe}+.`);
  } else if (info.version > 0) {
    findings.push(`${shortName} ${info.version} — версия содержит исправления для известных V8/JIT-уязвимостей 2026 года.`);
  } else {
    safety -= 20;
    findings.push('Не удалось определить версию браузера для проверки на V8/JIT-уязвимости.');
  }

  if (typeof WebAssembly === 'object') {
    findings.push('WebAssembly доступен — часто используется в эксплойт-цепочках (например, CVE-2026-87491).');
  }

  if (safety === 100) findings.push('Прямых признаков уязвимости к V8/JIT-эксплойтам не обнаружено.');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkWasmEscape(ctx) {
  const findings = [];
  let safety = 100;

  if (typeof WebAssembly === 'undefined') {
    findings.push('WebAssembly отключён. Риск эксплуатации Wasm-уязвимостей (CVE-2026-87491) сведён к нулю, но часть сайтов может не работать.');
  } else {
    findings.push('WebAssembly включён. Это стандарт, но уязвимости в Wasm (CVE-2026-87491) используются для выхода из песочницы браузера.');

    if (ctx.headers) {
      const coop = ctx.headers.get('cross-origin-opener-policy');
      const coep = ctx.headers.get('cross-origin-embedder-policy');

      if (coop && coep) {
        findings.push('Заголовки COOP и COEP обнаружены. Cross-Origin Isolation активна, что значительно усложняет эксплуатацию Wasm-уязвимостей.');
      } else {
        safety -= 10;
        findings.push('Заголовки COOP/COEP не найдены. Cross-Origin Isolation не активна, что упрощает потенциальную эксплуатацию.');
      }
    }
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.7 };
}

async function checkWebGPUVulns() {
  const findings = [];
  let safety = 100;

  if (navigator.gpu) {
    findings.push('WebGPU доступен. В 2026 году в нём найдено несколько уязвимостей (CVE-2026-11015, CVE-2026-22165).');
    safety -= 15;
  } else {
    findings.push('WebGPU недоступен. Риск уязвимостей WebGPU отсутствует.');
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) {
      findings.push('WebGL активен. В 2026 году в компонентах WebGL/ANGLE было множество критических уязвимостей (CVE-2026-19137, CVE-2026-19170).');
      safety -= 10;
    }
  } catch (e) {}

  if (safety === 100) findings.push('Риски, связанные с WebGPU/WebGL, минимальны.');
  else findings.push('Рекомендация: обновите браузер и драйверы видеокарты. Без необходимости не используйте сайты, активно нагружающие GPU.');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkDevToolsExtensions() {
  const findings = [];
  let safety = 100;

  if (typeof console !== 'undefined' && console.profile) {
    findings.push('DevTools доступны. В 2026 году были уязвимости в самом компоненте DevTools (CVE-2026-113186), позволяющие выполнить код вне песочницы.');
    safety -= 10;
  }

  try {
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
      findings.push('Обнаружены расширения браузера. Уязвимости в расширениях (CVE-2026-106331) могут привести к краже данных или выполнению кода.');
      safety -= 15;
    }
  } catch (e) {}

  if (safety === 100) findings.push('Явных признаков уязвимости через DevTools или расширения не найдено.');

  findings.push('Совет: удалите неиспользуемые расширения и не выполняйте код в консоли DevTools по просьбе сайтов.');

  return { safety: clamp(safety, 0, 100), findings };
}

async function checkCSSInjection(ctx) {
  const findings = [];
  let safety = 100;

  const styleTags = document.querySelectorAll('style');
  let suspiciousRules = 0;

  styleTags.forEach(tag => {
    if (/@import|url\s*\(/i.test(tag.textContent)) suspiciousRules++;
  });

  if (suspiciousRules > 0) {
    safety -= clamp(suspiciousRules * 10, 10, 40);
    findings.push(`Обнаружены CSS-правила с @import или url() (${suspiciousRules}). В 2026 году актуальны атаки через CSS-инъекции (CVE-2026-87550, CVE-2026-79234).`);
  } else {
    findings.push('Подозрительных CSS-правил, характерных для инъекций, не найдено.');
  }

  if (ctx.headers) {
    const csp = ctx.headers.get('content-security-policy');
    if (csp && /style-src/i.test(csp)) {
      findings.push('CSP ограничивает источники стилей — риск CSS-инъекций снижен.');
    } else {
      safety -= 10;
      findings.push('CSP не ограничивает источники стилей. Рекомендуется директива style-src.');
    }
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.7 };
}

async function checkStorageAccessAPI(ctx) {
  const findings = [];
  let safety = 100;

  if (document.requestStorageAccess) {
    findings.push('Storage Access API доступен. В 2026 году были уязвимости (CVE-2026-79005), позволяющие обойти политику происхождения.');

    if (ctx.headers) {
      const coop = ctx.headers.get('cross-origin-opener-policy');
      if (coop === 'same-origin') {
        findings.push('COOP: same-origin усиливает изоляцию и снижает риск, связанный с Storage Access API.');
      } else {
        safety -= 15;
        findings.push('COOP не установлен в same-origin. Рекомендуется для изоляции.');
      }
    }
  } else {
    findings.push('Storage Access API не используется на этой странице.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.7 };
}

async function checkKnownCVEs() {
  const findings = [];
  const info = getBrowserInfo();
  let risk = 0;
  let confidence = 0.85;

  if (!info.version) {
    risk += 35;
    confidence = 0.5;
    findings.push('Не удалось определить версию браузера по User-Agent. CVE-проверка частичная.');
  } else {
    const min = MIN_SAFE_BROWSER_VERSIONS[info.name];

    if (min && info.version < min) {
      const gap = min - info.version;
      risk += clamp(gap * 8, 20, 65);
      findings.push(`${info.name} ${info.version} ниже рекомендованной ветки ${min}+. Возможны известные эксплойты движка.`);
    } else {
      findings.push(`${info.name} ${info.version} (${info.engine}) — формально в актуальной ветке.`);
    }
  }

  try {
    const db = await getBrowserCVEData();
    const applicable = db.filter(cve => browserMatchesCVE(info, cve));

    for (const cve of applicable) {
      risk += clamp((cve.severity || 7) * 3.2, 8, 45);

      if (cve.knownExploited) {
        risk += 10;
        findings.push(`${cve.id} отмечена как эксплуатируемая в дикой природе (KEV).`);
      }

      findings.push(
        `${cve.id}: ${cve.name || 'известная уязвимость'} — требуется ${cve.fixedVersion || 'обновление'}. ${cve.note || ''}`.trim()
      );
    }

    if (!applicable.length && info.version) {
      findings.push('В локальной CVE-базе нет подходящих записей для текущей версии. Базу нужно периодически обновлять.');
    }

    confidence = 0.95;
  } catch (e) {
    risk += 10;
    confidence = 0.6;
    findings.push('Не удалось загрузить расширенную CVE-базу. Использована встроенная минимальная база.');
  }

  return { safety: clamp(100 - risk, 0, 100), findings, confidence };
}

async function checkCrossOriginIsolation(ctx) {
  const findings = [];
  let safety = 100;

  const isolated = !!window.crossOriginIsolated;
  const hasSAB = typeof SharedArrayBuffer !== 'undefined';

  if (isolated) {
    findings.push('Cross-Origin Isolation активна: COOP/COEP настроены корректно.');
  } else {
    safety -= 25;
    findings.push('Cross-Origin Isolation НЕ активна. Это повышает риск certain side-channel атак и ограничивает безопасное использование SharedArrayBuffer.');
  }

  if (ctx.headers) {
    const coop = ctx.headers.get('cross-origin-opener-policy');
    const coep = ctx.headers.get('cross-origin-embedder-policy');

    if (coop) findings.push(`COOP: ${coop}`);
    else {
      safety -= 15;
      findings.push('Заголовок Cross-Origin-Opener-Policy отсутствует.');
    }

    if (coep) findings.push(`COEP: ${coep}`);
    else {
      safety -= 15;
      findings.push('Заголовок Cross-Origin-Embedder-Policy отсутствует.');
    }
  } else {
    safety -= 10;
    findings.push('Заголовки COOP/COEP недоступны для проверки (CORS / file://).');
  }

  if (hasSAB) {
    findings.push('SharedArrayBuffer доступен в текущем контексте.');
  } else {
    findings.push('SharedArrayBuffer недоступен. Это может быть нормально, если страница не требует cross-origin isolation.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.6 };
}

const SENSITIVE_PERMISSIONS_FEATURES = [
  'camera',
  'microphone',
  'geolocation',
  'usb',
  'serial',
  'hid',
  'bluetooth',
  'local-network-access',
  'payment',
  'identity-credentials-get',
  'screen-wake-lock',
  'idle-detection',
  'clipboard-read',
  'display-capture',
  'xr-spatial-tracking',
  'autoplay',
  'encrypted-media',
  'full-screen'
];

function parsePolicyHeader(header) {
  const map = {};
  if (!header) return map;

  const re = /([a-zA-Z0-9-]+)=(\*|\([^)]*\))/g;
  let m;

  while ((m = re.exec(header))) {
    map[m[1].toLowerCase()] = m[2];
  }

  return map;
}

async function checkPermissionsPolicy(ctx) {
  const findings = [];
  let safety = 100;

  const header =
    ctx.headers?.get('permissions-policy') ||
    ctx.headers?.get('feature-policy');

  if (!header) {
    safety -= 30;
    findings.push('Permissions-Policy / Feature-Policy отсутствует: чувствительные API могут быть доступны шире, чем необходимо.');
  } else {
    const policy = parsePolicyHeader(header);
    let wildcardCount = 0;
    let unspecifiedCritical = 0;

    for (const feature of SENSITIVE_PERMISSIONS_FEATURES) {
      const value = policy[feature];

      if (!value) {
        unspecifiedCritical++;
        continue;
      }

      if (value === '*') {
        wildcardCount++;
        safety -= 7;
        findings.push(`Permissions-Policy: ${feature} разрешён всем источникам (*)`);
      } else if (/^\(\s*\)$/.test(value)) {
        findings.push(`Permissions-Policy: ${feature} заблокирован ()`);
      } else if (/^\(self\)$/i.test(value)) {
        findings.push(`Permissions-Policy: ${feature} ограничен self`);
      } else if (/\(/.test(value)) {
        findings.push(`Permissions-Policy: ${feature} ограничен списком origin`);
      }
    }

    if (unspecifiedCritical > 10) {
      safety -= 10;
      findings.push(`В Permissions-Policy не описаны некоторые чувствительные функции (${unspecifiedCritical} шт.).`);
    }

    if (!wildcardCount && !unspecifiedCritical) {
      findings.push('Permissions-Policy выглядит разумно для проверенных чувствительных функций.');
    }
  }

  try {
    const notif = await navigator.permissions.query({ name: 'notifications' });
    if (notif.state === 'granted') {
      safety -= 10;
      findings.push('Уведомления сайтов уже разрешены — потенциальный канал спама/управления ботнетом.');
    }
  } catch (e) {}

  try {
    const geo = await navigator.permissions.query({ name: 'geolocation' });
    if (geo.state === 'granted') {
      safety -= 5;
      findings.push('Геолокация разрешена текущему источнику.');
    }
  } catch (e) {}

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.65 };
}

function parseCSPDirectives(csp) {
  const directives = {};

  String(csp || '')
    .split(';')
    .forEach(part => {
      const tokens = part.trim().split(/\s+/);
      if (!tokens[0]) return;

      const name = tokens[0].toLowerCase();
      const value = tokens.slice(1).join(' ');
      directives[name] = value;
    });

  return directives;
}

async function checkCSPStrength(ctx) {
  const findings = [];
  let safety = 100;

  if (!ctx.headers) {
    return {
      safety: 55,
      findings: ['Заголовки недоступны (CORS / file://). CSP оценить полностью нельзя.'],
      confidence: 0.5
    };
  }

  const cspEnforce = ctx.headers.get('content-security-policy');
  const cspReport = ctx.headers.get('content-security-policy-report-only');
  const csp = cspEnforce || cspReport;

  if (!csp) {
    return {
      safety: 15,
      findings: ['Content-Security-Policy отсутствует. Внедрённые скрипты ничем не ограничены.'],
      confidence: 1
    };
  }

  if (!cspEnforce && cspReport) {
    safety = 55;
    findings.push('CSP находится в report-only режиме: нарушения логируются, но не блокируются.');
  }

  const d = parseCSPDirectives(csp);
  const scriptSrc = d['script-src'] || d['default-src'] || '';
  const objectSrc = d['object-src'] || '';
  const frameAncestors = d['frame-ancestors'] || '';
  const baseURI = d['base-uri'] || '';
  const formAction = d['form-action'] || '';

  if (/unsafe-inline/i.test(scriptSrc)) {
    safety -= 25;
    findings.push('CSP: script-src содержит unsafe-inline.');
  }

  if (/unsafe-eval/i.test(scriptSrc)) {
    safety -= 20;
    findings.push('CSP: script-src содержит unsafe-eval.');
  }

  if (/(^|\s)\*(\s|$)/.test(scriptSrc)) {
    safety -= 15;
    findings.push('CSP: script-src допускает wildcard-source.');
  }

  if (/\b(data:|blob:)\b/i.test(scriptSrc)) {
    safety -= 12;
    findings.push('CSP: script-src допускает data: или blob: источники.');
  }

  if (!objectSrc) {
    safety -= 10;
    findings.push('CSP: директива object-src отсутствует.');
  } else if (!/'none'|^none$/i.test(objectSrc)) {
    safety -= 10;
    findings.push('CSP: object-src не установлен в none.');
  } else {
    findings.push('CSP: object-src none — хорошо.');
  }

  if (!baseURI) {
    safety -= 5;
    findings.push('CSP: base-uri отсутствует.');
  }

  if (!formAction) {
    safety -= 5;
    findings.push('CSP: form-action отсутствует.');
  }

  if (!frameAncestors) {
    safety -= 10;
    findings.push('CSP: frame-ancestors отсутствует — кликджекинг не ограничен через CSP.');
  }

  if (location.protocol === 'https:' && !d['upgrade-insecure-requests']) {
    safety -= 5;
    findings.push('CSP: upgrade-insecure-requests не включён на HTTPS-странице.');
  }

  if (/require-trusted-types-for/i.test(csp)) {
    findings.push('CSP: require-trusted-types-for активен.');
  } else {
    safety -= 7;
    findings.push('CSP: require-trusted-types-for отсутствует.');
  }

  if (/trusted-types/i.test(csp)) {
    findings.push('CSP: политика trusted-types задана.');
  } else {
    safety -= 5;
    findings.push('CSP: директива trusted-types не найдена.');
  }

  if (safety >= 95) {
    findings.push('CSP выглядит достаточно строгой.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: 1 };
}

async function checkSRI() {
  const findings = [];
  let safety = 100;

  const nodes = [...document.querySelectorAll('script[src], link[rel="stylesheet"][href]')];

  const external = nodes.filter(el => {
    try {
      const url = new URL(el.src || el.href, location.href);
      return url.origin !== location.origin;
    } catch (e) {
      return false;
    }
  });

  if (!external.length) {
    findings.push('Внешних скриптов и стилей не обнаружено. SRI не требуется для текущей страницы.');
    return { safety: 100, findings, confidence: 1 };
  }

  const secured = external.filter(el =>
    el.hasAttribute('integrity') &&
    (el.hasAttribute('crossorigin') || el.crossOrigin)
  );

  const missing = external.length - secured.length;

  safety -= clamp(missing * 12, 8, 65);

  const domains = [...new Set(
    external.map(el => {
      try {
        return new URL(el.src || el.href, location.href).hostname;
      } catch (e) {
        return 'unknown';
      }
    })
  )].slice(0, 6);

  findings.push(`Внешних ресурсов: ${external.length}, с SRI: ${secured.length}.`);
  findings.push(`Источники: ${domains.join(', ')}`);

  if (missing) {
    findings.push('Отсутствие integrity/crossorigin повышает риск компрометации через CDN или third-party script.');
  } else {
    findings.push('Все внешние скрипты/стили защищены Subresource Integrity.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: 1 };
}

async function checkMixedContentExpanded() {
  const findings = [];
  let safety = 100;

  if (location.protocol !== 'https:') {
    return {
      safety: 25,
      findings: ['Страница открыта не по HTTPS. Mixed Content оценка бессмысленна: весь трафик потенциально небезопасен.'],
      confidence: 1
    };
  }

  const selectors = [
    'script[src^="http:"]',
    'link[href^="http:"]',
    'iframe[src^="http:"]',
    'img[src^="http:"]',
    'source[src^="http:"]',
    'video[src^="http:"]',
    'audio[src^="http:"]',
    'embed[src^="http:"]',
    'object[data^="http:"]',
    'form[action^="http:"]',
    'a[href^="http:"]',
    'area[href^="http:"]',
    'track[src^="http:"]',
    'input[src^="http:"]',
    'base[href^="http:"]'
  ].join(',');

  const nodes = [...document.querySelectorAll(selectors)];

  const insecure = nodes.filter(el => {
    const value =
      el.getAttribute('src') ||
      el.getAttribute('href') ||
      el.getAttribute('action') ||
      el.getAttribute('data') ||
      '';
    return /^http:/i.test(value);
  });

  if (insecure.length) {
    safety -= clamp(insecure.length * 8, 8, 60);
    findings.push(`HTTP-ресурсы на HTTPS-странице: ${insecure.length}.`);
  } else {
    findings.push('Явных HTTP-ресурсов на HTTPS-странице не найдено.');
  }

  const inlineCode = [...document.querySelectorAll('script:not([src])')]
    .map(s => s.textContent || '')
    .join('\n');

  if (/fetch\s*\(\s*["']http:\/\//i.test(inlineCode)) {
    safety -= 20;
    findings.push('В inline-скриптах обнаружены fetch() к HTTP-ресурсам.');
  }

  if (/new\s+(?:WebSocket|EventSource)\s*\(\s*["']ws:\/\//i.test(inlineCode)) {
    safety -= 25;
    findings.push('Обнаружены ws:// соединения на HTTPS-странице — потенциальный MITM-вектор.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: 1 };
}

async function checkHSTSStrength(ctx) {
  const findings = [];
  let safety = 100;

  if (location.protocol !== 'https:') {
    return {
      safety: 20,
      findings: ['HSTS не может защитить HTTP-соединение. Сначала включите HTTPS.'],
      confidence: 1
    };
  }

  if (!ctx.headers) {
    return {
      safety: 55,
      findings: ['Заголовки недоступны. HSTS проверить не удалось.'],
      confidence: 0.5
    };
  }

  const hsts = ctx.headers.get('strict-transport-security');

  if (!hsts) {
    return {
      safety: 40,
      findings: ['Strict-Transport-Security отсутствует. Возможна SSL-stripping / downgrade-атака.'],
      confidence: 1
    };
  }

  const maxAgeMatch = hsts.match(/max-age=(\d+)/i);
  const maxAge = maxAgeMatch ? +maxAgeMatch[1] : 0;

  if (maxAge < 15552000) {
    safety -= 25;
    findings.push(`HSTS max-age=${maxAge} меньше 180 дней.`);
  } else {
    findings.push(`HSTS max-age=${maxAge} — достаточный срок.`);
  }

  if (!/includesubdomains/i.test(hsts)) {
    safety -= 10;
    findings.push('HSTS не включает includeSubDomains.');
  } else {
    findings.push('HSTS includeSubDomains активен.');
  }

  if (/preload/i.test(hsts)) {
    findings.push('HSTS preload указан.');
  } else {
    safety -= 5;
    findings.push('HSTS preload не указан. Для публичных доменов рекомендуется preload.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: 1 };
}

async function checkURLSecrets() {
  const findings = [];
  let points = 0;

  const search = new URLSearchParams(location.search);
  const hash = location.hash.replace(/^#/, '');
  const hashParams = new URLSearchParams(hash);

  const pairs = [...search.entries(), ...hashParams.entries()];

  const sensitiveKey = /^(access_token|id_token|token|jwt|code|state|api[_-]?key|apikey|password|passwd|pwd|secret|private[_-]?key|session[_-]?id|sid)$/i;
  const highRiskKey = /(token|jwt|code|password|passwd|pwd|secret|private[_-]?key)/i;

  for (const [key] of pairs) {
    if (sensitiveKey.test(key)) {
      points += highRiskKey.test(key) ? 25 : 10;
      findings.push(`В URL найден чувствительный параметр: ${key}`);
    }
  }

  if (/#.*(?:access_token|id_token|token)/i.test(location.hash)) {
    points += 20;
    findings.push('Токены обнаружены во fragment (#) URL. Фрагмент может попадать в историю браузера и локальные логи.');
  }

  if (!points) {
    findings.push('Чувствительных параметров в URL не обнаружено.');
  }

  return { safety: clamp(100 - points, 0, 100), findings, confidence: 1 };
}

async function checkStorageSecrets() {
  const findings = [];
  let points = 0;

  const sensitiveKey = /(token|auth|jwt|session|password|passwd|pwd|pin|cvv|passport|ssn|secret|private[_-]?key|api[_-]?key)/i;
  const highRiskKey = /(password|passwd|pwd|cvv|passport|ssn|private[_-]?key|secret)/i;

  const stores = [
    ['localStorage', typeof localStorage !== 'undefined' ? localStorage : null],
    ['sessionStorage', typeof sessionStorage !== 'undefined' ? sessionStorage : null]
  ];

  for (const [name, store] of stores) {
    if (!store) {
      findings.push(`${name} недоступен.`);
      continue;
    }

    try {
      const limit = Math.min(store.length, 200);

      for (let i = 0; i < limit; i++) {
        const key = store.key(i);
        if (!key) continue;

        if (sensitiveKey.test(key)) {
          points += highRiskKey.test(key) ? 25 : 12;
          findings.push(`${name}: ключ "${key}" выглядит чувствительным. Значения не проверяются и не выводятся.`);
        }
      }
    } catch (e) {
      findings.push(`${name} недоступен для чтения в текущем контексте.`);
    }
  }

  if (!points) {
    findings.push('В localStorage/sessionStorage не найдено явно чувствительных ключей.');
  }

  return { safety: clamp(100 - points, 0, 100), findings, confidence: 1 };
}

async function checkDocumentDomain() {
  const findings = [];
  let safety = 100;

  try {
    const dd = document.domain;

    if (dd && dd !== location.hostname) {
      safety -= 35;
      findings.push(`document.domain изменён на "${dd}". Это устаревший механизм с риском обхода same-origin.`);
    } else if (dd) {
      findings.push('document.domain совпадает с hostname или не использовался опасный override.');
    }
  } catch (e) {
    findings.push('document.domain недоступен для проверки.');
  }

  try {
    if (window.name && String(window.name).length > 200) {
      safety -= 10;
      findings.push('window.name содержит длинные данные. Может использоваться для межстраничной передачи состояния.');
    }
  } catch (e) {}

  return { safety: clamp(safety, 0, 100), findings, confidence: 0.9 };
}

async function checkReferrerPolicy(ctx) {
  const findings = [];
  let safety = 100;

  const header = ctx.headers?.get('referrer-policy');
  const meta = document.querySelector('meta[name="referrer"]')?.content || '';
  const policy = String(header || meta || '').toLowerCase();

  if (!policy) {
    safety -= 20;
    findings.push('Referrer-Policy не задан. Полный URL может утекать на сторонние сайты.');
  } else if (/unsafe-url/.test(policy)) {
    safety -= 35;
    findings.push('Referrer-Policy: unsafe-url — очень рискованно.');
  } else if (/no-referrer/.test(policy)) {
    findings.push('Referrer-Policy: no-referrer — максимально строго.');
  } else if (/same-origin/.test(policy)) {
    findings.push('Referrer-Policy: same-origin — хороший выбор.');
  } else if (/strict-origin-when-cross-origin/.test(policy)) {
    findings.push('Referrer-Policy: strict-origin-when-cross-origin — разумный баланс.');
  } else {
    findings.push(`Referrer-Policy: ${policy}`);
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.65 };
}

async function checkXContentTypeOptions(ctx) {
  const findings = [];
  let safety = 100;

  const value = ctx.headers?.get('x-content-type-options');

  if (!value) {
    safety -= 20;
    findings.push('X-Content-Type-Options отсутствует. Браузер может выполнять MIME sniffing.');
  } else if (/nosniff/i.test(value)) {
    findings.push('X-Content-Type-Options: nosniff активен.');
  } else {
    safety -= 10;
    findings.push(`X-Content-Type-Options: ${value}. Рекомендуется nosniff.`);
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.6 };
}

async function checkTrustedTypes(ctx) {
  const findings = [];
  let safety = 100;

  const csp = ctx.headers?.get('content-security-policy') || '';

  if (/require-trusted-types-for/i.test(csp)) {
    findings.push('require-trusted-types-for активен в CSP.');
  } else {
    safety -= 20;
    findings.push('require-trusted-types-for отсутствует. DOM XSS-векторы слабее контролируются.');
  }

  if (/trusted-types/i.test(csp)) {
    findings.push('Директива trusted-types задана.');
  } else {
    safety -= 10;
    findings.push('Директива trusted-types не найдена.');
  }

  if (typeof trustedTypes !== 'undefined' && trustedTypes.createPolicy) {
    findings.push('Trusted Types API доступен в браузере.');
  } else {
    findings.push('Trusted Types API недоступен. Возможно, браузер старый или API отключён.');
  }

  return { safety: clamp(safety, 0, 100), findings, confidence: ctx.headers ? 1 : 0.65 };
}

async function checkDOMClobbering() {
  const findings = [];
  let safety = 100;

  const dangerousIds = [
    'location', 'document', 'top', 'parent', 'self', 'frames', 'opener',
    'eval', 'constructor', '__proto__', 'prototype'
  ];

  const dangerousNames = [
    'location', 'document', 'top', 'parent', 'self', 'frames', 'opener', 'eval'
  ];

  let hits = 0;

  document.querySelectorAll('[id]').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const id = String(el.id || '').toLowerCase();
    if (dangerousIds.includes(id)) {
      hits++;
      findings.push(`Найден опасный id="${el.id}" — возможен DOM Clobbering.`);
    }
  });

  document.querySelectorAll('[name]').forEach(el => {
    if (el.closest('[data-no-scan]')) return;
    const name = String(el.getAttribute('name') || '').toLowerCase();
    if (dangerousNames.includes(name)) {
      hits++;
      findings.push(`Найден опасный name="${el.getAttribute('name')}" — возможен DOM Clobbering.`);
    }
  });

  if (hits) {
    safety -= clamp(hits * 15, 15, 60);
  } else {
    findings.push('Явных опасных id/name для DOM Clobbering не обнаружено.');
  }

  findings.push('Проверка статическая: полностью динамический DOM Clobbering может не обнаруживаться.');

  return { safety: clamp(safety, 0, 100), findings, confidence: 0.8 };
}

async function checkDynamicCode() {
  const findings = [];
  let safety = 100;

  const scripts = [...document.querySelectorAll('script:not([src])')];
  let evalFn = 0;
  let stringTimer = 0;
  let documentWrite = 0;
  let innerHTMLAssign = 0;

  scripts.forEach(s => {
    const code = s.textContent || '';

    evalFn += (code.match(/\beval\s*\(|\bnew\s+Function\s*\(/g) || []).length;
    stringTimer += (code.match(/set(?:Timeout|Interval)\s*\(\s*["'`]/g) || []).length;
    documentWrite += (code.match(/\bdocument\.write(?:ln)?\s*\(/g) || []).length;
    innerHTMLAssign += (code.match(/\.innerHTML\s*=/g) || []).length;
  });

  if (evalFn) {
    safety -= clamp(evalFn * 12, 12, 45);
    findings.push(`Обнаружены eval()/new Function(): ${evalFn}. Это типичный вектор XSS и dynamic code execution.`);
  }

  if (stringTimer) {
    safety -= clamp(stringTimer * 10, 10, 35);
    findings.push(`Строковые setTimeout/setInterval: ${stringTimer}. Внутри они работают похоже на eval.`);
  }

  if (documentWrite) {
    safety -= clamp(documentWrite * 8, 8, 25);
    findings.push(`document.write/document.writeln: ${documentWrite}. Устаревший опасный API.`);
  }

  if (innerHTMLAssign) {
    safety -= clamp(innerHTMLAssign * 4, 4, 25);
    findings.push(`Присваивания .innerHTML: ${innerHTMLAssign}. Возможный DOM XSS, если данные не санитизируются.`);
  }

  if (safety === 100) {
    findings.push('Опасных паттернов динамического выполнения кода в inline-скриптах не найдено.');
  }

  findings.push('Внешние скрипты в этом тесте не анализируются из соображений производительности и privacy.');

  return { safety: clamp(safety, 0, 100), findings, confidence: 0.75 };
}

async function checkPostMessageHygiene() {
  const findings = [];
  let safety = 100;

  const scripts = [...document.querySelectorAll('script:not([src])')];
  let postMessageCalls = 0;
  let unsafePatterns = 0;

  scripts.forEach(s => {
    const code = s.textContent || '';

    postMessageCalls += (code.match(/\.postMessage\s*\(/g) || []).length;

    if (/\.postMessage\s*\([\s\S]{0,160},\s*["']\*["']/i.test(code)) {
      unsafePatterns++;
      findings.push('Обнаружен postMessage(..., "*") — сообщение может быть прочитано любым окном.');
    }

    const hasMessageListener = /addEventListener\s*\(\s*["']message["']/i.test(code);
    const hasOriginCheck = /event\.origin|e\.origin|data\.origin|origin\s*===|origin\s*==/i.test(code);

    if (hasMessageListener && !hasOriginCheck) {
      unsafePatterns++;
      findings.push('Обнаружен обработчик message без явной проверки origin в inline-скрипте.');
    }
  });

  if (!postMessageCalls) {
    findings.push('postMessage в inline-скриптах не обнаружен.');
  } else if (!unsafePatterns) {
    findings.push('Используется postMessage; явных небезопасных шаблонов в inline-скриптах не найдено.');
  }

  safety -= clamp(unsafePatterns * 20, 0, 60);

  findings.push('Статический анализ ограничен: обработчики во внешних скриптах не проверяются.');

  return { safety: clamp(safety, 0, 100), findings, confidence: 0.7 };
}

const RECS = {
  driveby: {
    title: 'Отключите автоматические загрузки',
    text: 'Включите подтверждение перед загрузкой файлов и не открывайте исполняемые файлы с незнакомых сайтов. Блокировщик рекламы снижает риск drive-by-атак.',
    link: 'https://www.kaspersky.ru/resource-center/threats/what-is-a-drive-by-download',
    action: 'Подробнее об угрозе'
  },
  browserExploit: {
    title: 'Обновите браузер до актуальной версии',
    text: 'Установите последнюю стабильную версию и включите автообновление. Большинство эксплойтов работают только против устаревших версий движка.',
    link: 'https://browser-update.org/ru/',
    action: 'Проверить обновления'
  },
  plugins: {
    title: 'Избавьтесь от устаревших плагинов',
    text: 'Flash и Java-апплеты мертвы. PDF открывайте во встроенном просмотрщике браузера, а не в сторонних программах.',
    link: 'https://www.adobe.com/products/flashplayer/end-of-life.html',
    action: 'Почему Flash опасен'
  },
  xss: {
    title: 'Усильте Content Security Policy',
    text: 'CSP ограничивает источники скриптов и блокирует inline-выполнение. Пользователям помогают uBlock Origin или NoScript.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/CSP',
    action: 'Документация CSP'
  },
  csrf: {
    title: 'Не оставайтесь авторизованным на чужих сайтах',
    text: 'CSRF эксплуатирует активные сессии. Формам нужны CSRF-токены и cookies с флагом SameSite.',
    link: 'https://owasp.org/www-community/attacks/csrf/',
    action: 'Руководство OWASP'
  },
  clickjacking: {
    title: 'Защититесь от подмены кликов',
    text: 'X-Frame-Options: DENY или CSP frame-ancestors запрещают встраивание страницы в чужие фреймы.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/X-Frame-Options',
    action: 'Документация MDN'
  },
  phishing: {
    title: 'Проверяйте адрес, а не дизайн',
    text: 'Фишинг распознаётся по домену. Используйте менеджер паролей и антифишинг-фильтры браузера.',
    link: 'https://www.kaspersky.ru/resource-center/threats/phishing',
    action: 'Как распознать фишинг'
  },
  spoofing: {
    title: 'Работайте только по HTTPS',
    text: 'Никогда не вводите данные на HTTP-сайтах. Проверяйте замок в адресной строке на страницах входа и оплаты.',
    link: 'https://www.eff.org/https-everywhere',
    action: 'HTTPS Everywhere'
  },
  session: {
    title: 'Защитите сессионные данные',
    text: 'Не используйте публичный Wi-Fi без VPN. Всегда выходите из аккаунтов на чужих устройствах.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies',
    action: 'О безопасности cookies'
  },
  fingerprint: {
    title: 'Уменьшите цифровой отпечаток',
    text: 'Отключите сторонние cookies, включите защиту от трекинга и Privacy Badger. Полностью скрыть отпечаток нельзя, но можно сделать его типовым.',
    link: 'https://coveryourtracks.eff.org/',
    action: 'Проверить отпечаток в EFF'
  },
  crypto: {
    title: 'Заблокируйте криптомайнеры',
    text: 'Фильтры uBlock Origin содержат списки известных майнеров. Если вентилятор шумит на пустой вкладке — откройте диспетчер задач браузера.',
    link: 'https://ublockorigin.com/',
    action: 'uBlock Origin'
  },
  watering: {
    title: 'Держите блокировщик включённым везде',
    text: 'Риск «водопоя» растёт с числом сторонних скриптов. Блокировщик уменьшает поверхность атаки даже на доверенных сайтах.',
    link: 'https://en.wikipedia.org/wiki/Watering_hole_attack',
    action: 'Об атаке «Водопой»'
  },
  scareware: {
    title: 'Не верьте всплывающим «пугалкам»',
    text: 'Ни один браузер не сообщает о вирусах всплывающим окном. Закрывайте такие страницы через диспетчер задач браузера.',
    link: 'https://www.kaspersky.ru/resource-center/threats/scareware',
    action: 'Подробнее о scareware'
  },
  bruteforce: {
    title: 'Уникальные пароли и 2FA',
    text: 'Брутфорс бессмысленен, если пароль уникален и включена двухфакторная аутентификация.',
    link: 'https://www.kaspersky.ru/resource-center/definitions/brute-force-attack',
    action: 'О брутфорс-атаках'
  },
  botnet: {
    title: 'Отзовите лишние разрешения',
    text: 'Проверьте разрешения на уведомления и геолокацию. Через них ботнет может получать канал управления.',
    link: 'https://www.kaspersky.ru/resource-center/threats/botnets',
    action: 'О ботнет-сетях'
  },
  typosquatting: {
    title: 'Всегда проверяйте написание домена',
    text: 'Тайпосквоттеры регистрируют домены, отличающиеся на 1–2 символа от известных брендов.',
    link: 'https://en.wikipedia.org/wiki/Typosquatting',
    action: 'О тайпосквоттинге'
  },
  tabnabbing: {
    title: 'Осторожнее с неактивными вкладками',
    text: 'Tabnabbing перерисовывает неактивную вкладку под страницу входа. Разработчикам помогает COOP.',
    link: 'https://owasp.org/www-community/attacks/Tabnabbing',
    action: 'OWASP о Tabnabbing'
  },
  reverseTabnabbing: {
    title: 'Добавьте rel="noopener" к ссылкам',
    text: 'Ссылки с target="_blank" без rel="noopener" позволяют открытой странице перенаправить ваш сайт.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noopener',
    action: 'Документация MDN'
  },
  sessionFixation: {
    title: 'Не доверяйте ссылкам с session ID',
    text: 'Разработчикам: пересоздавайте session ID после входа и используйте Secure, HttpOnly, SameSite cookies.',
    link: 'https://owasp.org/www-community/attacks/Session_fixation',
    action: 'OWASP о Session Fixation'
  },
  dnsSpoofing: {
    title: 'Включите DNS-over-HTTPS',
    text: 'DoH шифрует DNS-запросы и защищает от подмены записей. Владельцам сайтов обязателен HSTS.',
    link: 'https://www.cloudflare.com/learning/dns/dns-over-tls/',
    action: 'О защищённом DNS'
  },
  devtools: {
    title: 'Никогда не вставляйте код в консоль',
    text: 'Self-XSS: мошенники убеждают вставить «волшебный» скрипт в консоль DevTools.',
    link: 'https://en.wikipedia.org/wiki/Self-XSS',
    action: 'О self-XSS'
  },
  uiRedressing: {
    title: 'Не доверяйте «съехавшему» интерфейсу',
    text: 'UI redressing подменяет видимый интерфейс страницы. Разработчикам: frame-ancestors в CSP.',
    link: 'https://owasp.org/www-community/attacks/Clickjacking',
    action: 'OWASP о подмене UI'
  },
  heapSpray: {
    title: 'Обновляйте браузер без исключений',
    text: 'Heap spraying эксплуатирует ошибки памяти движков. Автообновление закрывает большинство таких атак.',
    link: 'https://en.wikipedia.org/wiki/Heap_spraying',
    action: 'О Heap Spraying'
  },
  mitm: {
    title: 'VPN в публичных сетях — обязателен',
    text: 'В открытых Wi-Fi сетях трафик может перехватываться. Используйте HTTPS, VPN и не игнорируйте предупреждения о сертификатах.',
    link: 'https://www.kaspersky.ru/resource-center/threats/man-in-the-middle-attack',
    action: 'О MITM-атаках'
  },
  aiPhishing: {
    title: 'Не верьте идеальному тексту',
    text: 'AI-фишинг безупречен грамматически и персонализирован. Проверяйте домен отправителя и включите 2FA.',
    link: 'https://www.proofpoint.com/us/threat-reference/phishing',
    action: 'Об AI-фишинге'
  },
  v8Exploits: {
    title: 'Обновляйте браузер немедленно',
    text: 'V8/JIT-эксплойты — самый популярный вектор атак в 2026 году. Включите автообновление и не откладывайте патчи безопасности.',
    link: 'https://chromereleases.googleblog.com/',
    action: 'Список обновлений Chrome'
  },
  wasmEscape: {
    title: 'Не отключайте защиту Wasm',
    text: 'Современные браузеры используют песочницу для WebAssembly. Регулярно обновляйте браузер.',
    link: 'https://webassembly.org/',
    action: 'О технологии WebAssembly'
  },
  webgpuVulns: {
    title: 'Осторожно с WebGPU на незнакомых сайтах',
    text: 'WebGPU — мощный, но новый API с растущим числом уязвимостей. При необходимости его можно отключить.',
    link: 'https://developer.chrome.com/docs/web-platform/webgpu',
    action: 'Документация WebGPU'
  },
  devtoolsExtensions: {
    title: 'Проверяйте расширения',
    text: 'Уязвимости в расширениях и DevTools могут привести к выполнению кода вне песочницы. Удалите неиспользуемые расширения.',
    link: 'https://developer.chrome.com/docs/extensions/develop',
    action: 'Безопасность расширений'
  },
  cssInjection: {
    title: 'Ограничьте CSS-инъекции',
    text: 'CSS-инъекции могут использоваться для кражи данных. CSP style-src и блокировщик сторонних стилей снижают риск.',
    link: 'https://ublockorigin.com/',
    action: 'uBlock Origin'
  },
  storageAccessApi: {
    title: 'Следите за разрешениями Storage Access API',
    text: 'Storage Access API позволяет обходить блокировку сторонних cookie. Не предоставляйте разрешение без необходимости.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API',
    action: 'Документация Storage Access API'
  },
  knownCVEs: {
    title: 'Обновите браузер по официальным CVE-бюллетеням',
    text: 'Если проверка нашла совпадения с известными CVE, надёжный mitigation — обновление браузера до фикс-версии.',
    link: 'https://nvd.nist.gov/vuln/search',
    action: 'NVD CVE Search'
  },
  crossOriginIsolation: {
    title: 'Включите COOP и COEP',
    text: 'Cross-Origin Isolation снижает риск некоторых side-channel атак и делает SharedArrayBuffer более безопасным.',
    link: 'https://web.dev/articles/coop-coep',
    action: 'Руководство COOP/COEP'
  },
  permissionsPolicy: {
    title: 'Ограничьте Permissions-Policy',
    text: 'Разрешайте camera, microphone, geolocation, usb, serial, bluetooth только необходимым origin.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Permissions-Policy',
    action: 'MDN Permissions-Policy'
  },
  cspStrength: {
    title: 'Усильте CSP до production-grade',
    text: 'Уберите unsafe-inline и unsafe-eval, используйте nonce/hash/strict-dynamic, object-src none, base-uri self, frame-ancestors.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Content-Security-Policy',
    action: 'MDN CSP'
  },
  sri: {
    title: 'Добавьте SRI для внешних ресурсов',
    text: 'Для сторонних скриптов и стилей используйте integrity и crossorigin. Это защищает от компрометации CDN.',
    link: 'https://developer.mozilla.org/ru/docs/Web/Security/Subresource_Integrity',
    action: 'MDN SRI'
  },
  mixedContentExpanded: {
    title: 'Уберите HTTP и ws:// с HTTPS-страниц',
    text: 'Смешанный контент разрушает защиту TLS. Все ресурсы, включая WebSocket, должны использовать wss:// и https://.',
    link: 'https://developer.mozilla.org/ru/docs/Web/Security/Mixed_content',
    action: 'MDN Mixed Content'
  },
  hstsStrength: {
    title: 'Настройте сильный HSTS',
    text: 'Используйте max-age не менее 180 дней, includeSubDomains и preload для публичных доменов.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Strict-Transport-Security',
    action: 'MDN HSTS'
  },
  urlSecrets: {
    title: 'Не передавайте токены и пароли в URL',
    text: 'URL попадает в историю браузера, логи серверов, Referer и закладки. Используйте POST, Authorization header и HttpOnly cookie.',
    link: 'https://oauth.net/2/best-current-practices/',
    action: 'OAuth Best Practices'
  },
  storageSecrets: {
    title: 'Не храните секреты в localStorage/sessionStorage',
    text: 'Любой XSS может прочитать localStorage и sessionStorage. Токены лучше хранить в HttpOnly, Secure, SameSite cookie.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Cookies',
    action: 'MDN Cookies'
  },
  documentDomain: {
    title: 'Откажитесь от document.domain',
    text: 'document.domain — устаревший механизм ослабления same-origin policy. Используйте postMessage и современные isolation-механизмы.',
    link: 'https://developer.mozilla.org/ru/docs/Web/API/Document/domain',
    action: 'MDN document.domain'
  },
  referrerPolicy: {
    title: 'Установите строгую Referrer-Policy',
    text: 'Рекомендуемые значения: no-referrer, same-origin или strict-origin-when-cross-origin. Избегайте unsafe-url.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/Referrer-Policy',
    action: 'MDN Referrer-Policy'
  },
  xContentTypeOptions: {
    title: 'Включите X-Content-Type-Options: nosniff',
    text: 'Заголовок nosniff запрещает браузеру угадывать MIME-тип и снижает риск content-sniffing атак.',
    link: 'https://developer.mozilla.org/ru/docs/Web/HTTP/Headers/X-Content-Type-Options',
    action: 'MDN X-Content-Type-Options'
  },
  trustedTypes: {
    title: 'Внедрите Trusted Types',
    text: 'Trusted Types помогает предотвращать DOM XSS, запрещая передачу опасных строк в sink-функции вроде innerHTML.',
    link: 'https://developer.mozilla.org/ru/docs/Web/API/Trusted_Types_API',
    action: 'MDN Trusted Types'
  },
  domClobbering: {
    title: 'Избегайте опасных id и name',
    text: 'Элементы с id/name вроде location, document, top, parent, self, frames могут приводить к DOM Clobbering.',
    link: 'https://owasp.org/www-community/DOM_Clobbering',
    action: 'OWASP DOM Clobbering'
  },
  dynamicCode: {
    title: 'Уберите eval, new Function и строковые таймеры',
    text: 'Динамическое выполнение кода сильно расширяет поверхность XSS. Замените eval на безопасные парсеры.',
    link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/eval',
    action: 'MDN eval'
  },
  postMessageHygiene: {
    title: 'Всегда проверяйте origin в postMessage',
    text: 'Не используйте targetOrigin "*" без крайней необходимости. В обработчике message проверяйте event.origin.',
    link: 'https://developer.mozilla.org/ru/docs/Web/API/Window/postMessage',
    action: 'MDN postMessage'
  }
};

const CHECKS = [
  { id: 'driveby', name: 'Drive-by Download', sub: 'Скрытые загрузки', icon: 'download', weight: 1.2, category: 'classic', run: checkDriveBy },
  { id: 'browserExploit', name: 'Эксплойты браузера', sub: 'Chromium · WebKit · Gecko', icon: 'bug', weight: 1.5, category: 'classic', run: checkBrowserExploit },
  { id: 'plugins', name: 'Эксплойты плагинов', sub: 'Flash · Java · PDF', icon: 'plug', weight: 1.0, category: 'classic', run: checkPlugins },
  { id: 'xss', name: 'XSS', sub: 'Межсайтовый скриптинг', icon: 'code', weight: 1.1, category: 'classic', run: checkXSS },
  { id: 'csrf', name: 'CSRF', sub: 'Подделка запросов', icon: 'refresh', weight: 0.8, category: 'classic', run: checkCSRF },
  { id: 'clickjacking', name: 'Кликджекинг', sub: 'Подмена кликов', icon: 'cursor', weight: 0.9, category: 'classic', run: checkClickjacking },
  { id: 'phishing', name: 'Фишинг', sub: 'Поддельные страницы входа', icon: 'fish', weight: 1.2, category: 'social', run: checkPhishing },
  { id: 'spoofing', name: 'Спуфинг', sub: 'Адресная строка · SSL', icon: 'browserLock', weight: 1.0, category: 'network', run: checkSpoofing },
  { id: 'session', name: 'Session Hijacking', sub: 'Кража cookies и сессий', icon: 'cookie', weight: 1.2, category: 'classic', run: checkSession },
  { id: 'fingerprint', name: 'Fingerprinting', sub: 'Цифровой отпечаток', icon: 'fingerprint', weight: 0.7, category: 'privacy', run: checkFingerprint },
  { id: 'crypto', name: 'Криптоджекинг', sub: 'Скрытый майнинг', icon: 'cpu', weight: 1.0, category: 'modern', run: checkCrypto },
  { id: 'watering', name: 'Атака «Водопой»', sub: 'Заражённые ресурсы', icon: 'target', weight: 0.8, category: 'network', run: checkWateringHole },
  { id: 'scareware', name: 'Scareware', sub: 'Запугивание «лечением»', icon: 'alert', weight: 0.9, category: 'social', run: checkScareware },
  { id: 'bruteforce', name: 'Брутфорс', sub: 'Подбор паролей', icon: 'key', weight: 0.7, category: 'social', run: checkBruteforce },
  { id: 'botnet', name: 'Ботнет', sub: 'Устройство как прокси', icon: 'network', weight: 0.8, category: 'modern', run: checkBotnet },
  { id: 'typosquatting', name: 'Typosquatting', sub: 'Опечаточные домены', icon: 'type', weight: 1.1, category: 'social', run: checkTyposquatting },
  { id: 'tabnabbing', name: 'Tabnabbing', sub: 'Подмена неактивной вкладки', icon: 'tabs', weight: 0.8, category: 'social', run: checkTabnabbing },
  { id: 'reverseTabnabbing', name: 'Reverse Tabnabbing', sub: 'Перенаправление родителя', icon: 'tabBack', weight: 0.8, category: 'social', run: checkReverseTabnabbing },
  { id: 'sessionFixation', name: 'Session Fixation', sub: 'Навязывание сессии', icon: 'pin', weight: 1.0, category: 'classic', run: checkSessionFixation },
  { id: 'dnsSpoofing', name: 'DNS Spoofing', sub: 'Подмена DNS-записей', icon: 'globe', weight: 1.0, category: 'network', run: checkDNSSpoofing },
  { id: 'devtools', name: 'DevTools-атаки', sub: 'Консоль и self-XSS', icon: 'terminal', weight: 0.7, category: 'classic', run: checkDevTools },
  { id: 'uiRedressing', name: 'UI Redressing', sub: 'Подмена интерфейса', icon: 'layout', weight: 0.9, category: 'social', run: checkUIRedressing },
  { id: 'heapSpray', name: 'Heap Spraying', sub: 'Распыление в памяти', icon: 'layers', weight: 0.9, category: 'modern', run: checkHeapSpray },
  { id: 'mitm', name: 'Man-in-the-Middle', sub: 'Перехват трафика', icon: 'split', weight: 1.3, category: 'network', run: checkMITM },
  { id: 'aiPhishing', name: 'AI-фишинг', sub: 'Атаки с генеративным ИИ', icon: 'bot', weight: 1.2, category: 'social', run: checkAIPhishing },
  { id: 'v8Exploits', name: 'V8 / JIT-эксплойты', sub: 'Type confusion · UAF · RCE', icon: 'cpu', weight: 1.6, category: 'modern', run: checkV8Exploits },
  { id: 'wasmEscape', name: 'Wasm Sandbox Escape', sub: 'Выход из песочницы Wasm', icon: 'layers', weight: 1.4, category: 'modern', run: checkWasmEscape },
  { id: 'webgpuVulns', name: 'WebGPU / WebGL', sub: 'Уязвимости GPU-API', icon: 'layout', weight: 1.2, category: 'modern', run: checkWebGPUVulns },
  { id: 'devtoolsExtensions', name: 'DevTools и расширения', sub: 'Код вне песочницы', icon: 'terminal', weight: 1.1, category: 'modern', run: checkDevToolsExtensions },
  { id: 'cssInjection', name: 'CSS-инъекции', sub: 'Утечка данных через CSS', icon: 'globe', weight: 1.0, category: 'modern', run: checkCSSInjection },
  { id: 'storageAccessApi', name: 'Storage Access API', sub: 'Обход политики происхождения', icon: 'key', weight: 0.9, category: 'modern', run: checkStorageAccessAPI },

  { id: 'knownCVEs', name: 'Известные CVE браузера', sub: 'NVD · OSV · version matrix', icon: 'bug', weight: 1.7, category: 'modern', run: checkKnownCVEs },
  { id: 'crossOriginIsolation', name: 'Cross-Origin Isolation', sub: 'COOP · COEP · SAB', icon: 'layers', weight: 1.2, category: 'headers', run: checkCrossOriginIsolation },
  { id: 'permissionsPolicy', name: 'Permissions-Policy', sub: 'Камера · микрофон · USB · Bluetooth', icon: 'shieldCheck', weight: 1.1, category: 'headers', run: checkPermissionsPolicy },
  { id: 'cspStrength', name: 'Строгость CSP', sub: 'unsafe-inline · eval · object-src', icon: 'code', weight: 1.3, category: 'headers', run: checkCSPStrength },
  { id: 'sri', name: 'Subresource Integrity', sub: 'Защита внешних скриптов', icon: 'download', weight: 1.0, category: 'headers', run: checkSRI },
  { id: 'mixedContentExpanded', name: 'Mixed Content+', sub: 'HTTP · ws:// на HTTPS', icon: 'network', weight: 1.1, category: 'network', run: checkMixedContentExpanded },
  { id: 'hstsStrength', name: 'Сила HSTS', sub: 'max-age · includeSubDomains · preload', icon: 'browserLock', weight: 1.0, category: 'headers', run: checkHSTSStrength },
  { id: 'urlSecrets', name: 'Секреты в URL', sub: 'OAuth token · apikey · password', icon: 'key', weight: 1.2, category: 'privacy', run: checkURLSecrets },
  { id: 'storageSecrets', name: 'Секреты в Storage', sub: 'localStorage · sessionStorage', icon: 'cookie', weight: 1.0, category: 'privacy', run: checkStorageSecrets },
  { id: 'documentDomain', name: 'document.domain', sub: 'Устаревший same-origin', icon: 'browserLock', weight: 0.8, category: 'runtime', run: checkDocumentDomain },
  { id: 'referrerPolicy', name: 'Referrer-Policy', sub: 'Утечка URL', icon: 'external', weight: 0.7, category: 'headers', run: checkReferrerPolicy },
  { id: 'xContentTypeOptions', name: 'X-Content-Type-Options', sub: 'MIME sniffing', icon: 'alert', weight: 0.6, category: 'headers', run: checkXContentTypeOptions },
  { id: 'trustedTypes', name: 'Trusted Types', sub: 'DOM XSS mitigation', icon: 'shieldCheck', weight: 0.9, category: 'runtime', run: checkTrustedTypes },
  { id: 'domClobbering', name: 'DOM Clobbering', sub: 'Опасные id/name', icon: 'layout', weight: 0.8, category: 'runtime', run: checkDOMClobbering },
  { id: 'dynamicCode', name: 'Динамический код', sub: 'eval · Function · timers', icon: 'terminal', weight: 1.0, category: 'runtime', run: checkDynamicCode },
  { id: 'postMessageHygiene', name: 'postMessage hygiene', sub: 'origin · wildcard', icon: 'split', weight: 0.9, category: 'runtime', run: checkPostMessageHygiene }
];

const THREATS = CHECKS.map(c => ({
  icon: c.icon,
  name: c.name,
  level: c.weight >= 1.4 ? 'crit' : c.weight >= 1.0 ? 'high' : 'med',
  levelName: c.weight >= 1.4 ? 'Критическая' : c.weight >= 1.0 ? 'Высокая' : 'Средняя',
  text: `${c.sub} · ${CHECK_CATEGORIES[c.category] || ''}`
}));

const $ = sel => document.querySelector(sel);

const state = {
  running: false,
  lastResults: null
};

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

const STATUS_LABEL = {
  low: 'Низкий риск',
  med: 'Средний риск',
  high: 'Высокий риск'
};

const LOG_MARK = {
  low: '[OK]',
  med: '[!]',
  high: '[X]'
};

function verdictFor(v) {
  if (v < 15) return {
    t: 'Минимальный уровень уязвимости',
    d: 'Ваш браузер соответствует актуальным стандартам защиты. Продолжайте обновлять ПО и соблюдать цифровую гигиену.'
  };

  if (v < 35) return {
    t: 'Низкий уровень уязвимости',
    d: 'Базовая защита присутствует, но отдельные векторы атак остаются открытыми. Изучите рекомендации ниже.'
  };

  if (v < 55) return {
    t: 'Средний уровень уязвимости',
    d: 'Часть критичных механизмов защиты отсутствует или настроена неправильно. Примите меры в ближайшее время.'
  };

  if (v < 75) return {
    t: 'Высокий уровень уязвимости',
    d: 'Ваш браузер — удобная мишень для атак. Настоятельно выполните рекомендации из списка.'
  };

  return {
    t: 'Критический уровень уязвимости',
    d: 'Немедленно обновите браузер и примените все рекомендации. Работа в интернете в таком состоянии опасна.'
  };
}

function openModal() {
  document.body.classList.add('modal-open');
  $('#consentModal').classList.add('open');
  $('#consentBox').checked = false;
  $('#startScanBtn').disabled = true;
}

function closeModal() {
  document.body.classList.remove('modal-open');
  $('#consentModal').classList.remove('open');
}

async function fetchHeaders() {
  try {
    const res = await fetch(location.href, { method: 'HEAD', cache: 'no-store' });
    return res.headers;
  } catch (e) {
    return null;
  }
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

  log('Инициализация аудит-движка…', 'run');
  await sleep(300);

  log('Запрос заголовков безопасности (HEAD ' + esc(location.host || 'localhost') + ')…', 'dim');

  const headers = await fetchHeaders();

  log(
    headers ? 'Заголовки ответа получены' : 'Заголовки недоступны (CORS / file://) — режим частичной проверки',
    headers ? 'ok' : 'warn'
  );

  await sleep(350);

  const ctx = { headers };
  let done = 0;

  for (const meta of CHECKS) {
    log(`Проверка: ${esc(meta.name)}…`, 'run');

    let res;
    try {
      res = await meta.run(ctx);
    } catch (e) {
      res = {
        safety: 50,
        findings: ['Внутренняя ошибка проверки — оценка приблизительная'],
        confidence: 0.4
      };
    }

    const confidence = clamp(Number(res.confidence ?? 1), 0.2, 1);
    results[meta.id] = { ...res, confidence };

    const st = statusOf(res.safety);
    log(
      `${LOG_MARK[st]} ${esc(meta.name)}: ${STATUS_LABEL[st]} (риск ${100 - res.safety}%, достоверность ${Math.round(confidence * 100)}%)`,
      st === 'low' ? 'ok' : st === 'med' ? 'warn' : 'fail'
    );

    done++;
    setProgress(done, CHECKS.length);
    await sleep(120 + Math.random() * 180);
  }

  elScannerCard.classList.remove('scanning');
  elDot.className = 'status-dot complete';
  elStatusText.textContent = 'Аудит завершён';

  const seconds = ((performance.now() - start) / 1000).toFixed(1);
  log(`Готово за ${seconds} c · проверок: ${CHECKS.length}/${CHECKS.length}`, 'info');

  state.lastResults = results;

  renderResults(results);
  renderRecommendations(results);

  $('#resultsSection').hidden = false;
  $('#recsSection').hidden = false;

  setTimeout(() => $('#resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);

  state.running = false;
}

function renderResults(results) {
  let riskSum = 0;
  let wSum = 0;
  let confSum = 0;
  let confW = 0;
  let pass = 0;
  let warn = 0;
  let fail = 0;

  CHECKS.forEach(meta => {
    const r = results[meta.id];
    const risk = 100 - r.safety;
    const conf = r.confidence ?? 1;

    riskSum += risk * meta.weight * conf;
    wSum += meta.weight * conf;

    confSum += conf * meta.weight;
    confW += meta.weight;

    const st = statusOf(r.safety);
    if (st === 'low') pass++;
    else if (st === 'med') warn++;
    else fail++;
  });

  const vuln = Math.round(riskSum / wSum);
  const avgConf = Math.round((confSum / confW) * 100);
  const verdict = verdictFor(vuln);

  $('#resultsSub').textContent =
    `Отчёт сформирован локально · ${new Date().toLocaleString('ru-RU')} · проверок: ${CHECKS.length} · средняя достоверность: ${avgConf}%`;

  const R = 94;
  const C = 2 * Math.PI * R;
  const fill = $('#gaugeFill');

  fill.style.strokeDasharray = C;
  fill.style.strokeDashoffset = C;

  requestAnimationFrame(() => requestAnimationFrame(() => {
    fill.style.strokeDashoffset = C * (1 - vuln / 100);
  }));

  const numEl = $('#gaugeNum');
  const t0 = performance.now();
  const DUR = 1800;

  (function tick(now) {
    const p = Math.min((now - t0) / DUR, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    numEl.textContent = Math.round(vuln * eased) + '%';
    if (p < 1) requestAnimationFrame(tick);
  })(t0);

  $('#verdictTitle').textContent = verdict.t;
  $('#verdictText').textContent = verdict.d;

  $('#cntPass').textContent = pass;
  $('#cntWarn').textContent = warn;
  $('#cntFail').textContent = fail;

  const grid = $('#checksGrid');

  grid.innerHTML = CHECKS.map((meta, i) => {
    const r = results[meta.id];
    const st = statusOf(r.safety);
    const risk = 100 - r.safety;
    const conf = Math.round((r.confidence ?? 1) * 100);
    const items = r.findings.map(f => `<li>${esc(f)}</li>`).join('');
    const cat = CHECK_CATEGORIES[meta.category] || '';

    return `
      <article class="check-card st-${st}" data-category="${esc(meta.category)}" style="animation-delay:${i * 25}ms" tabindex="0" role="button" aria-expanded="false">
        <div class="check-top">
          <span class="check-ic">${icon(meta.icon)}</span>
          <div class="check-name">
            <b>${esc(meta.name)}</b>
            <small>${esc(meta.sub)} · ${esc(cat)}</small>
          </div>
          <span class="check-badge">${STATUS_LABEL[st]}</span>
        </div>

        <div class="check-details">
          <div class="check-details-inner">
            <div class="risk-row">
              <div class="risk-meter"><div class="risk-meter-fill" style="width:${risk}%"></div></div>
              <span class="risk-val mono">Риск ${risk}% · Достоверность ${conf}%</span>
            </div>
            <ul>${items}</ul>
          </div>
        </div>

        <span class="check-more">${icon('chevron')}</span>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.check-card').forEach(card => {
    const toggle = () => {
      const open = card.classList.toggle('open');
      card.setAttribute('aria-expanded', open);
    };

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
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

  const PRIO_LABEL = {
    crit: 'Критично',
    high: 'Важно',
    med: 'Рекомендуется'
  };

  const grid = $('#recsGrid');

  if (!items.length) {
    grid.innerHTML = `
      <article class="rec-card prio-ok">
        <div class="rec-head">
          <span class="rec-prio">Отличная работа</span>
          <span class="rec-ic">${icon('shieldCheck')}</span>
        </div>
        <h3>Все проверки пройдены</h3>
        <p>Существенных уязвимостей не обнаружено. Продолжайте обновлять браузер, используйте менеджер паролей и не отключайте встроенные механизмы защиты.</p>
        <a class="rec-link" href="https://www.kaspersky.ru/resource-center/preemptive-safety/top-10-internet-safety-rules" target="_blank" rel="noopener">
          Правила кибербезопасности ${icon('external', 'ic-xs')}
        </a>
      </article>
    `;
    return;
  }

  grid.innerHTML = items.map((rec, i) => `
    <article class="rec-card prio-${rec.prio}" style="animation-delay:${i * 40}ms">
      <div class="rec-head">
        <span class="rec-prio">${PRIO_LABEL[rec.prio]}</span>
        <span class="rec-ic">${icon(rec.icon)}</span>
      </div>
      <h3>${esc(rec.title)}</h3>
      <p>${esc(rec.text)}</p>
      <a class="rec-link" href="${rec.link}" target="_blank" rel="noopener">
        ${esc(rec.action)} ${icon('external', 'ic-xs')}
      </a>
    </article>
  `).join('');
}

function renderThreats() {
  $('#threatsGrid').innerHTML = THREATS.map((t, i) => `
    <article class="threat-card lv-${t.level} reveal" style="transition-delay:${(i % 5) * 60}ms">
      <div class="threat-top">
        <span class="threat-ic">${icon(t.icon)}</span>
        <span class="threat-lv">${t.levelName}</span>
      </div>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.text)}</p>
    </article>
  `).join('');
}

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function initFilters() {
  const buttons = document.querySelectorAll('[data-filter]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      document.querySelectorAll('.check-card').forEach(card => {
        if (filter === 'all') {
          card.hidden = false;
        } else {
          card.hidden = !card.classList.contains(`st-${filter}`);
        }
      });
    });
  });
}

function buildReport(results) {
  const info = getBrowserInfo();

  return {
    product: 'Цифровой Щит',
    version: '2026.10',
    generatedAt: new Date().toISOString(),
    userAgent: navigator.userAgent,
    browser: info,
    location: {
      protocol: location.protocol,
      hostname: location.hostname,
      pathname: location.pathname
    },
    checksCount: CHECKS.length,
    results
  };
}

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}

function exportJSON() {
  if (!state.lastResults) return;

  const report = buildReport(state.lastResults);
  downloadBlob(
    JSON.stringify(report, null, 2),
    `digital-shield-report-${Date.now()}.json`,
    'application/json'
  );
}

function exportMarkdown() {
  if (!state.lastResults) return;

  const report = buildReport(state.lastResults);
  let md = '# Отчёт Цифровой Щит\n\n';

  md += `- Дата: ${new Date(report.generatedAt).toLocaleString('ru-RU')}\n`;
  md += `- Проверок: ${report.checksCount}\n`;
  md += `- Браузер: ${report.browser.name} ${report.browser.version || ''}\n`;
  md += `- Движок: ${report.browser.engine}\n`;
  md += `- URL: ${location.href}\n\n`;
  md += '## Результаты\n\n';

  CHECKS.forEach(meta => {
    const r = report.results[meta.id];
    if (!r) return;

    const risk = 100 - r.safety;
    const st = statusOf(r.safety);

    md += `### ${meta.name}\n\n`;
    md += `- Категория: ${CHECK_CATEGORIES[meta.category] || ''}\n`;
    md += `- Статус: ${STATUS_LABEL[st]}\n`;
    md += `- Риск: ${risk}%\n`;
    md += `- Достоверность: ${Math.round((r.confidence ?? 1) * 100)}%\n`;
    md += `- Находки:\n`;

    r.findings.forEach(f => {
      md += `  - ${f}\n`;
    });

    md += '\n';
  });

  downloadBlob(md, `digital-shield-report-${Date.now()}.md`, 'text/markdown');
}

document.addEventListener('DOMContentLoaded', () => {
  elDot = $('#statusDot');
  elStatusText = $('#statusText');
  elProgress = $('#progressFill');
  elPercent = $('#progressPercent');
  elTerm = $('#terminalBody');
  elScannerCard = $('#scannerCard');

  $('#brandIcon').innerHTML = icon('shieldCheck');
  $('#heroIcon').innerHTML = icon('shieldCheck', 'ic-xl');
  $('#modalIcon').innerHTML = icon('shieldCheck', 'ic-lg');
  $('#modalClose').innerHTML = icon('chevron');
  $('#consentBoxVisual').innerHTML = icon('check');

  document.querySelectorAll('.modal-li-icon').forEach(el => {
    el.innerHTML = icon('check', 'ic-sm');
  });

  $('#aboutIcon1').innerHTML = icon('shieldCheck');
  $('#aboutIcon2').innerHTML = icon('terminal');
  $('#aboutIcon3').innerHTML = icon('cpu');

  renderThreats();
  initReveal();
  initFilters();

  $('#openConsentBtn').addEventListener('click', openModal);
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalCancel').addEventListener('click', closeModal);

  $('#consentModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  $('#consentBox').addEventListener('change', e => {
    $('#startScanBtn').disabled = !e.target.checked;
  });

  $('#startScanBtn').addEventListener('click', () => {
    closeModal();
    $('#scanner').scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(runAudit, 400);
  });

  $('#rerunBtn').addEventListener('click', runAudit);
  $('#exportJsonBtn').addEventListener('click', exportJSON);
  $('#exportMdBtn').addEventListener('click', exportMarkdown);
  $('#printBtn').addEventListener('click', () => window.print());

  log('Модуль аудита готов. Нажмите «Начать проверку».', 'dim');
});
