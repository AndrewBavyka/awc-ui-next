type UnitLanguageMap = {
    [language: string]: string[];
};

export function formatFileSize(fileSize: number, isSiSystem: boolean = false, language: string = 'en'): string {
    if (typeof fileSize !== 'number' || isNaN(fileSize) || fileSize < 0) {
        return '';
    }

    const base = isSiSystem ? 1000 : 1024;

    const units: UnitLanguageMap = {
        en: isSiSystem ? ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
        ru_RU: isSiSystem ? ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ', 'ПБ', 'ЭБ', 'ЗБ', 'ЯБ'] : ['Б', 'КиБ', 'МиБ', 'ГиБ', 'ТиБ', 'ПиБ', 'ЭиБ', 'ЗиБ', 'ЯиБ'],
    };

    const chosenUnits = units[language] || units['en'];

    let size = fileSize;
    let unitIndex = 0;

    for (unitIndex = 0; unitIndex < chosenUnits.length - 1; unitIndex++) {
        if (size < base) break;
        size /= base;
    }

    if (size === 0) {
        return `${size.toFixed(0)} ${chosenUnits[unitIndex]}`;
    } else {
        return `${size.toFixed(1)} ${chosenUnits[unitIndex]}`;
    }
}
