# awc-modal

Элемент модальное окно.

## Properties

| Property         | Attribute      | Modifiers | Type                | Default | Description                                      |
|------------------|----------------|-----------|---------------------|---------|--------------------------------------------------|
| `awcButtons`     |                | readonly  | `AwcButton[]`       |         |                                                  |
| `customizable`   | `customizable` |           | `boolean`           | "false" | Флаг указывающий, что модальное окно может быть кастомизировано.<br />Отображается только подложка компонента. |
| `description`    | `description`  |           | `string`            | ""      | Дополнительное описание модального окна.         |
| `heading`        | `heading`      |           | `string`            | ""      | Заголовок модального окна.                       |
| `opened`         | `opened`       |           | `boolean`           | "false" | Флаг указывающий, что модальное окно открыто.    |
| `slottedButtons` |                |           | `HTMLSlotElement[]` |         |                                                  |
| `tabsGroup`      |                | readonly  | `AwcTabsGroup`      |         |                                                  |

## Methods

| Method  | Type       | Description               |
|---------|------------|---------------------------|
| `close` | `(): void` | Закрытие модального окна. |
| `open`  | `(): void` | Открытие модального окна. |

## Events

| Event             | Description                                      |
|-------------------|--------------------------------------------------|
| `awc-modal-close` | Событие, возникающее при закрытии модального окна. |
| `awc-modal-open`  | Событие, возникающее при открытии модального окна. |
