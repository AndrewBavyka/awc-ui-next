# awc-radio

Элемент радиокнопки.

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute      | Modifiers | Type                   | Default   | Description                                      |
|----------------------|----------------|-----------|------------------------|-----------|--------------------------------------------------|
| `checked`            | `checked`      |           | `boolean`              | false     | Флаг, указывающий, выбрана ли радиокнопка.       |
| `customColor`        | `custom-color` |           | `string`               | ""        | Цвет состояния radio.                            |
| `customError`        | `custom-error` |           | `string`               | ""        | Пользовательская ошибка валидации. (Автоматически становится приоритетной) |
| `disabled`           | `disabled`     |           | `boolean`              | false     | Флаг, указывающий, выделена ли радиокнопка.      |
| `form`               |                | readonly  | `HTMLFormElement`      |           |                                                  |
| `internals`          |                | readonly  |                        |           |                                                  |
| `label`              | `label`        |           | `string`               |           | Текстовая метка радиокнопки.                     |
| `name`               | `name`         |           | `string`               |           | Уникальное имя группы радиокнопок, к которой принадлежит данная радиокнопка. |
| `required`           | `required`     |           | `boolean`              | false     | Флаг, указывающий, является ли радиокнопка обязательной для выбора. |
| `showError`          |                | readonly  | `boolean`              |           |                                                  |
| `size`               | `size`         |           | `"regular" \| "small"` | "regular" | Выборо размера radio.                            |
| `staticError`        | `static-error` |           | `boolean`              | "false"   | Статичное, принудительное отображение ошибки.    |
| `validationComplete` |                | readonly  | `Promise<void>`        |           |                                                  |
| `validationMessage`  |                |           | `string`               | ""        |                                                  |
| `validationTarget`   |                |           | `HTMLElement`          |           |                                                  |
| `validity`           |                | readonly  | `ValidityState`        |           |                                                  |
| `value`              | `value`        |           | `string`               |           | Значение радиокнопки.                            |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `blur`                      | `(): void`                                       |
| `checkValidity`             | `(): boolean`                                    |
| `focus`                     | `(): void`                                       |
| `formResetCallback`         | `(): void`                                       |
| `resetFormControl`          | `((): void) \| undefined`                        |
| `select`                    | `(): void`                                       |
| `setValue`                  | `(value: FormValue): void`                       |
| `shouldFormValueUpdate`     | `(): boolean`                                    |
| `validationMessageCallback` | `(message: string): void`                        |
| `validityCallback`          | `(): string \| void`                             |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |

## Events

| Event         | Description                                      |
|---------------|--------------------------------------------------|
| `awc-blur`    | Событие, возникающее при потере фокуса радиокнопкой. |
| `awc-checked` | Событие, возникающее при выборе радиокнопки.     |
| `awc-focus`   | Событие, возникающее при фокусировке на радиокнопке. |
| `change`      |                                                  |
