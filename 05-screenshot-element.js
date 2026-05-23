const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://www.blogger.com/about');

  await page.waitForTimeout(3000);

  // Select element
  const image = page.locator('img').first();

  // Screenshot element only
  await image.screenshot({
    path: 'element.png'
  });

  console.log('Element screenshot saved');

  await browser.close();
})();