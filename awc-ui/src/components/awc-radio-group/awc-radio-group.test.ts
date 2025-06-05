import { test, expect } from '@playwright/test';
import AwcRadio from './awc-radio/awc-radio';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);

    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <awc-radio-group label="Group Label" hint="Group Hint">
            <awc-radio label="Radio 1" value="1"></awc-radio>
            <awc-radio label="Radio 2" value="2"></awc-radio>
            <awc-radio label="Radio 3" value="3"></awc-radio>
        </awc-radio-group>
    `);
});

test('должен корректно отображать метку и подсказку', async ({ page }) => {
    const group = page.locator('awc-radio-group');
    const label = group.locator('legend');
    const hint = group.locator('.awc-radio-group__hint');

    await expect(label).toHaveText('Group Label');
    await expect(hint).toHaveText('Group Hint');
});

test('должен корректно обрабатывать состояние радиокнопок', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <awc-radio-group label="Group Label" hint="Group Hint">
            <awc-radio label="Radio 1" value="1"></awc-radio>
            <awc-radio label="Radio 2" value="2"></awc-radio>
            <awc-radio label="Radio 3" value="3"></awc-radio>
        </awc-radio-group>
    `);

    const clickRadio = async (value: string) => {
        await page.$eval(`awc-radio[value="${value}"]`, (el: HTMLElement) => {
            const radio = el.shadowRoot?.querySelector('[role="radio"]');
            if (radio) {
                (radio as HTMLElement).click();
            }
        });
    };

    await clickRadio('1');

    expect(await page.$eval(`awc-radio[value="1"]`, (el: HTMLElement) => el.hasAttribute('checked'))).toBe(true);
    expect(await page.$eval(`awc-radio[value="2"]`, (el: HTMLElement) => el.hasAttribute('checked'))).toBe(false);
    expect(await page.$eval(`awc-radio[value="3"]`, (el: HTMLElement) => el.hasAttribute('checked'))).toBe(false);

    await clickRadio('2');

    expect(await page.$eval(`awc-radio[value="1"]`, (el: HTMLElement) => el.hasAttribute('checked'))).toBe(false);
    expect(await page.$eval(`awc-radio[value="2"]`, (el: HTMLElement) => el.hasAttribute('checked'))).toBe(true);
    expect(await page.$eval(`awc-radio[value="3"]`, (el: HTMLElement) => el.hasAttribute('checked'))).toBe(false);
});

test('должен фокусироваться на следующем элементе при нажатии клавиш навигации', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />

        <awc-radio-group tabIndex=-1 label="Group Label" hint="Group Hint">
            <awc-radio label="Radio 1" value="1"></awc-radio>
            <awc-radio label="Radio 2" value="2"></awc-radio>
            <awc-radio label="Radio 3" value="3"></awc-radio>
        </awc-radio-group>
    `);

    const radio1 = page.locator(`awc-radio[value="1"] [role="radio"]`);
    const radio2 = page.locator(`awc-radio[value="2"] [role="radio"]`);
    const radio3 = page.locator(`awc-radio[value="3"] [role="radio"]`);

    await page.keyboard.press('Tab');

    await expect(radio1).toBeFocused();

    await page.keyboard.press('ArrowDown');

    await expect(radio2).toBeFocused();

    await page.keyboard.press('ArrowDown');

    await expect(radio3).toBeFocused();
});

test('должен корректно обновлять состояние value при изменении радиокнопок', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <awc-radio-group label="Group Label" hint="Group Hint">
            <awc-radio label="Radio 1" value="1"></awc-radio>
            <awc-radio label="Radio 2" value="2"></awc-radio>
            <awc-radio label="Radio 3" value="3"></awc-radio>
        </awc-radio-group>
    `);

    const radio1 = page.locator(`awc-radio[value="1"] [role="radio"]`);
    const radio2 = page.locator(`awc-radio[value="2"] [role="radio"]`);

    await radio1.check();
    await radio2.check();

    const value = await page.evaluate(() => {
        const radio = document.querySelector("awc-radio[value='2']") as AwcRadio;
        return radio.value;
    });

    expect(value).toEqual('2');
});

test('Отправка данных из формы', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <form id="test-form">
            <awc-radio-group label="Group Label" hint="Group Hint">
                <awc-radio name="radio" label="Radio 1" value="1"></awc-radio>
                <awc-radio name="radio" label="Radio 2" disabled value="2"></awc-radio>
                <awc-radio name="radio" label="Radio 3" value="3"></awc-radio>
            </awc-radio-group>
            <button type="submit">Submit</button>
        </form>
    `);

    const radio1 = page.locator('awc-radio[value="1"]  [role="radio"]');
    const radio3 = page.locator('awc-radio[value="3"] [role="radio"]');

    await radio1.check();
    await radio3.check();

    await page.$eval('#test-form', (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.dataset.submitted = 'true';
        });
    });

    await page.click('button[type="submit"]');

    const isSubmitted = await page.evaluate(() => {
        const form = document.getElementById('test-form') as HTMLFormElement;
        return form?.dataset.submitted === 'true';
    });

    const formData = await page.evaluate(() => {
        const form = document.getElementById('test-form') as HTMLFormElement;
        const formData = new FormData(form);
        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value as string;
        });
        return data;
    });

    expect(isSubmitted).toBe(true);
    expect(formData).toEqual({
        radio: '3',
    });

    console.log(`Данные успешно отправлены из формы: ${JSON.stringify(formData)}`);
});
