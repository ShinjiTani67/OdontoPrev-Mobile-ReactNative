import React from "react";
import { View, StyleSheet } from "react-native";

const Card2 = () => {
  return <View style={styles.card} />;
};

export default Card2;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#67D76E",
    padding: 20,
    borderRadius: 10,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
  },
});
