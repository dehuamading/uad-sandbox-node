'use strict';
const { FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } = require('./rules');
/** 运费：小计 ≥ 门槛免运费，否则收固定运费（单位：分） */
function shippingFee(amount) {
  return amount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
}
module.exports = { shippingFee };
