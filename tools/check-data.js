// Перевірка цілісності DATA / CATS / PAIRS в index.html.
// Запуск: node tools/check-data.js   (код виходу 1, якщо є помилки)
const fs = require("fs"), path = require("path"), vm = require("vm");

const src = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const cut = (from, to) => src.slice(src.indexOf(from), src.indexOf(to));
const ctx = {};
vm.createContext(ctx);
vm.runInContext(
  cut("const DATA = [", "/* ---------- helpers") +
  "\nthis.DATA = DATA; this.CATS = CATS; this.PAIRS = PAIRS;", ctx);
const { DATA, CATS, PAIRS } = ctx;

const errors = [], warns = [];
const ids = new Set();
const perCat = {};
const strip = s => String(s || "").replace(/<[^>]*>/g, "");

DATA.forEach((e, i) => {
  const id = e.c + "-" + e.n;
  const where = `${id} (${e.en || "#" + i})`;
  ["c", "n", "en", "pl", "ua", "d"].forEach(k => { if (!e[k]) errors.push(`${where}: немає поля ${k}`); });
  if (!CATS[e.c]) errors.push(`${where}: категорії ${e.c} немає в CATS`);
  if (!/^\d\d$/.test(e.n || "")) errors.push(`${where}: n має бути двоцифровим рядком`);
  if (ids.has(id)) errors.push(`${where}: id повторюється`);
  ids.add(id);
  perCat[e.c] = (perCat[e.c] || 0) + 1;
  // переклади: механізм .l-soon дозволяє їх не мати, тому це попередження
  if (!e.o || !e.o.pl || !e.o.en) warns.push(`${where}: немає o.pl / o.en (покажеться «wkrótce»)`);
  if (!e.ex || !e.ex.ua || !e.ex.pl || !e.ex.en) warns.push(`${where}: немає ex.ua / ex.pl / ex.en`);
  if (!!e.note !== !!e.nt) warns.push(`${where}: note і nt мають бути разом`);
  // pe:1 — «польського терміна немає, у командах кажуть англійською» (handoff-02, D2)
  if (e.pe !== undefined && e.pe !== 1) errors.push(`${where}: pe може бути лише 1 або відсутнім`);
  // кирилиця в польському чи англійському полі — майже завжди помилка копіювання
  const cyr = /[Ѐ-ӿ]/;
  [["en", e.en], ["alt", e.alt], ["pl", e.pl], ["o.pl", e.o && e.o.pl], ["o.en", e.o && e.o.en],
   ["nt.pl", e.nt && e.nt.pl], ["nt.en", e.nt && e.nt.en], ["ex.pl", e.ex && e.ex.pl], ["ex.en", e.ex && e.ex.en]]
    .forEach(([k, v]) => { if (v && cyr.test(strip(v))) errors.push(`${where}: кирилиця в полі ${k}`); });
  // поле pl проходить через esc(): сутності й позначки статусу там показались би буквально
  if (/&\w+;|[✅⚠️❌]/.test(e.pl || "")) errors.push(`${where}: у pl сутність або позначка статусу`);
  if (/[·,()]/.test(e.pl || "")) warns.push(`${where}: у pl є «·», кома чи дужки — звірка ділить відповідь лише по « / » і « vs »`);
  // демо не повинно підказувати польську відповідь.
  // Пропускаємо pe:1 і частини відповіді, що збігаються з EN-назвою: їх і так видно в питанні.
  const parts = s => s.split(/\s*\/\s*|\s+vs\s+/i).map(x => x.trim().toLowerCase()).filter(Boolean);
  const enParts = parts(e.en.replace(/\s*\([^)]*\)/g, "")).concat(e.en.toLowerCase());
  const ans = e.pe === 1 ? [] : parts(e.pl).filter(s => s.length > 3 && !enParts.includes(s));
  const demo = strip(e.d).toLowerCase();
  ans.forEach(a => { if (demo.includes(a)) warns.push(`${where}: демо містить відповідь «${a}»`); });
  // класи демо не повинні збігатися з класами застосунку (історія з .done)
  const APP = ["pl", "en", "alt", "ua", "note", "code", "sample", "entry", "cat", "view", "count", "empty", "qstage", "qcard", "sess"];
  (e.d.match(/class="([^"]+)"/g) || []).forEach(m => m.slice(7, -1).split(/\s+/).forEach(c => {
    if (/^l-/.test(c) || APP.includes(c)) errors.push(`${where}: демо використовує клас застосунку .${c}`);
  }));
  // id / for / name у демо дублюються, коли каталог і картка навчання змонтовані разом
  const hooks = (e.d.match(/\s(?:id|for|name)="[^"]+"/g) || []).map(s => s.trim());
  if (hooks.length) warns.push(`${where}: демо має ${[...new Set(hooks)].join(" ")} — див. handoff-02, 2.12`);
});

PAIRS.forEach((p, i) => p.forEach(x => { if (!ids.has(x)) errors.push(`PAIRS[${i}]: немає запису ${x}`); }));
Object.keys(CATS).forEach(k => { if (!perCat[k]) warns.push(`Категорія ${k} порожня`); });

console.log(`Записів: ${DATA.length} · категорій: ${Object.keys(CATS).length} · наборів PAIRS: ${PAIRS.length}`);
console.log("По категоріях: " + Object.keys(CATS).map(k => `${k}${perCat[k] || 0}`).join(" "));
warns.forEach(w => console.log("⚠️  " + w));
errors.forEach(w => console.log("❌ " + w));
console.log(errors.length ? `\n${errors.length} помилок` : "\nПомилок немає");
process.exit(errors.length ? 1 : 0);
