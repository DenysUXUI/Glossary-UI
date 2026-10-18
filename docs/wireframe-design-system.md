# Wireframe DS · v1

Дизайн-система для початкових вайрфреймів. Дзеркало дизайн-системи «Katalog UI · v3»: та сама типографіка, сітка відступів, радіуси, тіні, рух і набір компонентів. Колір замінено шкалою сірого від білого `#FFFFFF` до чорного `#000000`. Поверх дзеркала додано шар, потрібний тільки вайрфрейму: полотно, кадри екранів, плейсхолдери, анотації, стрілки флоу.

Документ самодостатній. Він містить правила, токени, компоненти, повний CSS, шаблон HTML-файлу, робочий процес і чек-ліст. Інших файлів для побудови вайрфрейму не потрібно.

Версія 1 · жовтень 2026. Джерело правди — блок CSS у розділі 8. Таблиці описують ті самі значення.

---

## Зміст

0. Як користуватися цим документом
1. Що вирішує вайрфрейм
2. Правила
3. Токени
4. Компоненти (дзеркало v3)
5. Компоненти, додані для вайрфреймів
6. Шар вайрфрейму: полотно, кадри, плейсхолдери, анотації, флоу
7. Іконки
8. CSS — повний блок
9. Шаблон HTML-файлу
10. Робочий процес
11. Чек-ліст перед передачею
12. Відповідність у Figma
13. Відомі обмеження й відкриті питання
14. Стартовий промпт для нової сесії

---

## 0. Як користуватися цим документом

**Для Claude в новій сесії.** Тебе попросять побудувати вайрфрейм екрана або флоу. Порядок такий:

1. Прочитай розділи 1–6, щоб знати правила й компоненти.
2. Пройди робочий процес із розділу 10: ціль, сценарій, список екранів.
3. Збери один HTML-файл за шаблоном із розділу 9. CSS із розділу 8 встав у `<style>` повністю, без змін.
4. Для розкладки конкретного екрана можна дописати CSS нижче блоку. Значення в ньому беруться тільки з токенів, класи мають префікс `w-`.
5. Перед передачею пройди чек-ліст із розділу 11.

**Для дизайнера.** Розділ 12 описує, як ті самі токени й компоненти назвати в Figma, щоб вайрфрейм із коду й макет у Figma говорили однією мовою. Візуальний зразок системи — `wireframe-ds-specimen.html` поруч із цим файлом: e-commerce флоу на 8 кадрів і галерея компонентів, зібрані з CSS розділу 8.

---

## 1. Що вирішує вайрфрейм

Вайрфрейм у цій системі має низьку й середню деталізацію (low–mid fidelity). Його завдання — домовитися про структуру до того, як почнеться візуальний дизайн.

| Вайрфрейм вирішує | Вайрфрейм залишає на потім |
|---|---|
| Які екрани є і як між ними переходити | Кольори бренду й акцентів |
| Що на екрані головне, що другорядне | Фотографії, ілюстрації, іконографію бренду |
| Порядок блоків і їх приблизний розмір | Точний тон і стиль текстів |
| Які дії доступні і яка з них головна | Мікроанімації та переходи |
| Стани: порожньо, помилка, завантаження, успіх | Пікселі: кінцеві відступи й розміри можуть змінитися |
| Чернетку реального тексту для заголовків, кнопок, помилок | Остаточну редактуру |

Шрифт IBM Plex Sans нейтральний і лишається в усіх вайрфреймах. Бренд-шрифт з'являється на етапі візуального дизайну.

---

## 2. Правила

Перші шість правил дзеркальні до v3. Правила 7–12 стосуються тільки вайрфреймів.

1. **Компоненти беруть значення тільки з токенів.** Нових hex, px-розмірів шрифту чи тривалостей у компонентах немає. Виняток — геометрія, яка не повторюється (ширина колонки назви, розмір іконки, мінімальна ширина плитки в сітці).
2. **Один компонент на роль.** Перш ніж додати клас, перевір таблиці компонентів у розділах 4–6.
3. **Префікс `w-`** у кожного класу системи і кожного класу, дописаного під конкретний екран. Префікс захищає від конфліктів із чужою розміткою (у v3 клас `.done` без префікса обривав сесію).
4. **Примітиви `--g-*` у компонентах не пишуться.** Компонент бере семантичний токен (`--text`, `--surface`, `--border-strong` …). Примітиви живуть тільки в `:root`.
5. **Hover тільки в `@media (hover:hover) and (pointer:fine)`**, для дотику є `:active`. На iOS перший тап по елементу з `:hover` віддає hover і кнопку доводиться тапати вдруге.
6. **Глибина дається тінню й фоном.** Рамка лишається там, де вона несе зміст: межа поля вводу, вимкнений стан (пунктир), роздільники в списках, статус помилки.
7. **Тільки шкала сірого.** Жодного відтінку в усьому файлі. Сенс передають світлота, товщина лінії, форма, іконка й текст.
8. **Найтемніше на екрані — головна дія.** На екрані одна кнопка `w-btn--primary`. Перевірка: примруж очі, і першою має читатися головна дія.
9. **Статус завжди має іконку й текст.** Лінія чи штрихування підсилюють, носієм сенсу вони не бувають.
10. **Реальний текст у заголовках, кнопках, мітках і помилках**, мовою продукту (зазвичай польською). Довгі описи — сірими рядками `w-lines`. Lorem ipsum заборонений: він ховає проблеми довжини тексту.
11. **Зображення — тільки плейсхолдер `w-img`** із підписом, що там буде («Zdjęcie produktu»). Плейсхолдер одразу показує, що це заглушка.
12. **Анотації живуть поза інтерфейсом.** Маркер із номером на елементі, пояснення в легенді праворуч від кадру. Анотації можна сховати одним класом на полотні.

---

## 3. Токени

### 3.1 Шкала сірого (примітиви)

13 кроків від білого до чорного, усі нейтральні (R = G = B). У компонентах не використовуються напряму.

| Токен | Значення | Контраст з білим | Контраст з `--g-900` | Семантичні ролі |
|---|---|---|---|---|
| `--g-0` | `#FFFFFF` | 1.00 | 17.4 | `--surface`, `--on-accent`, `--danger-soft` |
| `--g-50` | `#F7F7F7` | 1.07 | 16.3 | `--surface-sunken` |
| `--g-100` | `#F2F2F2` | 1.12 | 15.6 | `--bg` |
| `--g-150` | `#EBEBEB` | 1.19 | 14.6 | `--surface-muted`, `--divider`, `--warn-soft`, `--ph-fill` |
| `--g-200` | `#E0E0E0` | 1.32 | 13.2 | `--accent-soft`, `--track`, `--ph-text`, `--canvas` |
| `--g-300` | `#CCCCCC` | 1.61 | 10.8 | `--border`, `--accent-soft-hover`, `--dot`, лінії штрихування |
| `--g-400` | `#A3A3A3` | 2.52 | 6.9 | `--data-1`, `--ph-line` |
| `--g-500` | `#858585` | 3.69 | 4.7 | `--border-strong`, `--warn-border`, `--data-0` |
| `--g-600` | `#6B6B6B` | 5.33 | 3.3 | `--text-3`, `--data-2` |
| `--g-700` | `#595959` | 7.00 | 2.5 | `--text-2`, `--code` |
| `--g-800` | `#3D3D3D` | 10.86 | 1.6 | `--accent-hover`, `--warn` |
| `--g-900` | `#1A1A1A` | 17.40 | — | `--text`, `--accent`, `--danger`, `--data-3`, `--anno` |
| `--g-1000` | `#000000` | 21.00 | 1.2 | резерв, у компонентах не задіяний |

Чистий чорний `#000` лишається в шкалі як крайня точка. Текст і головна дія стоять на `#1A1A1A`: на білому він дає 17.4:1 і менше рябить у дрібному тексті.

### 3.2 Семантичні токени

Назви збігаються з v3, тому компонент переноситься між системами без перейменування.

| Токен | Примітив | Роль | Контраст | У v3 було |
|---|---|---|---|---|
| `--bg` | `--g-100` | тло екрана | — | `#F3F4F1` |
| `--surface` | `--g-0` | картки, поля, таб-бар | — | `#FFFFFF` |
| `--surface-sunken` | `--g-50` | лунка, вставка, натиск | — | `#F5F7F4` |
| `--surface-muted` | `--g-150` | доріжка сегмента, нейтральний тег, вимкнена кнопка | — | `#EEF1EE` |
| `--text` | `--g-900` | основний текст | 15.6:1 на `--bg` | `#15191B` |
| `--text-2` | `--g-700` | другорядний текст | 7.0 на білому · 6.3 на `--bg` · 5.9 на `--surface-muted` | `#5A635E` |
| `--text-3` | `--g-600` | placeholder у полі | 5.3:1 на білому | `#6B756F` |
| `--border` | `--g-300` | межа вторинної кнопки | декоративна | `#D3D8D3` |
| `--border-strong` | `--g-500` | межа поля й чекбокса | 3.7:1 на білому, 3.3:1 на `--bg` (WCAG 1.4.11) | `#868F8A` |
| `--divider` | `--g-150` | роздільники в картках | декоративна | `#E8EBE7` |
| `--accent` | `--g-900` | primary, вибраний стан | 17.4:1 з білим | `#0B5C43` |
| `--accent-hover` | `--g-800` | hover / натиск primary | 10.9:1 з білим | `#094D38` |
| `--accent-soft` | `--g-200` | м'який акцент: іконка рядка, тег, поле «ok» | текст на ньому 13.2:1 | `#E6F0EA` |
| `--accent-soft-hover` | `--g-300` | hover м'якого акценту | текст на ньому 10.8:1 | `#D7E9E0` |
| `--on-accent` | `--g-0` | текст на акценті | — | `#FFFFFF` |
| `--code` | `--g-700` | коди, артикули, номери (разом із `--mono`) | 7.0:1 на білому | `#8A6516` |
| `--danger` · `-soft` · `-text` | `--g-900` · `--g-0` · `--g-900` | помилка, руйнівна дія | 17.4:1 | червоні |
| `--success-text` | `--g-900` | текст стану «ok» | 13.2:1 на `--accent-soft` | `#0A4433` |
| `--warn` · `-soft` · `-border` · `-strong` | `--g-800` · `--g-150` · `--g-500` · `--g-900` | попередження | 9.1:1 | жовті |
| `--hatch` | лінії `--g-300` | штрихування: помилка, TBD | декоративне | — |
| `--bw-status` | 2px | товщина лінії помилки | — | — |
| `--scrim` | `rgba(0,0,0,.4)` | затемнення під модальним вікном | — | — |

### 3.3 Статуси без кольору

