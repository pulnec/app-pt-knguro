import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import {PackagesList, PKItem} from '../../components/packages';
import {AppContext} from '../../common/context/AppContext';
import Button from '../../components/button/Button';
import ScanIcon from '../../assets/svgs/scan';
import {pixelSizeHorizontal} from '../../common/utils/normalize';
import {useCameraPermission} from 'react-native-vision-camera';
import Loader from '../../components/loader/Loader';

const {width} = Dimensions.get('screen');

export default function Packages({navigation}) {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [loading, setLoading] = useState(true);
  const {packages} = useContext(AppContext);

  const goScanScreen = () => {
    if (!hasPermission) {
      requestPermission()
        .then(response => {
          if (response) {
            navigation.navigate('Scan');
          }
        })
        .catch(error => console.log(error));
    } else {
      navigation.navigate('Scan');
    }
  };

  useEffect(() => {
    startPackages();
  }, []);

  const startPackages = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  if (loading) {
    return (
      <MainLayout title="Listado de paquetes">
        <View style={styles.loadingContainer}>
          <Loader label="Obteniendo información." />
        </View>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Listado de paquetes">
      <PackagesList
        data={packages}
        keyExtractor="eanCode"
        renderItem={({item}) => <PKItem item={item} />}
      />
      <View style={styles.containerButton}>
        <Button type="circle" icon={<ScanIcon />} onPress={goScanScreen} />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    zIndex: 1,
    width,
    bottom: 16,
    alignItems: 'flex-end',
    paddingHorizontal: pixelSizeHorizontal(24),
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
