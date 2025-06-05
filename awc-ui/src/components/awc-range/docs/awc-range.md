# awc-range

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute  | Modifiers | Type                               | Default | Description                                      |
|----------------------|------------|-----------|------------------------------------|---------|--------------------------------------------------|
| `disabled`           | `disabled` |           | `boolean`                          |         | Флаг, указывающий, отключен ли ползунок.         |
| `form`               |            | readonly  | `HTMLFormElement`                  |         |                                                  |
| `internals`          |            | readonly  |                                    |         |                                                  |
| `label`              | `label`    |           | `string`                           |         | Метка ползунка.                                  |
| `marker`             | `marker`   |           | `boolean`                          | "false" | Флаг, указывающий, следует ли отображать маркеры. |
| `max`                | `max`      |           | `number`                           | "100"   | Максимальное значение ползунка.                  |
| `min`                | `min`      |           | `number`                           | "0"     | Минимальное значение ползунка.                   |
| `name`               | `name`     |           | `string`                           | "\"0\"" | Имя атрибута для ползунка.                       |
| `rangeItem`          |            | readonly  | `AwcRangeItem[]`                   |         |                                                  |
| `showError`          |            | readonly  | `boolean`                          |         |                                                  |
| `step`               | `step`     |           | `number`                           | "1"     | Шаг изменения значения ползунка.                 |
| `validationComplete` |            | readonly  | `Promise<void>`                    |         |                                                  |
| `validationMessage`  |            | readonly  | `string`                           |         |                                                  |
| `validationTarget`   |            |           | `HTMLElement \| null \| undefined` |         |                                                  |
| `validity`           |            | readonly  | `ValidityState`                    |         |                                                  |
| `value`              | `value`    |           | `string`                           | "\"0\"" | Текущее значение ползунка.                       |

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

| Event    |
|----------|
| `change` |
| `input`  |
