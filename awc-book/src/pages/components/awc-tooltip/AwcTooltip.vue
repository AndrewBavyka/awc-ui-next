<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <div class="attributes-section">
      <h2>awc-tooltip Attributes</h2>

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
              <strong>[message]</strong><br>
              Текст сообщения, отображаемого в тултипе.
            </td>
            <td>string</td>
            <td>
          <input id="parent-message" type="text" v-model="parentAttributes.message" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[position]</strong><br>
              Позиция тултипа относительно элемента.
            </td>
            <td>AwcTooltipPosition</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <strong>[spacing]</strong><br>
              Расстояние в пикселях между тултипом и элементом.
            </td>
            <td>AwcTooltipSpacing</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <strong>[strategy]</strong><br>
              Стратегия позиционирования тултипа (absolute или fixed).
            </td>
            <td>AwcTooltipStrategy</td>
            <td></td>
          </tr>

          <tr>
            <td>
              <strong>[marker]</strong><br>
              Показывать ли стрелку, указывающую на элемент.
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-marker" type="checkbox" v-model="parentAttributes.marker" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[active]</strong><br>
              Определяет, виден ли тултип в данный момент.
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-active" type="checkbox" v-model="parentAttributes.active" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Отключает взаимодействие с тултипом (например, при наведении или клике).
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-disabled" type="checkbox" v-model="parentAttributes.disabled" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[matchWidth]</strong><br>
              Растягивает ширину тултипа до ширины дочернего элемента.
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-matchWidth" type="checkbox" v-model="parentAttributes.matchWidth" />
        </td>
          </tr>

        </tbody>
      </table>
    

    </div>
    <div class="preview-section">
      <h2>Preview</h2>
      <awc-tooltip v-bind="parentAttributes">

      </awc-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface ParentAttributes {
  message: string
  position: AwcTooltipPosition
  spacing: AwcTooltipSpacing
  strategy: AwcTooltipStrategy
  marker: boolean
  active: boolean
  disabled: boolean
  matchWidth: boolean
}


const title = 'AwcTooltip';
const parentAttributes = reactive<ParentAttributes>({
  message: 'Tooltip',
  position: 'top',
  spacing: '8',
  strategy: 'absolute',
  marker: true,
  active: false,
  disabled: false,
  matchWidth: false
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