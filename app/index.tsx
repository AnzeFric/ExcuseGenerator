import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import excuses from "@/constants/data/excuses.json";

export default function HomeScreen() {
  const [excuse, setExcuse] = useState("");

  const buttonPress = () => {
    const excuseIndex = Math.floor(Math.random() * excuses.items.length);
    setExcuse(excuses.items[excuseIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EXCUSE GENERATOR</Text>

      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>GENERATE!</Text>
      </TouchableOpacity>

      <Text style={styles.excuseText}>{excuse}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
  },
  excuseText: {
    fontSize: 25,
  },
});
