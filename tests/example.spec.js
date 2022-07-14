const { test, expect, chromium } = require('@playwright/test');

test('basic test', async ({ page }) => {
  
  await page.goto('https://redmine.org/');
  //await page.keyboard.type('Hello World!');
  await page.type('[name="q"]', 'Document', {delay: 100});
  await page.keyboard.press('Enter');

  //await delay(3000);

  await page.waitForTimeout(2000);

  await page.click('[href="/projects/redmine/wiki/HowTo_Install_Redmine_50x_on_Ubuntu_2004_with_Apache2"]');

  await page.waitForTimeout(2000);

  await page.close();

 // await browser.close();

  //await expect(title).toHaveText('Playwright');
});