import fs from 'fs';
import path from 'path';

const manifestPath = '../awc-ui/src/docs/custom-elements.json';
const outputPath = './src/generated/routes.ts';
const pagesDir = './src/pages/components';

// Список компонентов, которые нужно исключить из автоматической генерации
const excludedComponents = ['AwcSelect'];

// Функция для форматирования имени маршрута
const formatRouteName = (name) => {
    return name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
};

// Функция для нормализации имени атрибута (дефисы → camelCase)
const normalizeAttrName = (name) => {
    return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

// Функция для очистки значения от кавычек (включая экранированные) и проверки на пустую строку
const cleanValue = (value) => {
    if (typeof value !== 'string') return value;
    const cleaned = value.replace(/\\"/g, '').replace(/['"]/g, '').trim();
    return cleaned === '' ? null : cleaned;
};

// Функция для определения типа контрола и генерации HTML (для таблицы)
const generateControl = (attr, prefix) => {
    const type = attr.type || '';
    const name = normalizeAttrName(attr.name);

    if (type.includes('|')) {
        const options = type
            .split('|')
            .map(opt => cleanValue(opt.trim()))
            .filter(opt => opt !== null);
        return `
          <select id="${prefix}-${name}" v-model="${prefix}Attributes.${name}">
            ${options.map(opt => `<option value="${opt}">${opt}</option>`).join('\n            ')}
          </select>
        `;
    }
    if (type === 'string') {
        return `
          <input id="${prefix}-${name}" type="text" v-model="${prefix}Attributes.${name}" />
        `;
    }
    if (type === 'number') {
        return `
          <input id="${prefix}-${name}" type="number" v-model="${prefix}Attributes.${name}" />
        `;
    }
    if (type === 'boolean') {
        return `
          <input id="${prefix}-${name}" type="checkbox" v-model="${prefix}Attributes.${name}" />
        `;
    }
    return '';
};

// Функция для преобразования defaultValue в зависимости от типа
const formatDefaultValue = (type, defaultValue) => {
    const cleanedValue = cleanValue(defaultValue);

    if (type === 'boolean') {
        return cleanedValue === 'true' ? 'true' : 'false';
    }
    if (type === 'string' || type.includes('|')) {
        return cleanedValue !== null ? `'${cleanedValue}'` : '""';
    }
    if (type === 'number') {
        return cleanedValue && !isNaN(Number(cleanedValue)) ? cleanedValue : '0';
    }
    return cleanedValue !== null ? `'${cleanedValue}'` : '""';
};

// Функция для нормализации типов (очистка экранированных кавычек)
const normalizeType = (type) => {
    if (type.includes('|')) {
        const options = type
            .split('|')
            .map(opt => cleanValue(opt.trim()))
            .filter(opt => opt !== null);
        return options.map(opt => `'${opt}'`).join(' | ');
    }
    return type;
};

// Функция для генерации интерфейса на основе атрибутов
const generateInterface = (attributes, interfaceName = 'Attributes') => {
    const props = attributes.map(attr => {
        const type = attr.type || 'string';
        const name = normalizeAttrName(attr.name);
        if (type.includes('|')) {
            return `  ${name}: ${normalizeType(type)}`;
        }
        return `  ${name}: ${type}`;
    }).join('\n');
    return `interface ${interfaceName} {\n${props}\n}`;
};

// Функция для генерации таблицы свойств для родительского компонента
const generateParentTable = (attributes, prefix) => {
    const normalizedAttributes = attributes.map(attr => ({
        ...attr,
        name: normalizeAttrName(attr.name)
    }));

    return `
      <table class="attributes-table">
        <thead>
          <tr>
            <th>Name and Description</th>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
${normalizedAttributes.map(attr => `
          <tr>
            <td>
              <strong>[${attr.name}]</strong><br>
              ${attr.description || ''}
            </td>
            <td>${attr.type}</td>
            <td>${generateControl(attr, prefix)}</td>
          </tr>
`).join('')}
        </tbody>
      </table>
    `;
};

