import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useController } from 'react-hook-form';

type Props = {
  control: any;
  name: string;
  placeholder: string;
  error?: any;
  secureTextEntry?: boolean;
};

const ControllerTextInput = ({
  control,
  name,
  placeholder,
  error,
  secureTextEntry = false,
}: Props) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <View style={{ marginBottom: 12 }}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={{
          borderWidth: 1,
          borderColor: error ? 'red' : '#ccc',
          borderRadius: 8,
          padding: 10,
        }}
      />
      {error && <Text style={{ color: 'red', marginTop: 4 }}>{error.message}</Text>}
    </View>
  );
};

export default ControllerTextInput;
