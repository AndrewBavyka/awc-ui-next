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
export function querySelectorDeep(root: Node | null | undefined, selector: string): Element | null {
    if (!root) return null;

    const walk = (node: Node): Element | null => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            if (el.matches?.(selector)) return el;

            for (const child of Array.from(el.children)) {
                const foundInChildren = child.querySelector(selector);
                if (foundInChildren) return foundInChildren;

                const deepInChildren = walk(child);
                if (deepInChildren) return deepInChildren;
            }

            if (el.shadowRoot) {
                const foundInShadow = querySelectorDeep(el.shadowRoot, selector);
                if (foundInShadow) return foundInShadow;
            }
        }

        return null;
    };

    return walk(root);
}

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
export function deepQuerySelectorFromSlot(host: HTMLElement, slotName: string, selector: string): Element | null {
    const root = host.shadowRoot;
    if (!root) return null;

    const slot = root.querySelector(`slot[name="${slotName}"]`) as HTMLSlotElement;
    if (!slot) return null;

    const assignedElements = slot.assignedElements({ flatten: true });

    for (const el of assignedElements) {
        const found = el instanceof Element ? el.querySelector(selector) : null;
        if (found) return found;

        const deepFound = querySelectorDeep(el, selector);
        if (deepFound) return deepFound;
    }

    return null;
}
