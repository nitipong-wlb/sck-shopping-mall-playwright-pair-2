import { test, expect } from '@playwright/test';


test('เข้าสู่ระบบ ค้นหาสินค้า และสั่งซื้อสินค้า Balance Training Bicycle 1 ชิ้น สำเร็จ', async ({ page }) => {
  await test.step('เข้าสู่ระบบ',async ()=> {
    await page.goto('http://139.59.225.96/auth/login');

    await page.locator('#login-username-input').fill('user_10');
    await page.locator('#login-password-input').fill('P@ssw0rd');
    await page.locator('#login-btn').click();
  });


});