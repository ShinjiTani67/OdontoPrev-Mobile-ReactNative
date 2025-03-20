import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Card2 from '../components/Card2';

const Agenda = () => {
  return (
    <View style={styles.container}>
      <Card2 title='agenda'/>
      <View style={styles.container2}>
      <Image
              source={{ uri: 'https://img.freepik.com/vetores-gratis/modelo-de-calendario-2023-desenhado-a-mao-em-espanhol_23-2149689851.jpg' }}
              style={styles.image}
              />
      </View>
     
    </View>
  )
}

export default Agenda;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    position: "absolute"
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100
  }
})