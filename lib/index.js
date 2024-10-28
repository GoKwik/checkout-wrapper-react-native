"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Checkout = _interopRequireDefault(require("./Checkout"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CheckoutWrapper = function CheckoutWrapper(_ref) {
  var checkoutData = _ref.checkoutData,
    onEvent = _ref.onEvent;
  var handleCheckoutMessage = function handleCheckoutMessage(message) {
    console.log("Event Name", message.eventname);
    console.log("Event Data", message.data);

    // merchant_events = {
    //   'checkout-ready',
    //   'coupon-applied',
    //   'coupon-invalid',
    //   'coupon-removed',
    //   'payment-failure',
    //   'payment-method-selected',
    //   'address-add',
    //   'address-selected',
    //   'user-login-initiated',
    //   'user-login-successful',
    //   'order-complete',
    //   'gift-card-add',
    //   'gift-card-invalid',
    //   'gift-card-remove',
    //   'login_otp_verification_failed',
    //   'login_otp_verification_passed',
    //   'wallet-applied',
    //   'wallet-remove',
    //   'customer-attached',
    //   'navigation_payment_options',
    //   'checkout-initiation-failure',
    //   'create-order'
    // };
    if (onEvent) {
      onEvent(message);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Checkout["default"], {
    checkoutId: checkoutData.merchantParams.merchantCheckoutId,
    merchantId: checkoutData.mid,
    onMessage: handleCheckoutMessage
  });
};
var _default = exports["default"] = CheckoutWrapper;