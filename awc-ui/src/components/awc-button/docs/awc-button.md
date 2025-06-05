# awc-button

Кнопка (`awc-button`).
Используется для выполнения действий пользователя при взаимодействии с элементом интерфейса.
Этот компонент поддерживает кастомные стили, различные состояния и варианты отображения.

## Properties

| Property     | Attribute    | Modifiers | Type                                             | Default   | Description                                      |
|--------------|--------------|-----------|--------------------------------------------------|-----------|--------------------------------------------------|
| `autofocus`  | `autofocus`  |           | `boolean`                                        | false     |                                                  |
| `background` | `background` |           | `"blue" \| "red" \| "green" \| "gray"`           | "blue"    | Цвет фона кнопки                                 |
| `disabled`   | `disabled`   |           | `boolean`                                        | "false"   | Флаг активации/деактивации кнопки                |
| `filling`    | `filling`    |           | `boolean`                                        | "false"   | Флаг активации/деактивации окрашивания иконки в цвет текста. |
| `href`       | `href`       |           | `string`                                         | ""        | Задает адрес документа, на который следует перейти. |
| `loading`    | `loading`    |           | `boolean`                                        | "false"   | Флаг отображения спинера загрузки                |
| `name`       | `name`       |           | `string`                                         | ""        | Имя кнопки                                       |
| `size`       | `size`       |           | `"large" \| "regular" \| "small" \| "extrasmall"` | "regular" | Размер кнопки                                    |
| `spinner`    |              | readonly  | `AwcSpinner`                                     |           |                                                  |
| `target`     | `target`     |           | `"_blank" \| "_self" \| "_parent" \| "_top"`     | "_self"   | Тип перехода по ссылке                           |
| `type`       | `type`       |           | `"button" \| "submit" \| "reset"`                | "submit"  | Тип кнопки                                       |
| `value`      | `value`      |           | `string`                                         | ""        | Значение кнопки                                  |
| `variant`    | `variant`    |           | `"primary" \| "secondary" \| "transparent" \| "link"` | "primary" | Вариант стиля кнопки                             |

## Methods

| Method  | Type       |
|---------|------------|
| `focus` | `(): void` |

## Slots

| Name | Description                 |
|------|-----------------------------|
|      | Основное содержимое кнопки. |

## CSS Custom Properties

| Property               | Default        | Description                               |
|------------------------|----------------|-------------------------------------------|
| `--awc-button-display` | "inline-block" | Устанавливает свойство отображения кнопки |
