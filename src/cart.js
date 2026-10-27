'use strict';
const { VIP_DISCOUNT_RATE } = require('./rules');

/** 购物车小计：sum(price × qty)，单位：分 */
function subtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/** 会员折扣（业务规则见 docs/business-rules.md） */
function applyDiscount(amount, member) {
  if (member === 'VIP') return Math.round(amount * (1 - VIP_DISCOUNT_RATE));
  return amount;
}

module.exports = { subtotal, applyDiscount };
