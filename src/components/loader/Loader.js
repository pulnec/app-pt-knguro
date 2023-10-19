import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

export default function Loader({label = null}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottie/loader.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      {label && <Text>{label}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 80,
    height: 80,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
