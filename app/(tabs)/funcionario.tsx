import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Link } from 'expo-router';

const Funcionario = () => {
  return (
    <View style={styles.container}>
      <Text>Funcionario</Text>
      <Link href='/app/(tabs)/notafiscal.tsx'>
      <Text>Nota Fiscal</Text>
      </Link>

      <Link href='/app/(tabs)/cliente.tsx'>
      <Text>Cliente</Text>
      </Link>
      <Link href='/app/(tabs)/agenda.tsx'>
      <Text>Agenda</Text>
      </Link>
      <Link href='/app/(tabs)/suporte.tsx'>
      <Text>Suporte</Text>
      </Link>

    </View>
  )
}

export default Funcionario;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});