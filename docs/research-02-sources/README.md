# Сирі дані дослідження 02

Повні таблиці, з яких зібрано `docs/research-02-tokeny-typografia.md` і `docs/audit-02.md`.
Писали Sonnet-агенти англійською; цитати звірені з першоджерелами.
**Брати визначення, приклади токенів і польські відповідники для нових записів — звідси.**

| Файл | Що всередині | Як читати статус |
|---|---|---|
| `typography-en.md` | 50 типографічних термінів: визначення, дослівні цитати (≤ 25 слів), посилання, мапа ролей M3 / M2 / Apple, 16 пар для розрізнення, суперечності між джерелами | ✅ цитату знайдено дослівно · ⚠️ частково · ❌ у розділі «Not verified» |
| `tokens-en.md` | 46 термінів про токени, скорочення, одиниці, ролі кольору; таблиці «хто як називає рівні токенів» і «анатомія назви» | те саме; для кожного прикладу токена окремий статус |
| `typography-pl.md` | польські відповідники до `typography-en.md` з офіційних локалізацій (LibreOffice, VS Code, Firefox, Android, GNOME) і CLDR | ✅ ≥ 2 вендори · ⚠️ 1 вендор або розбіжність · ❌ офіційного PL немає |
| `tokens-pl.md` | те саме для `tokens-en.md` | те саме |
| `code-review.md` | 28 знахідок код-рев'ю `index.html` з рядками, сценаріями відтворення й мінімальними правками | high / med / low |

## Як шукали

Сайти документації з хмарного контейнера не відкриваються. Тому читали вихідні файли
тих самих сторінок: `git clone` публічних репозиторіїв (mdn/content, tailwindlabs/tailwindcss.com,
design-tokens/community-group, shadcn-ui/ui, material-components/*, primer/*,
carbon-design-system/carbon-website, MicrosoftDocs/microsoft-style-guide, w3c/csswg-drafts,
figma/plugin-typings, unicode-org/cldr, LibreOffice/translations, microsoft/vscode-loc,
mozilla-l10n/firefox-l10n), офіційні npm-пакети з токенами і Apple HIG у JSON
(`developer.apple.com/tutorials/data/design/human-interface-guidelines/<page>.json`).

У колонках з посиланнями «Human URL» — сторінка, яку генерує прочитаний файл;
«raw path» — що фактично прочитано. Номери рядків у `code-review.md` дійсні для коміту `dfaabd4`.

## Що лишилось неперевіреним

PWN і Rada Języka Polskiego (недоступні), польські правила пробілів навколо тире,
текстові пояснення з m3.material.io і Figma Help Center, Google Fonts Knowledge.
