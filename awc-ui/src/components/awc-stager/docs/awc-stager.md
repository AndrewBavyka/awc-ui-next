# awc-stager

`awc-stager` - Компонент для отображения изменения статуса.

## Properties

| Property    | Attribute    | Type     | Default                 | Description                                      |
|-------------|--------------|----------|-------------------------|--------------------------------------------------|
| `current`   | `current`    | `number` | "2"                     | Статус шага, предназначен для обновления текущего шага. |
| `stepColor` | `step-color` | `string` | "-colors-light-primary" | Используется для установки цвета. Поддерживает HEX, RGB, RGBA, Propety. |
| `steps`     | `steps`      | `number` | "5"                     | Общее количество шагов                           |

## Events

| Event               | Description                       |
|---------------------|-----------------------------------|
| `awc-stager-change` | Событие изменения состояния шага. |
