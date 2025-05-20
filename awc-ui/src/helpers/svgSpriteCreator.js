import fs from 'fs';
import path from 'path';
import SVGSpriter from 'svg-sprite';

const args = process.argv.slice(2);
const isModule = args.includes('--module');

const config = {
    log: 'debug',
    mode: {
        symbol: true,
    },
    shape: {
        transform: [
            {
                svgo: {
                    plugins: !isModule
                        ? [
                              {
                                  name: 'removeAttrs',
                                  params: {
                                      attrs: '*:(stroke|fill)*',
                                  },
                              },
                          ]
                        : [],
                },
            },
        ],
    },
};

const sourceArray = [];

const pathsOriginalIcons = ['src/assets/icons/icon-16', 'src/assets/icons/icon-24'];

const pathsModulesIcons = [
    'src/assets/icons/icons-modules/module-20',
    'src/assets/icons/icons-modules/module-24',
    'src/assets/icons/icons-modules/module-32',
    'src/assets/icons/icons-modules/module-40',
];

if (isModule) {
    sourceArray.push(...pathsModulesIcons);
} else {
    sourceArray.push(...pathsOriginalIcons);
}

const outputRootDir = 'src/assets/sprites';

sourceArray.forEach((dir) => {
    const spriter = new SVGSpriter(config);
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const filePath = path.join(dir, file);
        spriter.add(filePath, null, fs.readFileSync(filePath, 'utf-8'));
    });

    spriter.compile((error, result) => {
        Object.values(result).forEach((mode) => {
            Object.values(mode).forEach((resource) => {
                const parentDirName = path.basename(dir);
                const outputPath = path.join(outputRootDir, `${parentDirName}.symbol.svg`);

                fs.mkdirSync(outputRootDir, { recursive: true });
                fs.writeFileSync(outputPath, resource.contents);
            });
        });
    });
});
