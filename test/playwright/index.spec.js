const { test, expect } = require('@playwright/test');

test('トップページの見出し', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  // await page.screenshot({ path: 'test-results/index.png', fullPage: true });

  await expect(page.locator('h1')).toContainText('h1ですよ')
  await expect(page.locator('h2')).toContainText('h2ですよ')
})