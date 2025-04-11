import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ControllerTextInput from '../components/ControllerTextInput';

// Esquema de validação com Zod
const userSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().optional(),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

const Signup = () => {
  const router = useRouter();
  // const { signUp } = useAuth(); // Ative se estiver usando um hook de auth
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSignUp({ name, email, password }: any) {
    // signUp(name, email, password); // Ative se estiver usando um hook de auth
    router.replace("/home");
  }

  function customHandleSignUp(data: any) {
    const valid = userSchema.safeParse(data);
    if (valid.success) {
      alert("Formulário preenchido com sucesso");
      handleSignUp(data);
    } else {
      alert("Formulário não foi preenchido com sucesso");
    }
  }

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign Up</Text>

      <ControllerTextInput
        control={control}
        placeholder="Nome"
        name="name"
        error={errors.name}
      />

      <ControllerTextInput
        control={control}
        placeholder="Email"
        name="email"
        error={errors.email}
      />

      <ControllerTextInput
        control={control}
        placeholder="Telefone"
        name="phone"
        error={errors.phone}
      />

      <ControllerTextInput
        control={control}
        placeholder="Senha"
        name="password"
        secureTextEntry
        error={errors.password}
      />

      <TouchableOpacity
        onPress={handleSubmit(customHandleSignUp)}
        style={{
          marginTop: 20,
          backgroundColor: '#007bff',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signup;
