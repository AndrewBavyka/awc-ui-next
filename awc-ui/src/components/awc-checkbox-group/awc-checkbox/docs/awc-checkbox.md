# awc-checkbox

Элемент checkbox.

**Mixins:** FormControlMixin

## Properties

| Property               | Attribute       | Modifiers | Type                  | Default   | Description                                      |
|------------------------|-----------------|-----------|-----------------------|-----------|--------------------------------------------------|
| `checkboxElement`      |                 |           | `HTMLInputElement`    |           |                                                  |
| `checked`              | `checked`       |           | `boolean`             | false     | Флаг, указывающий, выбран ли checkbox.           |
| `customColor`          | `custom-color`  |           | `string`              | ""        | Цвет состояния checkbox.                         |
| `customError`          | `custom-error`  |           | `string`              | ""        | Пользовательская ошибка валидации. (Автоматически становится приоритетной) |
| `disabled`             | `disabled`      |           | `boolean`             | false     | Флаг, указывающий, отключен ли checkbox.         |
| `form`                 |                 | readonly  | `HTMLFormElement`     |           |                                                  |
| `indeterminate`        | `indeterminate` |           | `boolean`             | false     | Флаг, указывающий, находится ли checkbox в неопределенном состоянии. |
| `internals`            |                 | readonly  |                       |           |                                                  |
| `label`                | `label`         |           | `string`              |           | Текстовая метка checkbox.                        |
| `labelCheckboxElement` |                 |           | `HTMLLabelElement`    |           |                                                  |
| `name`                 | `name`          |           | `string \| undefined` |           | Уникальное имя группы checkbox.                  |
| `required`             | `required`      |           | `boolean`             | false     | Флаг, указывающий, является ли checkbox обязательным для выбора. |
| `showError`            |                 | readonly  | `boolean`             |           |                                                  |
| `size`                 | `size`          |           | `string`              | "regular" | Выборо размера checkbox.                         |
| `staticError`          | `static-error`  |           | `boolean`             | "false"   | Статичное, принудительное отображение ошибки.    |
| `validationComplete`   |                 | readonly  | `Promise<void>`       |           |                                                  |
| `validationMessage`    |                 |           | `string`              | ""        |                                                  |
| `validationTarget`     |                 |           | `HTMLInputElement`    |           |                                                  |
| `validity`             |                 | readonly  | `ValidityState`       |           |                                                  |
| `value`                | `value`         |           | `string`              |           | Значение checkbox.                               |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `blur`                      | `(): void`                                       |
| `checkValidity`             | `(): boolean`                                    |
| `focus`                     | `(): void`                                       |
| `formResetCallback`         | `(): void`                                       |
| `resetFormControl`          | `(): void`                                       |
| `setValue`                  | `(value: FormValue): void`                       |
| `shouldFormValueUpdate`     | `(): boolean`                                    |
| `validationMessageCallback` | `(message: string): void`                        |
| `validityCallback`          | `(): string \| void`                             |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |

## Events

| Event                 | Description                                      |
|-----------------------|--------------------------------------------------|
| `awc-blur`            | Событие, возникающее при потере фокуса checkbox. |
| `awc-checkbox-change` | Событие, возникающее при изменении состояния checkbox. |
| `awc-focus`           | Событие, возникающее при фокусировке на checkbox. |
| `change`              |                                                  |
