# awc-tag

## Properties

| Property      | Attribute      | Type         | Default                  | Description                                     |
|---------------|----------------|--------------|--------------------------|-------------------------------------------------|
| `baseColor`   | `base-color`   | `TagColor`   | "colors-light-secondary" | Установка базовых цветов из палитры             |
| `customColor` | `custom-color` | `string`     | ""                       | Установка пользовательского цвета в формате HEX |
| `variant`     | `variant`      | `TagVariant` | "square"                 | Выбор формы компонента                          |

## Methods

| Method                        | Type                                             |
|-------------------------------|--------------------------------------------------|
| `pickTextColorBasedOnBgColor` | `(bgColor: string, lightColor: string, darkColor: string): string \| undefined` |
