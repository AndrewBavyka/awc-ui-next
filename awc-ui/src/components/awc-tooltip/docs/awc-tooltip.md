# awc-tooltip

## Properties

| Property     | Attribute     | Type                 | Default    | Description                                      |
|--------------|---------------|----------------------|------------|--------------------------------------------------|
| `active`     | `active`      | `boolean`            | "false"    | Определяет, виден ли тултип в данный момент.     |
| `disabled`   | `disabled`    | `boolean`            | "false"    | Отключает взаимодействие с тултипом (например, при наведении или клике). |
| `marker`     | `marker`      | `boolean`            | "true"     | Показывать ли стрелку, указывающую на элемент.   |
| `matchWidth` | `match-width` | `boolean`            | "false"    | Растягивает ширину тултипа до ширины дочернего элемента. |
| `message`    | `message`     | `string`             | "Tooltip"  | Текст сообщения, отображаемого в тултипе.        |
| `position`   | `position`    | `AwcTooltipPosition` | "top"      | Позиция тултипа относительно элемента.           |
| `spacing`    | `spacing`     | `AwcTooltipSpacing`  | "8"        | Расстояние в пикселях между тултипом и элементом. |
| `strategy`   | `strategy`    | `AwcTooltipStrategy` | "absolute" | Стратегия позиционирования тултипа (absolute или fixed). |

## Methods

| Method | Type       |
|--------|------------|
| `hide` | `(): void` |
| `show` | `(): void` |
