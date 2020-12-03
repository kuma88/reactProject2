import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CounterText from './components/CounterText';

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function renderEncouragingText() {
    if (count == 10) {
      return "Keep Going";
    } else if (count == 20) {
      return "Great Job, Keep going";
    } else if (count >= 30) {
      return "No Pain No Gain";
    } else {
      return "";
    }
  }

  return (
    <View style={styles.container}>
      <CounterText color="lightgrey" fontSize={10} marginBottom={20}>{count}</CounterText>
      <CounterText color="black" fontSize={30} marginBottom={30}>{count}</CounterText>
      <CounterText color="blue" fontSize={60} marginBottom={40}>{count}</CounterText>
      <CounterText color="red" fontSize={90} marginBottom={50}>{count}</CounterText>
      {/* <Text style={styles.text}> {count}</Text> */}
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Press me!</Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}>{renderEncouragingText()} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  },

  encouragingText: {
    marginTop: 50,
    color: "#aaaaaa",
    fontSize: 30,
  },

  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
});
