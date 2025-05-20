<template>
  <div class="doc-wrapper">
    <h1>{{ title }} Documentation</h1>
    <div class="doc-section">
      <h2>awc-accordion</h2>

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
              <strong>[disabled]</strong><br>
              Отключение группы
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[autoclose]</strong><br>
              Отключение автозакрытия элементов
            </td>
            <td>boolean</td>
          </tr>
    
        </tbody>
      </table>
    




      <h2>awc-accordion-item</h2>

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
              <strong>[title]</strong><br>
              Заголовок элемента аккордеона
            </td>
            <td>string</td>
          </tr>
    
          <tr>
            <td>
              <strong>[active]</strong><br>
              Активность элемента аккордеона
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Отключение элемента аккордеона
            </td>
            <td>boolean</td>
          </tr>
    
        </tbody>
      </table>
    

      <h3>Events</h3>
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
              <strong>@awc-accordion-toggle</strong><br>
              Событие активности элемента. Срабатывает при переключении активности.
            </td>
            <td>Event</td>
          </tr>
    
        </tbody>
      </table>
    



    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'AwcAccordion';
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