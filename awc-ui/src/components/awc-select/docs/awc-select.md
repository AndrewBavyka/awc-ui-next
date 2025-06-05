# awc-select

**Mixins:** FormControlMixin

## Properties

| Property             | Attribute           | Modifiers | Type                              | Default |
|----------------------|---------------------|-----------|-----------------------------------|---------|
| `autoselectOff`      | `autoselect-off`    |           | `boolean`                         | false   |
| `customError`        | `custom-error`      |           | `string \| undefined`             |         |
| `disabled`           | `disabled`          |           | `boolean`                         | false   |
| `form`               |                     | readonly  | `HTMLFormElement`                 |         |
| `hint`               | `hint`              |           | `string \| undefined`             |         |
| `html`               | `html`              |           | `boolean`                         | false   |
| `inputPlaceholder`   | `input-placeholder` |           | `string \| undefined`             |         |
| `internals`          |                     | readonly  |                                   |         |
| `label`              | `label`             |           | `string \| undefined`             |         |
| `multiple`           | `multiple`          |           | `boolean`                         | false   |
| `name`               | `name`              |           | `string \| undefined`             |         |
| `placeholder`        | `placeholder`       |           | `string \| undefined`             |         |
| `required`           | `required`          |           | `boolean`                         | false   |
| `reset`              | `reset`             |           | `boolean`                         | false   |
| `search`             | `search`            |           | `boolean`                         | false   |
| `showError`          |                     | readonly  | `boolean`                         |         |
| `staticError`        | `static-error`      |           | `boolean`                         | false   |
| `validationComplete` |                     | readonly  | `Promise<void>`                   |         |
| `validationMessage`  |                     |           | `string`                          | ""      |
| `validationTarget`   |                     |           | `HTMLElement`                     |         |
| `validity`           |                     | readonly  | `ValidityState`                   |         |
| `value`              | `value`             |           | `string \| string[] \| undefined` |         |
| `variant`            | `variant`           |           | `AwcSelectVariant`                | "fill"  |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `#onInvalid`                | `(event: Event): void`                           |
| `checkValidity`             | `(): boolean`                                    |
| `close`                     | `(): void`                                       |
| `formResetCallback`         | `(): void`                                       |
| `open`                      | `(): void`                                       |
| `registerOption`            | `(option: AwcSelectItem): void`                  |
| `resetFormControl`          | `(): void`                                       |
| `setValue`                  | `(value: FormValue): void`                       |
| `shouldFormValueUpdate`     | `(): boolean`                                    |
| `unregisterOption`          | `(option: AwcSelectItem): void`                  |
| `validationMessageCallback` | `(message: string): void`                        |
| `validityCallback`          | `(): string \| void`                             |
| `valueChangedCallback`      | `((value: FormValue): void \| Promise<void>) \| undefined` |
