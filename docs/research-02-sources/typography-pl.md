# Polish equivalents: typography list (50 rows)

Input: `research-typography.md` (50 rows). Verified 2026-10-16. Nothing below is invented: every PL term is quoted from a file I downloaded and grepped in this container. A term not found is marked ❌ and no PL is suggested.

## Source key (all read in full or grepped; copies in `scratchpad/src/pl-sources/`)

| Label | Publisher ("vendor") | Repo / file (line numbers are the entry start in that file) |
|---|---|---|
| **LO** | The Document Foundation | `LibreOffice/translations` master, `source/pl/<module>/messages.po` (cui, sw, svx, editeng, vcl, sd, sc, svtools, chart2, starmath). `LO-UI` = `source/pl/officecfg/registry/data/org/openoffice/Office/UI.po`. `LO-help` = `source/pl/helpcontent2/source/text/...` |
| **VSC** | Microsoft | `microsoft/vscode-loc` `i18n/vscode-language-pack-pl/translations/main.i18n.json` (cited by key path). The pack has PL only, so the EN string comes from `microsoft/vscode` main (file named in the cell) |
| **FF** | Mozilla | `mozilla-l10n/firefox-l10n` `pl/...`; EN from `mozilla-firefox/firefox` `*/locales/en-US/...` |
| **AOSP** | Google (Android) | `aosp-mirror/platform_packages_apps_settings` `res/values-pl/strings.xml` and `arrays.xml`; EN in `res/values/` |
| **GTK / GCC / ADW** | GNOME Project | `GNOME/gtk`, `GNOME/gnome-control-center`, `GNOME/libadwaita`, each `po/pl.po` |
| **CLDR** | Unicode Consortium | `unicode-org/cldr` `common/main/pl.xml`; `common/annotations/pl.xml` (= ANN) |

"Vendors" = distinct publishers above (6 in total). MDN, W3C, Apple HIG and Material have no Polish text in this container, so none of them is used here. The W3C Polish Layout Requirements repo could not be cloned (not accessible), so Polish typographic rules (dash spacing, single-letter words) remain unverified.

## Result: 23 ✅ · 17 ⚠️ · 10 ❌ (total 50)

Must-have rows (23 in the input): ✅ 15 · ⚠️ 6 · ❌ 2.

## Table

