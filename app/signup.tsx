import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import Card from '../components/Card';


const useSchema = z.string();
const userSchema = z.object({
    name: z.string.min(2,{message:"Nome é obrigatório"}),
    email: z.string.email({message:"Email é obrigatório"}),
    phone:  z.string().optional(),
    password: z
        .string
}
)
const Signup = () => {
    const router = useRouter();
    const {signUp} = useAuth();
    const{
        control,handleSubmit,
        formState: {error}, 
    } = useForm()

}

return (
     //   useEffect(() =>{
//     const obj = {name: undefined, email:"", password:""};
//     const valid = useSchema.safeParse(obj) ;
//     const valid2 = userSchema.safeParse("");
//   },[]);

  function handleSignUp({name, email, password}: User){
    signUp(name, email, password);

    router.replace("/home");
  }
  function customHandleSignUp(data: any){
    const {name,email,password} = data;
    const valid = userSchema.safeParse({name, email, password});
    if (valid.sucess){
        alert("formulario preenchido com sucesso")
    } else {
        alert("formulario não foi preenchido com sucesso")
    }
  }
)
}


export default Signup