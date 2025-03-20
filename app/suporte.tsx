import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card2 from '../components/Card2';

const Suporte = () => {
  return (
    <View>
      <Card2 title='suporte'/>
    </View>
  )
}

export default Suporte;

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