import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import Card from '../components/Card';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleLogin() {
    if (email === 'Usuario' && password === 'Usuario') {
      console.log('Login success:', email, password);
      router.push('/funcionario');

    } else if (email === 'Dentista' && password === 'Dentista') {
      console.log('Login success:', email, password);
      router.push('/dentista');

    } else {
      console.log('Login failed');
    }
  }

  return (
      <View style={styles.container}>
        <Card/>
        <View style={styles.container2}>
        <Text style={styles.text}>login</Text>
        <TextInput style={styles.input} placeholder="Usuário" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Index;

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
    fontSize: 32,
    color: '#020000',
  },

  claimlogo:{
    fontFamily: 'Jost',
    color: '#020000',
  },
  nomorelogo:{
    fontFamily:'Inria Serif',
    color: '#020000',
  },

  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#5595F5',
    borderRadius: 8,
    backgroundColor: '#5595F5',
    marginBottom: 10,
  },
  
  button: {
    backgroundColor: '#3CC351',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
