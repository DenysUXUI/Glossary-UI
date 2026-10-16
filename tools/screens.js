// Скриншоти ключових екранів на 390×844 (iPhone) + замір зон дотику < 24×24 px.
// Запуск у хмарній сесії Claude Code (Chromium уже встановлений):
//   node tools/screens.js [папка-для-скриншотів]
// За замовчуванням пише в ./screens/ (папка в .gitignore не потрапляє — не комітити).
const path = require("path"), fs = require("fs");
let chromium;
try { ({ chromium } = require("playwright")); }
catch { ({ chromium } = require("/opt/node22/lib/node_modules/playwright")); }

const OUT = path.resolve(process.argv[2] || "screens");
const URL = "file://" + path.join(__dirname, "..", "index.html");
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true
  })).newPage();
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.goto(URL);
  await page.waitForTimeout(1000);
  const shot = n => page.screenshot({ path: path.join(OUT, n + ".png") });

  // дрібні зони дотику в інтерфейсі застосунку (демо не рахуємо)
  const small = label => page.evaluate(label => [...document.querySelectorAll("button, a, input")]
    .filter(el => !el.closest(".sample, .qstage, .l-optdemo"))
    .map(el => ({ el, r: el.getBoundingClientRect() }))
    .filter(({ r }) => r.width && r.height && (r.width < 24 || r.height < 24))
    .map(({ el, r }) => `${label}: ${el.tagName.toLowerCase()}.${el.className || "-"} «${(el.textContent || el.placeholder || "").trim().slice(0, 20)}» ${Math.round(r.width)}×${Math.round(r.height)}`),
  label);
  const report = [];

  await shot("01-start"); report.push(...await small("start"));
  await page.click("#pick"); await shot("02-picker"); await page.click("#pk-done");
  await page.click("#m-new"); await page.waitForTimeout(250); await shot("03-pick");
  for (let i = 0; i < 5; i++) { await page.click("#actR"); await page.waitForTimeout(350); }
  await shot("04-learn"); report.push(...await small("learn"));
  await page.click("#w-eye"); await page.waitForTimeout(250); await shot("05-reveal");
  await page.click("#actL"); await page.waitForTimeout(400);
  // у карток без польського відповідника кнопки «Napisz» немає — гортаємо до картки, де вона є
  for (let i = 0; i < 4 && await page.$("#w-eye") && !await page.$("#w-kbd"); i++) {
    await page.click("#w-eye"); await page.waitForTimeout(250);
    await page.click("#actL"); await page.waitForTimeout(400);
  }
  if (await page.$("#w-kbd")) {
    await page.click("#w-kbd"); await page.waitForTimeout(250); await shot("06-type"); report.push(...await small("type"));
  } else report.push("type: не знайшов картки з «Napisz» — скриншот 06 пропущено");
  if (await page.$("#quit")) await page.click("#quit");
  if (await page.$("#m-pair:not([disabled])")) {
    await page.click("#m-pair"); await page.waitForTimeout(250); await shot("07-pair");
    await page.click("#quit");
  }
  await page.click("button[data-v=cat]"); await page.waitForTimeout(400); await shot("08-catalog");
  report.push(...(await small("catalog")).slice(0, 10));
  await page.click("button[data-v=prog]"); await page.waitForTimeout(300); await shot("09-progress");

  console.log(`Скриншоти: ${OUT}`);
  console.log(errors.length ? "JS-помилки:\n" + errors.join("\n") : "JS-помилок немає");
  console.log(report.length ? "Зони дотику < 24×24:\n" + [...new Set(report)].join("\n") : "Зон дотику < 24×24 немає");
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
