# awc-textarea

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute      | Modifiers | Type                               | Default                    | Description                                      |
|----------------------|----------------|-----------|------------------------------------|----------------------------|--------------------------------------------------|
| `autocomplete`       | `autocomplete` |           | `"on" \| "off"`                    | "TextAreaAutocompleteType" | Включение/отключение автозаполнения.             |
| `autofocus`          | `autofocus`    |           | `boolean`                          | "false"                    | Указывает, должно ли поле ввода автоматически получать фокус при загрузке. |
| `autoheight`         | `autoheight`   |           | `boolean`                          | "false"                    | Булево значение, указывающее, должна ли автоматически регулироваться высота текстовой области на основе содержимого. |
| `cols`               | `cols`         |           | `number`                           | "20"                       | Количество столбцов текстовой области.           |
| `disabled`           | `disabled`     |           | `boolean`                          | "false"                    | Указывает, отключено ли поле ввода.              |
| `form`               |                | readonly  | `HTMLFormElement`                  |                            |                                                  |
| `internals`          |                | readonly  |                                    |                            |                                                  |
| `label`              | `label`        |           | `string`                           | ""                         | Текст метки для текстовой области.               |
| `name`               | `name`         |           | `string \| undefined`              | ""                         | Имя атрибута для текстовой области.              |
| `placeholder`        | `placeholder`  |           | `string \| undefined`              | ""                         | Текст подсказки для текстовой области.           |
| `readonly`           | `readonly`     |           | `boolean`                          | "false"                    | Указывает, только для чтения ли поле ввода.      |
| `resize`             | `resize`       |           | `boolean`                          | "false"                    | Булево значение, указывающее, может ли изменяться размер текстовой области. |
| `rows`               | `rows`         |           | `number`                           | "2"                        | Количество строк текстовой области.              |
| `showError`          |                | readonly  | `boolean`                          |                            |                                                  |
| `textarea`           |                |           | `HTMLTextAreaElement`              |                            |                                                  |
| `validationComplete` |                | readonly  | `Promise<void>`                    |                            |                                                  |
| `validationMessage`  |                | readonly  | `string`                           |                            |                                                  |
| `validationTarget`   |                |           | `HTMLElement \| null \| undefined` |                            |                                                  |
| `validity`           |                | readonly  | `ValidityState`                    |                            |                                                  |
| `value`              | `value`        |           | `string`                           | ""                         | Значение текстовой области.                      |

## Methods

| Method                      | Type                                             | Description                  |
|-----------------------------|--------------------------------------------------|------------------------------|
| `checkValidity`             | `(): boolean`                                    |                              |
| `formResetCallback`         | `(): void`                                       |                              |
| `resetFormControl`          | `(): void`                                       |                              |
| `select`                    | `(): void`                                       | Выделяет текст в поле ввода. |
| `setValue`                  | `(value: FormValue): void`                       |                              |
| `shouldFormValueUpdate`     | `((): boolean) \| undefined`                     |                              |
| `validationMessageCallback` | `(message: string): void`                        |                              |
| `validityCallback`          | `(validationKey: string): string \| void`        |                              |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |                              |

## Events

| Event    | Type         |
|----------|--------------|
| `change` |              |
| `input`  | `InputEvent` |
