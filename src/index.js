import React from "react";
import Checkout from "./Checkout";

const CheckoutWrapper = ({ checkoutData, onEvent }) => {
  const handleCheckoutMessage = (message) => {
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

  return (
    <Checkout
      checkoutId={checkoutData.merchantParams.merchantCheckoutId}
      merchantId={checkoutData.mid}
      onMessage={handleCheckoutMessage}
    />
  );
};

export default CheckoutWrapper;
