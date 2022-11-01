import React, { useState, type PropsWithChildren } from 'react';

import {
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  const [valorstring, setValorstring] = useState('');
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Prova de Mobile</Text>
      <TextInput style={styles.input}
        placeholder="Valor String"
        onChangeText={setValorstring}
        value={valorstring}
      />
      <TextInput style={styles.input}
        placeholder="Valor 1"
        keyboardType="number-pad"
        onChangeText={setValor1}
        value={valor1}
      />
      <TextInput style={styles.input}
        placeholder="Valor 2"
        keyboardType="number-pad"
        onChangeText={setValor2}
        value={valor2}
      />

      <Text> {valorstring}</Text>
      <Text> {valor1}</Text>
      <Text> {valor2}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: 'blue'
  },
  input: {
    margin: 20
  },
  labelbutton: {
    color: 'white'
  },
  button: {
    backgroundColor: 'green',
    alignItems: 'center',
    borderRadius: 5,
    margin: 15
  }
});

export default App;
