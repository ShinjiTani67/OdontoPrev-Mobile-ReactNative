import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Link } from 'expo-router';

const Dentista = () => {
  const { user } = useContext(authContext);

  return (
    <View style={styles.container}>
      <Text>Dentista</Text>
    
    <View>
    <Link href="/app/(tabs)/notafiscal"><Text>Nota Fiscal</Text></Link>

    <Link href="/app/(tabs)/sinistro"><Text>Sinistro</Text></Link>

    <Link href='/app/(tabs)/falsosinistro'><Text>Falso Sinistro</Text></Link>

    <Link href='/app/(tabs)/dentistaParceiros'><Text>Dentistas Parceiros</Text></Link>

    </View>

    )
  }
}

export default Dentista;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
},