// Функция для генерации таблицы документации (без контролов)
const generateDocTable = (items, typeLabel) => {
    if (!items || items.length === 0) return '';

    return `
      <h3>${typeLabel}</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>Name and Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
${items.map(item => {
    let name = item.name;
    let type = item.type || 'N/A';
    let description = item.description || '';

    if (typeLabel === 'Methods' && item.parameters) {
        const params = item.parameters.map(param => `${param.name}: ${param.type || 'any'}`).join(', ');
        name = `${item.name}(${params})`;
        type = item.returnType || 'void';
    } else if (typeLabel === 'CSS Properties') {
        name = `--${item.name}`;
    } else if (typeLabel === 'Attributes') {
        name = `[${item.name}]`;
    } else if (typeLabel === 'Events') {
        name = `@${item.name}`;
    }

    return `
          <tr>
            <td>
              <strong>${name}</strong><br>
              ${description}
            </td>
            <td>${type}</td>
          </tr>
    `;
}).join('')}
        </tbody>
      </table>
    `;
};

// Функция для генерации дочерних компонентов с таблицами
const generateChildComponents = (parentTagName, allComponents) => {
    const childComponents = allComponents.filter(comp => 
        comp.tagName.startsWith(parentTagName + '-') && comp.attributes
    );
    if (!childComponents.length) return { tables: '', components: '', interfaces: '', reactiveObjects: '' };

    const tables = childComponents.map(child => {
        const prefix = child.tagName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        const normalizedAttrs = child.attributes.map(attr => ({
            ...attr,
            name: normalizeAttrName(attr.name)
        }));
        return `
      <h3>${child.tagName}</h3>
${generateParentTable(normalizedAttrs, prefix)}
`;
    }).join('\n');

    const components = childComponents.map(child => {
        const prefix = child.tagName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        return `      <${child.tagName} v-bind="${prefix}Attributes"></${child.tagName}>`;
    }).join('\n');

    const interfaces = childComponents.map(child => {
        const interfaceName = child.tagName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()) + 'Attributes';
        const normalizedAttrs = child.attributes.map(attr => ({
            ...attr,
            name: normalizeAttrName(attr.name)
        }));
        return generateInterface(normalizedAttrs, interfaceName);
    }).join('\n');

    const reactiveObjects = childComponents.map(child => {
        const prefix = child.tagName.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        const interfaceName = prefix + 'Attributes';
        const normalizedAttrs = child.attributes.map(attr => ({
            ...attr,
            name: normalizeAttrName(attr.name)
        }));
        return `const ${prefix}Attributes = reactive<${interfaceName}>({\n${normalizedAttrs.map(attr => `  ${attr.name}: ${formatDefaultValue(attr.type, attr.defaultValue)}`).join(',\n')}\n});`;
    }).join('\n');

    return { tables, components, interfaces, reactiveObjects };
};

// Функция для генерации дочерних компонентов для документации (без контролов)
const generateChildComponentsDocs = (parentTagName, allComponents) => {
    const childComponents = allComponents.filter(comp => 
        comp.tagName.startsWith(parentTagName + '-') && (comp.attributes || comp.events || comp.methods || comp.cssProperties)
    );
    if (!childComponents.length) return '';

    return childComponents.map(child => {
        return `
      <h2>${child.tagName}</h2>
${generateDocTable(child.attributes, 'Attributes')}
${generateDocTable(child.events, 'Events')}
${generateDocTable(child.methods, 'Methods')}
${generateDocTable(child.cssProperties, 'CSS Properties')}
`;
    }).join('\n');
};

