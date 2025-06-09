# awc-toast

## Properties

| Property          | Attribute         | Type                                             | Default          | Description                                      |
|-------------------|-------------------|--------------------------------------------------|------------------|--------------------------------------------------|
| `contentSanitize` | `contentSanitize` | `"unsafe" \| "sanitize" \| "safety"`             | "\"sanitize\""   | Уровень санитизации HTML-контента уведомления.   |
| `duration`        | `duration`        | `number`                                         | "3000"           | Длительность отображения уведомления в миллисекундах (отражается в атрибутах элемента). |
| `htmlContent`     | `htmlContent`     | `string \| undefined`                            |                  | HTML-контент уведомления.                        |
| `onClick`         |                   | `(() => void) \| undefined`                      |                  | Callback: Вызывается при клике на тост.          |
| `onCloseClick`    |                   | `(() => void) \| undefined`                      |                  | Callback: Вызывается при клике на крестик.       |
| `onHidden`        |                   | `(() => void) \| undefined`                      |                  | Callback: Вызывается при скрытии тоста.          |
| `onShown`         |                   | `((toastElement: HTMLElement) => void) \| undefined` |                  | Callback: Вызывается при показе тоста.           |
| `position`        | `position`        | `"top-center" \| "bottom-left"`                  | "\"top-center\"" | Позиция уведомления на странице (отражается в атрибутах элемента). |
| `sanitize`        | `sanitize`        | `boolean`                                        | "true"           | Флаг, указывающий, следует ли санитизировать HTML-контент для безопасности. |
| `text`            | `text`            | `string \| undefined`                            |                  | Текст уведомления.                               |
| `textSanitize`    | `textSanitize`    | `"unsafe" \| "sanitize" \| "safety"`             | "\"sanitize\""   | Уровень санитизации текста уведомления.          |
| `variant`         | `variant`         | `"warning" \| "info" \| "error" \| "success"`    | "\"info\""       | Тип уведомления (отражается в атрибутах элемента). |
| `withClose`       | `with-close`      | `boolean`                                        | "false"          | Флаг, указывающий, следует ли отображать кнопку закрытия (отражается в атрибутах элемента). |

## Methods

| Method             | Type                                      |
|--------------------|-------------------------------------------|
| `getShadowElement` | `(selector: string): HTMLElement \| null` |
