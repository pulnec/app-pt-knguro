import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function Button({
  label,
  onPress,
  type = 'normal',
  icon,
  outline = false,
}) {
  if (type === 'circle') {
    return (
      <TouchableOpacity style={styles.containerCircle} onPress={onPress}>
        <View style={styles.iconSize}>{icon}</View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={outline ? styles.containerOutLine : styles.container}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1DD6FF',
    minHeight: 55,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containerOutLine: {
    minHeight: 55,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
  },
  containerCircle: {
    backgroundColor: '#1DD6FF',
    height: 55,
    width: 55,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  iconSize: {
    width: 24,
    height: 24,
  },
});
