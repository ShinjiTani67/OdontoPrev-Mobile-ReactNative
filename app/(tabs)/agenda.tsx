import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card2 from '../../components/Card2';

const Agenda = () => {
  return (
    <View>
      <Card2/>
      <Text>Agenda</Text>
    </View>
  )
}

export default Agenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  }
})