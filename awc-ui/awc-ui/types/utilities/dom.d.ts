/**
 * Рекурсивно ищет элемент внутри указанного узла DOM, включая дочерние элементы и Shadow DOM.
 *
 * @param {Node | null | undefined} root - Корневой узел, с которого начинается поиск.
 * @param {string} selector - CSS-селектор для поиска элемента (например, `'awc-avatar-group-counter'`).
 *
 * @returns {Element | null} Найденный элемент или `null`, если ничего не найдено.
 *
 * @description
 * Функция проходит по всем дочерним элементам, проверяет соответствие селектору,
 * а также заглядывает внутрь `shadowRoot`, если он есть у элемента.
 */
export declare function querySelectorDeep(root: Node | null | undefined, selector: string): Element | null;
/**
 * Находит элемент внутри именованного слота компонента.
 *
 * @param {HTMLElement} host - Хост-компонент, который содержит целевой слот.
 * @param {string} slotName - Имя слота, в котором нужно найти элемент.
 * @param {string} selector - CSS-селектор, по которому будет выполнен поиск.
 *
 * @returns {Element | null} Найденный элемент или `null`, если элемент не найден.
 *
 * @description
 * Эта функция позволяет находить элементы, переданные в слот, даже если они обёрнуты
 * в другие элементы (например, в popover, tooltip и т.д.). Поддерживает вложенность
 * и работу с Shadow DOM.
 */
export declare function deepQuerySelectorFromSlot(host: HTMLElement, slotName: string, selector: string): Element | null;
