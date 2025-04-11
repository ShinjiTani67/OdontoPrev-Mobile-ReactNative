import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Controller, useController } from 'react-hook-form';

const ControllerTextInput = ({ control, name, placeholder, secureTextEntry = false, errors }: any) => {
    const { field:{onChange, onBlur, value}, } = useController({name, control})
  return (
    <>
    <View style={{ marginBottom: 12 }}>
    <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur} 
        />
        
    </>
  );
};

export default ControllerTextInput;
