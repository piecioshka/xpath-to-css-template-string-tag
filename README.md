# xpath-to-css-template-string-tag

[![node version](https://img.shields.io/node/v/xpath-to-css-template-string-tag.svg)](https://www.npmjs.com/package/xpath-to-css-template-string-tag)
[![npm version](https://badge.fury.io/js/xpath-to-css-template-string-tag.svg)](https://badge.fury.io/js/xpath-to-css-template-string-tag)
[![downloads count](https://img.shields.io/npm/dt/xpath-to-css-template-string-tag.svg)](https://www.npmjs.com/package/xpath-to-css-template-string-tag)
[![size](https://packagephobia.com/badge?p=xpath-to-css-template-string-tag)](https://packagephobia.com/result?p=xpath-to-css-template-string-tag)
[![license](https://img.shields.io/npm/l/xpath-to-css-template-string-tag.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/xpath-to-css-template-string-tag/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/xpath-to-css-template-string-tag/actions/workflows/testing.yml)

🔨 Convert XPath to Selector as [Tagged template literal](https://exploringjs.com/es6/ch_template-literals.html#_tagged-template-literals)

## Installation

```bash
npm install xpath-to-css-template-string-tag
```

## Usage

```js
const { x } = require('xpath-to-css-template-string-tag');
x`//div[@id="foo"]` // 'div#foo'
```

## Unit tests

```bash
npm test
```

## Code coverage

```bash
npm run coverage
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2018
