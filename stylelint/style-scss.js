module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    // Sass rules
    'max-nesting-depth': 10,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    // 参照 [https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md]
    'order/order': [
      'declarations', // 声明
      { type: 'at-rule' }, // @
      { type: 'at-rule', hasBlock: true }, // 嵌套@
      'rules', // 嵌套规则
    ],
  },
};
