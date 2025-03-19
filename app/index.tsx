import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Link } from 'expo-router';
import React from 'react';


const Index = () => {
  return <View>
    <Text>Claim Nomore</Text>
    <Text>Login</Text>
    <TextInput>Usuario</TextInput>
    <TextInput>Senha</TextInput>
    <Link href='/funcionario'>
    <Text>Entrar</Text>
    </Link>
    <Link href='/dentista'>
    <Text>Entrar</Text>
    </Link>
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
