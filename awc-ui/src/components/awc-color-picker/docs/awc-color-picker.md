# awc-color-picker

**Mixins:** FormControlMixin

## Properties

| Property              | Attribute | Modifiers | Type                               | Default                                          | Description                                      |
|-----------------------|-----------|-----------|------------------------------------|--------------------------------------------------|--------------------------------------------------|
| `BASE_PALETTE_COLORS` |           |           | `string[]`                         | ["#ED3A3A","#F74F4F","#FB7C28","#F8AF28","#FED34A","#81D83C","#5FB829","#1EA679","#35D3AC","#44CADA","#2FB9CE","#52ACF5","#2A8CE3","#3761E9","#5D7EF7","#8360F4","#704AE5","#AC3EC7","#C764DF","#E44662","#FF7188","#919BB6","#55555A","#26263E"] |                                                  |
| `active`              | `active`  |           | `boolean`                          | ""                                               | Открытие/Закрытие списка выбора цветов           |
| `activeTab`           |           |           | `number`                           | 0                                                |                                                  |
| `colorItems`          |           |           | `NodeListOf<HTMLDivElement>`       |                                                  |                                                  |
| `form`                |           | readonly  | `HTMLFormElement`                  |                                                  |                                                  |
| `internals`           |           | readonly  |                                    |                                                  |                                                  |
| `name`                | `name`    |           | `string`                           | ""                                               | Имя атрибута поля ввода                          |
| `reset`               | `reset`   |           | `boolean`                          | "false"                                          | Флаг отображения кнопки сброса. (При отсутсвии awc-tab не работает) |
| `showError`           |           | readonly  | `boolean`                          |                                                  |                                                  |
| `validationComplete`  |           | readonly  | `Promise<void>`                    |                                                  |                                                  |
| `validationMessage`   |           | readonly  | `string`                           |                                                  |                                                  |
| `validationTarget`    |           |           | `HTMLElement \| null \| undefined` |                                                  |                                                  |
| `validity`            |           | readonly  | `ValidityState`                    |                                                  |                                                  |
| `value`               | `value`   |           | `string`                           | ""                                               | Текущее значение поля ввода.                     |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `checkValidity`             | `(): boolean`                                    |
| `close`                     | `(): void`                                       |
| `formResetCallback`         | `(): void`                                       |
| `open`                      | `(): void`                                       |
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
