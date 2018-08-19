'use strict';

const { x } = require('./../../../src/index');

describe('General', () => {
    it('happy path', () => {

        const css = x`//div[@id="foo"]`;
        expect(css)
            .toEqual('div#foo');

    });
});
