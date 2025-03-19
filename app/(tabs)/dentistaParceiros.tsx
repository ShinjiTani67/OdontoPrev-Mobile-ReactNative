import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card2 from '../../components/Card2';

const DentistaParceiros = () => {
  return (
    <View>
      <Card2/>
      <Text>DentistaParceiros</Text>
    </View>
  )
}

export default DentistaParceiros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost'
  },
  text: {
    fontSize: 20,
    color: 'black',
  }
})