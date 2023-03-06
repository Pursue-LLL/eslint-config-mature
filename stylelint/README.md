# CSS编码规范

## 前言

为前端开发提供良好的样式编码风格指南。

基于 [Airbnb](https://github.com/airbnb/css) 编码规范结合实际使用进行制定。所有规范分为三个等级可供参考：**必须**、**推荐**、**可选**。


## 1. 使用

安装 stylelint

```shell
npm install stylelint --save-dev
```

_.stylelintrc.js:_

```javascript
module.exports = {
  extends: [
    'eslint-config-mature/stylelint/style',
  ],
}
```

style 已支持基本风格，使用 scss/less 语法可以额外添加 /style-scss 支持预编译语言特有风格

```javascript
module.exports = {
  extends: [
    'eslint-config-mature/stylelint/style',
    'eslint-config-mature/stylelint/style-scss',
  ],
}
```

添加属性顺序风格，需要安装 stylelint-config-recess-order

```javascript
module.exports = {
  extends: [
    'eslint-config-mature/stylelint/style',
    'eslint-config-mature/stylelint/style-scss',
    'stylelint-config-recess-order',
  ],
}
```

## 2. 规范风格

本节的规范也适用于Sass/less等预编译语言，建议使用Sass进行开发。

用[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)美化器美化后可以让代码满足第4、5、6、7点以及第9点颜色值变小写的要求。

<a name="formatting"></a>

### 2.1 格式

2.1.1 **【必须】** 使用 2 个空格作为缩进。stylelint: `indentation`

**Bad**

```scss
.avatar {
    border-radius:50%;
}
```

**Good**

```scss
.avatar {
  border-radius: 50%;
}
```

2.1.2 **【推荐】** 类名建议使用破折号代替驼峰法，推荐使用BEM方式命名。

BEM，也就是 “Block-Element-Modifier”，是一种用于 HTML 和 CSS 类名的*命名约定*。BEM 最初是由 Yandex 提出的，要知道他们拥有巨大的代码库和可伸缩性，BEM 就是为此而生的，并且可以作为一套遵循 OOCSS 的参考指导规范。

**Bad**

```scss
.listingCard {
  /* ... */
}
```

**Good**

```scss
/* listing-card 是一个块（block），表示高层次的组件 */
.listing-card {
  /* ... */
}

/*listing-card__title 是一个元素（element），它属于 .listing-card 的一部分，因此块是由元素组成的。*/
.listing-card__title {
  /* ... */
}

/*listing-card--featured 是一个修饰符（modifier），表示这个块与 .listing-card 有着不同的状态或者变化。*/
.listing-card--featured {
  /* ... */
}
```

2.1.3 **【必须】** 不要使用 ID 选择器。 sytlelint: `selector-max-id`
在 CSS 中，虽然可以通过 ID 选择元素，但大家通常都会把这种方式列为反面教材。ID 选择器给你的规则声明带来了不必要的高[优先级](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)，而且 ID 选择器是不可重用的。
想要了解关于这个主题的更多内容，参见 [CSS Wizardry 的文章](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/)，文章中有关于如何处理优先级的内容。

ps: `selector-no-id` 已经从stylelint v7.12.0 废除，使用 `selector-max-id: 0` 代替

**Bad**

```scss
#title {
  border-radius:50%;
}
```

**Good**

```scss
.title {
  border-radius: 50%;
}
```

2.1.4 **【必须】** 在一个规则声明中应用了多个选择器时，每个选择器独占一行。stylelint: `selector-list-comma-newline-after`

（本规则可以用[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)美化器美化器来满足。）

**Bad**

```scss
.one, .selector, .per-line {
  /* ... */
}
```

**Good**

```scss
.one,
.selector,
.per-line {
  /* ... */
}
```

2.1.5 **【必须】** 在规则声明的左大括号 `{` 前加上一个空格。 stylelint: `block-opening-brace-space-before`

（本规则可以用[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)美化器美化器来满足。）

**Bad**

```scss
.one{
  /* ... */
}
```

**Good**

```scss
.one {
  /* ... */
}
```

2.1.6 **【必须】** 在属性的冒号 `:` 后面加上一个空格，前面不加空格。stylelint: `declaration-colon-space-after`  `declaration-colon-space-before`

（本规则可以用[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)美化器美化器来满足。）

**Bad**

```scss
.avatar {
  border-radius:50%;
  background:#ffffff;
  border:.02rem solid white;
}
```

**Good**

```scss
.avatar {
  border-radius: 50%;
  background: #fff;
  border: .02rem solid white;
}
```

2.1.7 **【必须】** 规则声明的右大括号 `}` 独占一行。stylelint: `block-closing-brace-newline-before`

（本规则可以用[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)美化器来满足。）

**Bad**

```scss
.avatar {
  border-radius:50%;
  background:#ffffff;
  border:0.02rem solid white; }
```

**Good**

```scss
.avatar {
  border-radius: 50%;
  background: #fff;
  border: .02rem solid white;
}
```

2.1.8 **【推荐】** 颜色值用小写，能用三个字来表示，则推荐用三个字来表示。stylelint `color-hex-length: sort` `color-hex-case: lower`

**Bad**

```scss
.foo {
  background: #ABCDEF;
}

.bar {
  background: #ffffff;
}
```

**Good**

```scss
.foo {
  background: #abcdef;
}

.bar {
  background: #fff;
}
```

2.1.9 **【必须】** 不要使用`!important`。stylelint: `declaration-no-important`

**Bad**

```scss
.avatar {
  border: .02rem solid white !important;
}
```

**Good**

```scss
.avatar {
  border: .02rem solid white;
}
```

2.1.10 **【必须】** 在定义无边框样式时，使用 `0` 代替 `none`。stylelint: `declaration-property-value-disallowed-list`

uses:

```javascript
{
  // ...
  "declaration-property-value-disallowed-list": [
    {
      "/^border/": ["none"]
    }
  ]
}
```

**Bad**

```scss
.foo {
  border: none;
}
```

**Good**

```scss
.foo {
  border: 0;
}
```

2.1.11 **【推荐】** before、after、active、focus等状态只使用一个`:`。 stylelint: `selector-pseudo-element-colon-notation`

**Bad**

```scss
.item {
  &::before{
      content: "";
  }
  &::after{
      content: "";
  }
}

input {
  &::active{
      background: #f00;
  }
  &::focus{
      background: #ff0;
  }
}
```

**Good**

```scss
.item {
  &:before{
    content: '';
  }
  &:after{
    content: '';
  }
}

input {
  &:active{
    background: #f00;
  }
  &:focus{
    background: #ff0;
  }
}
```

2.1.12 **【推荐】** 样式中不要添加浏览器前缀，由编译工具自动添加。stylelint: `value-no-vendor-prefix`

**Bad**

```scss
.item {
  -webkit-box-sizing: border-box;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  -ms-transform: scale(.5);
}
```

**Good**

```scss
.item {
  box-sizing: border-box;
  transform: scale(.5);
}
```

<a name="comments"></a>

2.1.13 **【必须】** 禁止小于1的小数前加0。stylelint: `number-leading-zero: never`

**Bad**

```css
.item {
  line-height: 0.5;
}
```

**Good**

```css
.item {
  line-height: .5;
}
```

2.1.14 **【必须】** 字符串使用单引号。stylelint: `string-quotes: single`

**Bad**

```css
.item::before {
  content: "x"
}
```

**Good**

```css
.item:before {
  content: 'x'
}
```

2.1.15 **【必须】** 单行属性声明块中只允许声明一个属性。stylelint: `declaration-block-single-line-max-declarations: 1`

**Bad**

```css
.item { color: red, top: 3px }
```

**Good**

```css
.item {
  color: red;
  top: 3px;
}
```

2.1.16 **【推荐】** 最大嵌套深度。stylelint: `max-nesting-depth: 10`

### 2.2 注释

2.2.1 **【推荐】** 建议使用行注释 (在 Sass 中是 `//`) 代替块注释。

**Bad**

```scss
/*
* 注释1
* 注释2
*/
.avatar {
  border: .02rem solid white;
}

.avatar {
  border: .02rem solid white; /*注释*/
}
```

**Good**

```scss
/* 注释 */
.avatar {
  border: .02rem solid white;
}
```

2.2.2 **【推荐】** 给需要注释的代码写上详细说明，比如：

- 为什么用到了 z-index
- 兼容性处理或者针对特定浏览器的 hack

**Good**

```scss
/* 用到了z-index的原因 */
.avatar {
  z-index: 3;
}

/* 针对华为手机的兼容性处理 */
.huawei-hack {
  /* ... */
}
```

2.2.3 **【推荐】** 在html上说明加上某个类有什么用，例如：加上show类时显示弹窗，加上me类显示“我的”样式。

**Good**

```html
<!-- 加上show类时显示弹窗 -->
<div class="dialog show"></div>

<!-- 加上me类时表示我的消息的样式 -->
<div class="message me"></div>
```

<a name="id-selectors"></a>

<a name="javascript-hooks"></a>

2.2.4 **【推荐】** 非首行注释，需要在注释前空行。 stylelint: `comment-empty-line-before`

**Bad**

```css
.item {}
/* comment */
```

**Good**

```css
.item {}

/* comment */
```

### 2.3 JavaScript 钩子

2.3.1 **【推荐】** 避免在 CSS 和 JavaScript 中绑定相同的类。否则开发者在重构时通常会出现以下情况：轻则浪费时间在对照查找每个要改变的类，重则因为害怕破坏功能而不敢作出更改。

我们推荐在创建用于特定 JavaScript 的类名时，添加 `js-` 前缀：

**Good**

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

<a name="sass"></a>

## 3. Sass

<a name="syntax"></a>

### 3.1 语法

3.1.1 **【必须】** 使用 `.scss` 的语法，不使用 `.sass` 原本的语法。

3.1.2 **【必须】** CSS 和 `@include` 声明按照以下逻辑排序（参见下文）

3.1.3 **【推荐】** 不要嵌套 ID 选择器。如果你始终坚持要使用 ID 选择器（劝你三思），那也不应该嵌套它们。如果你正打算这么做，你需要先重新检查你的标签，或者指明原因。如果你想要写出风格良好的 HTML 和 CSS，你是**不**应该这样做的。

**Bad**

```scss
.content-box {
  border: .02rem solid white; 

  #title {
    /* ... */
  }
}
```

**Good**

```scss
.content-box {
  border: .02rem solid white; 

  .title {
    /* ... */
  }
}
```

3.1.4 **【推荐】** 指定sass变量指定模式。 `scss/dollar-variable-pattern`

3.1.5 **【推荐】** 禁止在@extend后缺失占位符。`scss/at-extend-no-missing-placeholder`

**Bad**

```scss
.p1 {
  @extend .some-class
}
```

```scss
.p1 {
  @extend #some-identifer;
}
```

```scss
.p1 {
  @extend .blah-#{$dynamically_generated_name};
}
```

**Good**

```scss
.p1 {
  @extend %placeholder;
}

.p2 {
  @extend #{$dynamically_generated_placeholder_name};
}
```

<a name="ordering-of-property-declarations"></a>
3.2 **【必须】** 属性声明的排序

3.2.1 属性声明

  首先列出除去 `@include` 和嵌套选择器之外的所有属性声明。
  
  ```scss
  .btn-green {
    background: green;
    font-weight: bold;

    /* ... */
  }
  ```

3.2.2 `@include` 声明

  紧随后面的是 `@include`，这样可以使得整个选择器的可读性更高。
  
  ```scss
  .btn-green {
    background: green;
    font-weight: bold;

    @include transition(background 0.5s ease);

    /* ... */
  }
  ```

3.2.3 嵌套选择器

  *如果有必要*用到嵌套选择器，把它们放到最后。嵌套选择器中的内容也要遵循上述指引。
  
  ```scss
  .btn {
    background: green;
    font-weight: bold;

    @include transition(background 0.5s ease);

    .icon {
      margin-right: 0.1rem;
    }
    .text {
      color: #fff;
    }
  }
  ```

<a name="import-less"></a>

### 3.3 @import 语句

3.3.1 **【推荐】** @import 语句引用的文件必须（MUST）写在一对引号内，`.scss` 后缀不得省略（与引入 CSS 文件时的路径格式一致），引号使用 `"`。

**Bad**

```scss
@import 'est/all';
@import "my/mixins";
```

**Good**

```scss
@import "est/all.scss";
@import "my/mixins.scss";
```

<a name="variables"></a>

### 3.4 变量

3.4.1 **【必须】** 变量名应使用破折号（例如 `$my-variable`）代替 camelCased 和 snake_cased 风格。对于仅用在当前文件的变量，可以在变量名之前添加下划线前缀（例如 `$_my-variable`）。

**Bad**

```scss
$my_variable = 0；
$myVariable = 0；
```

**Good**

```scss
$my-variable = 0；
$_my-variable = 0；
```

<a name="mixins"></a>

### 3.5 Mixins

3.5.1 **【推荐】** 为了让代码遵循 DRY 原则（Don't Repeat Yourself）、增强清晰性或抽象化复杂性，应该使用 mixin，这与那些命名良好的函数的作用是异曲同工的。虽然 mixin 可以不接收参数，但要注意，假如你不压缩负载（比如通过 gzip），这样会导致最终的样式包含不必要的代码重复。

**Good**

```scss
@mixin foo() {
  /* ... */
}

@include foo();
```

3.5.2 **【推荐】** Mixin 和后面的括号之间不得包含空格。在给 mixin 传递参数时，在参数分隔符 (`,`, `;`) 后要保留一个空格。

**Bad**

```scss
.box {
  @include size(30px,20px);
  @include clearfix ();
}
```

**Good**

```scss
.box {
  @include size(30px, 20px);
  @include clearfix();
}
```

<a name="extend-directive"></a>

### 3.6 扩展指令

3.6.1 **【推荐】** 应避免使用 `@extend` 指令，因为它并不直观，而且具有潜在风险，特别是用在嵌套选择器的时候。即便是在顶层占位符选择器使用扩展，如果选择器的顺序最终会改变，也可能会导致问题。（比如，如果它们存在于其他文件，而加载顺序发生了变化）。其实，使用 `@extend` 所获得的大部分优化效果，gzip 压缩已经帮助你做到了，因此你只需要通过 mixin 让样式表更符合 DRY 原则就足够了。

**Bad**

```scss
%foo

@extend %foo;
```

<a name="less"></a>

## 4. less

<a name="order-less"></a>

### 4.1 代码组织

4.1.1 **【推荐】** 代码按如下形式按顺序组织

1. import
1. 变量声明
1. 样式声明

```less
@import "est/all.less";

@default-text-color: #333;

.page {
  width: 960px;
  margin: 0 auto;
}
```

<a name="import-less"></a>

### 4.2 @import 语句

4.2.1 **【推荐】** `@import`语句引用的文件必须（MUST）写在一对引号内，`.less`后缀不得省略（与引入 CSS 文件时的路径格式一致），引号使用 `"`。

**Bad**

```less
@import 'est/all';
@import "my/mixins";
```

**Good**

```less
@import "est/all.less";
@import "my/mixins.less";
```

<a name="variables"></a>

### 4.3 变量

4.3.1 **【必须】** 变量名应使用破折号（例如 `@my-variable`）代替 camelCased 和 snake_cased 风格。对于仅用在当前文件的变量，可以在变量名之前添加下划线前缀（例如 `@_my-variable`）。

**Bad**

```less
@my_variable = 0；
@myVariable = 0；
```

**Good**

```less
@my-variable = 0；
@_my-variable = 0；
```

<a name="cal-less"></a>

### 4.4 运算

4.4.1 **【推荐】**  `+`, `-`, `*`, `/` 四个运算符两侧保留一个空格。`+`, `-` 两侧的操作数有相同的单位，如果其中一个是变量，另一个数值书写单位。

**Bad**

```less
@a: 200px;
@b: (@a+100)*2;
```

**Good**

```less
@a: 200px;
@b: (@a + 100px) * 2;
```

<a name="mixin-less"></a>

### 4.5 Mixins

4.5.1 **【推荐】** Mixin 和后面的括号之间不得包含空格。在给 mixin 传递参数时，在参数分隔符 (`,`, `;`) 后要保留一个空格：

**Bad**

```less
.box {
  .size(30px,20px);
  .clearfix ();
}
```

**Good**

```less
.box {
  .size(30px, 20px);
  .clearfix();
}
```

4.5.2 **【推荐】** 在定义 mixin 时，如果 mixin 名称不是一个需要使用的 className，加上括号，否则即使不被调用也会输出到 CSS 中。

**Bad**

```less
.big-text {
  font-size: 2em;
}

h3 {
  .big-text;
}
```

**Good**

```less
.big-text() {
  font-size: 2em;
}

h3 {
  .big-text();
}
```

4.5.3 **【推荐】** 如果混入的是本身不输出内容的 mixin，在 mixin 后添加括号（即使不传参数），以区分这是否是一个 className（修改以后是否会影响 HTML）。

**Bad**

```less
.box {
  .clearfix;
  .size (20px);
}
```

**Good**

```less
.box {
  .clearfix();
  .size(20px);
}
```

<a name="extend-less"></a>

### 4.6 继承

4.6.1 **【推荐】** 使用继承时，如果在声明块内书写 `:extend` 语句，写在开头：

**Bad**

```less
.sub {
  color: red;
  &:extend(.mod all);
}
```

**Good**

```less
.sub {
  &:extend(.mod all);
  color: red;
}
```

<a name="Prettier"></a>

