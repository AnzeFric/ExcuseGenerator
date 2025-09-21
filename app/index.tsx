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
      <View>
        <Text style={styles.title}>🚀 EXCUSE 🚀</Text>
        <Text style={styles.title}>🚀 GENERATOR 🚀</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>⚡ GENERATE! ⚡</Text>
      </TouchableOpacity>

      {excuse ? (
        <View style={styles.excuseBox}>
          <Text style={styles.excuseText}>{excuse}</Text>
        </View>
      ) : (
        <Text style={styles.placeholder}>Tap the button 👆</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B", // deeper black for contrast
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#39FF14",
    textShadowColor: "#39FF14",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    letterSpacing: 2,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#39FF14",
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 40,
    shadowColor: "#39FF14",
    shadowOpacity: 0.9,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 40,
    transform: [{ rotate: "-2deg" }], // fun tilt
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0B0B0B",
    textAlign: "center",
    letterSpacing: 1,
  },
  excuseBox: {
    backgroundColor: "#1E1E1E",
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#39FF14",
    shadowColor: "#39FF14",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },
  excuseText: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 34,
  },
  placeholder: {
    fontSize: 18,
    color: "#AAAAAA",
    textAlign: "center",
    marginTop: 20,
  },
});
