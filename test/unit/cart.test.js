'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { subtotal, applyDiscount } = require('../../src/cart');

test('subtotal 按数量累加', () => {
  assert.equal(subtotal([{ price: 1000, qty: 2 }, { price: 250, qty: 4 }]), 3000);
});
test('subtotal 空购物车为 0', () => {
  assert.equal(subtotal([]), 0);
});
test('VIP 享受 10% 折扣', () => {
  assert.equal(applyDiscount(10000, 'VIP'), 9000);
});
test('普通用户无折扣', () => {
  assert.equal(applyDiscount(10000, 'NORMAL'), 10000);
});
