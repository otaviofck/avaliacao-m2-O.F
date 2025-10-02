import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Interruptor = ({ nome }) => {
  const [ligado, setLigado] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        {nome}: {ligado ? 'Ligado' : 'Desligado'}
      </Text>
      <Button
        title={ligado ? 'Desligar' : 'Ligar'}
        onPress={() => setLigado(!ligado)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Interruptor;
