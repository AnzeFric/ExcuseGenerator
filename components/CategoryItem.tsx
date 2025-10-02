import { Colors } from "@/constants/Colors";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Excuse } from "@/constants/interfaces/excuse";
import { AppStyles } from "@/constants/Styles";
import { router } from "expo-router";

interface Props {
  excuseData: Excuse;
}

export default function CategoryItem({ excuseData }: Props) {
  const redirectToExcuse = () => {
    router.push({
      pathname: "/excuse",
      params: {
        excuses: JSON.stringify(excuseData.excuses),
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={redirectToExcuse}>
      {excuseData.isFree ? (
        <Text style={[AppStyles.cardFreeText, styles.freeText]}>Free</Text>
      ) : (
        <Text style={[AppStyles.cardPaidText, styles.paidText]}>Paid</Text>
      )}
      <Ionicons name={excuseData.icon} size={24} color={Colors.dark.itemIcon} />
      <Text>{excuseData.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.itemBackground,
    borderWidth: 2,
    borderColor: Colors.dark.itemBorder,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 16,
    alignItems: "center",
    gap: 20,
  },
  freeText: {
    backgroundColor: "#F6F6F8",
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignSelf: "flex-end",
    borderRadius: 4,
  },
  paidText: {
    backgroundColor: "#FEBC2F",
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignSelf: "flex-end",
    borderRadius: 4,
  },
});
