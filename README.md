# xpath-to-css-template-string-tag

[![npm version](https://badge.fury.io/js/xpath-to-css-template-string-tag.svg)](https://badge.fury.io/js/xpath-to-css-template-string-tag)
[![downloads count](https://img.shields.io/npm/dt/xpath-to-css-template-string-tag.svg)](https://www.npmjs.com/~piecioshka)
[![travis](https://img.shields.io/travis/piecioshka/xpath-to-css-template-string-tag.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/xpath-to-css-template-string-tag)

:ledger: Convert XPath to Selector as [Tagged template literal](http://exploringjs.com/es6/ch_template-literals.html#_tagged-template-literals)

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

Use Jasmine to setup unit test:

```bash
npm test
```

## Code coverage

Check code coverage with [Istanbul](https://github.com/gotwarlost/istanbul):

```bash
npm run coverage
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
