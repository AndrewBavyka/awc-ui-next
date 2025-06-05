# awc-tooltip

## Properties

| Property     | Attribute     | Type                 | Default    | Description                                      |
|--------------|---------------|----------------------|------------|--------------------------------------------------|
| `active`     | `active`      | `boolean`            | "false"    | Определяет, виден ли тултип в данный момент.     |
| `disabled`   | `disabled`    | `boolean`            | "false"    | Отключает взаимодействие с тултипом (например, при наведении или клике). |
| `marker`     | `marker`      | `boolean`            | "true"     | Показывать ли стрелку, указывающую на элемент.   |
| `matchWidth` | `match-width` | `boolean`            | "false"    | Растягивает ширину тултипа до ширины дочернего элемента. |
| `message`    | `message`     | `string`             | "Tooltip"  | Текст сообщения, отображаемого в тултипе.        |
| `portalOff`  | `portal-off`  | `boolean`            | "false"    | Отключение порталиннга                           |
| `position`   | `position`    | `AwcTooltipPosition` | "top"      | Позиция тултипа относительно элемента.           |
| `spacing`    | `spacing`     | `AwcTooltipSpacing`  | "8"        | Расстояние в пикселях между тултипом и элементом. |
| `strategy`   | `strategy`    | `AwcTooltipStrategy` | "absolute" | Стратегия позиционирования тултипа (absolute или fixed). |
| `target`     | `target`      | `string`             | "body"     | Указывает, в какой элемент DOM будет помещён awc-tooltip-message. |

## Methods

| Method | Type       |
|--------|------------|
| `hide` | `(): void` |
| `show` | `(): void` |

## Events

| Event              | Description                                |
|--------------------|--------------------------------------------|
| `awc-tooltip-hide` | Событие, генерируемое при скрытии тултипа. |
| `awc-tooltip-show` | Событие, генерируемое при показе тултипа.  |

## CSS Custom Properties

| Property                      | Description                               |
|-------------------------------|-------------------------------------------|
| `--awc-tooltip-display:block` | Устанавливает блочное отображение кнопки. |
