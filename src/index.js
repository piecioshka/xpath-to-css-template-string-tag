'use strict';

const xPathToCss = require('xpath-to-css');

/**
 * @param xPath - String which is a XPath
 * @return {string} - String which is a Selector (ex. in CSS, or jQuery)
 */
function x([xPath]) {
    return xPathToCss(xPath);
}

module.exports = { x };
