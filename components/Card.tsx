import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.claim}>Claim</Text>
      <Text style={styles.nomore}>nomore</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#67D76E",
    padding: 20,
    borderRadius: 10,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    width: "100%", 
    height: "25%", 
    alignItems: "flex-start", 
    justifyContent: "flex-end", 
    paddingLeft: 20, 
    paddingBottom: 20, 
  },
  claim: {
    fontSize: 24,
    color: "#020000",
    fontFamily: "Inria Serif",
  },
  nomore: {
    fontSize: 20,
    color: "#020000",
    fontFamily: "Jost",
  },
});
