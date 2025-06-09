# awc-popover

## Properties

| Property              | Attribute               | Type                                             | Default    | Description                                      |
|-----------------------|-------------------------|--------------------------------------------------|------------|--------------------------------------------------|
| `active`              | `active`                | `boolean`                                        | "false"    | Определяет, видно ли всплывающее окно в данный момент. |
| `disabled`            | `disabled`              | `boolean`                                        | "false"    | Отключает взаимодействие с всплывающим окном (например, при наведении, клике или фокусе). |
| `matchReferenceWidth` | `match-reference-width` | `boolean`                                        | "false"    | Автоматически устанавливает ширину popover равной ширине связанного элемента (reference). |
| `noPadding`           | `no-padding`            | `boolean`                                        | "false"    | Убирает внутренние отступы у всплывающего окна.  |
| `position`            | `position`              | `"top" \| "top-end" \| "top-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start"` | "top"      | Позиция всплывающего окна относительно элемента. |
| `spacing`             | `spacing`               | `AwcPopoverSpacing`                              | "8"        | Расстояние в пикселях между всплывающим окном и элементом. |
| `strategy`            | `strategy`              | `"absolute" \| "fixed"`                          | "absolute" | Стратегия позиционирования всплывающего окна (absolute или fixed). |
| `triggerType`         | `trigger-type`          | `"hover" \| "click" \| "focus" \| "manual"`      | "click"    | Тип триггера для открытия всплывающего окна (click, hover, focus, manual). |

## Methods

| Method | Type       |
|--------|------------|
| `hide` | `(): void` |
| `show` | `(): void` |
