import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Controller } from 'react-hook-form';

const ControllerTextInput = ({ control, name, placeholder, secureTextEntry = false, errors }: any) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={{
              borderWidth: 1,
              borderColor: errors?.[name] ? 'red' : '#ccc',
              borderRadius: 8,
              padding: 10,
            }}
          />
        )}
      />
      {errors?.[name] && (
        <Text style={{ color: 'red', marginTop: 4 }}>
          {errors[name].message}
        </Text>
      )}
    </View>
  );
};

export default ControllerTextInput;
