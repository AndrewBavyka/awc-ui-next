<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <div class="attributes-section">
      <h2>awc-accordion Attributes</h2>

      <table class="attributes-table">
        <thead>
          <tr>
            <th>Name and Description</th>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Отключение группы
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-disabled" type="checkbox" v-model="parentAttributes.disabled" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[autoclose]</strong><br>
              Отключение автозакрытия элементов
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-autoclose" type="checkbox" v-model="parentAttributes.autoclose" />
        </td>
          </tr>

        </tbody>
      </table>
    

      <h3>awc-accordion-item</h3>

      <table class="attributes-table">
        <thead>
          <tr>
            <th>Name and Description</th>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <strong>[title]</strong><br>
              Заголовок элемента аккордеона
            </td>
            <td>string</td>
            <td>
          <input id="awcAccordionItem-title" type="text" v-model="awcAccordionItemAttributes.title" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[active]</strong><br>
              Активность элемента аккордеона
            </td>
            <td>boolean</td>
            <td>
          <input id="awcAccordionItem-active" type="checkbox" v-model="awcAccordionItemAttributes.active" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Отключение элемента аккордеона
            </td>
            <td>boolean</td>
            <td>
          <input id="awcAccordionItem-disabled" type="checkbox" v-model="awcAccordionItemAttributes.disabled" />
        </td>
          </tr>

        </tbody>
      </table>
    

    </div>
    <div class="preview-section">
      <h2>Preview</h2>
      <awc-accordion v-bind="parentAttributes">
      <awc-accordion-item v-bind="awcAccordionItemAttributes"></awc-accordion-item>
      </awc-accordion>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface ParentAttributes {
  disabled: boolean
  autoclose: boolean
}
interface awcAccordionItemAttributes {
  title: string
  active: boolean
  disabled: boolean
}

const title = 'AwcAccordion';
const parentAttributes = reactive<ParentAttributes>({
  disabled: false,
  autoclose: false
});
const awcAccordionItemAttributes = reactive<awcAccordionItemAttributes>({
  title: "",
  active: false,
  disabled: false
});
</script>

<style scoped>
.component-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.attributes-section {
  width: 100%;
}

.attributes-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.attributes-table th,
.attributes-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.attributes-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.attributes-table td {
  vertical-align: top;
}

.attributes-table strong {
  color: #e74c3c;
}

.attributes-table select,
.attributes-table input[type="text"],
.attributes-table input[type="number"],
.attributes-table input[type="checkbox"] {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

.preview-section {
  margin-top: 20px;
}

h2, h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>