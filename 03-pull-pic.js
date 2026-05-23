const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://www.blogger.com/about');

  let imageUrl = await page
    .locator('img')
    .first()
    .getAttribute('src');

  // Fix protocol-relative URL
  if (imageUrl.startsWith('//')) {
    imageUrl = 'https:' + imageUrl;
  }

  console.log(imageUrl);

  const file = fs.createWriteStream('image.jpg');

  https.get(imageUrl, response => {
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log('Downloaded');
    });
  });

  await browser.close();
})();