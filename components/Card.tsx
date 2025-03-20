import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.claim}>Claim</Text>
        <Text style={styles.nomore}>nomore</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#67D76E",
    padding: 0,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    width: "100%",
    height: "25%",
    position: "relative", 
  },
  textContainer: {
    position: "absolute",
    bottom: 10, 
    left: 15, 
    flexDirection: "row", 
    alignItems: "center", 
  },
  claim: {
    fontFamily: "Jost",
    fontSize: 28,
    color: "#020000",
    marginRight: 5, 
  },
  nomore: {
    fontFamily: "InriaSerif",
    fontSize: 28,
    color: "#020000",
  },
});
