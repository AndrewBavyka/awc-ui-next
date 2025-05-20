import { test, expect } from '@playwright/test';
import AwcCheckboxGroup from './awc-checkbox-group';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);

    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <awc-checkbox-group label="Group Label" hint="Group Hint">
            <awc-checkbox label="Checkbox 1" value="1"></awc-checkbox>
            <awc-checkbox label="Checkbox 2" value="2"></awc-checkbox>
            <awc-checkbox label="Checkbox 3" value="3"></awc-checkbox>
        </awc-checkbox-group>
    `);
});

test('должен корректно отображать метку и подсказку', async ({ page }) => {
    const group = page.locator('awc-checkbox-group');
    const label = group.locator('legend');
    const hint = group.locator('.awc-checkbox-group__hint');

    await expect(label).toHaveText('Group Label');
    await expect(hint).toHaveText('Group Hint');
});

test('должен корректно обрабатывать состояние чекбоксов', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <awc-checkbox-group label="Group Label" hint="Group Hint">
            <awc-checkbox label="Checkbox 1" value="1"></awc-checkbox>
            <awc-checkbox label="Checkbox 2" value="2"></awc-checkbox>
            <awc-checkbox label="Checkbox 3" value="3"></awc-checkbox>
        </awc-checkbox-group>
    `);

    const checkbox1 = page.locator(`awc-checkbox[value="1"] input`);
    const checkbox2 = page.locator(`awc-checkbox[value="2"] input`);
    const checkbox3 = page.locator(`awc-checkbox[value="3"] input`);

    await checkbox1.check();
    await checkbox2.check();

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();
    await expect(checkbox3).not.toBeChecked();
});

test('должен фокусироваться на следующем элементе при нажатии клавиш навигации', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />

        <awc-checkbox-group tabIndex=-1 label="Group Label" hint="Group Hint">
            <awc-checkbox label="Checkbox 1" value="1"></awc-checkbox>
            <awc-checkbox label="Checkbox 2" value="2"></awc-checkbox>
            <awc-checkbox label="Checkbox 3" value="3"></awc-checkbox>
        </awc-checkbox-group>
    `);

    const checkbox1 = page.locator(`awc-checkbox[value="1"] input`);
    const checkbox2 = page.locator(`awc-checkbox[value="2"] input`);
    const checkbox3 = page.locator(`awc-checkbox[value="3"] input`);

    await page.keyboard.press('Tab');

    await expect(checkbox1).toBeFocused();

    await page.keyboard.press('ArrowDown');

    await expect(checkbox2).toBeFocused();

    await page.keyboard.press('ArrowDown');

    await expect(checkbox3).toBeFocused();
});

test('должен корректно обновлять состояние value при изменении чекбоксов', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <awc-checkbox-group label="Group Label" hint="Group Hint">
            <awc-checkbox label="Checkbox 1" value="1"></awc-checkbox>
            <awc-checkbox label="Checkbox 2" value="2"></awc-checkbox>
            <awc-checkbox label="Checkbox 3" value="3"></awc-checkbox>
        </awc-checkbox-group>
    `);

    const checkbox1 = page.locator(`awc-checkbox[value="1"] input`);
    const checkbox2 = page.locator(`awc-checkbox[value="2"] input`);

    await checkbox1.check();
    await checkbox2.check();

    const value = await page.evaluate(() => {
        const group = document.querySelector('awc-checkbox-group') as AwcCheckboxGroup;
        return group.value;
    });

    expect(value).toEqual(['1', '2']);
});

test('Отправка данных из формы', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <form id="test-form">
            <awc-checkbox-group label="Group Label" hint="Group Hint">
                <awc-checkbox name="checkbox1" label="Checkbox 1" value="1"></awc-checkbox>
                <awc-checkbox name="checkbox2" label="Checkbox 2" disabled value="2"></awc-checkbox>
                <awc-checkbox name="checkbox3" label="Checkbox 3" value="3"></awc-checkbox>
            </awc-checkbox-group>
            <button type="submit">Submit</button>
        </form>
    `);

    const checkbox1 = page.locator('awc-checkbox[value="1"] input');
    const checkbox3 = page.locator('awc-checkbox[value="3"] input');

    await checkbox1.check();
    await checkbox3.check();

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
        checkbox1: '1',
        checkbox3: '3',
    });

    console.log(`Данные успешно отправлены из формы: ${JSON.stringify(formData)}`);
});
