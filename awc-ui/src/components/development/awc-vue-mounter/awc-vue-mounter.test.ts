import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);

    await page.setContent(`
    <link rel="stylesheet" href="./global.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>

    <script>
      window.vueComponents = {
        SimpleComponent: Vue.extend({
          template: \`
            <div>
              <p>{{ message }}</p>
              <button @click="updateMessage">Click to Update</button>
            </div>\`,
          data() {
            return { message: "Hello from SimpleComponent!" };
          },
          methods: {
            updateMessage() {
              this.message = "Message updated!";
            }
          }
        }),

        AdvancedComponent: Vue.extend({
          template: \`
            <div>
              <h2>{{ title }}</h2>
              <ul>
                <li v-for="item in items" :key="item">{{ item }}</li>
              </ul>
              <input v-model="newItem" placeholder="Add new item" />
              <button @click="addItem">Add Item</button>
            </div>\`,
          data() {
            return {
              title: "Advanced Component with Closure",
              items: ["Item 1", "Item 2"],
              newItem: "",
              extraData: this.$options.initialData
            };
          },
          methods: {
            addItem() {
              if (this.newItem) {
                this.items.push(this.newItem);
                this.newItem = "";
              }
            }
          }
        })
      };

      Vue.component('my-h1', {
        template: '<h1>{{ message }}</h1>',
        props: ['message']
      });
    </script>
  `);
});

test('Рендер после инициализации в объекте window', async ({ page }) => {
    await page.setContent(`
    <awc-vue-mounter name="vueComponents.SimpleComponent" type="construct"></awc-vue-mounter>
    <awc-vue-mounter name="vueComponents.AdvancedComponent" type="closure"></awc-vue-mounter>
    <awc-vue-mounter name="my-h1" type="component" options='{"message": "Hello, world!"}'></awc-vue-mounter>
  `);

    // Проверка SimpleComponent
    await expect(page.locator('p')).toHaveText('Hello from SimpleComponent!');

    // Клик по кнопке в SimpleComponent
    await page.click('button:has-text("Click to Update")');
    await expect(page.locator('p')).toHaveText('Message updated!');

    // Проверка my-h1
    await expect(page.locator('<h1>')).toHaveText('Hello, world!');

    // Проверка AdvancedComponent
    await expect(page.locator('h2')).toHaveText('Advanced Component with Closure');
    await expect(page.locator('ul li')).toHaveCount(2);

    // Добавление нового элемента
    await page.fill('input[placeholder="Add new item"]', 'Item 3');
    await page.click('button:has-text("Add Item")');
    await expect(page.locator('ul li')).toHaveCount(3);
    await expect(page.locator('ul li')).toContainText(['Item 1', 'Item 2', 'Item 3']);
});
