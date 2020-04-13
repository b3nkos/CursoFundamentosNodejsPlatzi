const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  const title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1.innerHTML;
  });

  console.log(title1);

  console.log('closing browser');
  browser.close();
})();