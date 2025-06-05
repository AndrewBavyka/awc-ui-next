# awc-avatar

## Properties

| Property      | Attribute      | Type                  | Default           | Description                                      |
|---------------|----------------|-----------------------|-------------------|--------------------------------------------------|
| `color`       | `color`        | `string`              | "global-blue-400" | Цвет аватарки.                                   |
| `customColor` | `custom-color` | `string \| undefined` |                   | Принимает код hex цвета.                         |
| `hovered`     |                | `boolean`             | false             |                                                  |
| `href`        | `href`         | `string \| undefined` |                   | Задает адрес документа, на который следует перейти. |
| `icon`        | `icon`         | `AwcAvatarIcon`       | "none"            | Выбор иконки внутри аватара.                     |
| `imageLink`   | `image-link`   | `string \| undefined` |                   | Ссылка на изображение для аватарки.              |
| `label`       | `label`        | `string`              |                   | Текст заголовка для аватарки без подсказки.      |
| `rounded`     | `rounded`      | `AwcAvatarRounded`    | "circle"          | Форма аватарки.                                  |
| `size`        | `size`         | `AwcAvatarSize`       | "36"              | Размер аватарки.                                 |
| `sliced`      |                | `boolean`             | false             |                                                  |
| `status`      | `status`       | `string`              | "none"            | Статус пользователя.                             |
| `target`      | `target`       | `AwcAvatarTargetType` | "_self"           | Тип перехода по ссылке                           |
| `title`       | `title`        | `string`              |                   | Текст заголовка для аватарки.                    |
