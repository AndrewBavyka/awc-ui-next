# awc-checkbox-group

Элемент группы checkbox.

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute    | Modifiers | Type                               | Default | Description                             |
|----------------------|--------------|-----------|------------------------------------|---------|-----------------------------------------|
| `availableOptions`   |              | readonly  | `AwcCheckbox[]`                    |         |                                         |
| `checkedOptions`     |              | readonly  | `string[]`                         |         |                                         |
| `form`               |              | readonly  | `HTMLFormElement`                  |         |                                         |
| `hint`               | `hint`       |           | `string`                           | ""      | Отображение дополнительной информации.  |
| `horizontal`         | `horizontal` |           | `boolean`                          | "false" | Горизонтальное отображение awc-checkbox |
| `internals`          |              | readonly  |                                    |         |                                         |
| `label`              | `label`      |           | `string`                           | ""      | Текстовая метка группы checkbox.        |
| `options`            |              | readonly  | `AwcCheckbox[]`                    |         |                                         |
| `showError`          |              | readonly  | `boolean`                          |         |                                         |
| `validationComplete` |              | readonly  | `Promise<void>`                    |         |                                         |
| `validationMessage`  |              | readonly  | `string`                           |         |                                         |
| `validationTarget`   |              |           | `HTMLElement \| null \| undefined` |         |                                         |
| `validity`           |              | readonly  | `ValidityState`                    |         |                                         |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `checkValidity`             | `(): boolean`                                    |
| `formResetCallback`         | `(): void`                                       |
| `resetFormControl`          | `((): void) \| undefined`                        |
| `setValue`                  | `(value: FormValue): void`                       |
| `shouldFormValueUpdate`     | `((): boolean) \| undefined`                     |
| `validationMessageCallback` | `(message: string): void`                        |
| `validityCallback`          | `(validationKey: string): string \| void`        |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |

## Events

| Event                       | Description                                      |
|-----------------------------|--------------------------------------------------|
| `awc-checkbox-group-change` | Событие, возникающее при изменении состояния группы checkbox. |
