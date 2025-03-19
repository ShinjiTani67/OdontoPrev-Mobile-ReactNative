import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Link } from 'expo-router';
import Card2 from '../../components/Card2';

const Dentista = () => {

  return (
    <View style={styles.container}>
      <Card2/>
      <Text style={styles.title}>Dentista</Text>

      <View>
        <Link href="/app/(tabs)/notafiscal" style={styles.link}>
          <Text>Nota Fiscal</Text>
        </Link>

        <Link href="/app/(tabs)/sinistro" style={styles.link2}>
          <Text>Sinistro</Text>
        </Link>

        <Link href="/app/(tabs)/falsosinistro" style={styles.link2}>
          <Text>Falso Sinistro</Text>
        </Link>

        <Link href="/app/(tabs)/dentistaParceiros" style={styles.link2}>
          <Text>Dentistas Parceiros</Text>
        </Link>
      </View>
    </View>
  );
};

export default Dentista;

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
  },
  link2: {
    color: '#FBCD6B',
    textDecorationLine: 'underline',
    width: 0.85, 
    height: 0.2,
  },
  link3: {
    color: '#8DBFF9',
    textDecorationLine: 'underline',
    width: 0.85, 
    height: 0.2,
  },
  link4: {
    color: '#8CBD82',
    textDecorationLine: 'underline',
    width: 0.85, 
    height: 0.2,
  },
});
