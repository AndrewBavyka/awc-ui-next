# `awc-toast`

Простой и гибкий компонент уведомлений с поддержкой HTML-контента, разными уровнями санитизации и анимацией.

## 🧩 API

| Свойство | Тип | По умолчанию | Описание |
|---------|-----|----------------|----------|
| `text` | `string` | - | Заголовок уведомления |
| `htmlContent` | `string` | - | HTML-контент уведомления |
| `position` | `"top-center"`, `"bottom-left"` | `"top-center"` | Позиция на экране |
| `variant` | `"info"`, `"success"`, `"error"` | `"info"` | Тип уведомления |
| `duration` | `number` (мс) | `3000` | Время отображения |
| `withClose` | `boolean` | `false` | Отображать кнопку закрытия |
| `textSanitize` | `"unsafe"`, `"sanitize"`, `"safety"` | `"sanitize"` | Уровень безопасности заголовка |
| `contentSanitize` | `"unsafe"`, `"sanitize"`, `"safety"` | `"sanitize"` | Уровень безопасности контента |

---

## 📦 Глобальный объект: `window.AwcToastr`

```ts
window.AwcToastr.success(message, title, options);
window.AwcToastr.info(message, title, options);
window.AwcToastr.error(message, title, options);
```

### Параметры:

- `message`: текст или HTML-контент (`htmlContent`)
- `title`: заголовок (text)
- `options.position`: позиция (`top-center` или `bottom-left`)
- `options.textSanitize`: уровень безопасности заголовка
- `options.contentSanitize`: уровень безопасности контента

---

## ✅ Популярные кейсы

### 1. Простое уведомление

```js
window.AwcToastr.success("Запрос выполнен", "Успех");
```

---

### 2. Уведомление с HTML-контентом (санитизация)

```js
window.AwcToastr.info("<b>Важная информация</b>", "Сообщение");
// textSanitize = 'sanitize', contentSanitize = 'sanitize' по умолчанию
```

---

### 3. Безопасный вывод: блокировка HTML

```js
window.AwcToastr.error("<script>alert('XSS')</script>", "Проверка безопасности", {
  contentSanitize: "sanitize"
});
```

> `DOMPurify` удалит `<script>` и покажет только безопасный текст.

---

### 4. Небезопасный вывод (для доверенного контента)

```js
window.AwcToastr.info("<i>Это курсив</i>", "Без санитизации", {
  contentSanitize: "unsafe"
});
```

> Контент будет показан как есть.

---

### 5. Выводит textContent

```js
window.AwcToastr.info("<p>Этот текст не отобразится</p>", "", {
  contentSanitize: "safety"
});
```

> Блок `.awc-toast__content` будет пустым.

---

### 6. Автоматическое скрытие + наведение мыши

```js
window.AwcToastr.warning("Наведите на меня!", "Таймер приостановится", {
  position: "bottom-left",
  timeOut: 4000,
  withClose: true
});
```

> При наведении таймер останавливается. После ухода курсора — возобновляется через 500 мс.

---

### 7. Ручное закрытие

```js
const toast = window.AwcToastr.success("Действие выполнено", "", {
  withClose: true
});

setTimeout(() => {
  window.AwcToastr.remove(toast); // программно закрываем через 5 сек
}, 5000);
```

---

### 8. Очистка всех уведомлений

```js
window.AwcToastr.clear();
```

---

## ⚠️ Проверка XSS

Чтобы протестировать работу санитайзера, попробуйте следующий код:

### ❌ Вредоносный HTML (должен быть очищен)

```js
window.AwcToastr.warning("<img src=x onerror=alert(1)>", "XSS-проверка", {
  contentSanitize: "sanitize"
});
```

> ✅ Ожидаемый результат: изображение не загрузится, `alert()` не выполнится.

---

### ✅ Альтернатива: доверенный HTML (используется редко!)

```js
window.AwcToastr.warning("<b>Вы действительно хотите продолжить?</b>", "Подтверждение", {
  contentSanitize: "unsafe"
});
```

> Предназначено для внутреннего использования. Используйте осторожно!

---

## 🛠 Сброс и получение контейнеров

```js
const container = window.AwcToastr.getContainer("bottom-left");
container.style.maxWidth = "400px";
```

---

## 📄 Поддерживаемые стилизованные типы

| variant | Цвет фона |
|--------|-----------|
| `info` | белый / светло-серый |
| `success` | зелёный фон |
| `error` | красный фон |

---

## 📁 Структура проекта

```
/src/awc-ui/components/awc-toast/
├── awc-toast.ts       — основной класс компонента
├── awc-toast.style.ts — стили через Lit CSS
├── awc-toast.icons.ts — SVG-иконки
└── awc-toast.types.ts — типы и интерфейсы
```