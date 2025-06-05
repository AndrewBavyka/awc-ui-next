# awc-switcher

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute      | Modifiers | Type                               | Default   | Description                        |
|----------------------|----------------|-----------|------------------------------------|-----------|------------------------------------|
| `checked`            | `checked`      |           | `boolean`                          | "false"   | Определяет активность свитчера.    |
| `customColor`        | `custom-color` |           | `string`                           | ""        | Цвет состояния переключателя.      |
| `disabled`           | `disabled`     |           | `boolean`                          | "false"   | Отключает свитчер.                 |
| `form`               |                | readonly  | `HTMLFormElement`                  |           |                                    |
| `internals`          |                | readonly  |                                    |           |                                    |
| `name`               | `name`         |           | `string`                           | ""        | Имя свитчера.                      |
| `showError`          |                | readonly  | `boolean`                          |           |                                    |
| `size`               | `size`         |           | `AwcSwitcherSize`                  | "regular" | Варианты размеров переключателя.   |
| `validationComplete` |                | readonly  | `Promise<void>`                    |           |                                    |
| `validationMessage`  |                | readonly  | `string`                           |           |                                    |
| `validationTarget`   |                |           | `HTMLElement \| null \| undefined` |           |                                    |
| `validity`           |                | readonly  | `ValidityState`                    |           |                                    |
| `value`              | `value`        |           | `string`                           | ""        | Значение свитчера.                 |
| `variant`            | `variant`      |           | `AwcSwitcherVariant`               | "primary" | Вариант отображения переключателя. |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `checkValidity`             | `(): boolean`                                    |
| `formResetCallback`         | `(): void`                                       |
| `resetFormControl`          | `(): void`                                       |
| `setValue`                  | `(value: FormValue): void`                       |
| `shouldFormValueUpdate`     | `(): boolean`                                    |
| `validationMessageCallback` | `(message: string): void`                        |
| `validityCallback`          | `(validationKey: string): string \| void`        |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |

## Events

| Event    |
|----------|
| `change` |
