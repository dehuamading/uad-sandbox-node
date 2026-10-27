'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { shippingFee } = require('../../src/shipping');

test('满 100 元免运费', () => {
  assert.equal(shippingFee(10000), 0);
  assert.equal(shippingFee(15000), 0);
});
test('不满 100 元收 8 元运费', () => {
  assert.equal(shippingFee(9999), 800);
});
