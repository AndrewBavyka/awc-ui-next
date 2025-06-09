# awc-dropdown

Элемент выпадающего меню awc-dropdown

## Properties

| Property       | Attribute       | Modifiers | Type                                             | Default        | Description                                      |
|----------------|-----------------|-----------|--------------------------------------------------|----------------|--------------------------------------------------|
| `disabled`     | `disabled`      |           | `boolean`                                        | "false"        | Отключает dropdown                               |
| `notClosing`   | `not-closing`   |           | `boolean`                                        | false          | Отключение автоматического закрытия при клике по свободному пространству. |
| `options`      |                 | readonly  | `AwcDropdownItem[]`                              |                |                                                  |
| `position`     | `position`      |           | `"top" \| "top-end" \| "top-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start"` | "bottom-start" | Позиция отображения списка                       |
| `scrollOff`    | `scroll-off`    |           | `boolean`                                        | "false"        | Отключает отображение скролла списка             |
| `selectedMode` | `selected-mode` |           | `boolean`                                        | "false"        | Включение/отключение режима выбора               |
| `strategy`     | `strategy`      |           | `"absolute" \| "fixed"`                          | "absolute"     | Стратегия позиционирования всплывающего окна.    |
| `visible`      | `visible`       |           | `boolean`                                        | "false"        | Включение/отключение отображения выпадающего меню |
| `width`        | `width`         |           | `number`                                         |                | Пользовательская ширина выпадающего меню         |

## Methods

| Method  | Type       | Description                  |
|---------|------------|------------------------------|
| `close` | `(): void` | Закрытие выпадающего списка. |
| `open`  | `(): void` | Открытие выпадающего списка. |

## Events

| Event                | Description                                      |
|----------------------|--------------------------------------------------|
| `awc-dropdown-close` | Событие, возникающее при закрытии выпадающего списка. |
| `awc-dropdown-open`  | Событие, возникающее при открытии выпадающего списка. |

## CSS Custom Properties

| Property                        | Description                                      |
|---------------------------------|--------------------------------------------------|
| `--awc-dropdown-display: block` | Устанавливает блочное отображение для вложенного элемента. |
