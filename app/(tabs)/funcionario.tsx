import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Link } from 'expo-router';

const Funcionario = () => {
  return (
    <View>
      <Text>funcionario</Text>
      <Link><Text>Nota Fiscal</Text></Link>
      <Link><Text>Cliente</Text></Link>
      <Link><Text>Agenda</Text></Link>
      <Link><Text>Suporte</Text></Link>
    </View>
  )
}

export default Funcionario