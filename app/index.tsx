import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react';


const Index = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  function handleLogin() {
    if (email === 'admin' && password === 'admin') {
      console.log('Login success', email + " "+ password);
      router.push('/funcionario')
    } else if (email === 'dentista' && password === 'dentista') {
      console.log('Login success', email + " "+ password);
      router.push('/dentista')
    }
    else {
      console.log('Login failed');
    }


  return <View>
    <Text>Claim Nomore</Text>
    <Text>Login</Text>
    <TextInput placeholder='Email'></TextInput>
    <TextInput placeholder='Senha' secureTextEntry></TextInput>

    <Link href='/funcionario'>
    <Text>Entrar</Text>
    </Link>

    <Link href='/dentista'>
    <Text>Entrar</Text>
    </Link>

  </View>
  }
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
