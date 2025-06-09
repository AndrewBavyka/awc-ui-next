# awc-input

Поле ввода

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute      | Modifiers | Type                                             | Default     | Description                                      |
|----------------------|----------------|-----------|--------------------------------------------------|-------------|--------------------------------------------------|
| `autocomplete`       | `autocomplete` |           | `"on" \| "off"`                                  | "off"       | Включение/отключение автозаполнения.             |
| `autofocus`          | `autofocus`    |           | `boolean`                                        | "false"     | Указывает, должно ли поле ввода автоматически получать фокус при загрузке. |
| `customError`        | `custom-error` |           | `string`                                         | "\"\""      | Пользовательская ошибка валидации.<br />(Автоматически становится приоритетной) |
| `disabled`           | `disabled`     |           | `boolean`                                        | "false"     | Указывает, отключено ли поле ввода.              |
| `form`               |                | readonly  | `HTMLFormElement`                                |             |                                                  |
| `hint`               | `hint`         |           | `string \| undefined`                            | ""          | Отображение дополнительной информации.           |
| `input`              |                |           | `HTMLInputElement`                               |             |                                                  |
| `internals`          |                | readonly  |                                                  |             |                                                  |
| `label`              | `label`        |           | `string`                                         | ""          | Метка для поля ввода.                            |
| `max`                | `max`          |           | `number \| undefined`                            | ""          | Максимальное значение для поля ввода.            |
| `maxlength`          | `maxlength`    |           | `number \| undefined`                            | ""          | Максимальная длина поля ввода.                   |
| `min`                | `min`          |           | `number \| undefined`                            | ""          | Минимальное значение для поля ввода.             |
| `minlength`          | `minlength`    |           | `number \| undefined`                            | "undefined" | Минимальная длина поля ввода.                    |
| `name`               | `name`         |           | `string \| undefined`                            | ""          | Имя атрибута для поля ввода.                     |
| `pattern`            | `pattern`      |           | `string \| undefined`                            | ""          | Шаблон для поля ввода.                           |
| `placeholder`        | `placeholder`  |           | `string`                                         | "\"\""      | Текст подсказки для поля ввода.                  |
| `readonly`           | `readonly`     |           | `boolean`                                        | "false"     | Указывает, только для чтения ли поле ввода.      |
| `required`           | `required`     |           | `boolean`                                        | "false"     | Указывает, является ли поле ввода обязательным.  |
| `showError`          |                | readonly  | `boolean`                                        |             |                                                  |
| `size`               | `size`         |           | `"large" \| "small" \| "medium"`                 | "medium"    | Размер поля ввода.                               |
| `staticError`        | `static-error` |           | `boolean`                                        | "false"     | Статичное, принудительное отображение ошибки.    |
| `step`               | `step`         |           | `number \| undefined`                            | ""          | Шаг для поля ввода.                              |
| `type`               | `type`         |           | `"number" \| "text" \| "email" \| "date" \| "time" \| "datetime-local" \| "month" \| "week" \| "password" \| "tel" \| "url" \| "search" \| "hidden"` | "text"      | Тип атрибута для поля ввода.                     |
| `validationComplete` |                | readonly  | `Promise<void>`                                  |             |                                                  |
| `validationMessage`  |                |           | `string`                                         | ""          |                                                  |
| `validationTarget`   |                |           | `HTMLInputElement`                               |             |                                                  |
| `validity`           |                | readonly  | `ValidityState`                                  |             |                                                  |
| `value`              | `value`        |           | `string`                                         | ""          | Текущее значение поля ввода.                     |

## Methods

| Method                      | Type                                             | Description                        |
|-----------------------------|--------------------------------------------------|------------------------------------|
| `blur`                      | `(): void`                                       | Убирает фокус с поля ввода.        |
| `checkValidity`             | `(): boolean`                                    |                                    |
| `focus`                     | `(): void`                                       | Устанавливает фокус на поле ввода. |
| `formResetCallback`         | `(): void`                                       |                                    |
| `resetFormControl`          | `(): void`                                       |                                    |
| `select`                    | `(): void`                                       | Выделяет текст в поле ввода.       |
| `setValue`                  | `(value: FormValue): void`                       |                                    |
| `shouldFormValueUpdate`     | `((): boolean) \| undefined`                     |                                    |
| `validationMessageCallback` | `(message: string): void`                        |                                    |
| `validityCallback`          | `(): string \| void`                             |                                    |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |                                    |

## Events

| Event    | Type         |
|----------|--------------|
| `change` |              |
| `input`  | `InputEvent` |
