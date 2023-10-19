import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LottiePlayer from '../../components/lottiePlayer/LottiePlayer';
import {fontPixel} from '../../common/utils/normalize';
import {StackActions} from '@react-navigation/native';

export default function Splash({navigation}) {
  useEffect(() => {
    const goHome = () => {
      setTimeout(() => {
        navigation.dispatch(StackActions.replace('Home'));
      }, 3000);
    };
    goHome();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.lottie}>
        <LottiePlayer lottie="splash" loop width={400} height={400} />
      </View>
      <Text style={styles.title}>PaqueteApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DD6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    paddingLeft: 15,
  },
  title: {
    fontSize: fontPixel(40),
    fontWeight: 'bold',
  },
});