| EN term | PL term(s) found | Exact source string pair (EN → PL) | Source (repo + file + line / ctx) | Sources agreeing | Status |
|---|---|---|---|---|---|
| 1 Text style (must) | **Styl tekstu** (LO only). Also Paragraph Styles = Style akapitu, Character Styles = Style znaku | `Text style` → `Styl tekstu`; `Text Styles` → `Style tekstu` | LO sw.po:16652 (ctx footnotepage/label12); LO sw.po:332 (RID_PARAGRAPHSTYLEFAMILY); LO sw.po:3726, 3732 | 1: LO. VSC has only "Styl czcionki" (= font style) | ⚠️ |
| 2 Display (nice) | none. Sense mismatch: "Display" in sources = screen | `Display` → `Wyświetlacz` (AOSP, screen settings) | AOSP res/values-pl/strings.xml:1238 (display_settings) | 0 for the type-role sense | ❌ (brak — w zespołach zwykle EN) |
| 3 Headline (must) | none. The UI string is "Heading" (see 4); LO's internal ids say HEADLINE but the shown EN text is "Heading" | `Heading` → `Nagłówek` (not "Headline") | LO sw.po:2842 (STR_POOLCOLL_HEADLINE_BASE) | 0 | ❌ (brak — w zespołach zwykle EN) |
| 4 Heading H1–H6 (must) | **Nagłówek**, Nagłówek 1…9 | `Heading 1` → `Nagłówek 1`; VSC `Heading 1 font size (largest heading).` → `Rozmiar czcionki nagłówka 1 (największy nagłówek).`; GTK role `heading` → `nagłówek` | LO sw.po:2842, 2872 (STR_POOLCOLL_HEADLINE1); LO sc.po:1761; VSC platform/theme/common/sizes/baseSizes/fontSizeHeading1 (EN baseSizes.ts:37); GTK gtk.po:1514 (ctx accessibility) | 3: LO, Microsoft, GNOME | ✅ Sense note: "nagłówek" is also header in GTK/VSC ("nagłówek kolumny"); LO uses `Header` → `Główka`, `Footer` → `Stopka` (sd.po:2746, 2740) |
| 5 Title (must) | **Tytuł**, Podtytuł (subtitle) | `Title` → `Tytuł`; `Subtitle` → `Podtytuł`; VSC `Heading 2 font size (title).` → `Rozmiar czcionki nagłówka 2 (tytuł).` | LO sw.po:3515 (STR_POOLCOLL_DOC_TITEL), 3521; VSC baseSizes/fontSizeHeading2 + fontSizeHeading3 `(subtitle)` → `(podtytuł)` | 2: LO, Microsoft | ✅ **Sense mismatch**: confirmed for document title and "Heading 2" label. The M3 Title / Apple Title 1–3 role is not localised by anyone. "Tytuł" also = window title (LO cui.po:17905; FF customize-mode-titlebar `Title Bar` → `Pasek tytułu`) |
| 6 Body (must) | **Treść tekstu** (LO style); **treść** (VSC) | `Body Text` → `Treść tekstu`; VSC `Primary body font size.` → `Podstawowy rozmiar czcionki treści.`; `Secondary body font size.` → `Pomocniczy rozmiar czcionki treści.` | LO sw.po:2806 (STR_POOLCOLL_TEXT); VSC baseSizes/fontSizeBody1, fontSizeBody2 | 2: LO, Microsoft | ✅ (LO's plain Calc style `Text` → `Tekst`, sc.po:1773, is a variant) |
| 7 Lead (nice) | none | n/a | no hit in any source | 0 | ❌ (brak — w zespołach zwykle EN) |
| 8 Label, type role (must) | Type-role use: **etykieta** (VSC only). UI-widget / ARIA use: **Etykieta** (LO, GTK) | VSC `Label 1 font size (section title, tabs).` → `Rozmiar czcionki etykiety 1 (tytuł sekcji, karty).`; `Label` → `Etykieta`; GTK role `label` → `etykieta` | VSC baseSizes/fontSizeLabel1 (+Label 2 `(metadata)`, Label 3 `(badge)`); LO cui.po:1980 (RID_SVXSTR_COMMANDLABEL), vcl.po:630 (chart axis label); GTK gtk.po:1529, 4915 | Type role: 1 (Microsoft). Widget sense: LO, GNOME | ⚠️ **Sense mismatch**: M3 "Label" text role has only Microsoft's usage; widget/form label = Etykieta (matches existing B-03) |
| 9 Caption (must) | **Podpis** (figure/table caption). No vendor uses "Legenda" for Caption | `Caption` → `Podpis`; GTK role `caption` → `podpis` | LO sw.po:3244 (STR_POOLCOLL_LABEL, Writer "Caption" style); LO sw.po:18716 (insertcaption); GTK gtk.po:1439 (ctx accessibility) | 2: LO, GNOME | ✅ **Sense mismatches**: (a) Android `Caption size` → `Rozmiar napisów` = subtitles / closed captions (AOSP strings.xml pl:2476); (b) `Legend` → `Legenda` is a different object (chart legend LO chart2.po:254; GTK role gtk.po:1539); (c) the small-text type role (M2 / Apple Caption) is not localised anywhere |
| 10 Overline (must) | **Nadkreślenie** (decoration only) | `Overline` → `Nadkreślenie` | LO svx.po:2808 (SIP_EE_CHAR_OVERLINE), 10884; LO editeng.po:600 | 1: LO | ⚠️ Type-role "Overline" (M2) not found; decoration sense only |
| 11 Footnote (nice) | **Przypis dolny** (footnote); Przypis końcowy (endnote) | `Footnote` → `Przypis dolny`; `Endnote` → `Przypis końcowy` | LO sw.po:1575, 3232; LO sc.po:1785 (Calc style `Footnote`); LO sd.po:8563 | 1: LO | ⚠️ Apple "Footnote" text style not localised |
| 12 Emphasized style (nice) | **Wyróżnienie**; strong = mocne wyróżnienie | `Emphasis` → `Wyróżnienie`; `Strong Emphasis` → `Mocne wyróżnione`; VSC `SemiBold font weight (600) for headings and strong emphasis.` → `Pogrubiona grubość czcionki (600) dla nagłówków i mocnego wyróżnienia.` | LO sw.po:2696 (STR_POOLCHR_HTML_EMPHASIS), 2708; VSC baseSizes/fontWeightSemiBold (EN baseSizes.ts:78) | 2: LO, Microsoft | ✅ Sense note: semantic emphasis (`<em>`/`<strong>`). VSC's "strong" = SemiBold 600, the closest to M3 "emphasized". No source names a "heavier variant of a text style". GNOME uses the same root for `Accent Color` → `Kolor wyróżnienia` (gcc.po:1010) |
| 13 Uppercase / All caps (must) | **Wielkie litery**; variant **Wersaliki** (LO "Caps") | `UPPERCASE` → `WIELKIE LITERY`; `Transform to Uppercase` → `Przekształć na wielkie litery`; `Caps` → `Wersaliki` | LO cui.po:9751 (effectspage); LO-UI:21472 (ChangeCaseToUpper); LO sw.po:25476; LO editeng.po:771 (CASEMAP_VERSALIEN); VSC contrib/linesOperations/browser/linesOperations/editor.transformToUppercase (EN linesOperations.ts:1160); GTK gtk.po:2770 `Letter Case` → `Wielkość liter` | 2: LO, Microsoft (+GNOME for "Letter Case") | ✅ |
| 14 Capitalize (CSS) (nice) | **Kapitalizacja** (LO Calc); LO's "Capitalize Every Word" = `Jak Nazwy Własne` | `Capitalize` → `Kapitalizacja`; `Capitalize Every Word` → `Jak Nazwy Własne`; `Capitalize first letter of every sentence` → `Początek każdego zdania wielką literą` | LO sc.po:36500 (texttransformation_type/capitalize); LO cui.po:9763; LO cui.po:1727 | 1: LO (3 different renderings inside LO) | ⚠️ Note: LO's `Capitalize Every Word` is what CSS `capitalize` does, and LO maps it to Title Case (row 16) |
| 15 Sentence case (must) | **Jak w zdaniu** (LO) | `~Sentence case` → `~Jak w zdaniu`; `Cycle Case (Title Case, Sentence case, UPPERCASE, lowercase)` → `Cyklicznie (Jak Nazwy Własne, Jak w zdaniu, WIELKIE LITERY, małe litery)` | LO-UI:21452 (ChangeCaseToSentenceCase), 21512 | 1: LO. VSC has no sentence-case command | ⚠️ |
| 16 Title case (must) | **(Wielkość liter) jak w nazwach własnych** — LO: `Jak Nazwy Własne`; VSC: `jak w nazwach własnych` | `Capitalize Every Word` → `Jak Nazwy Własne`; `Title` → `Jak nazwy własne`; `Transform to Title Case` → `Przekształć do wielkości liter jak w nazwach własnych` | LO cui.po:9763; LO-UI:21482 (ChangeCaseToTitleCase); LO editeng.po:783 (CASEMAP_TITEL); VSC editor.transformToTitlecase (EN linesOperations.ts:1223) | 2: LO, Microsoft | ✅ Literal sense: "like proper names" |
| 17 Italic (must) | **Kursywa** | `Italic` → `Kursywa`; VSC `Sets or unsets the font style to italic.` → `Ustawia lub cofa ustawienie stylu kursywy dla czcionki.` | LO editeng.po:387, svx.po:2820; VSC platform/theme/common/tokenClassificationRegistry/schema.token.italic; FF devtools/client/font-inspector.properties:37 (`Italic` → `Kursywa`); GTK gtk.po:5856 (`Italics` → `Kursywa`) | 4: LO, Microsoft, Mozilla, GNOME | ✅ Sense mismatches: GTK variation axis `Italic` → `Pochylenie` (gtk.po:2737); Android `Cursive` typeface → `Kursywa` (AOSP arrays.xml pl:326) |
| 18 Oblique (nice) | **Pochylona** | `Oblique` → `Pochylona`; `Oblique italic` → `Pochylona kursywa` | LO svtools.po:784 (STR_SVT_STYLE_OBLIQUE); LO editeng.po:381 | 1: LO. GTK `Slant` axis → `Nachylenie` (gtk.po:2742) is related but not the same word | ⚠️ |
| 19 Underline (must) | **Podkreślenie** | `Underline` → `Podkreślenie`; VSC `…font style to underline…` → `…stylu podkreślenia dla czcionki…` | LO editeng.po:485, svx.po:2802; VSC tokenClassificationRegistry/schema.token.underline | 2: LO, Microsoft | ✅ |
| 20 Strikethrough (must) | **Przekreślenie** | `Strikethrough` → `Przekreślenie`; VSC `…font style to strikethrough…` → `…stylu czcionki do przekreślenia…` | LO editeng.po:709, svx.po:2814; VSC tokenClassificationRegistry/schema.token.strikethrough | 2: LO, Microsoft | ✅ |
| 21 Superscript / Subscript (must) | **Indeks górny** / **Indeks dolny** | `Superscript` → `Indeks górny`; `Subscript` → `Indeks dolny`; CLDR `superscript` → `indeks górny {0}` | LO cui.po:19805, 19811; LO vcl.po:2542, 2536; GTK gtk.po:6136, 6131; CLDR pl.xml:15900–15901 (characterLabelPattern) | 3: LO, GNOME, Unicode | ✅ |
| 22 Serif (nice) | **Szeryfowa** (agrees with "czcionka"); base adj. szeryfowy | `Serif` → `Szeryfowa:`; Android `Serif` → `Szeryfowy` | FF browser/preferences/fonts.ftl:84; FF toolkit/about/aboutReader.ftl:29; AOSP arrays.xml pl:323 (EN arrays.xml:692) | 2: Mozilla, Google | ✅ |
| 23 Sans serif (nice) | **Bezszeryfowa**; base adj. bezszeryfowy | `Sans-serif` → `Bezszeryfowa:`; Android `Sans-serif` → `Bezszeryfowa` | FF fonts.ftl:86; FF aboutReader.ftl:30; AOSP arrays.xml pl:320 (EN :689) | 2: Mozilla, Google | ✅ |
| 24 Monospace (must) | **O stałej szerokości (znaków)**; GTK: Czcionka o stałej szerokości znaków | `Monospace` → `O stałej szerokości:`; GTK `Monospace` → `Czcionka o stałej szerokości znaków`; Android `Sans-serif monospace` → `Bezszeryfowa o stałej szerokości` | FF fonts.ftl:88; FF aboutReader.ftl:31; GTK gtk.po:7396; AOSP arrays.xml pl:322 (EN :691) | 3: Mozilla, GNOME, Google | ✅ Variant: LO `Non-proportional fonts only` → `Tylko czcionki nieproporcjonalne` (cui.po:15984) |
| 25 System font (must) | label **systemowa** only; the phrase "czcionka systemowa" is not verbatim in any source | `system` → `systemowa` (localization note: "local system font") | FF devtools/client/font-inspector.properties:10 | 1: Mozilla | ⚠️ |
| 26 Font stack / Fallback font (must) | none. Only descriptive text: LO font-replacement table | `This font has not been installed. The closest available font will be used.` → `Ta czcionka nie jest zainstalowana. Zostanie użyta dostępna, najbardziej podobna czcionka.`; `Replacement Table` → `Tabela zamian` | LO svtools.po:820; LO cui.po:15954 (optfontspage) | 0 for a term | ❌ (brak — w zespołach zwykle EN) |
| 27 Variable font (nice) | none for the term ("czcionka zmienna" appears nowhere). Related strings only | GTK `Font Variation Axes` → `Osie odmian stylów`; `Style Variations` → `Odmiany stylów`; VSC `Configures font variations.` → `Konfiguruje odmiany czcionek.` | GTK gtk.po:7417, 2790; VSC editor/common/config/editorOptions/fontVariationsGeneral | 0 for the term | ❌ (brak — w zespołach zwykle EN) |
| 28 Ligature (nice) | **Ligatury** | `Standard Ligatures` → `Standardowe ligatury`; `Ligatures` → `Ligatury`; VSC `Enables/Disables font ligatures…` → `Włącza/wyłącza ligatury czcionek…` | LO vcl.po:2398 (FONT_FEATURE_ID_LIGA); GTK gtk.po:2766; VSC editorOptions/fontLigatures (EN editorOptions.ts:1935) | 3: LO, GNOME, Microsoft | ✅ |
| 29 OpenType feature (nice) | **Cechy czcionki / czcionek**; minority variant **funkcje czcionek** (VSC) | `Font Features` → `Cechy czcionek`; GTK `Font Features` → `Cechy czcionki`; VSC `(\'calt\' and \'liga\' font features)` → `(funkcje czcionek „calt” i „liga”)` | LO cui.po:10460 (fontfeaturesdialog); GTK gtk.po:7421; VSC editorOptions/fontLigatures | 2 agree on "cechy" (LO, GNOME); 1 variant "funkcje" (Microsoft) | ✅ "OpenType" itself stays EN (GTK ctx `OpenType layout`) |
| 30 Slashed zero (nice) | **Przekreślone zero** | `Slashed Zero` → `Przekreślone zero` | LO vcl.po:2644 (FONT_FEATURE_ID_ZERO); GTK gtk.po:6231 | 2: LO, GNOME | ✅ |
| 31 Font width (nice) | width axis = **Szerokość**; scale = **Skalowanie szerokości**; Condensed = **Zagęszczona** (LO) vs **wąska** (Android) | `Scale width:` → `Skalowanie szerokości:`; GTK axis `Width` → `Szerokość`; `Condensed` → `Zagęszczona`; `Sans-serif condensed` → `Bezszeryfowa wąska` | LO cui.po:19859; GTK gtk.po:2727; LO svtools.po:736; AOSP arrays.xml pl:321 | Vendors disagree on "condensed" | ⚠️ |
| 32 Cap height (nice) | none | n/a (GTK has `Baseline` → `Linia bazowa`, gtk.po:4994, but no cap-height / x-height string in any source) | no hit | 0 | ❌ (brak — w zespołach zwykle EN) |
| 33 Descender / Ascender (nice) | none | n/a | no hit | 0 | ❌ (brak — w zespołach zwykle EN) |
| 34 Paragraph spacing (nice) | **Odstęp międzyakapitowy** (LO) | `Paragraph spacing` → `Odstęp międzyakapitowy`; `Above paragraph:` → `Powyżej akapitu:`; `Below paragraph:` → `Poniżej akapitu:` | LO svx.po:2748 (SIP_EE_PARA_ULSPACE); LO cui.po:19185, 19191 | 1: LO | ⚠️ |
| 35 Hyphenation (nice) | **Dzielenie wyrazów**; soft hyphen = **łącznik miękki** | `Hyphenation` → `Dzielenie wyrazów`; `~Soft Hyphen` → `Łączni~k miękki` | LO cui.po:1479, svx.po:2712, sw.po:4730; LO-UI:27988 | 1: LO (no hit in FF, GTK, VSC, AOSP) | ⚠️ |
| 36 Balanced / pretty wrapping (nice) | none | n/a | no hit | 0 | ❌ (brak — w zespołach zwykle EN) |
| 37 Vertical trim (nice) | none | n/a | no hit | 0 | ❌ (brak — w zespołach zwykle EN) |
| 38 Overflow wrap / Word break (nice) | **Zawijanie wierszy / tekstu** — but this is general line wrapping, not breaking unbreakable strings | `Word wrap text in shape` → `Zawijaj wiersze w kształcie`; VSC `Lines will wrap at the viewport width.` → `Wiersze będą zawijane przy szerokości okienka ekranu.` | LO svx.po:2281; LO cui.po:7797; VSC editorOptions/wordWrap.on (EN editorOptions.ts:6884) | 2 (LO, Microsoft) for the general sense only | ⚠️ **Sense mismatch** |
| 39 Hyphen (must) | **Łącznik**; variants: dywiz (U+2010), łącznik-minus (U+002D), "znak minus" (Mozilla), myślnik | `Non-breaking Hyphen` → `Łącznik nierozdzielający`; ANN U+2010 → `dywiz` (keywords `dywiz / łącznik / myślnik`); ANN U+002D → `łącznik-minus`; FF `Consecutive hyphens` → `Wielokrotne znaki minus` | LO-UI:27968, 27988; ANN annotations/pl.xml:35, 33; FF dom/chrome/layout/htmlparser.properties:36 (EN :41) | 2 on "łącznik": LO, Unicode. Variants listed | ✅ |
| 40 En dash (must) | **Półpauza** | `A – B (A, space, en-dash, space, B)` → `A – B (A, spacja, półpauza, spacja, B)`; ANN U+2013 → `znak półpauzy` | LO-help shared/01.po:37915, 37969; LO-help shared/guide.po:26080 (`en-dash or an em-dash` → `półpauzy lub pauzy`); ANN pl.xml:37 | 2: LO (help), Unicode | ✅ Variant: ANN keyword `myślnik` is listed for both dashes |
| 41 Em dash (must) | **Pauza**; variant **myślnik** | `A—B (A, em-dash, B)` → `A—B (A, pauza, B)`; ANN U+2014 → `znak pauzy` | LO-help shared/01.po:37951; ANN pl.xml:39. Variant: LO-help swriter/guide.po:20941 (`em dash (—)` → `myślnik (—)`) | 2: LO (help), Unicode. LO is internally inconsistent | ✅ |
| 42 Minus sign (nice) | **Minus** / **znak minus** | ANN U+2212 → `minus`; `Negative numbers are preceded by a minus sign.` → `Liczby ujemne poprzedza się znakiem minus.` | ANN pl.xml:397; LO-help sbasic/shared.po:29640 | 2: Unicode, LO (help) | ✅ Sense overlap: Mozilla and LO call the keyboard hyphen "znak minus" too (FF htmlparser.properties:36) |
| 43 Quotation marks, Polish „ ” (must) | **Cudzysłów** (pl. cudzysłowy); LO also says "apostrofy" for single quotes; characters in the CLDR block below | `Double Quotes` → `Cudzysłowy`; `Double quotes default` → `Domyślny cudzysłów podwójny`; `Single Quotes` → `Pojedyncze apostrofy`; ANN U+201E → `dolny cudzysłów otwierający` | LO cui.po:6663, 6651, 6579; VSC editorOptions/autoClosingQuotes (`quotes` → `cudzysłowy`); ANN pl.xml:89 (U+201E), 87 (U+201D), 91 and 93 (« ») | 3: LO, Microsoft, Unicode | ✅ |
| 44 Non-breaking space (must) | **Spacja nierozdzielająca** (LO only); "twarda spacja" appears nowhere | `~No-break Space` → `Spacja ~nierozdzielająca`; `Non-breaking spaces and hyphen` → `Spacje nierozdzielające i łącznik`; narrow: `Narrow No-break Space` → `Wąska spacja nierozdzielająca` | LO-UI:28013, 28033; LO sw.po:25010, 10813 | 1: LO for the name. CLDR confirms the behaviour only: U+00A0 as group separator (pl.xml:6171) | ⚠️ |
| 45 Ellipsis character (nice) | **Wielokropek** | ANN U+2026 → `wielokropek` (keywords `trzy kropki / wielokropek / znak wielokropka`); `An ellipsis indicates a possible repetition` → `Wielokropek oznacza możliwe powtórzenie` | ANN pl.xml:71; LO-help sbasic/shared.po:41088 | 2: Unicode, LO (help) | ✅ Sense: LO's use is syntax notation; CLDR's is the character |
| 46 Dynamic Type / Text scaling (nice) | named feature: none. Concept words: **Rozmiar czcionki**, **Rozmiar tekstu**, **Powiększaj tylko tekst** | `Font size` → `Rozmiar czcionki`; `Make text bigger or smaller` → `Zwiększ lub zmniejsz tekst`; GCC `Text Size` → `Rozmiar tekstu`; FF `Zoom text only` → `Powiększaj tylko tekst` | AOSP strings.xml pl:1360, 1361; GCC gcc.po:8906; FF browser/preferences/preferences.ftl:351 (EN :432) | 3 vendors for the concept words, 0 for the feature name | ⚠️ |
| 47 Relative font units, rem (nice) | `Relative font size` → **Względny rozmiar czcionki** (LO); em = **firet** (CLDR). "rem": none | `Relative font size:` → `Względny rozmiar czcionki:`; CLDR graphics-em displayName `firety` | LO cui.po:19829 (positionpage); CLDR pl.xml:10098–10100 | 1 each (LO, Unicode) | ⚠️ |
| 48 Minimum text size (nice) | **Minimalny rozmiar czcionki** | `Minimum font size` → `Minimalny rozmiar czcionki:` | FF browser/preferences/fonts.ftl:92 (EN fonts.ftl:101) | 1: Mozilla | ⚠️ |
| 49 Fluid typography (nice) | none | n/a | no hit | 0 | ❌ (brak — w zespołach zwykle EN) |
| 50 Text-spacing override, WCAG 1.4.12 (nice) | the override concept: none. Components: **Odstępy między wierszami / znakami / wyrazami** (FF); **Interlinia** (LO); **Wysokość linii** (FF DevTools, VSC) | FF `Line spacing` → `Odstępy między wierszami`; `Character spacing` → `Odstępy między znakami`; `Word spacing` → `Odstępy między wyrazami`; LO `Line spacing` → `Interlinia`; `Character spacing:` → `Odstępy między znakami:` | FF toolkit/about/aboutReader.ftl:81, 84, 86; LO svx.po:2754, cui.po:19871; FF devtools/client/font-inspector.properties:46 (`Line Height` → `Wysokość linii`); VSC editorOptions/lineHeight | Character spacing: 2 agree (Mozilla, LO). Line spacing: 3 variants | ⚠️ |

## Notable disagreements and sense mismatches

- **Line spacing / leading**: Interlinia (LO) vs Odstępy między wierszami (Mozilla reader) vs Wysokość linii (Mozilla DevTools, VSC `lineHeight`). The app already uses "interlinia".
- **Caption**: only Podpis (LO, GNOME). Android's "Caption" = napisy (subtitles). Legenda is a separate object (chart / fieldset legend) and is never used for Caption.
- **Title / Label / Caption / Display / Headline as type roles**: none is localised as a *role* by Google (Material is not in the corpus) or Apple. Only Microsoft's VS Code ships a role ramp with PL: Heading 1–3 = nagłówek 1–3 (Heading 2 "(title)" = tytuł, Heading 3 "(subtitle)" = podtytuł), Body 1/2 = treść, Label 1/2/3 = etykieta 1/2/3.
- **Dashes**: Polish software uses *pauza* (em), *półpauza* (en), *łącznik* (hyphen). "myślnik" is a generic word that CLDR lists as a keyword for hyphen, en dash and em dash, and LO help uses it once for the em dash.
- **Title case**: both LO and VS Code say "jak (w) nazwach własnych"; neither says "tytułowa".
- **Opacity-style pitfalls** appear in the token list, not here.

## CLDR `pl` verbatim (unicode-org/cldr `common/main/pl.xml`; root = `root.xml`)

Quotation marks (pl.xml:1554–1557). `↑↑↑` is CLDR's inheritance marker, so the closing mark comes from root.xml:89 (U+201D):

```
<quotationStart>„</quotationStart>                       U+201E  DOUBLE LOW-9 QUOTATION MARK
<quotationEnd>↑↑↑</quotationEnd>                          inherits root: ”  U+201D
<alternateQuotationStart>«</alternateQuotationStart>      U+00AB
<alternateQuotationEnd>»</alternateQuotationEnd>          U+00BB
```

So Polish primary quotes are „…” and nested quotes are «…» (guillemets), not ‚…’. Firefox's own Polish strings use „--” (htmlparser.properties:36). Names in `common/annotations/pl.xml`: U+201E `dolny cudzysłów otwierający`, U+201D `górny cudzysłów zamykający`, U+00AB `lewy cudzysłów ostrokątny`, U+00BB `prawy cudzysłów ostrokątny`.

Numbers (pl.xml:6168–6171, `latn`; U+00A0 verified by byte inspection):

```
<minimumGroupingDigits>2</minimumGroupingDigits>   (root.xml:2957 has 1)
<decimal>,</decimal>
<group>U+00A0 NO-BREAK SPACE</group>
<decimalFormat> pattern ↑↑↑  → root: #,##0.###
<percentFormat> pattern ↑↑↑  → root: #,##0%
```

Currency (pl.xml:6318, 6323, 7679–7685; the space before ¤ is U+00A0):

```
<currencyFormat type="standard">    <pattern>#,##0.00 ¤</pattern>
<currencyFormat type="accounting">  <pattern>#,##0.00 ¤;(#,##0.00 ¤)</pattern>
<currency type="PLN"> <displayName>złoty polski</displayName> <symbol>zł</symbol>
```

Reading it: decimal comma; thousands separator is a no-break space; 4-digit numbers are not grouped (`minimumGroupingDigits` 2); currency symbol comes after the number, separated by a no-break space. Examples that follow from the patterns: `1234,56 zł`, `12 345,67 zł` (with U+00A0 in both the group and before zł). Short currency in pl.xml uses `0 tys'.' ¤`.

## Other CLDR / LO facts that bear on the app

- CLDR `exemplarCharacters type="punctuation"` for pl (pl.xml:1514) lists `- ‐ ‑ – — , ; : ! ? . … ' " ” „ « » ( ) [ ] { } § @ * / & # % † ‡ ′ ″ ° ~`. So „ ” « » ′ ″ are in the Polish punctuation set.
- CLDR names for prime and double prime: U+2032 `prim`, U+2033 `bis` (ANN pl.xml:159, 161). LibreOffice autocorrect has the shortcode `inch` → `cal` for ″ (emoji.po:744–747), i.e. inch = cal.
- CLDR unit names: pixel = `piksel` (pl.xml:10114), typographic point = `punkt` (length-point, pl.xml:10621). LO says `Punkt typograficzny` / `pt.` (sc.po:21083, editeng.po:989).
- LO weight/width style names (svtools.po:664–796) for reference: Light = Lekka, Regular = Regularna, Medium = Średnia, Semibold = Półpogrubiona, Bold = Pogrubiona, Black = Gruba, Book = Książkowa, Condensed = Zagęszczona. Mozilla reader view: Light = Lekka, Regular = Standardowa, Bold = Pogrubiona (aboutReader.ftl:73–75). LO `Regularna` vs Mozilla `Standardowa` is another disagreement.
- The existing app term "cyfry tabelaryczne" matches GTK (`Tabular Figures` → `Cyfry tabelaryczne`, gtk.po:6161); LO says `Liczby tabelaryczne` (vcl.po:2566). "Kerning" is used as is by LO (vcl.po:2386) and GTK (gtk.po:5886). "Linia bazowa" matches GTK (`Baseline` → `Linia bazowa`, gtk.po:4994); LO uses the same noun inflected (`Top of baseline` → `Góra linii bazowej`, cui.po:14493).
