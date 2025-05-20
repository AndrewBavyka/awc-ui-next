import { readFile, writeFile } from 'fs/promises';

// Функция чтения содержимого файла
const readCssFile = async (filePath) => {
    try {
        const content = await readFile(filePath, 'utf-8');
        return content;
    } catch (error) {
        console.error('Ошибка при чтении файла:', error.message);
        throw error;
    }
};

// Функция извлечения переменных типографики из CSS
const extractTypographyVariables = (cssContent) => {
    const typographyVariableRegex = /--typography-([^\s]+):([^;]+)/g;
    const matches = cssContent.matchAll(typographyVariableRegex);

    const variables = {};

    for (const match of matches) {
        const name = `--typography-${match[1]}`;
        const value = match[2].trim();

        variables[name] = value;
    }

    return variables;
};

const CSS_TOKENS_PATH = 'src/assets/design-tokens/build/tokens.css';
const CSS_TYPOGRAPHY_PATH_OUTPUT = 'src/assets/design-tokens/build/typography.css';

const mergeTypographyVariables = (typographyVariables) => {
    const mergedTokens = {};

    for (const [variable, value] of Object.entries(typographyVariables)) {
        let variableParts = variable.slice(13).split('-');
        const joinLastElement = variableParts.slice(-2).join('-');

        if (variableParts.length > 4) {
            variableParts = [variableParts[0], variableParts.slice(1, 3).join('-')].concat(variableParts.slice(3));
        }
        variableParts.push(joinLastElement, value);

        const [tag, weight] = variableParts;
        const key = `${tag}-${weight}`;

        if (!mergedTokens[key]) {
            mergedTokens[key] = { tag, weight };
        }

        const [property, valueProp] = variableParts.slice(-2);
        if (!mergedTokens[key][property]) {
            mergedTokens[key][property] = valueProp;
        }
    }

    return mergedTokens;
};

// Функция создания CSS переменных
const writingCssVariablesToFile = async (variables) => {
    const createVariableString = variables.join('\n');
    const innerText = `:root {\n${createVariableString}\n}`;

    try {
        await writeFile(CSS_TYPOGRAPHY_PATH_OUTPUT, innerText);
        console.log('Переменные записаны в файл');
    } catch (error) {
        console.error('Произошла ошибка при записи переменных:', error.message);
    }
};

// Функция создания CSS переменных
const createCssVariables = (mergedTokens) => {
    const arrNewTokens = [];

    Object.values(mergedTokens).forEach(({ tag, weight, ...properties }) => {
        if (properties['font-weight'] && properties['font-size'] && properties['line-height'] && properties['font-family']) {
            const cssVariableName = `--awc-font-${tag}-${weight}: ${properties['font-weight']} ${properties['font-size']}/${properties['line-height']} ${properties['font-family']};`;
            arrNewTokens.push(cssVariableName);
        } else {
            console.log(`--awc-${tag}-${weight}: no-style;`);
        }
    });

    writingCssVariablesToFile(arrNewTokens);
};

readCssFile(CSS_TOKENS_PATH)
    .then((cssContent) => {
        const typographyVariables = extractTypographyVariables(cssContent);
        const mergedTokens = mergeTypographyVariables(typographyVariables);
        createCssVariables(mergedTokens);
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error.message);
    });
