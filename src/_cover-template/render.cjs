const { chromium } = require("C:/Users/HuaWei/.claude/skills/guizang-social-card-skill/node_modules/playwright");
const { pathToFileURL } = require("url");
const path = require("path");
(async () => {
  const b = await chromium.launch();
  const url = pathToFileURL(path.resolve(__dirname, "covers.html")).href;
  const p = await b.newPage({ deviceScaleFactor: 2 });
  await p.setViewportSize({ width: 2400, height: 1100 });
  await p.goto(url, { waitUntil: "networkidle" });
  await p.waitForTimeout(600);
  for (const id of ["digital-lean-paths", "5s-guide", "vsm-guide", "lean-five-principles"]) {
    const handle = await p.$(`[id="${id}"]`);
    await handle.screenshot({ path: path.resolve(__dirname, `cover-${id}.png`) });
    console.log("ok", id);
  }
  await b.close();
})().catch(e => { console.error("FAIL", e.message); process.exit(1); });
