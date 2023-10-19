/* eslint-disable react-native/no-inline-styles */
import {View, TextInput, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import Modal from 'react-native-modal';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../common/utils/normalize';
import Button from '../button/Button';
import Loader from '../loader/Loader';
import LottiePlayer from '../lottiePlayer/LottiePlayer';

export default function ModalDialog({
  visible = false,
  onCancel,
  onConfirm,
  onConfirmSuccess,
  onConfirmError,
  codeEan,
  loading = false,
  success = false,
  error = false,
}) {
  const [text, onChangeText] = React.useState('');

  useEffect(() => {
    if (!visible) {
      onChangeText('');
    }
  }, [visible]);

  const renderSuccess = () => {
    return (
      <View style={styles.content}>
        <View style={styles.confirmText}>
          <LottiePlayer lottie="check" />
          <Text>Paquete registrado</Text>
        </View>
        <Button label="Volver al listado" onPress={onConfirmSuccess} />
      </View>
    );
  };

  const renderError = () => {
    return (
      <View style={styles.content}>
        <View style={styles.confirmText}>
          <LottiePlayer lottie="error" />
          <Text>Este paquete ya se encuentra registrado</Text>
        </View>
        <Button label="Volver a escanear" onPress={onConfirmError} />
      </View>
    );
  };

  return (
    <Modal isVisible={visible}>
      <View style={styles.container}>
        {loading ? (
          <View style={styles.content}>
            <Loader label="Validando el registro." />
          </View>
        ) : !success && !error ? (
          <View style={styles.content}>
            <View style={styles.header}>
              <Text>Codigo escaneado</Text>
              <Text style={styles.code}>{codeEan}</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Ingrese descripción"
            />
            <View style={styles.buttonContainer}>
              <View style={[styles.sizeBtn, {marginRight: 2.5}]}>
                <Button label="Cancelar" outline onPress={() => onCancel()} />
              </View>
              <View style={styles.sizeBtn}>
                <Button
                  label="Confirmar"
                  onPress={() =>
                    onConfirm({eanCode: codeEan, description: text, last: true})
                  }
                />
              </View>
            </View>
          </View>
        ) : success ? (
          renderSuccess()
        ) : error ? (
          renderError()
        ) : null}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    width: '90%',
    height: 200,
    borderRadius: 16,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeHorizontal(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: pixelSizeVertical(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  code: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  sizeBtn: {
    width: '50%',
  },
  confirmText: {
    marginBottom: pixelSizeVertical(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
