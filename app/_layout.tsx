import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from "expo-router";

import "../global";
import React from 'react';

const RootLayout = () => {
  return <SafeAreaView className="bg-white">
    <Text>

    </Text>
  </SafeAreaView>;
};

return(
  <ThemeProvider>
    <Stack>
      <Stack.Screen></Stack.Screen>
      <Stack.Screen></Stack.Screen>
      <Stack.Screen></Stack.Screen>
    </Stack>
  </ThemeProvider>
)

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {

  }
})

