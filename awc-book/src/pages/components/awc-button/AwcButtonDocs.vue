<template>
  <div class="doc-wrapper">
    <h1>{{ title }} Documentation</h1>
    <div class="doc-section">
      <h2>awc-button</h2>

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
              <strong>[name]</strong><br>
              Имя кнопки
            </td>
            <td>string</td>
          </tr>
    
          <tr>
            <td>
              <strong>[value]</strong><br>
              Значение кнопки
            </td>
            <td>string</td>
          </tr>
    
          <tr>
            <td>
              <strong>[background]</strong><br>
              Цвет фона кнопки
            </td>
            <td>"blue" | "red" | "green" | "gray"</td>
          </tr>
    
          <tr>
            <td>
              <strong>[size]</strong><br>
              Размер кнопки
            </td>
            <td>"large" | "regular" | "small" | "extrasmall"</td>
          </tr>
    
          <tr>
            <td>
              <strong>[variant]</strong><br>
              Вариант стиля кнопки
            </td>
            <td>"primary" | "secondary" | "transparent" | "link"</td>
          </tr>
    
          <tr>
            <td>
              <strong>[type]</strong><br>
              Тип кнопки
            </td>
            <td>"button" | "submit" | "reset"</td>
          </tr>
    
          <tr>
            <td>
              <strong>[target]</strong><br>
              Тип перехода по ссылке
            </td>
            <td>"_blank" | "_self" | "_parent" | "_top"</td>
          </tr>
    
          <tr>
            <td>
              <strong>[href]</strong><br>
              Задает адрес документа, на который следует перейти.
            </td>
            <td>string</td>
          </tr>
    
          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Флаг активации/деактивации кнопки
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[filling]</strong><br>
              Флаг активации/деактивации окрашивания иконки в цвет текста.
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[loading]</strong><br>
              Флаг отображения спинера загрузки
            </td>
            <td>boolean</td>
          </tr>
    
          <tr>
            <td>
              <strong>[autofocus]</strong><br>
              
            </td>
            <td>boolean</td>
          </tr>
    
        </tbody>
      </table>
    



      <h3>CSS Properties</h3>
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
              <strong>----awc-button-display</strong><br>
              Устанавливает свойство отображения кнопки
            </td>
            <td>N/A</td>
          </tr>
    
        </tbody>
      </table>
    

    </div>
  </div>
</template>

<script lang="ts" setup>
const title = 'AwcButton';
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