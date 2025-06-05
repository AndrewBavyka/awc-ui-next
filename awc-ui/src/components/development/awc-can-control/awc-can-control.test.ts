import { test, expect } from '@playwright/test';
import AwcCanControl from './awc-can-control';

interface AwcCanControlElement extends HTMLElement {
    _canInstance: any;
    name: string;
    options: any;
}

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);

    await page.setContent(`
    <div>
      <button id="add-control">Add Control</button>
      <button id="remove-control">Remove Control</button>
      <div id="control-container"></div>
    </div>
  `);

    await page.evaluate(() => {
        const addButton = document.getElementById('add-control')!;
        const removeButton = document.getElementById('remove-control')!;
        const container = document.getElementById('control-container')!;

        addButton.addEventListener('click', () => {
            const canControl = document.createElement('awc-can-control') as AwcCanControl;

            canControl.setAttribute('name', 'ControlLeadCurrency');
            canControl.options = {
                currencies: ['USD', 'EUR', 'GBP'],
                useProducts: true,
                useAutoCalc: false,
                calcOnlyByProducts: true,
                target: {
                    module: 'crm',
                    model: 'leads',
                    model_id: 123,
                },
            };

            const innerDiv = document.createElement('div');
            innerDiv.className = 'tabs-component';
            innerDiv.innerHTML = '<p>Content inside tabs component.</p>';

            canControl.appendChild(innerDiv);
            container.appendChild(canControl);
        });

        removeButton.addEventListener('click', () => {
            const canControl = container.querySelector('awc-can-control');
            if (canControl) {
                container.removeChild(canControl);
            }
        });
    });
});

test('Динамическое создание AwcCanControl', async ({ page }) => {
    await page.click('#add-control');

    const controlElement = await page.$('awc-can-control');
    expect(controlElement).not.toBeNull();

    const name = await controlElement?.evaluate((el) => (el as AwcCanControlElement).name);
    expect(name).toBe('ControlLeadCurrency');

    const options = await controlElement?.evaluate((el) => (el as AwcCanControlElement).options);
    expect(options).toMatchObject({
        currencies: ['USD', 'EUR', 'GBP'],
        useProducts: true,
        useAutoCalc: false,
        calcOnlyByProducts: true,
        target: {
            module: 'crm',
            model: 'leads',
            model_id: 123,
        },
    });
});

test('Динамическое удаление AwcCanControl', async ({ page }) => {
    await page.click('#add-control');

    let controlElement = await page.$('awc-can-control');
    expect(controlElement).not.toBeNull();

    await page.click('#remove-control');

    controlElement = await page.$('awc-can-control');
    expect(controlElement).toBeNull();
});
