import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Jost': require('../assets/fonts/Jost-Regular.ttf'),
    'InriaSerif': require('../assets/fonts/InriaSerif-Regular.ttf'),
  });
};