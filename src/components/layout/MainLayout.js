import {View, StyleSheet} from 'react-native';
import React from 'react';
import Title from './Title';
import {
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../common/utils/normalize';

export default function MainLayout({children, title = '', bgColor = 'white'}) {
  console.log(title);
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      {title.trim() !== '' && <Title value={title} />}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: pixelSizeVertical(24),
    paddingHorizontal: pixelSizeHorizontal(24),
  },
});
