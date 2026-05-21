const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({
    headless: false
  });

  // Create page
  const page = await browser.newPage();

  // Open website
  await page.goto('https://example.com');

  // Get title
  const title = await page.title();

  console.log(title);

  // Close browser
  await browser.close();
})();