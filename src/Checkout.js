import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const Checkout = ({ checkoutId, merchantId, onMessage }) => {
  // const CHECKOUT_URL = "https://sandbox.pdp.gokwik.co/v4/auto.html?m_id=19g6jlhuc9vwd&checkout_id=f9f176f05fd25775a85bd4273b15ba2255ffd261eeffa2044a669136a254a0ed";
  const CHECKOUT_URL = `https://sandbox.pdp.gokwik.co/v4/auto.html?m_id=${merchantId}&checkout_id=${checkoutId}`;
  const handleMessage = (event) => {
    const messageData = event.nativeEvent.data;
    try {
      const parsedData = JSON.parse(messageData);
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

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: CHECKOUT_URL }}
        onMessage={handleMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Checkout;