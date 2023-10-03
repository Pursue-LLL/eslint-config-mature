module.exports = {
  rules: {
    // Base rules
    indentation: 2, // 使用 2 个空格缩进
    'number-leading-zero': 'never', // 数字前不要有前导零
    'string-quotes': 'single', // 使用单引号
    'selector-max-id': 0, // 不允许使用 id 选择器
    'selector-list-comma-newline-after': 'always', // 选择器列表后总是有换行
    'declaration-block-semicolon-newline-after': 'always', // 在每个属性后要求一个换行符
    "max-empty-lines": 1, // 类之间最大空行
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ], // 注释前总是有空行，但首个嵌套的注释除外
    'block-opening-brace-space-before': 'always', // 块的左大括号前总是有空格
    'declaration-colon-space-after': 'always', // 声明冒号后总是有空格
    'declaration-colon-space-before': 'never', // 声明冒号前不要有空格
    'declaration-block-single-line-max-declarations': 1, // 声明块中的声明数最多为 1 条
    'declaration-property-value-disallowed-list': { '/^border/': ['none'] }, // 不允许使用特定值的声明
    // 不要使用已被 autoprefixer 支持的浏览器前缀
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    // 颜色值要小写
    'color-hex-case': 'lower',
    // 颜色值能短则短
    'color-hex-length': 'short',
    // 不能用important
    'declaration-no-important': true,
    // 去掉多个import、extends、父子声明之间的空行
    'rule-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],
    'at-rule-empty-line-before': ['always', {
      except: ['first-nested',  'blockless-after-blockless'],
      ignore: ['after-comment'],
    }],
  },
};
