# Дослідження 02 — словник: токени, скорочення ДС, типографіка

Дата: 2026-10-16. Статус: **зібрано й перевірено, у застосунок ще не додано.**

## Висновок

- **43 must-have терміни**: 20 з типографіки (розширення категорії L) і 23 про токени,
  скорочення та одиниці (нова категорія M). Плюс 2 правки наявних записів (L-15, J-10)
  і 12 нових наборів для «Co jest co?».
- Кожен англійський термін підтверджено цитатою з першоджерела.
  Типографіка: 218 цитат, 0 розбіжностей. Токени: 237 перевірок, 197 ✅, 33 ⚠️, 7 ❌.
  Відкинуті позиції в таблиці не потрапили.
- **Польська.** Для типографіки офіційні відповідники є майже для всього базового
  (kursywa, podkreślenie, indeks górny, półpauza, podpis…). Для токенів і рівнів токенів
  офіційної польської **немає ні в кого**. Перекладено лише побутові слова: tło, motyw,
  tryb, zmienna, sukces / ostrzeżenie / błąd.
- **`bh` не існує** в жодному офіційному джерелі (Tailwind, Material, Primer, Atlassian,
  Carbon, Spectrum, DTCG, Style Dictionary, shadcn). Майже напевно мова про `bg`.
- **Caption** є в Material 2 і Apple, але **відсутній у Material 3**. Його роботу там
  виконує Label Medium/Small. Тому в командах його легко згубити.
- Найбільша пастка розділу — **однакові назви з різним змістом**: Headline (три значення),
  Title (порядок перевертається між Apple і M3), `md` (у Material це «Material Design»,
  а не medium), Label (роль тексту, компонент і підпис поля).

> Колонка «Що це» — короткий переказ. Перед перенесенням у застосунок кожне значення
> й назву токена звіряти з `docs/research-02-sources/*-en.md` (статус ✅ або ⚠️).

## Як перевіряли

**Англійські терміни.** Сайти документації з контейнера недоступні, тому читали
**вихідні файли тих самих сторінок**: репозиторії MDN, Tailwind docs, специфікацію DTCG,
shadcn, Material (material-web, material-components, androidx), Primer, Carbon,
Microsoft Writing Style Guide, W3C CSS, Unicode CLDR, Figma plugin API, а також офіційні
npm-пакети з токенами (Atlassian, Carbon, Spectrum, Fluent, Material) і Apple HIG
у JSON. Посилання в таблицях ведуть на людську сторінку, яку цей файл генерує.

**Польські терміни.** Тільки офіційні польські локалізації інтерфейсів: LibreOffice,
VS Code (Microsoft), Firefox (Mozilla), Android, GNOME і Unicode CLDR.

| Позначка | Значення |
|---|---|
| ✅ | збігаються ≥ 2 незалежні вендори |
| ⚠️ | один вендор, або вендори розходяться, або інший сенс слова |
| — | офіційного польського немає. У польських командах такі терміни зазвичай кажуть англійською, але це спостереження без джерела |

**Що не вдалося перевірити:** словники PWN і Рада польської мови, польські правила
пробілів навколо тире, текстові пояснення з m3.material.io і Figma Help Center.
Ці місця позначені ⚠️.

---

## Частина 1 — Типографіка (must-have, розширення L)

