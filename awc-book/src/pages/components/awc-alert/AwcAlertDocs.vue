<template>
  <div class="doc-wrapper">
    <h1>{{ title }} Documentation</h1>
    <div class="doc-section">
      <h2>awc-alert</h2>

      <h3>Attributes</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name and Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <strong>[color]</strong><br>
              Цвет уведомления.
            </td>
            <td>AwcAlertColor</td>
          </tr>
    
          <tr>
            <td>
              <strong>[variant]</strong><br>
              Вариант отображения уведомления.
            </td>
            <td>AwcAlertVariant</td>
          </tr>
    
        </tbody>
      </table>
    




    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'AwcAlert';
</script>

<style scoped>
.doc-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.doc-section {
  width: 100%;
}

.doc-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.doc-table th,
.doc-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.doc-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.doc-table td {
  vertical-align: top;
}

.doc-table strong {
  color: #e74c3c;
}

h2, h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>