import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Card2 from '../components/Card2';

const Agenda = () => {
  return (
    <View>
      <Card2/>
      <Text style={styles.title}>Agenda</Text>
      <Image
              source={{ uri: 'https://img.freepik.com/vetores-gratis/modelo-de-calendario-2023-desenhado-a-mao-em-espanhol_23-2149689851.jpg' }}
              style={styles.image}
              />
     
    </View>
  )
}

export default Agenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost'
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