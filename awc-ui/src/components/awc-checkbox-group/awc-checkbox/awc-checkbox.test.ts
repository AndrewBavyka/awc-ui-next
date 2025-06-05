import { test, expect } from '@playwright/test';
import AwcCheckbox from './awc-checkbox';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
});

test('Должен быть определен экземпляр группы флажков', async ({ page }) => {
    const el = await page.evaluate(() => {
        const checkbox = document.createElement('awc-checkbox') as AwcCheckbox;
        checkbox.label = 'Test Label';
        checkbox.name = 'awc-checkbox';
        document.body.appendChild(checkbox);
        return checkbox;
    });

    await expect(page.locator('awc-checkbox[name="awc-checkbox"]')).toBeVisible();
    expect(el).not.toBeNull();
});

test('Корректное отображение label', async ({ page }) => {
    await page.evaluate(() => {
        const checkbox = document.createElement('awc-checkbox') as AwcCheckbox;
        checkbox.label = 'Test Label';
        checkbox.name = 'awc-checkbox';
        document.body.appendChild(checkbox);

        return checkbox;
    });

    const label = await page.$eval('awc-checkbox[name="awc-checkbox"]', (checkbox) => checkbox.getAttribute('label'));
    expect(label).toBe('Test Label');

    const shadowLabel = await page.evaluate(() => {
        const checkbox = document.querySelector('awc-checkbox[name="awc-checkbox"]') as AwcCheckbox;
        console.log(checkbox.shadowRoot?.querySelector('label'));
        return checkbox.shadowRoot?.querySelector('label')?.textContent;
    });

    expect(shadowLabel).toContain('Test Label');
});

test('Корректное отображение иконки при checked', async ({ page }) => {
    await page.evaluate(() => {
        const checkbox = document.createElement('awc-checkbox') as AwcCheckbox;

        checkbox.label = 'Test Label';
        checkbox.name = 'awc-checkbox';
        checkbox.checked = true;
        checkbox.label = 'Test Label';

        document.body.appendChild(checkbox);

        return checkbox;
    });

    const isChecked = await page.$eval('awc-checkbox[name="awc-checkbox"]', (checkbox) => (checkbox as AwcCheckbox).checked);

    expect(isChecked).toBe(true);
});

test('Проверка события change', async ({ page }) => {
    await page.evaluate(() => {
        const checkbox = document.createElement('awc-checkbox') as AwcCheckbox;

        checkbox.label = 'Test Label';
        checkbox.name = 'awc-checkbox';
        checkbox.label = 'Test Label';

        document.body.appendChild(checkbox);

        return checkbox;
    });

    await page.evaluate(() => {
        const checkbox = document.querySelector('awc-checkbox[name="awc-checkbox"]') as AwcCheckbox;

        checkbox.addEventListener('change', (event: Event) => {
            console.log('change event:', event);
        });
    });

    const consoleMessages: string[] = [];

    page.on('console', (message) => {
        if (message.type() === 'log') {
            consoleMessages.push(message.text());
        }
    });

    await page.click('awc-checkbox[name="awc-checkbox"]');

    expect(consoleMessages.some((msg) => msg.includes('change event:'))).toBe(true);
});

test('Проверка работы обязательного поля (required)', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <form id="test-form">
            <awc-checkbox id="test-checkbox" required label="Test Label in Form" value="test-value"></awc-checkbox>
            <button type="submit">Submit</button>
        </form>
    `);

    await page.click('button[type="submit"]');

    const validationMessage = await page.evaluate(() => {
        const checkbox = document.querySelector('awc-checkbox') as AwcCheckbox;
        return checkbox.shadowRoot?.querySelector('input')?.validationMessage;
    });

    expect(validationMessage).not.toBe('');
});

test('Проверка отключенного состояния (disabled)', async ({ page }) => {
    await page.evaluate(() => {
        const checkbox = document.createElement('awc-checkbox') as AwcCheckbox;

        checkbox.label = 'Test Label';
        checkbox.name = 'awc-checkbox';
        checkbox.label = 'Test Label';
        checkbox.disabled = true;

        document.body.appendChild(checkbox);

        return checkbox;
    });

    const isDisabled = await page.$eval('awc-checkbox[name="awc-checkbox"]', (checkbox) => (checkbox as AwcCheckbox).disabled);
    expect(isDisabled).toBe(true);

    const shadowInput = await page.evaluate(() => {
        const checkbox = document.querySelector('awc-checkbox[name="awc-checkbox"]') as AwcCheckbox;
        return checkbox.shadowRoot?.querySelector('input')?.disabled;
    });
    expect(shadowInput).toBe(true);
});

test('Отправка данных из формы', async ({ page }) => {
    await page.setContent(`
        <link rel="stylesheet" href="../global.css" />
        <form id="test-form">
            <awc-checkbox type="text" value="Hello World!" name="awc-checkbox" required></awc-checkbox>
            <button type="submit">Submit</button>
        </form>
    `);

    await page.click("awc-checkbox[name='awc-checkbox']");

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
        return formData.get('awc-checkbox') as string;
    });

    expect(isSubmitted).toBe(true);
    expect(inputValue).toBe('Hello World!');

    console.log(`Данные успешно отправлены из формы: ${inputValue}`);
});
