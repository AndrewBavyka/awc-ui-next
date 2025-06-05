# awc-user-info

Элемент для отображения информации о пользователе.

## Properties

| Property            | Attribute             | Type                                         | Default           | Description                                 |
|---------------------|-----------------------|----------------------------------------------|-------------------|---------------------------------------------|
| `avatarCustomColor` | `avatar-custom-color` | `string`                                     | ""                | Принимает код hex цвета                     |
| `avatarLink`        | `avatar-image`        | `string`                                     | ""                | Ссылка на изображение для аватарки.         |
| `avatarSize`        | `avatar-size`         | `string`                                     | "36"              | Размер аватарки.                            |
| `avatatColor`       | `avatar-color`        | `string`                                     | "global-blue-400" | Цвет аватарки.                              |
| `description`       | `description`         | `string`                                     | ""                | Дополнительная информация о пользователе    |
| `href`              | `href`                | `string`                                     | ""                | Принимает ссылку для перехода               |
| `name`              | `name`                | `string`                                     | ""                | Имя пользователя                            |
| `reverse`           | `reverse`             | `boolean`                                    | "false"           | Инвертирование положения name и description |
| `status`            | `avatar-status`       | `"none" \| "complete" \| "fail"`             | "none"            | Статус пользователя                         |
| `target`            | `target`              | `"_blank" \| "_self" \| "_parent" \| "_top"` | "none"            | Тип перехода по ссылке                      |
