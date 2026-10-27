'use strict';
// 新合同条款（与 docs/business-rules.md 冲突，需产品负责人裁决）
const test = require('node:test');
const assert = require('node:assert/strict');
const { shippingFee } = require('../../src/shipping');

test('合同条款：所有订单一律收 8 元运费', () => {
  assert.equal(shippingFee(10000), 800);
});