// Шаблон для .vue-файла с таблицей (интерактивный)
const vueTemplate = (componentName, tagName, attributes = [], allComponents) => {
    const childData = generateChildComponents(tagName, allComponents);
    const normalizedAttributes = attributes.map(attr => ({
        ...attr,
        name: normalizeAttrName(attr.name)
    }));

    return `
<template>
  <div class="component-wrapper">
    <h1>{{ title }}</h1>
    <div class="attributes-section">
      <h2>${tagName} Attributes</h2>
${generateParentTable(normalizedAttributes, 'parent')}
${childData.tables}
    </div>
    <div class="preview-section">
      <h2>Preview</h2>
      <${tagName} v-bind="parentAttributes">
${childData.components}
      </${tagName}>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

${generateInterface(normalizedAttributes, 'ParentAttributes')}
${childData.interfaces}

const title = '${componentName}';
const parentAttributes = reactive<ParentAttributes>({
${normalizedAttributes.map(attr => `  ${attr.name}: ${formatDefaultValue(attr.type, attr.defaultValue)}`).join(',\n')}
});
${childData.reactiveObjects}
</script>

<style scoped>
.component-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.attributes-section {
  width: 100%;
}

.attributes-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.attributes-table th,
.attributes-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.attributes-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.attributes-table td {
  vertical-align: top;
}

.attributes-table strong {
  color: #e74c3c;
}

.attributes-table select,
.attributes-table input[type="text"],
.attributes-table input[type="number"],
.attributes-table input[type="checkbox"] {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}

.preview-section {
  margin-top: 20px;
}

h2, h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
`;
};

// Шаблон для .vue-файла с документацией (без контролов)
const vueDocTemplate = (componentName, tagName, classExport, allComponents) => {
    const childDocs = generateChildComponentsDocs(tagName, allComponents);

    return `
<template>
  <div class="doc-wrapper">
    <h1>{{ title }} Documentation</h1>
    <div class="doc-section">
      <h2>${tagName}</h2>
${generateDocTable(classExport.attributes, 'Attributes')}
${generateDocTable(classExport.events, 'Events')}
${generateDocTable(classExport.methods, 'Methods')}
${generateDocTable(classExport.cssProperties, 'CSS Properties')}
${childDocs}
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = '${componentName}';
</script>

<style scoped>
.doc-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.doc-section {
  width: 100%;
}

.doc-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.doc-table th,
.doc-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.doc-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.doc-table td {
  vertical-align: top;
}

.doc-table strong {
  color: #e74c3c;
}

h2, h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
`;
};

// Шаблон для .vue-файла с примерами (пока пустой)
const vueExampleTemplate = (componentName, tagName) => {
    return `
<template>
  <div class="example-wrapper">
    <h1>{{ title }} Examples</h1>
    <div class="example-section">
      <h2>${tagName} Examples</h2>
      <!-- Add examples here -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const title = '${componentName}';
</script>

<style scoped>
.example-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.example-section {
  width: 100%;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
`;
};

// Функция для создания .vue-файла (интерактивный)
const createOrUpdateVueFile = (componentName, tagName, classExport, allComponents) => {
    const componentDir = path.join(pagesDir, formatRouteName(componentName));
    const filePath = path.join(componentDir, `${componentName}.vue`);
    const attributes = classExport.attributes || [];

    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
        console.log(`Created directory: ${componentDir}`);
    }

    if (!fs.existsSync(filePath)) {
        const content = vueTemplate(componentName, tagName, attributes, allComponents);
        fs.writeFileSync(filePath, content.trim());
        console.log(`Created page: ${filePath}`);
    } else {
        console.log(`Page ${filePath} already exists, skipping creation`);
    }
};

// Функция для создания .vue-файла с документацией
const createOrUpdateDocFile = (componentName, tagName, classExport, allComponents) => {
    const componentDir = path.join(pagesDir, formatRouteName(componentName));
    const filePath = path.join(componentDir, `${componentName}Docs.vue`);

    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
        console.log(`Created directory: ${componentDir}`);
    }

    if (!fs.existsSync(filePath)) {
        const content = vueDocTemplate(componentName, tagName, classExport, allComponents);
        fs.writeFileSync(filePath, content.trim());
        console.log(`Created doc page: ${filePath}`);
    } else {
        console.log(`Doc page ${filePath} already exists, skipping creation`);
    }
};

// Функция для создания .vue-файла с примерами
const createOrUpdateExampleFile = (componentName, tagName) => {
    const componentDir = path.join(pagesDir, formatRouteName(componentName));
    const filePath = path.join(componentDir, `${componentName}Example.vue`);

    if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
        console.log(`Created directory: ${componentDir}`);
    }

    if (!fs.existsSync(filePath)) {
        const content = vueExampleTemplate(componentName, tagName);
        fs.writeFileSync(filePath, content.trim());
        console.log(`Created example page: ${filePath}`);
    } else {
        console.log(`Example page ${filePath} already exists, skipping creation`);
    }
};