### Ролі тексту

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| L-17 | **Text style** · type style | styl tekstu ⚠️ | Іменований набір властивостей тексту, який застосовують одним рухом. Apple: накреслення + кегль + інтерліньяж. Material: гарнітура + кегль + висота рядка + накреслення. У Figma — Text style. | [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/typography) · [Figma API](https://developers.figma.com/docs/plugins/api/TextNode) · [Material Web](https://github.com/material-components/material-web/blob/main/docs/theming/typography.md) |
| L-18 | **Heading (H1–H6)** · `<h1>`–`<h6>` | nagłówek ✅ | Семантичний рівень заголовка в HTML: за ним скрінрідер будує зміст сторінки. Рівень і вигляд — різні речі: клас `.h2` у Bootstrap робить будь-який текст схожим на H2. | [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) · [Bootstrap](https://getbootstrap.com/docs/5.3/content/typography/) |
| L-19 | **Headline** · M3 Headline L/M/S, Apple Headline | — | Одне слово, три значення. M3: великі заголовки 32/28/24 sp. Apple: один стиль 17 pt Semibold завбільшки з основний текст. M2: шість рівнів від 96 до 20 px. Перед обговоренням варто уточнити, чий саме Headline. | [Compose M3](https://developer.android.com/reference/kotlin/androidx/compose/material3/Typography) · [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/typography) · [MDC M2](https://github.com/material-components/material-components-web/blob/master/packages/mdc-typography/README.md) |
| L-20 | **Title** · Title 1–3 (Apple), Title L/M/S (M3) | tytuł ✅ (у локалізаціях — заголовок документа; роль Title ніхто не локалізує) | Заголовок середнього рівня. Порядок перевертається: в Apple Title (28–20 pt) більший за Headline, у M3 Title (22–14 sp) менший за Headline. | [Compose M3](https://developer.android.com/reference/kotlin/androidx/compose/material3/Typography) · [SwiftUI](https://developer.apple.com/documentation/swiftui/font/textstyle) |
| L-21 | **Body** · body text, Body L/M/S | treść / treść tekstu ✅ | Основний текст для читання. Єдина роль, яку всі системи називають однаково: M3 16/14/12 sp, Apple Body 17 pt. | [Compose M3](https://developer.android.com/reference/kotlin/androidx/compose/material3/Typography) · [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/typography) |
| L-22 | **Label (type role)** · Label L/M/S | etykieta ⚠️ | Найдрібніша роль M3 для тексту всередині компонентів: кнопки, таби, чипи. Label Large — текст кнопки. Відрізняється від B-03 (підпис поля форми) і від компонента Label в Apple. | [Compose M3](https://developer.android.com/reference/kotlin/androidx/compose/material3/Typography) · [Apple HIG Labels](https://developer.apple.com/design/human-interface-guidelines/labels) |
| L-23 | **Caption** · Caption 1/2 (Apple), `<figcaption>` | podpis ✅ (підпис до рисунка; роль Caption ніхто не локалізує) | Дрібний текст-пояснення до зображення, таблиці чи значення. M2 — 12 px. Apple: Caption 1 = 12 pt, Caption 2 = 11 pt. У M3 ролі Caption немає, її замінює Label Medium/Small. | [MDC M2](https://github.com/material-components/material-components-web/blob/master/packages/mdc-typography/README.md) · [SwiftUI](https://developer.apple.com/documentation/swiftui/font/textstyle) · [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption) |
| L-24 | **Overline** · (eyebrow — у жодному офіційному джерелі не знайдено) | — · nadkreślenie = лише лінія над текстом ⚠️ | Дрібний рядок великими літерами над заголовком: категорія, тип сторінки. Роль із M2: 12 px, uppercase. У M3 її замінює Label. Друге значення — CSS-лінія над текстом (`text-decoration: overline`). | [MDC M2](https://github.com/material-components/material-components-web/blob/master/packages/mdc-typography/README.md) · [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-line) |

### Регістр

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| L-15 ✎ | **Uppercase** — доповнити наявний запис | wielkie litery ✅ (wersaliki) | Додати: `text-transform` міняє лише відображення, текст у коді лишається як був. Microsoft радить не виділяти текст великими літерами. | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-transform) · [Microsoft](https://learn.microsoft.com/en-us/style-guide/capitalization) |
| L-25 | **Sentence case** · sentence-style capitalization | jak w zdaniu ⚠️ | Велика лише перша літера й власні назви: «Dodaj do koszyka». Microsoft вимагає його для заголовків і кнопок. | [Microsoft](https://learn.microsoft.com/en-us/style-guide/capitalization) · [Apple HIG Writing](https://developer.apple.com/design/human-interface-guidelines/writing) |
| L-26 | **Title case** · title-style capitalization | jak w nazwach własnych ✅ | Велика перша літера майже кожного слова: «Add to Cart». Apple вимагає його для кнопок і меню англійською. CSS `capitalize` — інше: він піднімає кожне слово й title case не створює. ⚠️ Польська орфографія в заголовках пише з великої лише перше слово — перевірити за PWN не вдалося. | [Microsoft](https://learn.microsoft.com/en-us/style-guide/capitalization) · [Apple HIG Buttons](https://developer.apple.com/design/human-interface-guidelines/buttons) · [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-transform) |

### Накреслення й оформлення

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| L-27 | **Italic** · `font-style: italic`; oblique | kursywa ✅ · oblique: pochylona ⚠️ | Окремо намальоване похиле накреслення, часто з рукописними формами. Oblique — просто нахилений прямий шрифт. Якщо курсиву у файлі немає, браузер нахиляє текст сам. | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-style) · [W3C Fonts 4](https://www.w3.org/TR/css-fonts-4/) |
| L-28 | **Underline** · offset, thickness, skip-ink | podkreślenie ✅ | Лінія під текстом. Відступ, товщина й розриви навколо виносних елементів налаштовуються окремо. В інтерфейсі підкреслення читається як посилання. | [MDN decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration-line) · [MDN underline-offset](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-underline-offset) |
| L-29 | **Strikethrough** · line-through, `<s>`, `<del>` | przekreślenie ✅ | Лінія через текст. `<s>` означає «вже неактуально», `<del>` — «видалено при редагуванні». Стара ціна — це `<s>`. ⚠️ Офіційні джерела ціни не згадують, це висновок із визначення `<s>`. | [MDN s](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/s) · [MDN del](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/del) |
| L-30 | **Superscript / subscript** · `<sup>`/`<sub>` | indeks górny / indeks dolny ✅ | Дрібніший текст над або під базовою лінією. Приклади застосування (®, примітка¹, m²) — мої, у джерелі їх немає ⚠️. Справжні гліфи шрифту (`font-variant-position`) виглядають краще за просто зменшений текст. | [MDN sup](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/sup) · [MDN font-variant-position](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-variant-position) |

### Шрифти

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| L-31 | **Monospace** · fixed-width, `ui-monospace` | o stałej szerokości ✅ | Шрифт, у якому всі знаки однакової ширини. Для артикулів, кодів, part number — символи стають у колонку. | [W3C Fonts 4](https://www.w3.org/TR/css-fonts-4/) · [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-family) |
| L-32 | **System font** · `system-ui`, native font stack | systemowa ⚠️ | Шрифт операційної системи. Інтерфейс виглядає «рідним», нічого не треба завантажувати. MDN: призначений для UI, для довгих текстів не годиться. | [W3C Fonts 4](https://www.w3.org/TR/css-fonts-4/) · [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/typography) |
| L-33 | **Font stack / fallback** · font-family list, generic family | — | Список шрифтів через кому: браузер бере перший доступний. В кінці стоїть загальне сімейство (`sans-serif`), щоб текст точно показався. | [MDN font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-family) · [MDN font-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/font-size-adjust) |

### Пунктуація

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| L-34 | **Hyphen / en dash / em dash** · - – — | łącznik ✅ · półpauza ✅ · pauza ✅ (myślnik) | Три різні знаки. Дефіс з'єднує слова (e-commerce). Коротке тире — діапазон (10–20 szt.). Довге тире — вставна думка. ⚠️ Правила Microsoft англійські; польські правила пробілів навколо тире з першоджерела не перевірено. | [Microsoft](https://learn.microsoft.com/en-us/style-guide/punctuation/dashes-hyphens/) · [Unicode](https://www.unicode.org/Public/UNIDATA/UnicodeData.txt) |
| L-35 | **Quotation marks „ ”** · curly vs straight, « » | cudzysłów ✅ | Польські лапки: нижня відкривальна, верхня закривальна — „tak”. Вкладені — « ». Microsoft для англійських онлайн-текстів допускає прямі лапки; для польської норма — CLDR. CSS `quotes: auto` бере лапки з атрибута `lang`. | [CLDR pl](https://github.com/unicode-org/cldr/blob/main/common/main/pl.xml) · [MDN quotes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/quotes) |
| L-36 | **Non-breaking space** · NBSP, U+00A0, `&nbsp;` | spacja nierozdzielająca ⚠️ | Пробіл, на якому рядок не розривається. Польський формат ціни за CLDR: `12 345,67 zł` — NBSP між тисячами і перед «zł», кома як десятковий роздільник. Чотирицифрові числа не групуються: `1234,50 zł`. | [CLDR pl](https://github.com/unicode-org/cldr/blob/main/common/main/pl.xml) · [Unicode](https://www.unicode.org/Public/UNIDATA/UnicodeData.txt) |

### Друга хвиля (nice-to-have, перевірено)

Display (—) · Lead (—) · Footnote (przypis dolny ⚠️) · CSS capitalize (kapitalizacja ⚠️) ·
Serif / sans-serif (szeryfowa / bezszeryfowa ✅) · Variable font (—) · Ligature (ligatury ✅) ·
OpenType features (cechy czcionki ✅) · Slashed zero (przekreślone zero ✅ — корисно для артикулів) ·
Cap height (—) · Ascender / descender (— ⚠️) · Paragraph spacing (odstęp międzyakapitowy ⚠️) ·
Hyphenation (dzielenie wyrazów ⚠️) · Balanced / pretty wrap (—) · Vertical trim (—) ·
Ellipsis character (wielokropek ✅) · Minus sign (minus ✅) · Dynamic Type (—) ·
Minimum text size (minimalny rozmiar czcionki ⚠️) · WCAG 1.4.12 text spacing (—).

---

## Частина 2 — Токени, скорочення, одиниці (must-have, нова категорія M)

Робоча назва категорії: **M · Tokeny i nazewnictwo** / **Токени й назви** ⚠️ (назва
категорії — моя пропозиція, термінологічним джерелом вона не є).

### Рівні й механіка токенів

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| M-01 | **Primitive token** · base, global, reference (M3 `ref`), palette | — | Сире значення без ролі: `md.ref.palette.secondary90 = #e8def8` (M3). Описує лише сам колір чи розмір. Назва рівня різниться: M3 — reference, Fluent і Spectrum — global, Primer, Atlassian і DTCG — base. | [Primer](https://primer.style/product/primitives/token-names/) · [DTCG Color](https://www.designtokens.org/TR/2025.10/color/) · [M3](https://m3.material.io/foundations/design-tokens/overview) |
| M-02 | **Semantic token** · system (M3 `sys`), alias (Fluent, Spectrum), functional (Primer) | — | Токен із роллю: `color.text.danger` (Atlassian), `fgColor-muted` (Primer). Посилається на примітив. Саме його ставлять у макеті, тоді темна тема й ребрендинг змінюються в одному місці. | [M3](https://m3.material.io/foundations/design-tokens/overview) · [Primer](https://primer.style/product/primitives/token-names/) · [Spectrum](https://spectrum.adobe.com/page/design-tokens) |
| M-03 | **Alias / reference** · `{color.blue.500}` | alias / odwołanie ⚠️ | Механізм, коли токен бере значення в іншого токена. У форматі DTCG записується у фігурних дужках. ⚠️ У Fluent, Spectrum і модулі кольору DTCG «alias» — це ще й назва семантичного рівня. | [DTCG Format 2025.10](https://www.designtokens.org/TR/2025.10/format/) · [Figma API](https://developers.figma.com/docs/plugins/api/Variable/) |
| M-04 | **Token naming anatomy** · namespace · category · property · variant · state · scale | — | Назва токена — це адреса з частин: `md.sys.color.on-secondary`, `--bgColor-accent-muted`. Знаючи частини, читаєш будь-який токен без документації. Кроки шкал теж називають по-різному: Carbon `$spacing-05`, Atlassian `space.200`, Tailwind `p-4`. | [Primer](https://primer.style/product/primitives/token-names/) · [Style Dictionary](https://styledictionary.com/info/tokens/) · [Carbon](https://carbondesignsystem.com/migrating/guide/design/) |
| J-10 ✎ | **Design token** — доповнити наявний запис | — | Додати: формат DTCG 2025.10 має статус Final Community Group Report від 28.10.2025 (це не W3C Recommendation). Поля `$value`, `$type`, `$description`. | [DTCG Format 2025.10](https://www.designtokens.org/TR/2025.10/format/) |

### Figma

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| M-05 | **Variable** · Figma variable | zmienna ✅ | Іменоване значення у Figma (колір, число, рядок, булеве), яке прив'язують до властивостей і перемикають режимами. Найближчий відповідник токена у Figma. | [Figma API](https://developers.figma.com/docs/plugins/api/Variable/) |
| M-06 | **Collection** · variable collection | — (kolekcja ⚠️ — інший сенс) | Група змінних у Figma зі спільним набором режимів, наприклад Primitives і Semantic. | [Figma API](https://developers.figma.com/docs/plugins/api/Variable/) |
| M-07 | **Mode vs Theme** · color mode, light / dark | tryb ✅ · motyw ✅ | Mode — колонка значень у колекції; приклади контекстів у DTCG: light / dark, mobile / tablet / desktop. Theme — увесь набір значень під бренд чи контекст. ⚠️ Чітке розмежування описане на сторінках, які не вдалося відкрити. | [DTCG Glossary](https://www.designtokens.org/glossary/) · [Figma API](https://developers.figma.com/docs/plugins/api/Variable/) |
| M-08 | **Style (Figma)** · color / text / effect style | styl ✅ | Збережений набір властивостей у Figma. Текстовий стиль тримає кілька значень разом (кегль, інтерліньяж, накреслення); змінна тримає одне значення, яке змінюється з режимом. ⚠️ Пояснення різниці — на сторінці Figma Help, недоступній для перевірки. | [Figma Help](https://help.figma.com/hc/en-us/articles/15871097384471-The-difference-between-variables-and-styles) |

### Скорочення в назвах

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| M-09 | **T-shirt scale** · xs sm md lg xl 2xl | bardzo mały / mały / średni / duży ⚠️ (лише як слова) | Шкала розмірів як на одязі. Брейкпоінти Tailwind: sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536 px. Та сама назва не означає те саме значення: md у Carbon — 672 px. | [Tailwind](https://tailwindcss.com/docs/responsive-design) · [Carbon](https://carbondesignsystem.com/elements/2x-grid/overview/) |
| M-10 | **md (Material namespace)** · md.ref / md.sys / md.comp | — | `md` на початку токена Material означає Material Design; з розміром medium він не пов'язаний. Далі йде рівень: ref (примітиви), sys (семантика), comp (компоненти). ⚠️ Розшифровка — зі структури токенів, текстове пояснення на недоступній сторінці. | [M3](https://m3.material.io/foundations/design-tokens/overview) · [Material Web](https://github.com/material-components/material-web/blob/main/docs/theming/typography.md) |
| M-11 | **bg / fg** · background, bgColor; foreground, `-foreground` | tło ✅ · pierwszy plan ⚠️ (VS Code; інші кажуть «kolor tekstu») | Пара «фон і те, що на ньому» (текст, іконка). shadcn: базовий токен керує поверхнею, `-foreground` — текстом та іконкою на ній. DTCG радить писати повністю `background`. | [shadcn](https://ui.shadcn.com/docs/theming) · [Primer](https://primer.style/product/primitives/token-names/) · [Tailwind](https://tailwindcss.com/docs/background-color) |
| M-12 | **On-color** · on-primary, on-surface, text-on-color | — | Колір вмісту поверх кольорової заливки: `on-primary` — текст на primary-кнопці. Тримає контраст, коли змінюється тема. | [M3](https://m3.material.io/foundations/design-tokens/overview) · [Carbon](https://carbondesignsystem.com/elements/color/tokens/) |
| M-13 | **Spacing shorthands** · p, px, py, pt, m, mx, my, mt | odstępy, marginesy ⚠️ (лише слова) | Скорочення утиліт Tailwind: p — padding, m — margin; x — ліво й право, y — верх і низ; t/r/b/l — окремі сторони. `px-4` — це не пікселі: горизонтальний padding 4 × 0.25 rem = 16 px. | [Tailwind padding](https://tailwindcss.com/docs/padding) · [Tailwind margin](https://tailwindcss.com/docs/margin) |
| M-14 | **Radius** · rounded, corner, border-radius | promień narożnika ⚠️ | Заокруглення кутів як токен: `rounded-md`, `--radius`, `md.sys.shape.corner.medium`. Одна назва — різні значення: medium у M3 12 px, у Primer 6 px, у Fluent 4 px. | [Tailwind](https://tailwindcss.com/docs/border-radius) · [M3](https://m3.material.io/foundations/design-tokens/overview) · [Primer](https://primer.style/product/primitives/) |

### Ролі кольору

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| M-15 | **Primary / secondary / tertiary** | — (główny / pomocniczy лише не про колір) | Ролі кольору за важливістю: primary — головні дії й акценти, secondary — менш помітні елементи, tertiary — контрастні акценти (M3). Відрізняються від ієрархії кнопок у A-01. | [M3](https://m3.material.io/foundations/design-tokens/overview) · [Carbon](https://carbondesignsystem.com/elements/color/tokens/) · [shadcn](https://ui.shadcn.com/docs/theming) |
| M-16 | **Accent / brand** · accent, brand | akcent ⚠️ / kolor wyróżnienia ⚠️ | Колір бренду чи виділення, і значення в різних системах різне. У shadcn accent — це поверхні hover, focus і active. В Atlassian accent-кольори не несуть сенсу, а brand підсилює бренд. Apple: «app accent color». | [shadcn](https://ui.shadcn.com/docs/theming) · [Atlassian](https://atlassian.design/components/tokens/all-tokens) · [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/color) |
| M-17 | **Neutral** · gray | neutralny ⚠️ | Сірі відтінки для тексту, рамок і фонів — найбільша частина палітри. | [Atlassian](https://atlassian.design/components/tokens/all-tokens) · [Fluent](https://fluent2.microsoft.design/design-tokens) |
| M-18 | **Surface / surface container** · layer (Carbon) | powierzchnia ⚠️ (інший сенс) | Поверхня, на якій лежить вміст: картка, панель, лист. У M3 є ролі від surface-container-lowest до surface-container-highest ⚠️ (пояснення ролей — на недоступній сторінці m3.material.io). | [M3](https://m3.material.io/foundations/design-tokens/overview) · [Carbon](https://carbondesignsystem.com/elements/color/tokens/) |
| M-19 | **Muted / subtle / emphasis** · subtlest, bold | — | Рівні насиченості в межах однієї ролі. Primer: `muted` — вторинний, слабший варіант (`--bgColor-accent-muted`), `emphasis` — сильніший (`bgColor-emphasis`). Primer прибрав subtle на користь muted, Atlassian лишив subtle / subtlest. | [Primer](https://primer.style/product/primitives/token-names/) · [Atlassian](https://atlassian.design/components/tokens/all-tokens) |
| M-20 | **Intent / status colors** · success, warning, danger / error, info | sukces / ostrzeżenie / błąd / informacje ✅ | Кольори стану. Одна роль має різні імена: danger, error, destructive, negative. | [Atlassian](https://atlassian.design/components/tokens/all-tokens) · [Carbon](https://carbondesignsystem.com/elements/color/tokens/) · [shadcn](https://ui.shadcn.com/docs/theming) |
| M-21 | **Color ramp** · shade scale, 50–950, tones 0–100 | paleta kolorów ⚠️ (лише «палітра») | Ряд відтінків одного кольору з числовими кроками: Tailwind 50–950, Carbon 10–100, M3 tone 0–100. Напрям протилежний: у Tailwind 50 — найсвітліший, у M3 tone 0 — чорний. | [Tailwind](https://tailwindcss.com/docs/colors) · [Carbon](https://carbondesignsystem.com/elements/color/overview/) · [DTCG Color](https://www.designtokens.org/TR/2025.10/color/) |

### Одиниці

| ID | EN · аліаси | PL | Що це | Джерело |
|---|---|---|---|---|
| M-22 | **px / pt / dp** · CSS pixel, Apple point, Android density-independent pixel | piksel ✅ · punkt ⚠️ · — | Логічні одиниці, незалежні від щільності екрана: на вебі px, в Apple pt, в Android dp. DTCG прямо пише, що відповідник px в Android — dp, в iOS — pt. Apple: один point дорівнює різній кількості фізичних пікселів залежно від екрана. | [DTCG Format](https://www.designtokens.org/TR/2025.10/format/) · [Apple HIG Images](https://developer.apple.com/design/human-interface-guidelines/images) · [Android](https://developer.android.com/training/multiscreen/screendensities) |
| M-23 | **rem vs em** · root em | — · em: firet ⚠️ | Відносні одиниці. rem рахується від кегля кореневого елемента (зазвичай 16 px). em у `font-size` рахується від кегля батьківського елемента, в інших властивостях — від власного кегля, тому вкладені em накопичуються. rem зберігає налаштування розміру шрифту користувача. DTCG: 1 rem в Android ≈ 16 sp. | [MDN length](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length) · [DTCG Format](https://www.designtokens.org/TR/2025.10/format/) |

### Друга хвиля (nice-to-have, перевірено)

Component token (—) · DTCG-поля `$value` / `$type` (—) · Inverse / outline (—) · sp (—) ·
Opacity (⚠️ «Nieprzezroczystość» у Microsoft і Firefox, «Przezroczystość» в Android і
LibreOffice — протилежний сенс, обирати свідомо) · Border (obramowanie ⚠️ / krawędź ⚠️) ·
Shadow vs elevation (cień ✅) · Motion tokens: duration, easing (czas trwania ⚠️) ·
Density: compact / standard / touch (zwarte / standardowe / dotykowe ⚠️ — Firefox).

---

## Частина 3 — нові набори для «Co jest co?»

| Набір | Що розрізняємо |
|---|---|
| M-01 ↔ M-02 | сире значення ↔ значення з роллю |
| M-03 ↔ M-02 | механізм посилання ↔ рівень токенів (у Fluent обидва звуться alias) |
| M-05 ↔ M-08 | змінна ↔ стиль у Figma |
| M-10 ↔ M-09 | `md` = Material Design ↔ `md` = medium |
| M-22 ↔ M-23 | абсолютні логічні одиниці ↔ відносні |
| M-11 ↔ M-12 | пара bg/fg ↔ колір поверх заливки |
| L-23 ↔ L-22 ↔ L-24 | Caption ↔ Label ↔ Overline |
| L-19 ↔ L-20 ↔ L-18 | Headline ↔ Title ↔ Heading |
| L-25 ↔ L-26 ↔ L-15 | Sentence case ↔ Title case ↔ Uppercase |
| L-22 ↔ B-03 | роль тексту Label ↔ підпис поля форми |
| L-31 ↔ L-14 | моноширинний шрифт ↔ табличні цифри: обидва ставлять числа в колонку, різними засобами |
| L-32 ↔ L-33 | системний шрифт ↔ стек запасних шрифтів |

Разом: 27 + 12 = 39 наборів.

---

## Частина 4 — не підтверджено, у словник не беремо

| Що | Чому |
|---|---|
| `bh` | немає в жодному офіційному джерелі; найімовірніше, описка `bg` |
| Eyebrow, kicker | 0 збігів у Material, Apple, Bootstrap, Tailwind, MDN, W3C, Figma API. Найближчий офіційний термін — Overline |
| Lede (написання) | Bootstrap пише `lead`, «lede» не трапляється ніде |
| Legibility vs readability | канонічне джерело — Google Fonts Knowledge, з контейнера недоступне |
| Польські правила тире, «twarda spacja» | словники PWN недоступні; «twarda spacja» не знайдено в жодній локалізації |
| Breakpoint польською | єдиний офіційний рядок «Punkt przerwania» — з налагоджувача коду, для CSS не годиться |

---

## Частина 5 — як додати в застосунок

Покроковий план, рішення D1–D13 і значення полів `pl` / `pe` для кожного ID — у
`docs/handoff-02-plan.md`, фаза 3.
