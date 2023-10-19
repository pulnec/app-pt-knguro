import {View, Text, FlatList} from 'react-native';
import React from 'react';

export default function PackagesList({data, renderItem, keyExtractor}) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item[keyExtractor]}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}
