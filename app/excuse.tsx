import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useMemo, useState } from "react";
import * as Clipboard from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import { AppStyles } from "@/constants/Styles";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function ExcuseScreen() {
  const { excuses } = useLocalSearchParams();

  const [excuse, setExcuse] = useState("");
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const excuseArr: Array<string> = useMemo(() => {
    return JSON.parse(excuses.toString());
  }, [excuses]);

  const buttonPress = () => {
    const excuseIndex = Math.floor(Math.random() * excuseArr.length);
    setExcuse(excuseArr[excuseIndex]);
    setCopiedSuccess(false);
  };

  const copyToClipboard = async () => {
    if (!excuse) return;
    await Clipboard.setStringAsync(excuse);
    setCopiedSuccess(true);
  };

  return (
    <ScrollView
      style={{ marginBottom: 30 }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text style={[AppStyles.title, styles.text]}>Excuse Generator</Text>
        <Text style={[AppStyles.subTitle, styles.text]}>
          Need a quick excuse?
        </Text>
      </View>

      <View style={styles.contentContainer}>
        {excuse ? (
          <Text style={AppStyles.excuseText}>{excuse}</Text>
        ) : (
          <Text style={AppStyles.excuseText}>
            Tap the button below to generate an excuse
          </Text>
        )}
      </View>

      {copiedSuccess ? (
        <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
          <Ionicons name={"checkmark"} size={23} color={"#ffffff"} />
          <Text style={AppStyles.buttonText}>Copy</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
          <Ionicons name={"copy"} size={20} color={"#ffffff"} />
          <Text style={AppStyles.buttonText}>Copy</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[styles.button, styles.generateButton]}
        onPress={buttonPress}
      >
        <Ionicons name={"flash"} size={20} color={"#ffffff"} />
        <Text style={AppStyles.buttonText}>Generate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 47,
  },
  header: {
    gap: 18,
    marginBottom: 45,
  },
  text: {
    textAlign: "center",
  },
  contentContainer: {
    backgroundColor: Colors.dark.secondaryBackground,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 2,
    borderColor: Colors.dark.secondaryBorder,
    borderRadius: 20,
    minHeight: "40%",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.dark.primaryButton,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderColor: Colors.dark.primaryButtonBorder,
    borderWidth: 2,
    borderRadius: 20,
    gap: 10,
  },
  generateButton: {
    marginTop: 100,
    paddingHorizontal: 40,
  },
});