try {
    if (!fs.existsSync(manifestPath)) {
        throw new Error(`Manifest file not found at ${manifestPath}`);
    }

    if (!fs.existsSync(pagesDir)) {
        fs.mkdirSync(pagesDir, { recursive: true });
        console.log(`Created directory: ${pagesDir}`);
    }

    const manifestRaw = fs.readFileSync(manifestPath, 'utf-8');
    const manifest = JSON.parse(manifestRaw);

    if (!manifest || !Array.isArray(manifest.modules)) {
        throw new Error('Invalid manifest structure: "modules" is missing or not an array');
    }

    const allComponents = manifest.modules
        .map(mod => {
            const classExport = mod.exports.find(exp => exp.kind === 'class');
            return classExport ? { 
                tagName: classExport.tagName, 
                attributes: classExport.attributes,
                events: classExport.events,
                methods: classExport.methods,
                cssProperties: classExport.cssProperties
            } : null;
        })
        .filter(Boolean);

    const parentComponents = manifest.modules.filter(mod => {
        const classExport = mod.exports.find(exp => exp.kind === 'class');
        if (!classExport) return false;
        const tagName = classExport.tagName;
        return !allComponents.some(comp => 
            comp.tagName !== tagName && tagName.startsWith(comp.tagName + '-')
        );
    });

    const routes = parentComponents
        .map((mod) => {
            const classExport = mod.exports.find(exp => exp.kind === 'class');
            const definitionExport = mod.exports.find(exp => exp.kind === 'definition');

            if (!classExport || !definitionExport) {
                console.warn(`Skipping module ${mod.path}: no class or definition export found`);
                return null;
            }

            const componentName = definitionExport.declaration.name;
            const tagName = classExport.tagName;
            const routeName = formatRouteName(componentName);

            // Пропускаем компоненты из списка исключений
            if (excludedComponents.includes(componentName)) {
                console.log(`Skipping generation for excluded component: ${componentName}`);
                return null;
            }

            // Создаём интерактивную страницу
            createOrUpdateVueFile(componentName, tagName, classExport, allComponents);
            // Создаём страницу документации
            createOrUpdateDocFile(componentName, tagName, classExport, allComponents);
            // Создаём страницу с примерами
            createOrUpdateExampleFile(componentName, tagName);

            return [
                {
                    path: `/components/${routeName}`,
                    name: componentName,
                    component: `() => import('../pages/components/${routeName}/${componentName}.vue')`,
                    meta: {
                        tagName: tagName,
                        description: classExport.description || '',
                        showInSidebar: true
                    }
                },
                {
                    path: `/components/${routeName}/docs`,
                    name: `${componentName}Docs`,
                    component: `() => import('../pages/components/${routeName}/${componentName}Docs.vue')`,
                    meta: {
                        tagName: tagName,
                        description: classExport.description || '',
                        showInSidebar: false
                    }
                },
                {
                    path: `/components/${routeName}/examples`,
                    name: `${componentName}Example`,
                    component: `() => import('../pages/components/${routeName}/${componentName}Example.vue')`,
                    meta: {
                        tagName: tagName,
                        description: classExport.description || '',
                        showInSidebar: false
                    }
                }
            ];
        })
        .filter(route => route !== null)
        .flat();

    const fileContent = `
    import type { RouteRecordRaw } from 'vue-router';
    
    const routes: RouteRecordRaw[] = [
      ${routes.map(route => JSON.stringify(route, null, 2)).join(',\n')}
    ];
    
    export default routes;
    `
        .replace(/"component": "([^"]+)"/g, '"component": $1');

    fs.writeFileSync(outputPath, fileContent);
    console.log('Routes generated successfully!');
} catch (error) {
    console.error('Error generating routes:', error.message);
    console.error('Manifest path:', manifestPath);
}