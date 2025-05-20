import { readdir, stat, rename } from 'fs/promises';
import { join, parse } from 'path';

const readIconFolder = async (folderPath) => {
    try {
        const readRecursive = async (dir) => {
            const files = await readdir(dir);

            // Используем Promise.all для параллельного выполнения асинхронных операций
            await Promise.all(
                files.map(async (file) => {
                    const filePath = join(dir, file);
                    const fileStat = await stat(filePath);

                    if (fileStat.isDirectory()) {
                        await readRecursive(filePath);
                    } else {
                        // Получаем компоненты пути (имя файла без расширения)
                        const { name, ext } = parse(file);

                        // Форматирование имени файла
                        const formattedName = name
                            .replace(/\s+/g, '_') // Замена пробелов на символ подчеркивания
                            .replace(/-/g, '_') // Замена тире на символ подчеркивания
                            .replace(/([a-z])([A-Z])/g, (_, lowercase, uppercase) => `${lowercase}_${uppercase.toLowerCase()}`) // Разделение CamelCase на snake_case
                            .replace(/_+/g, '_') // Замена последовательности подчеркиваний на одно подчеркивание
                            .replace(/^_/, '') // Удаление подчеркивания в начале строки, если есть
                            .toLowerCase(); // Приведение всей строки к нижнему регистру

                        const newFilePath = join(dir, `${formattedName}${ext}`);

                        await rename(filePath, newFilePath);

                        console.log(formattedName);
                    }
                })
            );
        };

        await readRecursive(folderPath);
        console.log('Чтение и форматирование завершено');
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
        throw error;
    }
};

const UI_KIT_ICONS = 'icons';

await readIconFolder(UI_KIT_ICONS);
