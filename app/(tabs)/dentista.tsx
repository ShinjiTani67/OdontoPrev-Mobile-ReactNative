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
        <Link href="/app/(tabs)/notafiscal">
          <Text style={styles.link}>Nota Fiscal</Text>
        </Link>

        <Link href="/app/(tabs)/sinistro">
          <Text style={styles.link}>Sinistro</Text>
        </Link>

        <Link href="/app/(tabs)/falsosinistro">
          <Text style={styles.link}>Falso Sinistro</Text>
        </Link>

        <Link href="/app/(tabs)/dentistaParceiros">
          <Text style={styles.link}>Dentistas Parceiros</Text>
        </Link>
      </View>
    </View>
  );
};

export default Dentista;

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
