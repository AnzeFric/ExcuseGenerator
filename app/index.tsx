import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import * as Clipboard from "expo-clipboard";
import excuses from "@/constants/data/excuses.json";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const [excuse, setExcuse] = useState("");
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const buttonPress = () => {
    const excuseIndex = Math.floor(Math.random() * excuses.items.length);
    setExcuse(excuses.items[excuseIndex]);
    setCopiedSuccess(false);
  };

  const copyToClipboard = async () => {
    if (!excuse) return;
    await Clipboard.setStringAsync(excuse);
    setCopiedSuccess(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>🗯️ EXCUSE 🗯️</Text>
          <Text style={styles.title}>🚀 GENERATOR 🚀</Text>
        </View>

        {excuse ? (
          <View style={styles.excuseBox}>
            <Text style={styles.excuseText}>{excuse}</Text>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={copyToClipboard}
            >
              {copiedSuccess ? (
                <Text style={styles.copyButtonText}>✅ Copy</Text>
              ) : (
                <Text style={styles.copyButtonText}>📋 Copy</Text>
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.placeholder}>Tap the button 👆</Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>⚡ GENERATE! ⚡</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.backgroud,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    flex: 1,
    gap: 50,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: Colors.dark.titleText,
    letterSpacing: 2,
    textAlign: "center",

    textShadowColor: Colors.dark.shadowGreen,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  button: {
    backgroundColor: Colors.dark.primaryButton,
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginBottom: 100,
    transform: [{ rotate: "-2deg" }],

    // iOS shadow
    shadowColor: Colors.dark.shadowGreen,
    shadowOpacity: 1,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 0 },

    // Android shadow
    elevation: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.dark.primaryButtonText,
    textAlign: "center",
    letterSpacing: 1,
  },
  excuseBox: {
    backgroundColor: "#1E1E1E",
    padding: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.dark.borderGreen,
    alignItems: "center",
    gap: 20,

    shadowColor: Colors.dark.shadowGreen,
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
  copyButton: {
    backgroundColor: Colors.dark.primaryButton,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,

    shadowColor: Colors.dark.shadowGreen,
    shadowOpacity: 0.9,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },

    elevation: 6,
  },
  copyButtonText: {
    color: Colors.dark.primaryButtonText,
    fontWeight: "800",
    fontSize: 16,
  },
  placeholder: {
    fontSize: 18,
    color: "#AAAAAA",
    textAlign: "center",
    marginTop: 20,
  },
});
