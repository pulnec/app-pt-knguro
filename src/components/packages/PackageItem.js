import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../common/utils/normalize';
import BoxIcon from '../../assets/svgs/box';

export default function PKItem(item) {
  const {eanCode, description, last} = item.item;
  return (
    <View style={styles.container}>
      {last && (
        <View style={styles.tag}>
          <Text style={styles.textTag}>Recien agregado</Text>
        </View>
      )}
      <View style={styles.icon}>
        <BoxIcon />
      </View>
      <View style={styles.boxInfo}>
        <View>
          <Text style={styles.title}>Descripción</Text>
          <Text>{description}</Text>
        </View>
        <Text style={styles.code}>EAN: {eanCode}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 70,
    borderWidth: 0.5,
    borderRadius: 15,
    marginBottom: pixelSizeVertical(10),
    padding: pixelSizeVertical(16),
    borderColor: '#ACACAC',
    flexDirection: 'row',
  },
  icon: {
    padding: 8,
    width: 40,
    height: '100%',
  },
  code: {
    color: 'black',
    fontWeight: '500',
  },
  boxInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 7,
  },
  title: {
    fontSize: fontPixel(12),
  },
  tag: {
    position: 'absolute',
    right: 15,
    backgroundColor: '#1DD6FF',
    padding: 4,
    paddingHorizontal: pixelSizeHorizontal(10),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  textTag: {
    fontSize: 10,
  },
});
