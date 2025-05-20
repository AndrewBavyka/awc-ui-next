<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <div class="attributes-section">
      <h2>awc-spinner Attributes</h2>

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
              <strong>[size]</strong><br>
              Размер спинера
            </td>
            <td>string</td>
            <td>
          <input id="parent-size" type="text" v-model="parentAttributes.size" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[variant]</strong><br>
              Цвет спинера
            </td>
            <td>string</td>
            <td>
          <input id="parent-variant" type="text" v-model="parentAttributes.variant" />
        </td>
          </tr>

        </tbody>
      </table>
    

    </div>
    <div class="preview-section">
      <h2>Preview</h2>
      <awc-spinner v-bind="parentAttributes">

      </awc-spinner>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface ParentAttributes {
  size: string
  variant: string
}


const title = 'AwcSpinner';
const parentAttributes = reactive<ParentAttributes>({
  size: 'm',
  variant: 'primary'
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