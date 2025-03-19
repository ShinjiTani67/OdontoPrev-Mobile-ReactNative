import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card2 from '../../components/Card2';

const FalsoSinistro = () => {
  return (
    <View>
      <Card2/>
      <Text>FalsoSinistro</Text>
    </View>
  )
}

export default FalsoSinistro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost'
  },
  text: {
    fontSize: 20,
    color: 'black',
  }
})