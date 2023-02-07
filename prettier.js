
module.exports = {
  plugins: ['prettier'],
  rules: {
    /**
     * 重写eslint规范避免冲突
     */
    'wrap-iife': 'off',
    'template-curly-spacing': 'off',
    'space-infix-ops': 'off',
    'space-in-parens': 'off',
    'space-before-blocks': 'off',
    'quote-props': 'off',
    'padded-blocks': 'off',
    'operator-linebreak': 'off',
    'object-curly-spacing': 'off',
    'nonblock-statement-body-position': 'off',
    'no-whitespace-before-property': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-mixed-operators': 'off',
    'no-confusing-arrow': 'off',
    'newline-per-chained-call': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'key-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    'generator-star-spacing': 'off',
    'function-paren-newline': 'off',
    'eol-last': 'off',
    'computed-property-spacing': 'off',
    'comma-style': 'off',
    'comma-dangle': 'off',
    'block-spacing': 'off',
    'arrow-spacing': 'off',
    'arrow-parens': 'off',
    'array-bracket-spacing': 'off',

    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/brace-style': 'off',
    /**
     * prettier 格式错误
     */
    'prettier/prettier': [
      'warn',
      {
        // 一行最多 100 字符
        printWidth: 100,
        // 使用 2 个空格缩进
        tabWidth: 2,
        // 不使用缩进符，而使用空格
        useTabs: false,
        // 行尾需要有分号
        semi: true,
        // 使用单引号
        singleQuote: true,
        // 对象的 key 仅在必要时用引号
        quoteProps: 'as-needed',
        // jsx 不使用单引号，而使用双引号
        jsxSingleQuote: false,
        // 末尾不需要逗号
        trailingComma: 'none',
        // 大括号内的首尾需要空格
        bracketSpacing: true,
        // jsx 标签的反尖括号需要换行
        jsxBracketSameLine: false,
        // 箭头函数，只有一个参数的时候，也需要括号，方便ts添加类型
        arrowParens: 'always',
        // 每个文件格式化的范围是文件的全部内容
        rangeStart: 0,
        rangeEnd: null,
        // 不需要写文件开头的 @prettier
        requirePragma: false,
        // 不需要自动在文件开头插入 @prettier
        insertPragma: false,
        // 使用默认的折行标准
        proseWrap: 'preserve',
        // 根据显示样式决定 html 要不要折行
        htmlWhitespaceSensitivity: 'css',
        // 换行符使用 lf
        endOfLine: 'lf',
        embeddedLanguageFormatting: 'auto',
        // 缩进vue 的 Script 和 Style标签
        vueIndentScriptAndStyle: false,
        // 在HTML、Vue和JSX中强制每行只有一个属性
        singleAttributePerLine: false,
        // 末尾需要逗号
        trailingComma: 'all',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
