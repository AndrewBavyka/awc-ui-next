# awc-tag

## Properties

| Property      | Attribute      | Type                                             | Default                  | Description                                     |
|---------------|----------------|--------------------------------------------------|--------------------------|-------------------------------------------------|
| `baseColor`   | `base-color`   | `"global-red-2-600" \| "global-red-2-500" \| "global-orange-500" \| "global-yellow-500" \| "global-yellow-300" \| "global-light-green-400" \| "global-light-green-600" \| "global-green-600" \| ... 15 more ... \| "colors-light-dark-blue"` | "colors-light-secondary" | Установка базовых цветов из палитры             |
| `customColor` | `custom-color` | `string`                                         | ""                       | Установка пользовательского цвета в формате HEX |
| `variant`     | `variant`      | `"circle" \| "square" \| "bullet"`               | "square"                 | Выбор формы компонента                          |

## Methods

| Method                        | Type                                             |
|-------------------------------|--------------------------------------------------|
| `pickTextColorBasedOnBgColor` | `(bgColor: string, lightColor: string, darkColor: string): string \| undefined` |
