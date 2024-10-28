# Checkout React Native

Checkout React Native is an npm library that provides a component for rendering a custom checkout experience in React Native applications using a WebView.

## Installation

To use this library, ensure you have the necessary peer dependencies installed:

# npm install react react-native


Then, install the library and its dependencies:

# npm install checkout-react-native react-native-webview


## Usage

Import the `CheckoutWrapper` component into your React Native application:

import CheckoutWrapper from "checkout-react-native";


### Component Usage

The `CheckoutWrapper` component can be used to open a custom checkout in a WebView. Here's a basic example of how to use it:

# <CheckoutWrapper checkoutData={checkoutData} onEvent={handleEvent} />


- **`checkoutData`**: This is an object that the merchant must provide. It should include the `merchantId`, `checkoutId`, and optionally, the `customerToken` and `phoneNumber`.

- **`onEvent`**: This is a function to handle merchant events. The component will emit various events that merchants can handle accordingly. For example, the `order-complete` event can be used to redirect a user to a thank you page.

### Merchant Events

The following is a list of merchant events that can be handled:

- `checkout-ready`
- `coupon-applied`
- `coupon-invalid`
- `coupon-removed`
- `payment-failure`
- `payment-method-selected`
- `address-add`
- `address-selected`
- `user-login-initiated`
- `user-login-successful`
- `order-complete`
- `gift-card-add`
- `gift-card-invalid`
- `gift-card-remove`
- `login_otp_verification_failed`
- `login_otp_verification_passed`
- `wallet-applied`
- `wallet-remove`
- `customer-attached`
- `navigation_payment_options`
- `checkout-initiation-failure`
- `create-order`

## License

This project is licensed under the ISC License.

## Author

Gokwik Commerce Pvt Ltd

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgments

Thanks to all contributors and users of this library.
