import { View, Text } from 'react-native'
import React, { createContext } from 'react'

const authContext = createContext();

const AuthProvider = () => {
  return (
    <View>
      <Text>AuthProvider</Text>
    </View>
  )
}

export default AuthProvider