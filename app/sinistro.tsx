import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Card2 from '../components/Card2';

const Sinistro = () => {
  return (
    <View style={styles.container}>
      <Card2 title='sinistro'/>
      <View style={styles.container2}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.jpg' }}
        style={styles.image}
      />
      </View>
    </View>
  )
}

export default Sinistro;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "flex-start", // Move tudo para cima
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
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100
  }
})