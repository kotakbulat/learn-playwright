const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://www.blogger.com/about');

  await page.waitForTimeout(3000);

  await page.screenshot({
    path: 'fullpage.png',
    fullPage: true
  });

  console.log('Full page screenshot saved');

  await browser.close();
})();