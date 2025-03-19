import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Link } from 'expo-router';
import React from 'react';


const Index = () => {
  return <View>
    <Text>Claim Nomore</Text>
    <Text>Login</Text>
    <TextInput>Usuario</TextInput>
    <TextInput>Senha</TextInput>
    <View>
    <Text>Entrar</Text>
    </View>
    <Text>mexer na senha</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    
  }
});
