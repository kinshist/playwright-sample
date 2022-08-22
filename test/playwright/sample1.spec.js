const { test, expect } = require('@playwright/test');

test('初期表示の確認', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/sample1`);
  await expect(page.locator('h1:nth-of-type(1)')).toContainText('エリアを選択してください。')
  await expect(page.locator('h1:nth-of-type(2)')).toContainText('都道府県')
  await expect(page.locator('select')).toContainText('選択してください')
})

test('エリア選択(北海道)の確認', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/sample1`);
  await page.locator('select').selectOption('北海道');
  await expect(page.locator('.prefList')).toContainText('北海道')
})

test('エリア選択(東北)の確認', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/sample1`);
  await page.locator('select').selectOption('東北');
  await expect(page.locator('.prefList')).toContainText('青森県')
})

test('エリア選択(関東)の確認', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/sample1`);
  await page.locator('select').selectOption('関東');
  await expect(page.locator('.prefList')).toContainText('千葉県')
})

test('エリア選択(関西)の確認', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/sample1`);
  await page.locator('select').selectOption('関西');
  await expect(page.locator('.error')).toContainText('都道府県が未登録です。')
})