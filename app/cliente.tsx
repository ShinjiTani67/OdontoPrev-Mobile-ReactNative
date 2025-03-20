import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Card2 from '../components/Card2';

const Cliente = () => {
  return (
    <View style={styles.container}>
      <Card2 title='cliente'/>
      <View style={styles.container2}>

      </View>
    </View>
  )
}

export default Cliente;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "flex-start", 
    paddingTop: 0,
    fontFamily: 'Jost',
  },

  container2: {
    flex: 1,
    width: "100%",
    alignItems: "center", 
    marginBottom: 70,
    justifyContent: "flex-end",
    paddingTop: 70,
  },
  text: {
    fontSize: 20,
    color: 'black',
  }
})