У v3 статус розрізнявся відтінком (зелений, червоний, жовтий). Тут кожен статус має власну комбінацію лінії, фону й іконки. Іконка й текст обов'язкові завжди.

| Статус | Лінія | Фон | Іконка | Текст | Приклад |
|---|---|---|---|---|---|
| Звичайний | 1px `--border-strong` | `--surface` | — | — | поле до вводу |
| Фокус | 1px `--accent` + зовнішнє кільце 1px | `--surface` | — | — | поле в фокусі |
| Успіх `.ok` | 1px `--accent` | `--accent-soft` (суцільна сіра заливка) | `check` | «Kod rabatowy przyjęty» | поле, плитка |
| Помилка `.no` | 2px `--danger` | `--danger-soft` + `--hatch` (штрихування) | `alert` | «Podaj kod pocztowy w formacie 00-000» | поле, плитка, банер |
| Попередження | 1px `--warn-border` | `--warn-soft` | `alert` | «Zostały 3 sztuki» | банер |
| Інформація | 1px `--divider` | `--surface-sunken` | `info` | «Dostawa w 24 h» | банер |
| Вимкнено | пунктир `--border` або без лінії | прозорий / `--surface-muted` | — | `--text-2` | рядок, кнопка |
| Не вирішено (TBD) | 1px `--text` | `--hatch` | — | «TBD» моно | будь-де |

Штрихування має два значення: «помилка» на полі, плитці чи банері і «не вирішено» на мітці TBD. Їх розводить текст: помилка завжди має повідомлення, TBD завжди має напис «TBD».

### 3.4 Шкала даних

Заміна рівнів засвоєння `--lv-*` з v3. Для смужок, сегментів, крапок і простих графіків. Порядок від порожнього до повного.

| Токен | Примітив | Як показується |
|---|---|---|
| `--track` | `--g-200` | доріжка, «нічого ще немає» |
| `--data-0` | `--g-500` | тільки кільце 1.5px без заливки («нове», «не почато») |
| `--data-1` | `--g-400` | заливка, перший рівень |
| `--data-2` | `--g-600` | заливка, другий рівень |
| `--data-3` | `--g-900` | заливка, повний рівень |

Сусідні рівні мають 1.9–3.3:1 (див. розділ 13). Тому сегменти в смужці розділяє біла лінія 1px, а кількість завжди стоїть поруч текстом.

### 3.5 Типографіка

Без змін відносно v3. IBM Plex Sans для тексту, IBM Plex Mono тільки для кодів (`A·01`), артикулів (`SKU 4711-22`), синонімів і номерів секцій. Ваги 400, 500, 600.

| Токен | Розмір | Де |
|---|---|---|
| `--fs-micro` | 11 | підпис таб-бару, мітка в `w-copy`, тег, маркер анотації |
| `--fs-caption` | 12 | коди, мета, підписи блоків, підпис кадру |
| `--fs-small` | 13 | другорядний текст, пігулки, підказки, мітки полів |
| `--fs-body` | 15 | основний текст |
| `--fs-lead` | 16 | назви рядків, поля вводу (менше 16 — iOS збільшує сторінку), ціна |
| `--fs-title` | 20 | назва секції, картки, підекрану |
| `--fs-display` | 28 | заголовок екрана `<h1>` |

Міжрядковий інтервал: `--lh-tight` 1.2 (заголовки) · `--lh-ui` 1.4 (рядки інтерфейсу) · `--lh-read` 1.55 (текст для читання).

Ціни й кількості — з `font-variant-numeric: tabular-nums`, щоб цифри в колонці стояли рівно. Польський формат ціни: `1 299,00 zł` (пробіл між тисячами, кома перед грошами, «zł» після числа).

### 3.6 Відступи, радіуси, тіні, рух, каркас

| Група | Токени |
|---|---|
| Відступи (сітка 4 px) | `--sp-1` 4 · `--sp-2` 8 · `--sp-3` 12 · `--sp-4` 16 · `--sp-5` 20 · `--sp-6` 24 · `--sp-8` 32 · `--sp-10` 40 |
| Радіуси | `--r-sm` 8 (теги, сегмент, чекбокс) · `--r-md` 12 (кнопки, поля, лунка, плейсхолдер) · `--r-lg` 16 (картки, аркуш) · `--r-full` (пігулки, аватар, маркер). Вкладений радіус = зовнішній − відступ між ними |
| Тіні | `--sh-1` картка · `--sh-2` модальне вікно, hover рядка, кадр на полотні · `--sh-thumb` бігунок сегмента. Тіні нейтральні: `rgba(0,0,0,…)` |
| Рух | `--dur-fast` .12s натиск · `--dur` .2s зміна стану · `--dur-slow` .32s прогрес · `--ease`. `prefers-reduced-motion` вимикає анімації |
| Каркас | `--tabbar-h` 64 · `--col` 560 (вузька колонка на десктопі) · `--page` 1180 (ширина контенту на десктопі) |
| Кадри | `--frame-m` 390 (мобільний, висота 844) · `--frame-d` 1280 (десктоп, висота 800) |

Бічний відступ екрана на мобільному — `--sp-4` (16 px).

---

## 4. Компоненти (дзеркало v3)

Кожен компонент v3 має пару тут. Компоненти, які у v3 були прив'язані до глосарію, узагальнені під будь-який продукт.

| v3 (`l-`) | Wireframe (`w-`) | Що змінилося |
|---|---|---|
| `.l-btn` | `.w-btn` | danger тепер відрізняється лінією 2px |
| `.l-row` | `.w-row` | — |
| `.l-card` · `.l-list` | `.w-card` · `.w-list` | додано `--pad` |
| `.l-tag` | `.w-tag` | додано `--solid` (промо-мітка) |
| `.l-field` | `.w-field` + `.w-fieldset` | додано видиму мітку, повідомлення, `select` |
| `.l-lang` | `.w-seg` | узагальнено до будь-якого сегмент-контролу, додано `--lg` |
| `.l-pl` | `.w-copy` | узагальнено: префікс + значення, тап копіює |
| `.l-chip` · `.l-chips` | `.w-chip` · `.w-chips` | — |
| `.l-progress` · `.l-bar` | `.w-progress` · `.w-bar` | сегменти розділені білою лінією |
| `.l-tabbar` | `.w-tabbar` | у кадрі, вибрана іконка товща |
| `.l-well` · `.l-stage` | `.w-well` · `.w-stage` | роль: зона чужого віджета |
| `.l-entry` | `.w-split` | картка «текст + медіа-зона» |
| `.l-pagehead` та ін. | `.w-pagehead`, `.w-eyebrow`, `.w-title`, `.w-h2`, `.w-sub` | — |
| `.l-sechead` | `.w-sechead` | — |
| `.l-label` · `.l-help` | `.w-label` · `.w-help` | — |
| `.l-desc` · `.l-note` · `.l-ex` | `.w-desc` · `.w-note` · `.w-callout` | — |
| `.l-i` | `.w-i` | — |
| `.l-toast` | `.w-toast` | у кадрі показується статично |
| `.l-storewarn` | `.w-banner` | додано `--error`, `--info` |
| `.l-catitem` + `.l-catbox` | `.w-check` + `.w-box` | додано радіо |
| `.l-act` | `.w-actpair` | — |
| `.l-sessbar` · `.l-quit` | `.w-topbar` · `.w-iconbtn` | — |
| `.l-optdemo` | `.w-choice` | плитка вибору (доставка, розмір, оплата) |
| `.l-done` | `.w-result` | — |
| `.l-stat` · `.l-cprow` | `.w-stat` · `.w-datarow` | — |
| `.l-masthead` · `.l-search` | `.w-masthead` · `.w-search` | — |
| `.l-empty` | `.w-empty` | — |
| `.l-hintbtn` | `.w-link` | — |
| палітра демо (`--ink`, `--pcb` …) | — | у вайрфреймі не потрібна |

### Кнопка · `.w-btn`

