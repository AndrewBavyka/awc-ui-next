const svgPaths: string[] = [
    '/src/assets/sprites/icon-16.symbol.svg',
    '/src/assets/sprites/icon-24.symbol.svg',
    '/src/assets/sprites/module-20.symbol.svg',
    '/src/assets/sprites/module-24.symbol.svg',
    '/src/assets/sprites/module-32.symbol.svg',
    '/src/assets/sprites/module-40.symbol.svg',
];

/**
 * Извлекает идентификаторы иконок из SVG-спрайтов.
 *
 * @description
 * Функция загружает SVG-спрайты по указанным путям и извлекает из них
 * идентификаторы всех символов (<symbol> элементов). Результаты группируются
 * по имени файла спрайта.
 *
 * @returns {Object.<string, string[]>} Объект, где ключ - имя файла спрайта,
 * а значение - массив идентификаторов иконок в этом спрайте.
 */
export default function extractIconIdsFromSprites() {
    const iconIdsBySprite: { [key: string]: string[] } = {};

    const extractIds = async (src: string): Promise<void> => {
        try {
            const response = await fetch(src);
            const svgText = await response.text();

            const ids = svgText.match(/<symbol[^>]*\sid="([^"]+)"/g);

            if (ids) {
                const spriteName = src.substring(src.lastIndexOf('/') + 1);
                iconIdsBySprite[spriteName] = [];

                ids.forEach((id) => {
                    const match = /<symbol[^>]*\sid="([^"]+)"/.exec(id);
                    if (match && match[1]) {
                        iconIdsBySprite[spriteName].push(match[1]);
                    }
                });
            }
        } catch (error) {
            console.error(`Ошибка загрузки SVG ${src}:`, error);
        }
    };

    svgPaths.forEach((path) => extractIds(path));

    return iconIdsBySprite;
}
