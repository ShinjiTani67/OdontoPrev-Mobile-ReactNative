import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Link } from 'expo-router';
import Card2 from '../../components/Card2';

const Funcionario = () => {
  return (
    <View style={styles.container}>
      <Card2/>
      <Text>Funcionario</Text>
      <Link href='/app/(tabs)/notafiscal.tsx' style={styles.link2}>
      <Text>Nota Fiscal</Text>
      </Link>
      <Link href='/app/(tabs)/cliente.tsx' style={styles.link2}>
      <Text>Cliente</Text>
      </Link>
      <Link href='/app/(tabs)/agenda.tsx'style={styles.link2}>
      <Text>Agenda</Text>
      </Link>
      <Link href='/app/(tabs)/suporte.tsx'style={styles.link2}>
      <Text>Suporte</Text>
      </Link>

    </View>
  )
}

export default Funcionario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
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
    color: '#FF8585',
    textDecorationLine: 'underline',
    width: 0.85,
    height: 0.2,
    borderRadius: 10,
  },
  link2: {
    color: '#FBCD6B',
    textDecorationLine: 'underline',
    width: 0.85,
    height: 0.2,
    borderRadius: 10,
  },
  link3: {
    color: '#8DBFF9',
    textDecorationLine: 'underline',
    width: 0.85,
    height: 0.2,
    borderRadius: 10,
  },
  link4: {
    color: '#8CBD82',
    textDecorationLine: 'underline',
    width: 0.85,
    height: 0.2,
    borderRadius: 10,
  },
});