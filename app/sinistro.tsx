import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Card2 from '../components/Card2';

const Sinistro = () => {
  return (
    <View>
      <Card2 title='sinistro'/>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/e2/bc/2b/e2bc2b005d593253f62a4727d3da5d4f.jpg' }}
        style={styles.image}
      />
    </View>
  )
}

export default Sinistro;

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
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100
  }
})