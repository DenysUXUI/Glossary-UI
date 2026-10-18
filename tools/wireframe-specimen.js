// Перезбирає CSS у docs/wireframe-ds-specimen.html з розділу 8 docs/wireframe-design-system.md.
// Джерело правди — документ: після правки CSS у ньому запусти
//   node tools/wireframe-specimen.js
// Розмітка зразка й блок «розкладка цього файлу» лишаються як є.
const fs = require("fs"), path = require("path");
const DOC = path.join(__dirname, "..", "docs", "wireframe-design-system.md");
const OUT = path.join(__dirname, "..", "docs", "wireframe-ds-specimen.html");
const MARK = "/* ===== розкладка цього файлу ===== */";

const css = fs.readFileSync(DOC, "utf8").match(/```css\n(\/\* =+ WIREFRAME DS v1 · ТОКЕНИ[\s\S]*?)```/);
if (!css) { console.error("Блок CSS у розділі 8 не знайдено"); process.exit(1); }
const html = fs.readFileSync(OUT, "utf8");
const a = html.indexOf("<style>\n"), b = html.indexOf(MARK);
if (a < 0 || b < 0) { console.error("У зразку немає <style> або мітки розкладки"); process.exit(1); }
fs.writeFileSync(OUT, html.slice(0, a + 8) + css[1] + html.slice(b));
console.log("ok · CSS оновлено в", path.relative(process.cwd(), OUT));
