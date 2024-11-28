import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { CHECKOUT_URL } from '../config';

const Checkout = ({ checkoutId, merchantId, onMessage }) => {
  const checkoutUrl = `${CHECKOUT_URL}?m_id=${merchantId}&checkout_id=${checkoutId}`;
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
        source={{ uri: checkoutUrl }}
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