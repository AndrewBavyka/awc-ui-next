import { test, expect } from '@playwright/test';
import AwcInput from './awc-input';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    await expect(page.locator('awc-input')).toBeVisible();
});

test('awc-input отрендерен на странице', async ({ page }) => {
    await expect(page.locator('awc-input')).toBeVisible();
});

test('Проверка размеров awc-input', async ({ page }) => {
    await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        if (awcInput) awcInput.size = 'large';
    });
    await expect(page.locator('awc-input')).toHaveAttribute('size', 'large');

    await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        if (awcInput) awcInput.size = 'medium';
    });
    await expect(page.locator('awc-input')).toHaveAttribute('size', 'medium');

    await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        if (awcInput) awcInput.size = 'small';
    });

    await expect(page.locator('awc-input')).toHaveAttribute('size', 'small');
});

test('Проверка placeholder', async ({ page }) => {
    await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        if (awcInput) awcInput.placeholder = 'Test placeholder';
    });

    const placeholder = await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        return awcInput?.shadowRoot?.querySelector('input')?.getAttribute('placeholder');
    });

    expect(placeholder).toBe('Test placeholder');
});

test('Проверка изменений значения поля ввода', async ({ page }) => {
    await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        if (awcInput) awcInput.value = 'Test value';
    });

    const value = await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        return awcInput?.shadowRoot?.querySelector('input')?.value;
    });

    expect(value).toBe('Test value');
});

test('Проверка валидации обязательного поля', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <form id="test-form">
            <awc-input type="text" name="awc-input" size="medium" required></awc-input>
            <button type="submit">Submit</button>
        </form>
    `);

    await page.click('button[type="submit"]');

    const validationMessage = await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        const input = awcInput?.shadowRoot?.querySelector('input');
        return input ? input.validationMessage : '';
    });

    expect(validationMessage).not.toBe('');
});

test('Проверка иконки видимости пароля', async ({ page }) => {
    await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        if (awcInput) awcInput.type = 'password';
    });

    const passwordButton = await page.evaluate(() => {
        const awcInput = document.querySelector('awc-input') as AwcInput;
        return awcInput?.shadowRoot?.querySelector('.awc-input__password') !== null;
    });

    expect(passwordButton).toBe(true);
});

test('Отправка данных из формы', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <form id="test-form">
            <awc-input type="text" name="awc-input" size="medium" required></awc-input>
            <button type="submit">Submit</button>
        </form>
    `);

    await page.fill('input', 'Hello World!');

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

    const inputValue = await page.evaluate(() => {
        const form = document.getElementById('test-form') as HTMLFormElement;
        const formData = new FormData(form);
        return formData.get('awc-input') as string;
    });

    expect(isSubmitted).toBe(true);
    expect(inputValue).toBe('Hello World!');

    console.log(`Данные успешно отправлены из формы: ${inputValue}`);
});
