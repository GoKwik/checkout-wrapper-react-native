"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeWebview = require("react-native-webview");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Checkout = function Checkout(_ref) {
  var checkoutId = _ref.checkoutId,
    merchantId = _ref.merchantId,
    onMessage = _ref.onMessage;
  // const CHECKOUT_URL = "https://sandbox.pdp.gokwik.co/v4/auto.html?m_id=19g6jlhuc9vwd&checkout_id=f9f176f05fd25775a85bd4273b15ba2255ffd261eeffa2044a669136a254a0ed";
  var CHECKOUT_URL = "https://sandbox.pdp.gokwik.co/v4/auto.html?m_id=".concat(merchantId, "&checkout_id=").concat(checkoutId);
  var handleMessage = function handleMessage(event) {
    var messageData = event.nativeEvent.data;
    try {
      var parsedData = JSON.parse(messageData);
      // Alert.alert('Message received', JSON.stringify(parsedData));
      if (onMessage) {
        onMessage(parsedData);
      }
    } catch (error) {
      // Alert.alert('Message received', messageData);
      if (onMessage) {
        onMessage(messageData);
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNativeWebview.WebView, {
    source: {
      uri: CHECKOUT_URL
    },
    onMessage: handleMessage,
    javaScriptEnabled: true,
    domStorageEnabled: true
  }));
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
var _default = exports["default"] = Checkout;