- **Призначення:** будь-яка дія.
- **Слоти:** іконка `.w-i` (опц.) + текст.
- **Варіанти:** `--primary` (головна дія, на екрані одна, чорна) · `--secondary` (рівноправна альтернатива, біла з тонкою межею) · `--ghost` (дія в шапці: «Gotowe», «Wyczyść») · `--danger` (руйнівна: «Usuń»; біла, межа 2px, іконка обов'язкова).
- **Розміри:** md 48 px (за замовчуванням) · `--sm` 36 px (інструменти, фільтри). `--block` розтягує на всю ширину.
- **Стани:** default · hover (тільки миша) · active · focus-visible (обвідка 2 px `--accent`) · disabled (`--surface-muted`, текст `--text-2`).
- **Доступність:** справжній `<button>`. Кнопка тільки з іконкою отримує `aria-label`.
- **Приклад:** `<button class="w-btn w-btn--primary w-btn--block">Dodaj do koszyka</button>`

### Рядок · `.w-row`

- **Призначення:** кнопка-картка зі вмістом: пункт меню, вхід у розділ, спосіб оплати, рядок налаштувань.
- **Слоти:** `.w-ico` (44 px; `--solid` для головного пункту, `--sm` 36 px) · `.w-row-txt` (`<b>` назва + `<small>` підпис) · `.w-num` (лічильник) або `.w-chev` (шеврон).
- **Стани:** default (тінь `--sh-1`) · hover (`--sh-2`) · active (`--surface-sunken`) · disabled (прозорий фон, пунктир, усе `--text-2`; підпис лишається читабельним, бо пояснює, коли пункт стане доступним).
- **Приклад:** `<button class="w-row"><span class="w-ico">…іконка…</span><span class="w-row-txt"><b>Moje zamówienia</b><small>2 w realizacji</small></span><svg class="w-i w-chev">…</svg></button>`

### Картка · `.w-card`

Біла площина, `--r-lg`, `--sh-1`. `--pad` додає внутрішній відступ 16. З `.w-list` стає контейнером списку з роздільниками (рядки `.w-check`, `.w-datarow`).

### Тег · `.w-tag`

- **Призначення:** стан, тип, коротка мітка («Nowość», «W magazynie», «Wysyłka 24 h»).
- **Варіанти:** нейтральний (сірий фон, `--text-2`) · `--accent` (темніший фон, `--text`) · `--solid` (чорний, для промо: «−20%») · `--dot` + `.w-lv0…3` (крапка рівня зі шкали даних; текст лишається `--text-2`, тож крапка не єдиний носій сенсу).

### Поле вводу · `.w-field` + `.w-fieldset`

- **Призначення:** текст, пошук, вибір зі списку.
- **Слоти:** `.w-fieldset` = `.w-fieldlabel` (видима мітка) + поле + `.w-fieldmsg` (підказка або помилка з іконкою). Обгортки: `.w-search` (іконка пошуку зліва), `.w-select` (шеврон справа).
- **Стани:** default (межа `--border-strong`, 3.7:1) · focus (межа + кільце `--accent`) · `.ok` (сіра заливка, межа `--accent`) · `.no` (межа 2px + штрихування + `.w-fieldmsg--no`) · disabled.
- **Доступність:** розмір шрифту 16 px (без автозуму iOS). Видима мітка пов'язана з полем через `for`/`id`. Поле без видимої мітки (пошук) отримує `aria-label`. Помилка пов'язана через `aria-describedby`, поле має `aria-invalid="true"`.
- **Приклад:**
  ```html
  <label class="w-fieldset">
    <span class="w-fieldlabel">Kod pocztowy</span>
    <input class="w-field no" value="0012" aria-invalid="true" aria-describedby="zip-err">
    <span class="w-fieldmsg w-fieldmsg--no" id="zip-err"><svg class="w-i">…alert…</svg>Podaj kod w formacie 00-000</span>
  </label>
  ```

### Сегмент-контрол · `.w-seg`

- **Призначення:** перемикач кількох рівноправних варіантів одного налаштування (вид «siatka / lista», мова, netto / brutto). `--lg` — на всю ширину, для вкладок контенту («Opis · Specyfikacja · Opinie»).
- **Стани:** вибраний — білий бігунок із `--sh-thumb`, текст `--text`. Невибраний — текст `--text-2`.
- **Доступність:** `role="group"` + `aria-label`, кнопки з `aria-pressed`. Для вкладок `--lg` — `role="tablist"` і `role="tab"` з `aria-selected`. Зона дотику 32×28 (мінімум WCAG 2.2 AA — 24×24).

### Значення з префіксом · `.w-copy`

Мітка-префікс + значення, тап копіює в буфер (тост «Skopiowano»). Для коду знижки, артикула, номера замовлення. Значення-код пишеться моно: `<span class="w-mono">`.
`aria-label` починається з видимого тексту: `aria-label="SKU 4711-22, skopiuj"` (WCAG 2.5.3).

### Пігулка · `.w-chip` · `.w-chips`

- **Призначення:** швидкий фільтр або перехід до секції.
- **Слоти:** назва + лічильник `<span>`.
- **Стани:** default · `.on` (чорна) · `.w-off` (недоступно: напівпрозора).
- **Адаптивність:** `.w-chips` скролиться горизонтально без смуги й виходить за поля екрана.

### Прогрес · `.w-progress` · `.w-bar`

`.w-progress` — один процес (крок оформлення, завантаження), `role="progressbar"` з `aria-valuenow`. `.w-bar` — розбивка на рівні зі шкали даних (`.w-bar-f3`, `-f2`, `-f1` у такому порядку), `role="img"` з текстовим описом в `aria-label`.

### Таб-бар · `.w-tabbar`

- **Призначення:** 3–5 головних розділів під великим пальцем («Start · Kategorie · Koszyk · Konto»).
- **Стани:** вибраний — `--accent`, вага 600, товща обвідка іконки, `aria-current="page"`.
- **Адаптивність:** висота 64, притиснутий до низу кадру. На десктопному кадрі таб-бар не ставиться: там навігація в шапці.
- **Лічильник:** `.w-badge` усередині кнопки (кількість у кошику).

### Лунка · `.w-well` · `.w-stage`

Крапкова сітка — впізнаваний прийом v3. У вайрфреймі це зона для вмісту, який система не малює: карта пунктів видачі, віджет платіжного оператора, конфігуратор, ілюстрація. Усередину кладеться підпис або `.w-img`. `.w-well` — нижня частина `.w-split` (на кадрі ≥ 820 px праворуч), `.w-stage` — самостійна вставка з радіусом.

### Картка «текст + медіа» · `.w-split`

Дзеркало запису каталогу v3. Зліва (або згори на мобільному) `.w-split-body` з текстом, праворуч `.w-well` або `.w-img`. Для блоку «перевага продукту», картки товару в списку на десктопі, банера категорії.

### Заголовки й текст

| Компонент | Що |
|---|---|
| `.w-pagehead` (`.w-eyebrow`, `.w-title`, `.w-sub`) | заголовок екрана, один `<h1>` на кадр |
| `.w-h2` | заголовок підекрану чи блоку, `<h2>` |
| `.w-sechead` (`.w-secnum`, `.w-sectitle`, `.w-secaside`) | заголовок секції в довгому списку |
| `.w-label` | підпис групи («Sposób dostawy») |
| `.w-help` | пояснення під блоком |
| `.w-desc` · `.w-note` | основний текст · дрібна примітка |
| `.w-callout` (`.w-callout-lab`) | вставка на сірому фоні з підписом |
| `.w-code` · `.w-mono` · `.w-alt` | код моно · будь-яке моно · синонім моно |
| `.w-count` | лічильник поруч із заголовком («248 produktów») |
| `.w-empty` | текст порожнього стану по центру |

### Інше

| Компонент | Що |
|---|---|
| `.w-i` | іконка: обвідка 1.8, колір від тексту, `aria-hidden="true"` |
| `.w-toast` | тост над таб-баром, `role="status"`. `--low` — без таб-бару |
| `.w-banner` | банер: попередження (default), `--error`, `--info`. Іконка + `<b>` заголовок + текст |
| `.w-check` + `.w-box` | рядок-чекбокс у списку. `.w-box--radio` — радіо. Стан `.on` |
| `.w-actpair` | дві рівноправні дії поруч (ліворуч головна) |
| `.w-topbar` + `.w-iconbtn` + `.w-topcount` | рядок сесії або кроку: ✕ · прогрес · лічильник |
| `.w-choices` + `.w-choice` | плитки вибору 2 в ряд. Стани `.on`, `.no` |
| `.w-result` (`.w-result-ico`) | екран результату: «Zamówienie przyjęte» |
| `.w-stats` + `.w-stat` | плитки з великим числом. На кадрі < 520 px — 2 в ряд |
| `.w-datarow` (`.w-dataname`, `.w-bar`, `.w-dataval`) | рядок «назва · смужка · значення» |
| `.w-masthead` | липка смуга під заголовком: пошук + пігулки |
| `.w-link` | текстова дія з підкресленням («Pokaż więcej») |

---

## 5. Компоненти, додані для вайрфреймів

У v3 їх не було, бо глосарію вони не потрібні. Для e-commerce вони потрібні майже на кожному екрані. Побудовані на тих самих токенах.

### Верхня панель · `.w-appbar`

- **Призначення:** шапка екрана на мобільному: назад · назва · дії.
- **Слоти:** `.w-iconbtn` ліворуч · `.w-appbar-title` · 1–2 `.w-iconbtn` праворуч (з `.w-badge` для кошика).
- **Варіанти:** `--sticky` (прилипає, лінія знизу).
- **Доступність:** кнопки-іконки з `aria-label` («Wróć», «Koszyk, 2 produkty»). Назва екрана в шапці — текст; `<h1>` лишається в `.w-pagehead` або сама назва стає `<h1>`, якщо `.w-pagehead` на екрані немає.

### Лічильник · `.w-badge`

Чорне коло з білою цифрою на кутку `.w-iconbtn` або кнопки таб-бару. Суцільне. Маркер анотації порожнистий — так їх не сплутати.

### Модальне вікно й аркуш · `.w-scrim` + `.w-dialog` / `.w-sheet`

- **Призначення:** `.w-sheet` — аркуш знизу на мобільному (фільтри, вибір варіанта). `.w-dialog` — підтвердження («Usunąć produkt z koszyka?»).
- **Слоти:** `.w-h2` · текст · `.w-actpair` або кнопки `--block`.
- **Доступність:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby` на заголовок. Фокус переходить усередину, Esc закриває.
- **У кадрі:** вікно показується відкритим поверх екрана. Кадр зі станом «відкрите вікно» підписується окремо.

### Лічильник кількості · `.w-stepper`

`−` · число · `+`. Кнопки 44×44. Мінімум — кнопка `−` вимкнена. `<output>` з `aria-live="polite"`, кнопки з `aria-label` («Zmniejsz ilość», «Zwiększ ilość»).

### Ціна · `.w-price`

`.w-price` (16, 600, табличні цифри) · `--lg` (20) · `.w-price-old` (стара ціна, перекреслена, `--text-2`) · `.w-price-unit` (підпис: «netto», «za szt.», «od 10 szt.»). Перекреслену ціну зчитувачі екрана не озвучують як стару, тому поруч додається `<span class="w-sr">Poprzednia cena:</span>`.

### Панель головної дії · `.w-ctabar`

Біла смуга, притиснута до низу кадру: ціна + головна кнопка («Do kasy»). `--above-tabbar` ставить її над таб-баром. На екрані з `.w-ctabar` інших `--primary` немає.

### Розкладка

| Клас | Що |
|---|---|
| `.w-screen` | вміст кадру з бічним відступом 16. `--tabbar` додає місце під таб-бар, `--cta` під `.w-ctabar` |
| `.w-stack` · `--lg` | вертикальний стек з проміжком 12 · 24 |
| `.w-hstack` | рядок з проміжком 8 |
| `.w-spread` | рядок «ліворуч · праворуч» |
| `.w-grid` | сітка плиток, мінімум 160 px (на 390 — дві колонки) |
| `.w-sr` | текст тільки для зчитувача екрана |

---

## 6. Шар вайрфрейму

### Полотно · `.w-board`

Сіре тло (`--canvas`) під кадрами, як полотно у Figma. Угорі — `.w-pagehead` з назвою проєкту, версією й датою; під ним блок припущень. `.w-board--clean` ховає всі анотації (для показу без пояснень).

### Кадр · `.w-shot` + `.w-frame`

- `.w-shot` = підпис `.w-shot-label` + кадр.
- Підпис: `<b>01 · Koszyk</b> 390 · pusty` — номер, назва екрана, ширина, стан.
- `.w-frame` — 390×844 (мобільний). `--d` — 1280×800 (десктоп). `--fit` — висота за вмістом (фрагмент, компонент, довгий скрол).
- Кадр має `container-type: inline-size`. Адаптивні правила компонентів спрацьовують від ширини кадру через `@container`, тому мобільний і десктопний кадри стоять на одному полотні й кожен поводиться по-своєму.
- Нумерація стану: `02` — основний, `02a`, `02b` — його стани (порожньо, помилка, завантаження).

### Флоу · `.w-flow` + `.w-step`

Ряд кадрів зліва направо. Між кадрами `.w-step` — стрілка з дією користувача під нею. Формат дії: дієслово + що саме, мовою документації або продукту («Tap: Do kasy», «Wybiera paczkomat»). Ряд прокручується горизонтально, якщо кадрів багато.

### Плейсхолдери

| Клас | Що | Приклад |
|---|---|---|
| `.w-img` | сірий прямокутник із діагоналями, `aspect-ratio` 4:3. `--1x1`, `--16x9`, `--3x4`. `data-label` друкує підпис по центру | `<div class="w-img w-img--1x1" data-label="Zdjęcie produktu"></div>` |
| `.w-lines` | сірі рядки замість довгого тексту, крок рядка як у `--fs-body`. Останній рядок коротший. `--sm` для дрібного тексту | `<div class="w-lines"><i></i><i></i><i></i></div>` |
| `.w-avatar` | коло 40. `--sm` 32, `--lg` 56 | `<span class="w-avatar"></span>` |
| `.w-tbd` | мітка «не вирішено», штрихування + моно | `<span class="w-tbd">TBD</span>` |
| `.w-hatch` | штрихування на будь-якому блоці (зона «не вирішено») | — |

### Анотації · `.w-anno` + `.w-notes`

- Маркер — біле коло 22 px з чорною лінією 2 px і моно-номером. Порожнистий маркер вирізняється з-поміж суцільних лічильників `.w-badge`.
- Щоб приколоти маркер до елемента: елементу клас `.w-anno-at`, маркер перший усередині. Маркер стане в лівий верхній кут із виносом −11 px. `.w-anno-at--r` ставить його в правий верхній кут — коли зліва мітка чи текст, на який маркер налазить.
- Елемент з `overflow: hidden` або `auto` (`.w-split`, `.w-chips`, `.w-tile`) обріже маркер. Тоді `.w-anno-at` отримує обгортка навколо елемента.
- Легенда `.w-notes` стоїть праворуч від кадру в тому ж `.w-flow`. Кожен пункт: маркер + «що це · як поводиться · відкрите питання».
- Нумерація наскрізна по всьому полотну в порядку читання.

---

## 7. Іконки

Сітка 24×24, обвідка 1.8, круглі кінці, без заливки. Колір бере від тексту. Розмітка: `<svg class="w-i" viewBox="0 0 24 24" aria-hidden="true">…</svg>`. Якщо потрібної іконки немає, малюй у тій самій сітці й товщині, простими лініями.

| Назва | Вміст `<svg>` |
|---|---|
| search | `<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>` |
| close | `<path d="M6 6l12 12M18 6L6 18"/>` |
| back | `<path d="M15 6l-6 6 6 6"/>` |
| chevron | `<path d="M9 6l6 6-6 6"/>` |
| chevron-down | `<path d="M6 9l6 6 6-6"/>` |
| arrow-right | `<path d="M5 12h14M13 6l6 6-6 6"/>` |
| check | `<path d="M5 12.5l4.5 4.5L19 7.5"/>` |
| plus | `<path d="M12 5v14M5 12h14"/>` |
| minus | `<path d="M5 12h14"/>` |
| menu | `<path d="M4 7h16M4 12h16M4 17h16"/>` |
| filter | `<path d="M4 6h16M7 12h10M10 18h4"/>` |
| home | `<path d="M4 11l8-7 8 7v9h-5v-6h-6v6H4z"/>` |
| grid | `<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>` |
| cart | `<path d="M3 4h2.5l2.2 11h10.6L20.5 8H6.6"/><circle cx="9.5" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>` |
| user | `<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c1.2-3.8 4-5.5 7.5-5.5s6.3 1.7 7.5 5.5"/>` |
| heart | `<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>` |
| trash | `<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>` |
| truck | `<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>` |
| copy | `<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>` |
| alert | `<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17.2v.1"/>` |
| info | `<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.8v.1"/>` |

---

## 8. CSS — повний блок

Вставляється в `<style>` повністю, без змін. Код екрана — нижче цього блоку.

```css
/* ================= WIREFRAME DS v1 · ТОКЕНИ =================
   Дзеркало «Katalog UI · ДС v3» у шкалі сірого.
   Компоненти беруть значення ТІЛЬКИ з семантичних токенів.
   Примітиви --g-* у компонентах не писати. */
:root{
  /* шкала сірого · примітиви */
  --g-0:#FFFFFF;   --g-50:#F7F7F7;  --g-100:#F2F2F2; --g-150:#EBEBEB;
  --g-200:#E0E0E0; --g-300:#CCCCCC; --g-400:#A3A3A3; --g-500:#858585;
  --g-600:#6B6B6B; --g-700:#595959; --g-800:#3D3D3D; --g-900:#1A1A1A;
  --g-1000:#000000;

  /* колір · поверхні */
  --bg:var(--g-100);               /* тло екрана */
  --surface:var(--g-0);            /* картки, поля, таб-бар */
  --surface-sunken:var(--g-50);    /* лунка, вставка, натиск */
  --surface-muted:var(--g-150);    /* доріжка сегмента, нейтральний тег, вимкнена кнопка */
  /* колір · текст */
  --text:var(--g-900);             /* 15.6:1 на --bg */
  --text-2:var(--g-700);           /* 6.3:1 на --bg, 7:1 на білому */
  --text-3:var(--g-600);           /* placeholder: 5.3:1 на білому */
  /* колір · лінії */
  --border:var(--g-300);           /* межа вторинної кнопки, декоративна */
  --border-strong:var(--g-500);    /* межа поля й чекбокса: 3.7:1, WCAG 1.4.11 */
  --divider:var(--g-150);          /* роздільники в картках */
  /* колір · акцент = найтемніше на екрані */
  --accent:var(--g-900);
  --accent-hover:var(--g-800);
  --accent-soft:var(--g-200);
  --accent-soft-hover:var(--g-300);
  --on-accent:var(--g-0);
  --code:var(--g-700);             /* коди, артикули — разом з --mono */
  /* колір · статуси без відтінку: лінія, штрихування, іконка, текст */
  --danger:var(--g-900);
  --danger-soft:var(--g-0);
  --danger-text:var(--g-900);
  --success-text:var(--g-900);
  --warn:var(--g-800);
  --warn-soft:var(--g-150);
  --warn-border:var(--g-500);
  --warn-strong:var(--g-900);
  --bw-status:2px;                 /* лінія помилки */
  --hatch:repeating-linear-gradient(135deg,var(--g-300) 0 1.5px,transparent 1.5px 7px);
  --scrim:rgba(0,0,0,.4);
  /* шкала даних */
  --data-0:var(--g-500);           /* тільки кільцем */
  --data-1:var(--g-400);
  --data-2:var(--g-600);
  --data-3:var(--g-900);
  --track:var(--g-200);
  --dot:var(--g-300);              /* крапкова сітка лунки */
  /* шар вайрфрейму */
  --canvas:var(--g-200);           /* полотно під кадрами */
  --ph-fill:var(--g-150);          /* плейсхолдер зображення */
  --ph-line:var(--g-400);          /* діагоналі плейсхолдера */
  --ph-text:var(--g-200);          /* сірі рядки тексту */
  --anno:var(--g-900);             /* анотації, стрілки флоу */

  /* типографіка — 7 кроків */
  --sans:'IBM Plex Sans',system-ui,-apple-system,"Segoe UI",sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
  --fs-micro:11px;
  --fs-caption:12px;
  --fs-small:13px;
  --fs-body:15px;
  --fs-lead:16px;                  /* поля вводу: менше 16 — iOS збільшує сторінку */
  --fs-title:20px;
  --fs-display:28px;
  --lh-tight:1.2;
  --lh-ui:1.4;
  --lh-read:1.55;

  /* відступи — сітка 4 px */
  --sp-1:4px; --sp-2:8px; --sp-3:12px; --sp-4:16px;
  --sp-5:20px; --sp-6:24px; --sp-8:32px; --sp-10:40px;

  /* радіуси; вкладений радіус = зовнішній − відступ між ними */
  --r-sm:8px;
  --r-md:12px;
  --r-lg:16px;
  --r-full:999px;

  /* тіні — нейтральні */
  --sh-1:0 1px 2px rgba(0,0,0,.05),0 2px 8px rgba(0,0,0,.05);
  --sh-2:0 1px 2px rgba(0,0,0,.05),0 4px 16px rgba(0,0,0,.07);
  --sh-thumb:0 1px 2px rgba(0,0,0,.14);

  /* рух */
  --dur-fast:.12s;
  --dur:.2s;
  --dur-slow:.32s;
  --ease:cubic-bezier(.2,.7,.2,1);

  /* каркас і кадри */
  --tabbar-h:64px;
  --col:560px;
  --page:1180px;
  --frame-m:390px;
  --frame-d:1280px;
}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{
  margin:0;background:var(--canvas);color:var(--text);
  font-family:var(--sans);font-size:var(--fs-body);line-height:var(--lh-read);
  -webkit-font-smoothing:antialiased;
}
h1,h2,h3,p{margin:0}
a{color:var(--text);text-underline-offset:3px}

/* ================= КОМПОНЕНТИ · ДЗЕРКАЛО v3 ================= */

/* фокус з клавіатури — один для всіх контролів */
:is(.w-btn,.w-row,.w-chip,.w-copy,.w-seg button,.w-tabbar button,.w-check,.w-link,.w-iconbtn,.w-choice,.w-stepper button):focus-visible{
  outline:2px solid var(--accent);outline-offset:2px;
}

/* іконка: обвідка 1.8, колір від тексту */
.w-i{
  width:22px;height:22px;flex:0 0 auto;
  fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;
}

/* кнопка: primary · secondary · ghost · danger; md (48) · sm (36) */
.w-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:var(--sp-2);
  min-height:48px;padding:0 var(--sp-5);
  font:600 var(--fs-body)/1.25 var(--sans);text-align:center;text-decoration:none;
  border:1px solid transparent;border-radius:var(--r-md);cursor:pointer;
  -webkit-tap-highlight-color:transparent;
  transition:background-color var(--dur-fast) var(--ease),border-color var(--dur-fast) var(--ease),
             color var(--dur-fast) var(--ease),box-shadow var(--dur-fast) var(--ease);
}
.w-btn--primary{background:var(--accent);color:var(--on-accent)}
.w-btn--secondary{background:var(--surface);color:var(--text);border-color:var(--border)}
.w-btn--ghost{background:transparent;color:var(--accent);min-height:44px;padding:0 var(--sp-3)}
.w-btn--danger{background:var(--surface);color:var(--danger);border-color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger)}
.w-btn--sm{min-height:36px;padding:0 var(--sp-3);font-size:var(--fs-small);border-radius:var(--r-sm)}
.w-btn--block{width:100%}
.w-btn[disabled]{background:var(--surface-muted);color:var(--text-2);border-color:transparent;box-shadow:none;cursor:default}

/* картка */
.w-card{background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--sh-1)}
.w-card--pad{padding:var(--sp-4)}
.w-list{padding:0 var(--sp-4)}

/* рядок: іконка · назва + підпис · значення · шеврон */
.w-row{
  display:flex;align-items:center;gap:var(--sp-3);width:100%;padding:var(--sp-4);
  text-align:left;font:inherit;color:var(--text);cursor:pointer;
  background:var(--surface);border:1px solid transparent;border-radius:var(--r-lg);box-shadow:var(--sh-1);
  -webkit-tap-highlight-color:transparent;
  transition:background-color var(--dur-fast) var(--ease),box-shadow var(--dur) var(--ease);
}
.w-row-txt{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.w-row-txt b{font:600 var(--fs-lead)/var(--lh-ui) var(--sans)}
.w-row-txt small{font:400 var(--fs-small)/var(--lh-ui) var(--sans);color:var(--text-2)}
.w-ico{
  flex:0 0 auto;width:44px;height:44px;display:grid;place-items:center;
  border-radius:var(--r-md);background:var(--accent-soft);color:var(--accent);
}
.w-ico--solid{background:var(--accent);color:var(--on-accent)}
.w-ico--sm{width:36px;height:36px;border-radius:calc(var(--r-md) - 2px)}
.w-ico--sm .w-i{width:20px;height:20px}
.w-num{flex:0 0 auto;font:600 var(--fs-title)/1 var(--sans);color:var(--accent);font-variant-numeric:tabular-nums}
.w-chev{width:20px;height:20px;color:var(--text-2)}
.w-row[disabled]{cursor:default;background:transparent;box-shadow:none;border:1px dashed var(--border)}
.w-row[disabled] .w-ico{background:var(--surface-muted);color:var(--text-2)}
.w-row[disabled] .w-row-txt b,.w-row[disabled] .w-num{color:var(--text-2)}

/* тег; --dot додає крапку зі шкали даних */
.w-tag{
  display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 var(--sp-2);flex:0 0 auto;
  font:600 var(--fs-micro)/1 var(--sans);white-space:nowrap;
  color:var(--text-2);background:var(--surface-muted);border-radius:var(--r-full);
}
.w-tag--accent{color:var(--accent);background:var(--accent-soft)}
.w-tag--solid{color:var(--on-accent);background:var(--accent)}
.w-tag--dot::before{
  content:"";width:6px;height:6px;border-radius:50%;
  background:var(--lv);box-shadow:inset 0 0 0 1.5px var(--lv-ring,var(--lv));
}
.w-lv0{--lv:transparent;--lv-ring:var(--data-0)}
.w-lv1{--lv:var(--data-1)} .w-lv2{--lv:var(--data-2)} .w-lv3{--lv:var(--data-3)}

/* поле вводу */
.w-field{
  width:100%;height:44px;padding:0 var(--sp-3);margin:0;
  font:400 var(--fs-lead)/1.2 var(--sans);
  color:var(--text);background:var(--surface);
  border:1px solid var(--border-strong);border-radius:var(--r-md);
  -webkit-appearance:none;appearance:none;
  transition:border-color var(--dur) var(--ease),box-shadow var(--dur) var(--ease),background-color var(--dur) var(--ease);
}
.w-field::placeholder{color:var(--text-3)}
.w-field:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 1px var(--accent)}
.w-field.ok{background:var(--accent-soft);border-color:var(--accent);color:var(--success-text)}
.w-field.no{background:var(--danger-soft) var(--hatch);border-color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger);color:var(--danger-text)}
.w-field[disabled]{background:var(--surface-muted);border-color:transparent;color:var(--text-2)}
.w-fieldset{display:grid;gap:6px}
.w-fieldlabel{font:500 var(--fs-small)/var(--lh-ui) var(--sans);color:var(--text)}
.w-fieldmsg{display:flex;align-items:flex-start;gap:6px;font-size:var(--fs-small);line-height:var(--lh-ui);color:var(--text-2)}
.w-fieldmsg .w-i{width:16px;height:16px;margin-top:1px}
.w-fieldmsg--no{color:var(--danger-text);font-weight:600}
.w-search,.w-select{position:relative;display:block}
.w-search .w-i,.w-select .w-i{position:absolute;top:50%;width:20px;height:20px;transform:translateY(-50%);color:var(--text-2);pointer-events:none}
.w-search .w-i{left:var(--sp-3)}
.w-search .w-field{padding-left:40px}
.w-select .w-i{right:var(--sp-3)}
.w-select .w-field{padding-right:40px}

/* сегмент-контрол */
.w-seg{
  display:inline-flex;flex:0 0 auto;padding:2px;
  background:var(--surface-muted);border-radius:var(--r-sm);
}
.w-seg button{
  min-width:32px;min-height:28px;padding:0 var(--sp-2);
  font:600 var(--fs-micro)/1 var(--sans);letter-spacing:.04em;
  color:var(--text-2);background:transparent;border:0;border-radius:calc(var(--r-sm) - 2px);cursor:pointer;
  transition:background-color var(--dur) var(--ease),color var(--dur) var(--ease),box-shadow var(--dur) var(--ease);
}
.w-seg button.on{background:var(--surface);color:var(--text);box-shadow:var(--sh-thumb)}
.w-seg--lg{display:flex;padding:3px;border-radius:var(--r-md)}
.w-seg--lg button{flex:1;min-height:36px;font-size:var(--fs-small);letter-spacing:0;border-radius:calc(var(--r-md) - 3px)}

/* значення з префіксом — тап копіює */
.w-copy{
  display:inline-flex;align-items:center;gap:var(--sp-2);max-width:100%;
  padding:5px var(--sp-3) 5px 5px;
  font:600 var(--fs-body)/1.3 var(--sans);color:var(--accent);text-align:left;
  background:var(--accent-soft);border:0;border-radius:var(--r-sm);cursor:pointer;
  -webkit-tap-highlight-color:transparent;transition:background-color var(--dur-fast) var(--ease);
}
.w-copy-tag{
  flex:0 0 auto;padding:3px 6px;font:600 var(--fs-micro)/1 var(--sans);letter-spacing:.04em;
  color:var(--on-accent);background:var(--accent);border-radius:calc(var(--r-sm) - 5px);
}

/* текст: опис · примітка · вставка */
.w-desc{margin:0;font-size:var(--fs-body);line-height:var(--lh-read)}
.w-note{margin:var(--sp-2) 0 0;font-size:var(--fs-small);line-height:var(--lh-read);color:var(--text-2)}
.w-note b{color:var(--text);font-weight:600}
.w-callout{margin:var(--sp-3) 0 0;padding:var(--sp-3);background:var(--surface-sunken);border-radius:var(--r-md)}
.w-callout-lab{display:block;margin-bottom:2px;font:600 var(--fs-caption)/var(--lh-ui) var(--sans);color:var(--text-2)}
.w-callout p{margin:0;font-size:var(--fs-body);line-height:var(--lh-read)}
.w-code{font:500 var(--fs-caption) var(--mono);color:var(--code);white-space:nowrap}
.w-mono{font-family:var(--mono)}
.w-alt{margin:2px 0 0;font:400 var(--fs-small)/var(--lh-ui) var(--mono);color:var(--text-2)}
.w-count{font-size:var(--fs-small);color:var(--text-2);font-variant-numeric:tabular-nums;white-space:nowrap}
.w-empty{padding:var(--sp-10) var(--sp-5);text-align:center;font-size:var(--fs-body);color:var(--text-2)}

/* лунка: зона чужого віджета на крапковій сітці */
.w-well{
  display:flex;align-items:center;justify-content:center;min-height:120px;
  padding:var(--sp-5) var(--sp-4);
  background-color:var(--surface-sunken);
  background-image:radial-gradient(var(--dot) 1px,transparent 1px);
  background-size:12px 12px;background-position:-1px -1px;
  border-top:1px solid var(--divider);
  font-size:var(--fs-small);color:var(--text-2);text-align:center;
}
.w-well>*{max-width:100%}
.w-stage{
  display:flex;align-items:center;justify-content:center;min-height:150px;
  padding:var(--sp-6) var(--sp-4);border-radius:var(--r-md);
  background-color:var(--surface-sunken);
  background-image:radial-gradient(var(--dot) 1px,transparent 1px);background-size:12px 12px;
  font-size:var(--fs-small);color:var(--text-2);text-align:center;
}

/* картка «текст + медіа» */
.w-split{display:grid;grid-template-columns:1fr;overflow:hidden;background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--sh-1)}
.w-split-body{padding:var(--sp-4);min-width:0}
.w-split>.w-img{border-radius:0}

/* прогрес */
.w-progress{flex:1;height:6px;background:var(--track);border-radius:var(--r-full);overflow:hidden}
.w-progress-fill{height:100%;background:var(--accent);border-radius:inherit;transition:width var(--dur-slow) var(--ease)}
.w-bar{flex:1;height:8px;display:flex;background:var(--track);border-radius:var(--r-full);overflow:hidden}
.w-bar>*+*{border-left:1px solid var(--surface)}
.w-bar-f3{background:var(--data-3)}
.w-bar-f2{background:var(--data-2)}
.w-bar-f1{background:var(--data-1)}

/* заголовки */
.w-pagehead{display:flex;flex-direction:column;gap:var(--sp-1);margin:0 0 var(--sp-6)}
.w-eyebrow{margin:0;font:600 var(--fs-small)/var(--lh-ui) var(--sans);color:var(--accent)}
.w-title{margin:0;font:600 var(--fs-display)/var(--lh-tight) var(--sans);letter-spacing:-.01em}
.w-h2{margin:0;font:600 var(--fs-title)/var(--lh-tight) var(--sans)}
.w-sub{margin:0;font-size:var(--fs-body);line-height:var(--lh-ui);color:var(--text-2)}
.w-label{margin:var(--sp-6) var(--sp-1) var(--sp-2);font:600 var(--fs-small)/var(--lh-ui) var(--sans);color:var(--text-2)}
.w-help{margin:var(--sp-2) var(--sp-1) 0;font-size:var(--fs-small);line-height:var(--lh-read);color:var(--text-2)}
.w-sec{margin:0 0 var(--sp-8)}
.w-sechead{display:flex;align-items:baseline;gap:var(--sp-2);padding:var(--sp-2) var(--sp-1);margin-bottom:var(--sp-2)}
.w-secnum{font:500 var(--fs-small) var(--mono);color:var(--code)}
.w-sectitle{margin:0;font:600 var(--fs-title)/var(--lh-tight) var(--sans)}
.w-secaside{margin-left:auto;font-size:var(--fs-small);color:var(--text-2)}

/* таб-бар — притиснутий до низу кадру */
.w-tabbar{
  position:absolute;left:0;right:0;bottom:0;z-index:60;
  background:var(--surface);box-shadow:0 -1px 0 var(--divider);
}
.w-tabbar-in{display:flex;max-width:480px;height:var(--tabbar-h);margin:0 auto;padding:0 var(--sp-3)}
.w-tabbar button{
  position:relative;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--sp-1);
  font:500 var(--fs-micro)/1.2 var(--sans);color:var(--text-2);
  background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;
  transition:color var(--dur) var(--ease);
}
.w-tabbar .w-i{width:24px;height:24px}
.w-tabbar button.on{color:var(--accent);font-weight:600}
.w-tabbar button.on .w-i{stroke-width:2.2}
.w-tabbar .w-badge{top:8px;right:calc(50% - 22px)}

/* тост — у кадрі показується статично */
.w-toast{
  position:absolute;left:50%;z-index:99;max-width:calc(100% - 2 * var(--sp-4));
  bottom:calc(var(--tabbar-h) + var(--sp-3));transform:translateX(-50%);
  padding:var(--sp-3) var(--sp-4);font:500 var(--fs-small)/1.3 var(--sans);white-space:nowrap;
  color:var(--surface);background:var(--text);border-radius:var(--r-md);box-shadow:var(--sh-2);
}
.w-toast--low{bottom:var(--sp-4)}

/* банер: попередження · помилка · інформація */
.w-banner{
  display:flex;align-items:flex-start;gap:var(--sp-3);padding:var(--sp-3) var(--sp-4);
  font-size:var(--fs-small);line-height:var(--lh-read);
  color:var(--warn);background:var(--warn-soft);border:1px solid var(--warn-border);border-radius:var(--r-md);
}
.w-banner b{display:block;color:var(--warn-strong)}
.w-banner .w-i{width:20px;height:20px;margin-top:1px;color:var(--warn-strong)}
.w-banner--error{color:var(--danger-text);background:var(--danger-soft) var(--hatch);border-color:var(--danger);box-shadow:inset 0 0 0 1px var(--danger)}
.w-banner--error b,.w-banner--error .w-i{color:var(--danger-text)}
.w-banner--info{color:var(--text-2);background:var(--surface-sunken);border-color:var(--divider)}
.w-banner--info b,.w-banner--info .w-i{color:var(--text)}

/* рядок-чекбокс і радіо */
.w-check{
  display:flex;align-items:center;gap:var(--sp-3);width:100%;min-height:56px;padding:var(--sp-3) var(--sp-4);
  text-align:left;font:inherit;color:var(--text);cursor:pointer;
  background:none;border:0;border-bottom:1px solid var(--divider);
  -webkit-tap-highlight-color:transparent;transition:background-color var(--dur-fast) var(--ease);
}
.w-list .w-check{padding-left:0;padding-right:0}
.w-check:last-child{border-bottom:0}
.w-check .w-row-txt b{font-weight:500;font-size:var(--fs-body)}
.w-box{
  flex:0 0 auto;width:22px;height:22px;display:grid;place-items:center;color:transparent;
  border:1.5px solid var(--border-strong);border-radius:calc(var(--r-sm) - 2px);
  transition:background-color var(--dur-fast) var(--ease),border-color var(--dur-fast) var(--ease);
}
.w-box .w-i{width:14px;height:14px;stroke-width:2.6}
.w-check.on .w-box{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}
.w-box--radio{border-radius:var(--r-full)}
.w-check.on .w-box--radio{background:var(--surface)}
.w-check.on .w-box--radio::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--accent)}

/* дві рівноправні дії */
.w-actpair{display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-2)}
.w-actpair .w-btn{padding:0 var(--sp-3)}

/* рядок сесії: ✕ · прогрес · лічильник */
.w-iconbtn{
  position:relative;flex:0 0 auto;width:44px;height:44px;
  display:grid;place-items:center;color:var(--text-2);
  background:none;border:0;border-radius:var(--r-full);cursor:pointer;
}
.w-topbar{display:flex;align-items:center;gap:var(--sp-2)}
.w-topbar>.w-iconbtn:first-child{margin-left:calc(-1 * var(--sp-3))}
.w-topcount{min-width:36px;text-align:right;font:500 var(--fs-small)/1 var(--sans);color:var(--text-2);font-variant-numeric:tabular-nums}

/* плитки вибору */
.w-choices{display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-2)}
.w-choice{
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--sp-1);
  min-height:112px;padding:var(--sp-3);
  font:500 var(--fs-small)/var(--lh-ui) var(--sans);color:var(--text);text-align:center;cursor:pointer;
  background:var(--surface-sunken);border:1px solid var(--divider);border-radius:var(--r-md);
  transition:border-color var(--dur-fast) var(--ease),background-color var(--dur-fast) var(--ease);
}
.w-choice small{font-size:var(--fs-caption);color:var(--text-2)}
.w-choice.on{background:var(--surface);border-color:var(--accent);box-shadow:inset 0 0 0 2px var(--accent)}
.w-choice.no{background:var(--danger-soft) var(--hatch);border-color:var(--danger);box-shadow:inset 0 0 0 2px var(--danger)}

/* екран результату */
.w-result{
  padding:var(--sp-8) var(--sp-5) var(--sp-5);text-align:center;
  background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--sh-1);
}
.w-result-ico{
  width:56px;height:56px;margin:0 auto var(--sp-3);display:grid;place-items:center;
  color:var(--accent);background:var(--accent-soft);border-radius:var(--r-full);
}
.w-result-ico .w-i{width:28px;height:28px;stroke-width:2.2}
.w-result p{margin:var(--sp-1) 0 var(--sp-5);color:var(--text-2)}
.w-result .w-btn+.w-btn{margin-top:var(--sp-2)}

/* плитки з числом і рядки даних */
.w-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--sp-2)}
.w-stat{padding:var(--sp-4)}
.w-stat b{display:block;font:600 var(--fs-display)/1.1 var(--sans);font-variant-numeric:tabular-nums}
.w-stat span{display:inline-flex;align-items:center;gap:6px;margin-top:var(--sp-1);font-size:var(--fs-small);color:var(--text-2)}
.w-stat span::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--lv);box-shadow:inset 0 0 0 1.5px var(--lv-ring,var(--lv))}
.w-datarow{display:flex;align-items:center;gap:var(--sp-3);padding:var(--sp-3) 0;border-bottom:1px solid var(--divider)}
.w-datarow:last-child{border-bottom:0}
.w-dataname{flex:0 0 132px;font-size:var(--fs-small)}
.w-dataval{flex:0 0 44px;text-align:right;font-size:var(--fs-small);color:var(--text-2);font-variant-numeric:tabular-nums}

/* пошук і пігулки в липкій смузі */
.w-masthead{position:sticky;top:0;z-index:50;padding:var(--sp-3) var(--sp-4);background:var(--bg);box-shadow:0 1px 0 var(--divider)}
.w-chips{
  display:flex;gap:var(--sp-2);overflow-x:auto;scrollbar-width:none;
  margin:var(--sp-3) calc(-1 * var(--sp-4)) 0;padding:2px var(--sp-4) var(--sp-1);
}
.w-chips::-webkit-scrollbar{display:none}
.w-chip{
  flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 14px;
  font:500 var(--fs-small)/1 var(--sans);color:var(--text);text-decoration:none;white-space:nowrap;
  background:var(--surface);border:0;border-radius:var(--r-full);box-shadow:var(--sh-1);cursor:pointer;
  -webkit-tap-highlight-color:transparent;
  transition:background-color var(--dur) var(--ease),color var(--dur) var(--ease);
}
.w-chip span{color:var(--text-2);font-variant-numeric:tabular-nums}
.w-chip.on{background:var(--accent);color:var(--on-accent)}
.w-chip.on span{color:inherit}
.w-chip.w-off{opacity:.4;pointer-events:none}

/* текстова дія */
.w-link{
  min-height:32px;padding:0;background:none;border:0;cursor:pointer;
  font:600 var(--fs-small)/1.2 var(--sans);color:var(--accent);
  text-decoration:underline;text-underline-offset:3px;
}
.w-link[disabled]{color:var(--text-2);text-decoration:none;cursor:default}

/* ================= КОМПОНЕНТИ · ДОДАНІ ДЛЯ ВАЙРФРЕЙМІВ ================= */

/* верхня панель: назад · назва · дії */
.w-appbar{display:flex;align-items:center;gap:var(--sp-1);height:56px;padding:0 var(--sp-1);background:var(--bg)}
.w-appbar .w-iconbtn{color:var(--text)}
.w-appbar-title{flex:1;min-width:0;font:600 var(--fs-lead)/var(--lh-ui) var(--sans);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.w-appbar--sticky{position:sticky;top:0;z-index:50;box-shadow:0 1px 0 var(--divider)}

/* лічильник на іконці — суцільний */
.w-badge{
  position:absolute;top:4px;right:2px;min-width:18px;height:18px;padding:0 5px;
  display:grid;place-items:center;
  font:600 var(--fs-micro)/1 var(--sans);font-variant-numeric:tabular-nums;
  color:var(--on-accent);background:var(--accent);border-radius:var(--r-full);box-shadow:0 0 0 2px var(--surface);
}

/* модальне вікно й аркуш */
.w-scrim{position:absolute;inset:0;z-index:70;background:var(--scrim)}
.w-sheet{
  position:absolute;left:0;right:0;bottom:0;z-index:71;
  padding:var(--sp-2) var(--sp-4) var(--sp-6);
  background:var(--surface);border-radius:var(--r-lg) var(--r-lg) 0 0;box-shadow:var(--sh-2);
}
.w-sheet::before{content:"";display:block;width:36px;height:4px;margin:0 auto var(--sp-4);background:var(--border);border-radius:var(--r-full)}
.w-dialog{
  position:absolute;left:var(--sp-4);right:var(--sp-4);top:50%;z-index:71;transform:translateY(-50%);
  padding:var(--sp-6) var(--sp-5) var(--sp-5);
  background:var(--surface);border-radius:var(--r-lg);box-shadow:var(--sh-2);
}

/* лічильник кількості */
.w-stepper{display:inline-flex;align-items:center;height:44px;background:var(--surface);border:1px solid var(--border-strong);border-radius:var(--r-md)}
.w-stepper button{width:44px;height:100%;display:grid;place-items:center;color:var(--text);background:none;border:0;border-radius:var(--r-md);cursor:pointer}
.w-stepper button[disabled]{color:var(--border-strong);cursor:default}
.w-stepper .w-i{width:20px;height:20px}
.w-stepper output{min-width:32px;text-align:center;font:600 var(--fs-lead)/1 var(--sans);font-variant-numeric:tabular-nums}

/* ціна */
.w-price{font:600 var(--fs-lead)/var(--lh-tight) var(--sans);font-variant-numeric:tabular-nums;white-space:nowrap}
.w-price--lg{font-size:var(--fs-title)}
.w-price-old{margin-left:var(--sp-2);font:400 var(--fs-small)/1 var(--sans);color:var(--text-2);text-decoration:line-through;white-space:nowrap}
.w-price-unit{display:block;font:400 var(--fs-caption)/var(--lh-ui) var(--sans);color:var(--text-2)}

/* панель головної дії внизу кадру */
.w-ctabar{
  position:absolute;left:0;right:0;bottom:0;z-index:60;
  display:flex;align-items:center;gap:var(--sp-4);padding:var(--sp-3) var(--sp-4);
  background:var(--surface);box-shadow:0 -1px 0 var(--divider);
}
.w-ctabar .w-btn{flex:1}
.w-ctabar--above-tabbar{bottom:var(--tabbar-h)}

/* розкладка */
.w-screen{padding:var(--sp-4) var(--sp-4) var(--sp-10)}
.w-screen--tabbar{padding-bottom:calc(var(--tabbar-h) + var(--sp-10))}
.w-screen--cta{padding-bottom:calc(72px + var(--sp-10))}
.w-screen--tabbar.w-screen--cta{padding-bottom:calc(var(--tabbar-h) + 72px + var(--sp-10))}
.w-stack{display:grid;gap:var(--sp-3)}
.w-stack--lg{gap:var(--sp-6)}
.w-hstack{display:flex;align-items:center;gap:var(--sp-2)}
.w-spread{display:flex;align-items:center;justify-content:space-between;gap:var(--sp-3)}
.w-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:var(--sp-3)}
.w-sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

/* ================= ШАР ВАЙРФРЕЙМУ ================= */

/* полотно */
.w-board{display:flex;flex-direction:column;gap:var(--sp-10);min-height:100vh;padding:var(--sp-10)}
.w-board>.w-pagehead{max-width:880px;margin:0}
.w-assume{max-width:880px;margin:0;padding:var(--sp-4) var(--sp-5);font-size:var(--fs-small);line-height:var(--lh-read);background:var(--surface);border-radius:var(--r-lg);box-shadow:0 0 0 1px var(--border)}
.w-assume ul{margin:var(--sp-1) 0 0;padding-left:var(--sp-5)}

/* флоу: кадр → дія → кадр */
.w-flow{display:flex;align-items:flex-start;gap:var(--sp-4);overflow-x:auto;padding:var(--sp-3) var(--sp-3) var(--sp-4)}
.w-step{
  position:relative;flex:0 0 120px;align-self:center;padding-top:var(--sp-5);
  font:500 var(--fs-small)/var(--lh-ui) var(--sans);text-align:center;color:var(--text);
}
.w-step::before{content:"";position:absolute;top:5px;left:0;right:8px;height:2px;background:var(--anno)}
.w-step::after{
  content:"";position:absolute;top:0;right:0;
  border-style:solid;border-width:6px 0 6px 9px;border-color:transparent transparent transparent var(--anno);
}

/* кадр */
.w-shot{flex:0 0 auto;display:flex;flex-direction:column;gap:var(--sp-2)}
.w-shot-label{display:flex;align-items:baseline;gap:var(--sp-2);font:500 var(--fs-caption)/var(--lh-ui) var(--mono);color:var(--text-2)}
.w-shot-label b{font:600 var(--fs-small)/var(--lh-ui) var(--sans);color:var(--text)}
.w-frame{
  position:relative;width:var(--frame-m);min-height:844px;overflow:hidden;
  background:var(--bg);box-shadow:0 0 0 1px var(--border),var(--sh-2);
  container-type:inline-size;
}
.w-frame--d{width:var(--frame-d);min-height:800px}
.w-frame--fit{min-height:0}
.w-frame--d .w-screen{max-width:var(--page);margin:0 auto;padding:var(--sp-6) var(--sp-6) var(--sp-10)}

/* адаптивність від ширини кадру */
@container (min-width:820px){
  .w-split{grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr)}
  .w-split .w-well{border-top:0;border-left:1px solid var(--divider)}
  .w-dialog{left:50%;right:auto;width:480px;transform:translate(-50%,-50%)}
  .w-sheet{left:50%;right:auto;width:560px;transform:translateX(-50%)}
}
@container (max-width:520px){
  .w-stats{grid-template-columns:repeat(2,1fr)}
}

/* плейсхолдери */
.w-img{
  position:relative;display:block;width:100%;aspect-ratio:4/3;overflow:hidden;
  background:
    linear-gradient(to top right,transparent calc(50% - .75px),var(--ph-line) calc(50% - .75px),var(--ph-line) calc(50% + .75px),transparent calc(50% + .75px)),
    linear-gradient(to bottom right,transparent calc(50% - .75px),var(--ph-line) calc(50% - .75px),var(--ph-line) calc(50% + .75px),transparent calc(50% + .75px)),
    var(--ph-fill);
  border-radius:var(--r-md);
}
.w-img--1x1{aspect-ratio:1/1}
.w-img--16x9{aspect-ratio:16/9}
.w-img--3x4{aspect-ratio:3/4}
.w-img[data-label]::after{
  content:attr(data-label);position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  max-width:calc(100% - 2 * var(--sp-2));padding:2px var(--sp-2);
  font:500 var(--fs-caption)/var(--lh-ui) var(--mono);color:var(--text-2);text-align:center;
  background:var(--ph-fill);border-radius:var(--r-sm);
}
.w-lines{display:grid;gap:calc(var(--fs-body) * var(--lh-read) - 8px);padding:var(--sp-2) 0}
.w-lines i{display:block;height:8px;background:var(--ph-text);border-radius:var(--r-full)}
.w-lines i:last-child:not(:first-child){width:62%}
.w-lines--sm{gap:calc(var(--fs-small) * var(--lh-read) - 6px)}
.w-lines--sm i{height:6px}
.w-avatar{flex:0 0 auto;display:inline-block;width:40px;height:40px;border-radius:var(--r-full);background:var(--ph-fill);box-shadow:inset 0 0 0 1px var(--border)}
.w-avatar--sm{width:32px;height:32px}
.w-avatar--lg{width:56px;height:56px}
.w-tbd{
  display:inline-flex;align-items:center;height:20px;padding:0 6px;vertical-align:middle;
  font:600 var(--fs-micro)/1 var(--mono);letter-spacing:.04em;color:var(--text);
  background:var(--surface) var(--hatch);border:1px solid var(--text);border-radius:calc(var(--r-sm) - 2px);
}
.w-hatch{background-image:var(--hatch)}

/* анотації: порожнистий маркер на елементі + легенда поза кадром */
.w-anno{
  display:inline-grid;place-items:center;flex:0 0 auto;width:22px;height:22px;
  font:600 var(--fs-micro)/1 var(--mono);color:var(--anno);
  background:var(--surface);border:2px solid var(--anno);border-radius:var(--r-full);
}
.w-anno-at{position:relative}
.w-anno-at>.w-anno{position:absolute;top:-11px;left:-11px;z-index:80}
.w-anno-at--r>.w-anno{left:auto;right:-11px}
.w-board--clean .w-anno,.w-board--clean .w-notes{display:none}
.w-notes{
  flex:0 0 280px;align-self:flex-start;display:grid;gap:var(--sp-3);
  margin:0;padding:var(--sp-4);list-style:none;
  background:var(--surface);border-radius:var(--r-lg);box-shadow:0 0 0 1px var(--border);
}
.w-notes li{display:flex;align-items:flex-start;gap:var(--sp-2);font-size:var(--fs-small);line-height:var(--lh-read)}
.w-notes li b{font-weight:600}

/* ================= HOVER · ACTIVE · MOTION ================= */
/* hover тільки там, де є справжня мишка (sticky hover на iOS) */
@media (hover:hover) and (pointer:fine){
  .w-btn--primary:not([disabled]):hover{background:var(--accent-hover)}
  .w-btn--secondary:not([disabled]):hover{border-color:var(--border-strong)}
  .w-btn--danger:not([disabled]):hover{background:var(--surface-sunken)}
  .w-btn--ghost:not([disabled]):hover{background:var(--accent-soft)}
  .w-row:not([disabled]):hover{box-shadow:var(--sh-2)}
  .w-check:hover{background:var(--surface-sunken)}
  .w-chip:not(.on):hover{background:var(--surface-sunken)}
  .w-copy:hover{background:var(--accent-soft-hover)}
  .w-seg button:not(.on):hover{color:var(--text)}
  .w-tabbar button:not(.on):hover{color:var(--text)}
  .w-iconbtn:hover{background:var(--surface-muted)}
  .w-choice:not(.on):hover{border-color:var(--border-strong)}
  .w-stepper button:not([disabled]):hover{background:var(--surface-sunken)}
}
/* відгук на дотик */
.w-btn--primary:not([disabled]):active{background:var(--accent-hover)}
.w-btn--secondary:not([disabled]):active,.w-btn--danger:not([disabled]):active{background:var(--surface-sunken)}
.w-btn--ghost:not([disabled]):active{background:var(--accent-soft)}
.w-row:not([disabled]):active,.w-check:active{background:var(--surface-sunken)}
.w-chip:not(.on):active{background:var(--surface-sunken)}
.w-copy:active{background:var(--accent-soft-hover)}
.w-iconbtn:active{background:var(--surface-muted)}
.w-choice:active{background:var(--accent-soft)}
.w-stepper button:not([disabled]):active{background:var(--surface-muted)}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}
}
```

---

## 9. Шаблон HTML-файлу

Один самодостатній файл. Структура: полотно → заголовок і припущення → ряди флоу (кадр · крок · кадр · легенда).

```html
<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Wireframe · Koszyk → Dostawa · v0.1</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* 1. Сюди повністю блок CSS із розділу 8, без змін */

/* 2. Нижче — тільки розкладка цього файлу: токени, префікс w- */
</style>
</head>
<body>
<main class="w-board">

  <header class="w-pagehead">
    <p class="w-eyebrow">Wireframe · v0.1 · 18.10.2026</p>
    <h1 class="w-title">Koszyk → Dostawa</h1>
    <p class="w-sub">Mobile 390. Klient B2B zamawia komponenty z progami cenowymi.</p>
  </header>

  <section class="w-assume" aria-label="Założenia">
    <b>Założenia</b>
    <ul>
      <li>Klient jest zalogowany, ceny netto.</li>
      <li>Minimalna ilość zamówienia (MOQ) jest znana dla każdej pozycji.</li>
    </ul>
  </section>

  <div class="w-flow">

    <div class="w-shot">
      <div class="w-shot-label"><b>01 · Koszyk</b> 390 · 2 pozycje</div>
      <div class="w-frame">
        <div class="w-appbar">
          <button class="w-iconbtn" aria-label="Wróć"><svg class="w-i" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg></button>
          <span class="w-appbar-title">Koszyk</span>
          <span style="width:44px"></span>
        </div>
        <div class="w-screen w-screen--cta">
          <div class="w-stack">
            <article class="w-card w-card--pad w-anno-at">
              <span class="w-anno">1</span>
              <div class="w-hstack" style="align-items:flex-start;gap:var(--sp-3)">
                <div class="w-img w-img--1x1" data-label="foto" style="width:72px"></div>
                <div style="flex:1;min-width:0">
                  <b>Kondensator 100 nF 50 V</b>
                  <span class="w-code">SKU 4711-22</span>
                  <div class="w-spread" style="margin-top:var(--sp-2)">
                    <div class="w-stepper">
                      <button aria-label="Zmniejsz ilość"><svg class="w-i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/></svg></button>
                      <output aria-live="polite">100</output>
                      <button aria-label="Zwiększ ilość"><svg class="w-i" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
                    </div>
                    <span class="w-price">12,40 zł</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="w-ctabar">
          <div><span class="w-price w-price--lg">24,80 zł</span><span class="w-price-unit">netto</span></div>
          <button class="w-btn w-btn--primary">Do dostawy</button>
        </div>
      </div>
    </div>

    <div class="w-step">Tap: Do dostawy</div>

    <!-- наступний .w-shot … -->

    <ol class="w-notes" aria-label="Adnotacje">
      <li><span class="w-anno">1</span><span><b>Pozycja koszyka.</b> Krok ilości = wielokrotność opakowania. Poniżej MOQ przycisk „−” jest wyłączony.</span></li>
    </ol>

  </div>
</main>
</body>
</html>
```

Інлайн-стилі в шаблоні (`style="width:72px"`) допустимі тільки для разової геометрії. Значення відступів і кольорів — тільки через `var(--…)`.

---

## 10. Робочий процес

### Крок 1. Ціль і сценарій

Перед першим кадром зафіксуй у блоці `.w-assume`:

- **Ціль користувача:** що людина хоче зробити («zamówić brakujące komponenty do produkcji przed piątkiem»).
- **Ціль бізнесу:** що має статися для компанії («więcej zamówień powyżej progu cenowego»).
- **Реальний сценарій:** хто, де, з якого пристрою, з якими даними.
- **Обмеження:** платформа, терміни, що вже є в продукті, що вирішено.

Якщо чогось із цього немає в запиті, вкажи припущення явно і прямо спитай про найризиковіше.

### Крок 2. Флоу текстом

Список екранів у форматі «екран → дія користувача» до будь-якої розмітки:

```
01 Koszyk → tap „Do dostawy”
02 Dostawa → wybiera paczkomat → tap „Dalej”
02a Dostawa · błąd → kod pocztowy w złym formacie
03 Płatność → tap „Zamawiam i płacę”
04 Potwierdzenie
```

### Крок 3. Кадри

1. Мобільний 390 першим. Десктоп 1280 — коли його просять або коли розкладка на десктопі принципово інша.
2. На кожному кадрі: один `<h1>` (у `.w-pagehead` або в `.w-appbar`), одна `w-btn--primary`.
3. Компоненти тільки з розділів 4–6. Якщо потрібного немає — склади з наявних. Новий компонент — тільки з поясненням в анотації та тими самими токенами.
4. Стани ключових екранів окремими кадрами з суфіксом: `a` порожньо, `b` помилка, `c` завантаження. Стан завантаження будується з `.w-lines` і `.w-img` і підписується «ładowanie».
5. Довгий екран — кадр `--fit` з повною висотою, у підписі «całość, przewijany».

### Крок 4. Анотації

Маркер на кожне рішення, яке не очевидне з картинки: поведінка, правило, обмеження, відкрите питання. Легенда: **що це** · як поводиться · питання. Нерозв'язане позначай `.w-tbd`.

### Крок 5. Перевірка й передача

Пройди чек-ліст (розділ 11). Якщо середовище дозволяє, зроби скриншот (Playwright, ширина вікна 1600+) і переглянь його. Відповідь користувачу: посилання чи файл, припущення, відкриті питання.

---

## 11. Чек-ліст перед передачею

**Система**
- [ ] CSS із розділу 8 вставлений повністю і без змін.
- [ ] Поза `:root` немає жодного hex, `rgb()` чи px-розміру шрифту.
- [ ] Жодного кольору з відтінком у всьому файлі.
- [ ] Усі власні класи з префіксом `w-`.

**Ієрархія**
- [ ] На кожному кадрі одна `w-btn--primary` і один `<h1>`.
- [ ] Тест примруження: першою читається головна дія.
- [ ] Кожен статус має іконку й текст.

**Контент**
- [ ] Заголовки, кнопки, мітки, помилки — реальним текстом мовою продукту.
- [ ] Довгі описи — `.w-lines`, без lorem ipsum.
- [ ] Зображення — `.w-img` з `data-label`.
- [ ] Ціни у форматі `1 299,00 zł`, з табличними цифрами.
- [ ] Польський текст: після однобуквених слів (i, a, o, u, w, z) стоїть `&nbsp;`, щоб вони не висіли в кінці рядка.

**Доступність**
- [ ] Зони дотику ≥ 44×44 для основних дій, ≥ 24×24 для щільних контролів.
- [ ] Поля вводу 16 px, з видимою міткою або `aria-label`.
- [ ] Кнопки-іконки з `aria-label`. Іконки з `aria-hidden="true"`.
- [ ] Вибрані стани мають `aria-pressed`, `aria-selected`, `aria-checked` або `aria-current`.

**Вайрфрейм**
- [ ] Кожен кадр підписаний: номер · назва · ширина · стан.
- [ ] Між кадрами стрілки з дією користувача.
- [ ] Анотації пронумеровані наскрізно, легенда повна.
- [ ] Блок припущень заповнений.

---

## 12. Відповідність у Figma

Щоб вайрфрейм у коді й у Figma збігався, назви повторюють токени.

| У коді | У Figma |
|---|---|
| `--g-0` … `--g-1000` | колекція змінних **WF Primitives**, група `gray/0` … `gray/1000` |
| `--bg`, `--surface`, `--text` … | колекція **WF Semantic**, змінні `color/bg`, `color/surface`, `color/text` … як аліаси на примітиви |
| `--sp-*` | `space/4` … `space/40` (Number) |
| `--r-*` | `radius/sm` 8 · `radius/md` 12 · `radius/lg` 16 · `radius/full` 999 |
| `--fs-*` + вага | текстові стилі `WF/Display 28`, `WF/Title 20`, `WF/Lead 16`, `WF/Lead 16 Semibold`, `WF/Body 15`, `WF/Small 13`, `WF/Small 13 Semibold`, `WF/Caption 12`, `WF/Micro 11`, `WF/Mono 12` |
| `--sh-1`, `--sh-2`, `--sh-thumb` | стилі ефектів `WF/Shadow 1`, `WF/Shadow 2`, `WF/Shadow thumb` |
| `.w-btn--primary` | компонент `Button`, властивості `variant=primary`, `size=md`, `block=false`, `icon` (instance swap) |
| `.w-img`, `.w-lines`, `.w-anno` | компоненти `WF/Image`, `WF/Text lines`, `WF/Annotation` |
| `.w-frame` | фрейм 390×844 або 1280×800, заливка `color/bg` |

Штрихування у Figma — заливка-зображення з патерном або компонент `WF/Hatch`, накладений поверх.

---

## 13. Відомі обмеження й відкриті питання

**Обмеження**

- **Шкала даних.** Сусідні рівні мають 1.9:1 (`--data-1` на доріжці), 2.1:1 і 3.3:1. Рівні розрізняються світлотою, а точне значення завжди подане текстом поруч. Біла лінія 1px між сегментами додає межу.
- **Вибраний стан у сірому слабший, ніж був у зеленому.** Вибрана вкладка відрізняється від сусідніх тільки темнішим текстом, вагою й товщиною іконки. Тому `aria-current` / `aria-pressed` обов'язкові, а в анотації варто назвати вибраний стан, якщо він важливий для сценарію.
- **Ghost-кнопка і `.w-link` схожі на текст.** У v3 їх виділяв зелений. Тут вони впізнаються за вагою 600, підкресленням (`.w-link`) і місцем (шапка, кінець блоку).
- **Зони дотику 28–34 px** у сегменті й пігулках, як у v3. Мінімум WCAG 2.2 AA (24×24) виконано, рекомендацію Apple HIG (44×44) — ні.
- **Тіні й шрифт Plex роблять вайрфрейм охайним**, і його можуть сприйняти як готовий дизайн. Від цього захищають сірі плейсхолдери з діагоналями, підписи кадрів і «Wireframe · v0.1» у заголовку полотна.
- **Container queries** (`@container`) потрібні для адаптивності кадрів: Chrome 105+, Safari 16+, Firefox 110+.

**Відкриті питання**

- **Колір анотацій.** Система повністю сіра, тому маркери анотацій чорні. Якщо на щільних екранах їх буде важко відрізнити від інтерфейсу, шар анотацій — єдине місце, де виправдано один колір. Рішення не ухвалене.
- **Планшетний кадр 768.** Не доданий: для початкових вайрфреймів зазвичай досить 390 і 1280.
- **Темна тема.** Не потрібна: вайрфрейм не вирішує теми.

---

## 14. Стартовий промпт для нової сесії

Скопіюй, заповни дужки, прикріпи цей файл:

```
Прочитай повністю прикріплений файл wireframe-design-system.md — це дизайн-система
для вайрфреймів. Працюй строго за нею.

Побудуй вайрфрейм: [що саме, напр. «оформлення замовлення від кошика до підтвердження»].
Платформа: [мобільний 390 / десктоп 1280 / обидва].
Ціль користувача: […]
Ціль бізнесу: […]
Сценарій: [хто, з якого пристрою, з якими даними].
Що вже є в продукті / обмеження: […]
Мова інтерфейсу: польська.

Порядок:
1. Спершу дай список екранів у форматі «екран → дія користувача» і припущення.
2. Потім збери один HTML-файл за шаблоном із розділу 9, CSS із розділу 8 без змін.
3. Пройди чек-ліст із розділу 11 і назви відкриті питання.
```
