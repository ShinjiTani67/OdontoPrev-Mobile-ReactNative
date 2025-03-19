import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Link } from 'expo-router';
import Card2 from '../../components/Card2';

const Funcionario = () => {
  return (
    <View style={styles.container}>
      <Card2/>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost'
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