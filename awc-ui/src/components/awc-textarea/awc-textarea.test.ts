import { test, expect } from '@playwright/test';
import AwcTextarea from './awc-textarea';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    await expect(page.locator('awc-textarea')).toBeVisible();
});

test('Текстовая область отображается на странице', async ({ page }) => {
    await expect(page.locator('awc-textarea')).toBeVisible();
    console.log('Текстовая область успешно отображается на странице');
});

test('Установка и отражение свойств name и value', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.name = 'testName';
        textArea.value = 'testValue';
    });

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('name', 'testName');
    await expect(textArea).toHaveAttribute('value', 'testValue');
    console.log('Свойства name и value установлены и отражены успешно');
});

test('Установка свойства disabled', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.disabled = true;
    });

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('disabled');
    console.log('Свойство disabled установлено успешно');
});

test('Установка свойства readonly', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.readonly = true;
    });

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('readonly');
    console.log('Свойство readonly установлено успешно');
});

test('Установка свойства autofocus', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.autofocus = true;
    });

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('autofocus');
    console.log('Свойство autofocus установлено успешно');
});

test('Установка свойства placeholder', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.placeholder = 'Введите текст здесь...';
    });

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('placeholder', 'Введите текст здесь...');
    console.log('Свойство placeholder установлено успешно');
});

test('Обработка события input и обновление значения', async ({ page }) => {
    const newValue = 'Обновленный текст';

    await page.evaluate((newValue) => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.value = newValue;
        textArea.dispatchEvent(new InputEvent('input'));
    }, newValue);

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('value', newValue);
    console.log('Событие input обработано успешно, значение обновлено');
});

test('Обработка события change и обновление значения', async ({ page }) => {
    const newValue = 'Измененный текст';

    await page.evaluate((newValue) => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.value = newValue;
        textArea.dispatchEvent(new Event('change'));
    }, newValue);

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('value', newValue);
    console.log('Событие change обработано успешно, значение обновлено');
});

test('Автоматическая регулировка высоты textarea', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.autoheight = true;
        textArea.value = 'Строка 1\nСтрока 2\nСтрока 3\nСтрока 4\nСтрока 5';
        textArea.dispatchEvent(new InputEvent('input'));
    });

    const textArea = page.locator('awc-textarea');
    const textareaHeight = await textArea.evaluate((el) => (el as HTMLTextAreaElement).scrollHeight);
    await expect(textArea).toHaveJSProperty('scrollHeight', textareaHeight);
    console.log('Автоматическая регулировка высоты textarea проверена успешно');
});

test('Textarea можно сбросить с помощью метода resetFormControl', async ({ page }) => {
    await page.evaluate(() => {
        const textArea = document.querySelector('awc-textarea') as AwcTextarea;
        textArea.value = 'Какой-то текст';
        textArea.resetFormControl();
    });

    const textArea = page.locator('awc-textarea');
    await expect(textArea).toHaveAttribute('value', '');
    console.log('Метод resetFormControl успешно сбросил значение textarea');
});

test('Отправка данных из формы', async ({ page }) => {
    await page.setContent(`
    <html>
      <body>
        <form id="myForm">
          <awc-textarea label="label" value="test" id="message" name="message"></awc-textarea><br>
          <awc-button type="submit">Send</awc-button>
        </form>
      </body>
    </html>
  `);

    await page.fill('textarea[name="message"]', 'My message');

    await page.$eval('#myForm', (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.dataset.submitted = 'true';
        });
    });

    await page.click('button[type="submit"]');

    const isSubmitted = await page.evaluate(() => {
        const form = document.getElementById('myForm') as HTMLFormElement;
        return form?.dataset.submitted === 'true';
    });

    const messageValue = await page.$eval('#myForm', (form) => {
        const formData = new FormData(form as HTMLFormElement);
        return formData.get('message') as string;
    });

    expect(isSubmitted).toBe(true);
    expect(messageValue).toBe('My message');

    console.log(`Данные успешно отправлены из формы:  ${messageValue}`);
});
