const { test, expect } = require('@playwright/test');

test('トップページのテスト', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  await expect(page.locator('h1')).toContainText('h1ですよ')
  await expect(page.locator('h2')).toContainText('h2ですよ')

  // Click text=サンプルに飛ぶよ！
  await page.locator('text=サンプルに飛ぶよ！').click();
  await expect(page).toHaveURL('http://localhost:3000/sample1/');
})