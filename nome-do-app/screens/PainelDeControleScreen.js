import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Interruptor from '../components/Interruptor';

const PainelDeControleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Painel de Controle da Casa</Text>
      <Interruptor nome="Luz da Sala" />
      <Interruptor nome="Ar Condicionado" />
      <Interruptor nome="Luz do Quarto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PainelDeControleScreen;
