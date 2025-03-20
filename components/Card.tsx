import React from "react";
import { View, StyleSheet } from "react-native";

const Card = () => {
  return <View style={styles.card} />;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#67D76E",
    padding: 0,
    borderRadius: 10,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
    width: "100%", 
    height: "25%",
  },
});
