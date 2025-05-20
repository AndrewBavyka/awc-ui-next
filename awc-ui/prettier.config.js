/**
 * @see https://prettier.io/docs/en/options.html
 */
export default {
  printWidth: 160,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'auto',
  proseWrap: 'never',
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
  ],
};
