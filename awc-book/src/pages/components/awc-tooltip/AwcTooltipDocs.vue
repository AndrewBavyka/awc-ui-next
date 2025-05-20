<template>
  <div class="doc-wrapper">
    <h1>{{ title }} Documentation</h1>
    <div class="doc-section">
      <h2>awc-tooltip</h2>

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
              <strong>[message]</strong><br>
              Текст сообщения, отображаемого в тултипе.
            </td>
            <td>string</td>
          </tr>
    
          <tr>
            <td>
              <strong>[position]</strong><br>
              Позиция тултипа относительно элемента.
            </td>
            <td>AwcTooltipPosition</td>
          </tr>
    
          <tr>
            <td>
              <strong>[spacing]</strong><br>
              Расстояние в пикселях между тултипом и элементом.
            </td>
            <td>AwcTooltipSpacing</td>
          </tr>
    
          <tr>
            <td>
              <strong>[strategy]</strong><br>
              Стратегия позиционирования тултипа (absolute или fixed).
            </td>
            <td>AwcTooltipStrategy</td>
          </tr>
    
          <tr>
            <td>
              <strong>[marker]</strong><br>
              Показывать ли стрелку, указывающую на элемент.
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[active]</strong><br>
              Определяет, виден ли тултип в данный момент.
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Отключает взаимодействие с тултипом (например, при наведении или клике).
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[match-width]</strong><br>
              Растягивает ширину тултипа до ширины дочернего элемента.
            </td>
            <td>boolean</td>
          </tr>
    
        </tbody>
      </table>
    




    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'AwcTooltip';
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