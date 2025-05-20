<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <div class="attributes-section">
      <h2>awc-button Attributes</h2>

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
              <strong>[name]</strong><br>
              Имя кнопки
            </td>
            <td>string</td>
            <td>
          <input id="parent-name" type="text" v-model="parentAttributes.name" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[value]</strong><br>
              Значение кнопки
            </td>
            <td>string</td>
            <td>
          <input id="parent-value" type="text" v-model="parentAttributes.value" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[background]</strong><br>
              Цвет фона кнопки
            </td>
            <td>"blue" | "red" | "green" | "gray"</td>
            <td>
          <select id="parent-background" v-model="parentAttributes.background">
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="gray">gray</option>
          </select>
        </td>
          </tr>

          <tr>
            <td>
              <strong>[size]</strong><br>
              Размер кнопки
            </td>
            <td>"large" | "regular" | "small" | "extrasmall"</td>
            <td>
          <select id="parent-size" v-model="parentAttributes.size">
            <option value="large">large</option>
            <option value="regular">regular</option>
            <option value="small">small</option>
            <option value="extrasmall">extrasmall</option>
          </select>
        </td>
          </tr>

          <tr>
            <td>
              <strong>[variant]</strong><br>
              Вариант стиля кнопки
            </td>
            <td>"primary" | "secondary" | "transparent" | "link"</td>
            <td>
          <select id="parent-variant" v-model="parentAttributes.variant">
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="transparent">transparent</option>
            <option value="link">link</option>
          </select>
        </td>
          </tr>

          <tr>
            <td>
              <strong>[type]</strong><br>
              Тип кнопки
            </td>
            <td>"button" | "submit" | "reset"</td>
            <td>
          <select id="parent-type" v-model="parentAttributes.type">
            <option value="button">button</option>
            <option value="submit">submit</option>
            <option value="reset">reset</option>
          </select>
        </td>
          </tr>

          <tr>
            <td>
              <strong>[target]</strong><br>
              Тип перехода по ссылке
            </td>
            <td>"_blank" | "_self" | "_parent" | "_top"</td>
            <td>
          <select id="parent-target" v-model="parentAttributes.target">
            <option value="_blank">_blank</option>
            <option value="_self">_self</option>
            <option value="_parent">_parent</option>
            <option value="_top">_top</option>
          </select>
        </td>
          </tr>

          <tr>
            <td>
              <strong>[href]</strong><br>
              Задает адрес документа, на который следует перейти.
            </td>
            <td>string</td>
            <td>
          <input id="parent-href" type="text" v-model="parentAttributes.href" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[disabled]</strong><br>
              Флаг активации/деактивации кнопки
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-disabled" type="checkbox" v-model="parentAttributes.disabled" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[filling]</strong><br>
              Флаг активации/деактивации окрашивания иконки в цвет текста.
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-filling" type="checkbox" v-model="parentAttributes.filling" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[loading]</strong><br>
              Флаг отображения спинера загрузки
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-loading" type="checkbox" v-model="parentAttributes.loading" />
        </td>
          </tr>

          <tr>
            <td>
              <strong>[autofocus]</strong><br>
              
            </td>
            <td>boolean</td>
            <td>
          <input id="parent-autofocus" type="checkbox" v-model="parentAttributes.autofocus" />
        </td>
          </tr>

        </tbody>
      </table>
    

    </div>
    <div class="preview-section">
      <h2>Preview</h2>
      <awc-button v-bind="parentAttributes">

      </awc-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface ParentAttributes {
  name: string
  value: string
  background: 'blue' | 'red' | 'green' | 'gray'
  size: 'large' | 'regular' | 'small' | 'extrasmall'
  variant: 'primary' | 'secondary' | 'transparent' | 'link'
  type: 'button' | 'submit' | 'reset'
  target: '_blank' | '_self' | '_parent' | '_top'
  href: string
  disabled: boolean
  filling: boolean
  loading: boolean
  autofocus: boolean
}


const title = 'AwcButton';
const parentAttributes = reactive<ParentAttributes>({
  name: "",
  value: "",
  background: 'blue',
  size: 'regular',
  variant: 'primary',
  type: 'submit',
  target: '_self',
  href: "",
  disabled: false,
  filling: false,
  loading: false,
  autofocus: false
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