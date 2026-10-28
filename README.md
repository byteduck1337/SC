<p align="center">
  <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
    <path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10Z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
</p>

<h1 align="center">Цифровой Щит</h1>

<p align="center">
  <strong>Локальный аудит безопасности браузера</strong><br>
  31 вектор атак · аудит-движок 2026 · 100% клиентский режим
</p>

<p align="center">
  <img src="https://img.shields.io/badge/режим-локально-ffffff?style=flat-square&labelColor=000000" alt="Локально">
  <img src="https://img.shields.io/badge/проверок-31-ffffff?style=flat-square&labelColor=000000" alt="31 проверка">
  <img src="https://img.shields.io/badge/год-2026-ffffff?style=flat-square&labelColor=000000" alt="2026">
  <img src="https://img.shields.io/badge/данные-0_байт_на_сервер-ffffff?style=flat-square&labelColor=000000" alt="0 байт">
  <img src="https://img.shields.io/badge/стек-vanilla_JS-ffffff?style=flat-square&labelColor=000000" alt="Vanilla JS">
  <img src="https://img.shields.io/badge/лицензия-MIT-ffffff?style=flat-square&labelColor=000000" alt="MIT">
</p>

---

## О проекте

**Цифровой Щит** — это полностью клиентский инструмент эвристического аудита безопасности браузера. Проверка выполняется исключительно в вашем браузере: ни один байт данных не покидает устройство. Проект создан в образовательных целях для повышения киберграмотности и не является заменой профессионального пентеста.

Аудит-движок анализирует 31 вектор атак — от классических XSS, CSRF и фишинга до современных V8/JIT-эксплойтов, Wasm Sandbox Escape, WebGPU-уязвимостей, AI-фишинга и CSS-инъекций. По результатам формируется персональный план усиления защиты, отсортированный по приоритету.

> Проект актуализирован с учётом уязвимостей 2026 года: CVE-2026-85046, CVE-2026-87491, CVE-2026-106341, CVE-2026-11015, CVE-2026-22165, CVE-2026-19137, CVE-2026-113186, CVE-2026-106331, CVE-2026-87550, CVE-2026-79234, CVE-2026-79005.

---

## Возможности

<table>
  <tr>
    <td width="33%" align="center" valign="top">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
        <rect x="5" y="5" width="14" height="14" rx="2"/>
        <rect x="9.5" y="9.5" width="5" height="5"/>
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>
      </svg>
      <h4>Движок и среда</h4>
      <p>Анализ User-Agent, версии браузера, движка (Chromium / WebKit / Gecko), GPU-информации, WebAssembly и WebGPU.</p>
    </td>
    <td width="33%" align="center" valign="top">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 9h20"/>
        <path d="M5.5 6.5h.01M8.5 6.5h.01"/>
        <rect x="10" y="13" width="6" height="4.5" rx="1"/>
        <path d="M11.5 13v-1a1.5 1.5 0 0 1 3 0v1"/>
      </svg>
      <h4>Заголовки и cookies</h4>
      <p>Проверка CSP, X-Frame-Options, HSTS, COOP, COEP, SameSite, HttpOnly, Secure и других заголовков безопасности.</p>
    </td>
    <td width="33%" align="center" valign="top">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/>
      </svg>
      <h4>Современные угрозы</h4>
      <p>Детекция V8/JIT-эксплойтов, Wasm sandbox escape, WebGPU UAF, Storage Access API и уязвимостей расширений.</p>
    </td>
  </tr>
  <tr>
    <td width="33%" align="center" valign="top">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
        <path d="M16 3h5v5"/>
        <path d="M8 3H3v5"/>
        <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"/>
        <path d="m15 9 6-6"/>
      </svg>
      <h4>Сетевая безопасность</h4>
      <p>MITM, DNS-spoofing, mixed-content, SSL-stripping, оценка TLS-конфигурации и HSTS.</p>
    </td>
    <td width="33%" align="center" valign="top">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
        <path d="M6.5 12c1-3.5 5-6 8.5-6 3.6 0 6.1 2.5 7 6-.9 3.5-3.4 6-7 6s-7.5-2.5-8.5-6Z"/>
        <path d="M18 12v.5"/>
        <path d="M16 17.9a9.8 9.8 0 0 1 0-11.8"/>
      </svg>
      <h4>Социальная инженерия</h4>
      <p>Детекция фишинга, AI-фишинга, scareware, typosquatting, tabnabbing и UI redressing.</p>
    </td>
    <td width="33%" align="center" valign="top">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:#ffffff">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
      <h4>Приватность</h4>
      <p>Fingerprinting-анализ (canvas, screen, timezone, CPU), проверка Do Not Track, Client Hints.</p>
    </td>
  </tr>
