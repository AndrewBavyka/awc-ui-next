# awc-stack

`awc-stack` - Компонент-обертка, который управляет расположением ближайших дочерних элементов по вертикальной или горизонтальной оси с необязательным интервалом между каждым дочерним элементом.

## Properties

| Property         | Attribute         | Type                  | Default | Description                                      |
|------------------|-------------------|-----------------------|---------|--------------------------------------------------|
| `alignItems`     | `align-items`     | `string`              | "start" | Определяет, как элементы flexbox выравниваются вдоль поперечной оси.<br />Возможные значения: "start", "center", "end". |
| `flexDirection`  | `flex-direction`  | `string`              | "row"   | Определяет, как элементы flexbox упорядочиваются внутри контейнера flexbox.<br />Возможные значения: "row", "column". |
| `flexWrap`       | `flex-wrap`       | `string`              |         | Определяет, будет ли flex-контейнер однострочным или многострочным.<br />Возможные значения: "nowrap", "wrap", "wrap-reverse". |
| `fullWidth`      | `full-width`      | `boolean`             | "false" | Устанавливает ширину 100%                        |
| `gap`            | `gap`             | `string`              | "s"     | Определяет размер промежутка между элементами flexbox.<br />Возможные значения: "none", "2xs", "xs", "s", "sm", "m", "l", "xl", "2xl", "3xl". |
| `isInline`       | `inline-flex`     | `boolean`             | "false" | Определяет, будет ли элемент отрисовываться как flex или inline-flex. |
| `justifyContent` | `justify-content` | `string \| undefined` |         | Определяет, как элементы flexbox распределяются вдоль основной оси.<br />Возможные значения: "center", "start", "end", "baseline", "space-between", "space-around", "space-evenly". |
