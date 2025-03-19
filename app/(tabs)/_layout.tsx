import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import React from 'react';

import "../global";

const RootLayout = () => {
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
      <Stack.Screen name="index" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="dashboard" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
