import {View, Text, StyleSheet, Keyboard} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import MainLayout from '../../components/layout/MainLayout';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {fontPixel, pixelSizeVertical} from '../../common/utils/normalize';
import ModalDialog from '../../components/modalDialogScan/modalDialogScan';
import {AppContext} from '../../common/context/AppContext';

export default function Scan({navigation: {goBack}}) {
  const {packages, setPackages} = useContext(AppContext);
  const [scanActive, setScanActive] = useState(true);
  const [codeValue, setCodeValue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['ean-13'],
    onCodeScanned: codes => {
      if (codes.length >= 1 && scanActive) {
        setScanActive(false);
        setCodeValue(codes[0].value);
      }
    },
  });

  useEffect(() => {
    if (codeValue) {
      setShowModal(true);
    }
  }, [codeValue]);

  const resetScan = () => {
    setShowModal(false);
    setCodeValue(null);
    setScanActive(true);
    setLoading(false);
    setError(false);
  };

  const confirmRegister = values => {
    Keyboard.dismiss();
    setLoading(true);
    setTimeout(() => {
      const existCode = packages.filter(
        item => item.eanCode === values.eanCode,
      );

      if (existCode.length) {
        setError(true);
        setLoading(false);
        return;
      }

      const cleanLastValue = packages.map(item => ({...item, last: false}));
      const newPackages = [values, ...cleanLastValue];
      setPackages(newPackages);
      setSuccess(true);
      setLoading(false);
    }, 4000);
  };

  const onConfirmSuccess = () => {
    resetScan();
    goBack();
  };

  const onConfirmError = () => {
    resetScan();
  };

  return (
    <MainLayout bgColor="#1DD6FF">
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text
            style={
              styles.textScan
            }>{`Posicione el código\nde barras en el recuadro`}</Text>
        </View>
        <View style={styles.frameBorder}>
          <View style={styles.frameCamera}>
            <Camera
              style={styles.camera}
              device={device}
              isActive={true}
              codeScanner={codeScanner}
            />
          </View>
        </View>
      </View>
      <ModalDialog
        visible={showModal}
        onCancel={() => resetScan()}
        codeEan={codeValue}
        onConfirm={values => confirmRegister(values)}
        onConfirmSuccess={() => onConfirmSuccess()}
        onConfirmError={() => onConfirmError()}
        loading={loading}
        success={success}
        error={error}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameCamera: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  frameBorder: {
    width: '90%',
    height: 206,
    borderRadius: 19,
    borderWidth: 3,
    borderColor: 'white',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    paddingVertical: pixelSizeVertical(16),
  },
  textScan: {
    fontSize: fontPixel(28),
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
