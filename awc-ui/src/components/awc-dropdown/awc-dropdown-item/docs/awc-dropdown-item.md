# awc-dropdown-item

Элемент списка awc-dropdown-list

## Properties

| Property   | Attribute  | Type                    | Default | Description                                      |
|------------|------------|-------------------------|---------|--------------------------------------------------|
| `href`     | `href`     | `string \| undefined`   | ""      | Установка ссылки                                 |
| `selected` | `selected` | `boolean`               | "false" | Выбранный элемент                                |
| `target`   | `target`   | `AwcDropdownItemTarget` | "_self" | Выбор тип перехода при нажатии на ссылку         |
| `warning`  | `warning`  | `boolean`               | "false" | Определяет, что элемент является опасным (например, "Удалить"). Окрашивает элемент в красный. |

## Methods

| Method  | Type       |
|---------|------------|
| `focus` | `(): void` |
