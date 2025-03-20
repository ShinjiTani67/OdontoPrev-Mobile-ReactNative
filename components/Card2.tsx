import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#67D76E",
    padding: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    height: "10%",
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "InriaSerif", 
    fontSize: 28,
    color: "#020000",
  },
});
