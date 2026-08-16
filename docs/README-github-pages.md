# Katalog UI — публікація на GitHub Pages

Мета: отримати постійне посилання, яке відкривається і на компі, і на телефоні,
і де прогрес навчання надійно зберігається.

## Крок 1 — новий репозиторій

1. github.com → **New repository**
2. Назва: `katalog-ui`
3. **Public** (для безкоштовного Pages)
4. **Create repository**

## Крок 2 — залити файл

Найпростіше через браузер, без терміналу:

1. У порожньому репозиторії → **uploading an existing file**
2. Перетягни `index.html`
3. Commit message: `feat: initial glossary app`
4. **Commit changes**

Через термінал, якщо зручніше:

```bash
mkdir katalog-ui && cd katalog-ui
# поклади сюди index.html
git init
git add index.html
git commit -m "feat: initial glossary app"
git branch -M main
git remote add origin git@github.com:USERNAME/katalog-ui.git
git push -u origin main
```

## Крок 3 — увімкнути Pages

1. Репозиторій → **Settings** → зліва **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, папка: **/ (root)**
4. **Save**

Через 1–2 хвилини вгорі з'явиться адреса:

```
https://USERNAME.github.io/katalog-ui/
```

Файл має називатись саме `index.html` — тоді він відкривається за коротким
посиланням без назви файлу в кінці.

## Крок 4 — на телефон

Відкрий посилання в Safari або Chrome → **Поділитись** → **На екран «Домівка»**.
Іконка стане як у звичайного застосунку, відкриватиметься на весь екран.

## Оновлення

Замінюєш `index.html` у репозиторії — сайт оновиться сам за хвилину.
Прогрес навчання при цьому НЕ зникає: він лежить у `localStorage` браузера
під ключем `katalog-ui-v1`, окремо від коду.

## Про прогрес

- Зберігається **в конкретному браузері на конкретному пристрої**
- Між телефоном і компом **не синхронізується** — це різні сховища
- Чистка даних сайту / режим інкогніто = прогрес втрачено

Тому на вкладці **Postęp** є **Eksportuj postęp (JSON)**. Роби експорт
раз на тиждень, або коли хочеш перенести прогрес на інший пристрій —
там натискаєш **Importuj** і вибираєш файл.
