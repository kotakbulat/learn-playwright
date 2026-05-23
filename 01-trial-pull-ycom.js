const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage();

  await page.goto('https://news.ycombinator.com');

  const titles = await page.locator('.titleline').allTextContents();

  console.log(titles);

  await browser.close();
})();