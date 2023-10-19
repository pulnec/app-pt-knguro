import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const LottieFile = {
  check: require('../../assets/lottie/check.json'),
  error: require('../../assets/lottie/error.json'),
  splash: require('../../assets/lottie/splash.json'),
};

export default function LottiePlayer({
  lottie = 'check',
  width = 80,
  height = 80,
  loop = false,
}) {
  return (
    <View>
      <LottieView
        source={LottieFile[lottie]}
        autoPlay
        loop={loop}
        style={{width, height}}
      />
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
