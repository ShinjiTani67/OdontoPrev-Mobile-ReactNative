import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import React, { useState } from 'react';

import "../global";

const RootLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index'></Stack.Screen>
      <Stack.Screen name='agenda'></Stack.Screen>
      <Stack.Screen name='cliente'></Stack.Screen>
      <Stack.Screen name='dentista'></Stack.Screen>
      <Stack.Screen name='dentistaparceiros'></Stack.Screen>
      <Stack.Screen name='falsosinistro'></Stack.Screen>
      <Stack.Screen name='funcionario'></Stack.Screen>
      <Stack.Screen name='nofafiscal'></Stack.Screen>
      <Stack.Screen name='sinistro'></Stack.Screen>
      <Stack.Screen name='suporte'></Stack.Screen>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
});
