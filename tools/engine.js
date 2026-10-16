// Тестовий стенд рушія навчання: виконує код від `const DATA` до «render: learn»
// у пісочниці з фальшивим localStorage, без браузера.
// Використання:
//   const make = require("./tools/engine");
//   const { api } = make();                     // чистий прогрес
//   api.checkTyped(api.BY_ID["L-04"], "swiatlo miedzyliterowe")  // → true
//   make({}, {throwSet: true})                  // сховище, що кидає помилку (приватний режим Safari)
const fs = require("fs"), path = require("path"), vm = require("vm");

const src = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8").split("\n");
const from = src.findIndex(l => l.startsWith("const DATA = ["));
const to = src.findIndex(l => l.startsWith("/* ---------- render: learn ---------- */"));
if (from < 0 || to < 0) throw new Error("Не знайшов межі коду рушія — змінились якорі в index.html");

module.exports = function make(store, opts = {}) {
  const ls = {
    _d: Object.assign({}, store || {}),
    getItem(k) { if (opts.throwGet) throw new Error("denied"); return k in this._d ? this._d[k] : null; },
    setItem(k, v) { if (opts.throwSet) throw new Error("quota"); this._d[k] = String(v); },
    removeItem(k) { delete this._d[k]; }
  };
  const ctx = { localStorage: ls, document: { getElementById: () => null },
    console, Math, Date, JSON, Set, Object, Array, String, Number };
  vm.createContext(ctx);
  vm.runInContext(src.slice(from, to).join("\n") +
    "\nthis.api = {DATA, BY_ID, CATS, ORDER, PAIRS, INTERVAL, DAY, norm, accepted, checkTyped," +
    " bump, pickKnown, pickLearn, st, dueList, newList, pairSets, interleave, inSel, selKeys," +
    " save, load, saveSel, sanitizeProgress, plural, getST: () => ST, setST: v => { ST = v }, getS: () => S, setS: v => { S = v }," +
    " getSEL: () => SEL, setSEL: v => { SEL = v }, getStoreBad: () => STORE_BAD};", ctx);
  return { api: ctx.api, ls };
};
