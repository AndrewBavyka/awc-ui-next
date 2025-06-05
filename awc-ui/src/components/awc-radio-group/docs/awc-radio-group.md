# awc-radio-group

Элемент радиогруппа.

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute    | Modifiers | Type                               | Default | Description                            |
|----------------------|--------------|-----------|------------------------------------|---------|----------------------------------------|
| `availableOptions`   |              | readonly  | `AwcRadio[]`                       |         |                                        |
| `form`               |              | readonly  | `HTMLFormElement`                  |         |                                        |
| `hint`               | `hint`       |           | `string`                           | ""      | Отображение дополнительной информации. |
| `horizontal`         | `horizontal` |           | `boolean`                          | "false" | Горизонтальное отображение awc-radio   |
| `internals`          |              | readonly  |                                    |         |                                        |
| `label`              | `label`      |           | `string`                           | ""      | Текстовая метка для радиогруппы.       |
| `name`               | `name`       |           | `string`                           | ""      | Уникальное имя для группы радиокнопок. |
| `options`            |              | readonly  | `AwcRadio[]`                       |         |                                        |
| `showError`          |              | readonly  | `boolean`                          |         |                                        |
| `validationComplete` |              | readonly  | `Promise<void>`                    |         |                                        |
| `validationMessage`  |              | readonly  | `string`                           |         |                                        |
| `validationTarget`   |              |           | `HTMLElement \| null \| undefined` |         |                                        |
| `validity`           |              | readonly  | `ValidityState`                    |         |                                        |
| `value`              | `value`      |           | `string`                           | ""      | Текущее значение выбранной опции.      |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `checkValidity`             | `(): boolean`                                    |
| `formResetCallback`         | `(): void`                                       |
| `resetFormControl`          | `(): void`                                       |
| `setValue`                  | `(value: FormValue): void`                       |
| `shouldFormValueUpdate`     | `((): boolean) \| undefined`                     |
| `validationMessageCallback` | `(message: string): void`                        |
| `validityCallback`          | `(validationKey: string): string \| void`        |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |

## Events

| Event              | Description                                      |
|--------------------|--------------------------------------------------|
| `awc-radio-change` | Событие, возникающее при изменении выбранного радио. |
