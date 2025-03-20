import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Jost': require('../assets/Jost-Regular.ttf'),
    'InriaSerif': require('../assets/InriaSerif-Regular.ttf'),
  });
};