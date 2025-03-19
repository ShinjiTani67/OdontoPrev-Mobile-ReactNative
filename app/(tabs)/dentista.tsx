import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { authContext } from '../context/authContext';
import { Link } from 'expo-router';

const dentista = () => {
  const {user} = useContext(authContext);

  return (
    <View>
      <Text>Dentista</Text>
    </View>
    <View>
    <Link href="/app/(tabs)/notafiscal.tsx"><Text>Nota Fiscal</Text></Link>
    <Link><Text>Sinistro</Text></Link>
    <Link><Text>Falso Sinistro</Text></Link>
    <Link><Text>Dentistas Parceiros</Text></Link>
    </View>
  );
};

export default dentista;
const StyleSheet.create({
  container: {
    color: 'blue',
    textDecoration: 'underline',
  }
})