</table>

---

## Проверяемые угрозы

Проект охватывает **31 вектор атак**, разделённых на несколько категорий:

### Классические веб-уязвимости
- Drive-by Download
- Эксплойты браузера (Chromium, WebKit, Gecko)
- Эксплойты плагинов (Flash, Java, PDF)
- XSS, CSRF, кликджекинг
- Session Hijacking, Session Fixation
- UI Redressing, Heap Spraying

### Сетевые атаки
- Man-in-the-Middle
- DNS Spoofing
- Спуфинг SSL-сертификатов
- Атака «Водопой»

### Фишинг и социальная инженерия
- Классический фишинг
- AI-фишинг (генеративные модели)
- Scareware
- Typosquatting
- Tabnabbing, Reverse Tabnabbing

### Современные угрозы 2026
- V8 / JIT-эксплойты (type confusion, use-after-free)
- Wasm Sandbox Escape
- WebGPU / WebGL уязвимости
- Уязвимости расширений и DevTools
- CSS-инъекции (Universal CSS Injection)
- Storage Access API bypass

### Приватность и телеметрия
- Fingerprinting
- Криптоджекинг
- Ботнет-активность
- Брутфорс форм входа
- DevTools-атаки (Self-XSS)

---

## Технологии

- **HTML5** — семантическая разметка, доступность (ARIA)
- **CSS3** — кастомные свойства, `backdrop-filter`, CSS Grid, адаптивная вёрстка
- **Vanilla JavaScript (ES2022+)** — без фреймворков и сборщиков
- **Web APIs** — Canvas, WebGL, WebGPU, WebAssembly, Permissions API, Service Worker, Storage Access API, Client Hints

---

## Структура проекта

```text
.
├── index.html       # Разметка и структура интерфейса
├── style.css        # Стили, анимации, адаптивность
├── script.js        # Аудит-движок, 31 проверка, UI-логика
└── README.md        # Документация проекта

```
Проект не использует сборщики, npm-зависимости или внешние CDN. Достаточно открыть index.html в современном браузере двойным кликом.
Как это работает

    Согласие пользователя — перед запуском отображается модальное окно с перечнем проверяемых компонентов.
    Инициализация — движок запрашивает заголовки страницы через HEAD-запрос.
    Последовательный аудит — 31 проверка выполняется одна за другой, каждая возвращает оценку безопасности (0–100) и список находок.
    Агрегация — результаты взвешиваются по важности каждого вектора, вычисляется общий процент уязвимости.
    Визуализация — отображается круговой индикатор, карточки проверок с детализацией и персональный план рекомендаций.

Все вычисления происходят в браузере. Никакие данные (User-Agent, cookies, заголовки, DOM) не передаются на внешние серверы.
Совместимость

    Google Chrome 120+
    Microsoft Edge 120+
    Mozilla Firefox 120+
    Safari 17+
    Brave, Vivaldi, Opera (на базе Chromium)

Для корректной работы требуются современные Web API: navigator.permissions, WebAssembly, WebGPU (опционально), Storage Access API.
Лицензия
Проект распространяется под лицензией MIT. См. файл LICENSE для подробностей.
Отказ от ответственности
Цифровой Щит — образовательный проект. Он выполняет эвристический аудит и не является профессиональным инструментом пентеста. Результаты носят ознакомительный характер и не гарантируют полную безопасность. Для критичных задач используйте специализированные решения: OWASP ZAP, Burp Suite, Mozilla Observatory, Qualys SSL Labs.
<p align="center">
  <sub>Сделано в образовательных целях · 2026</sub>
</p>
