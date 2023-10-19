import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontPixel, pixelSizeVertical} from '../../common/utils/normalize';

export default function Title({value}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: fontPixel(32),
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    marginVertical: pixelSizeVertical(16),
  },
});
