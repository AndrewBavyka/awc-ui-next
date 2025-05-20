<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <div class="attributes-section">
      <h2>awc-icon Attributes</h2>

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
              <strong>[type]</strong><br>
              Элемент для отображения иконок.
            </td>
            <td>string</td>
            <td>
          <input id="parent-type" type="text" v-model="parentAttributes.type" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[size]</strong><br>
              Указываеся размер иконки
            </td>
            <td>string</td>
            <td>
          <input id="parent-size" type="text" v-model="parentAttributes.size" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[name]</strong><br>
              Имя или идентификатор конкретной иконки.
            </td>
            <td>string</td>
            <td>
          <input id="parent-name" type="text" v-model="parentAttributes.name" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[iconScale]</strong><br>
              Изменение размеров иконки
            </td>
            <td>string</td>
            <td>
          <input id="parent-iconScale" type="text" v-model="parentAttributes.iconScale" />
        </td>
          </tr>

        </tbody>
      </table>
    

      <h3>awc-icon-loader</h3>

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
              <strong>[type]</strong><br>
              
            </td>
            <td>string</td>
            <td>
          <input id="awcIconLoader-type" type="text" v-model="awcIconLoaderAttributes.type" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[size]</strong><br>
              
            </td>
            <td>string</td>
            <td>
          <input id="awcIconLoader-size" type="text" v-model="awcIconLoaderAttributes.size" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[src]</strong><br>
              
            </td>
            <td>string</td>
            <td>
          <input id="awcIconLoader-src" type="text" v-model="awcIconLoaderAttributes.src" />
        </td>
          </tr>

        </tbody>
      </table>
    

    </div>
    <div class="preview-section">
      <h2>Preview</h2>
      <awc-icon v-bind="parentAttributes">
      <awc-icon-loader v-bind="awcIconLoaderAttributes"></awc-icon-loader>
      </awc-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface ParentAttributes {
  type: string
  size: string
  name: string
  iconScale: string
}
interface awcIconLoaderAttributes {
  type: string
  size: string
  src: string
}

const title = 'AwcIcon';
const parentAttributes = reactive<ParentAttributes>({
  type: 'icon',
  size: '16',
  name: "",
  iconScale: ""
});
const awcIconLoaderAttributes = reactive<awcIconLoaderAttributes>({
  type: 'icon',
  size: "",
  src: ""
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