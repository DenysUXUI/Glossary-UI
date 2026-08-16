# Katalog UI — glosariusz elementów interfejsu

Тримовний глосарій елементів інтерфейсу (**EN · PL · UA**) з живими HTML-демо
і навчальним режимом зі spaced repetition. 160 записів у 12 категоріях.

**Живий застосунок:** https://denysuxui.github.io/Glossary-UI/
_(доступно після ввімкнення GitHub Pages — див. `docs/README-github-pages.md`)_

## Що всередині

- `index.html` — увесь застосунок, один самодостатній файл, без залежностей і збірки
- `docs/katalog-ui-glosariusz.pdf` — каталог для офлайн-читання
- `docs/README-github-pages.md` — як опублікувати
- `docs/handoff-01-initial.md` — історія рішень
- `CLAUDE.md` — контекст проєкту для роботи в Claude Code

## Як користуватись

Відкрити посилання → **Поділитись** → **На екран «Домівка»**. Далі кнопка **Ćwicz**:
сесія на 12 карток, система сама вирішує, що показати.

Прогрес зберігається в `localStorage` браузера (ключ `katalog-ui-v1`) і **не
синхронізується між пристроями**. Раз на тиждень роби **Postęp → Eksportuj postęp (JSON)**.
