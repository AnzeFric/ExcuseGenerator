import { Text, View, StyleSheet, FlatList } from "react-native";
import { AppStyles } from "@/constants/Styles";
import CategoryItem from "@/components/CategoryItem";
import { useMemo } from "react";
import { items } from "@/constants/data/excuses.json";
import { Excuse, IoniconName } from "@/constants/interfaces/excuse";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  function isIoniconName(name: string): name is IoniconName {
    return (Ionicons as any).glyphMap[name] !== undefined;
  }

  const excuseCategories: Excuse[] = useMemo(() => {
    return items.map((item) => ({
      ...item,
      icon: isIoniconName(item.icon)
        ? (item.icon as IoniconName)
        : "bug-outline",
    }));
  }, [items]);

  return (
    <FlatList
      data={excuseCategories}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.itemWrapper}>
          <CategoryItem excuseData={item} />
        </View>
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={[AppStyles.title, styles.text]}>Excuse Generator</Text>
          <Text style={[AppStyles.subTitle, styles.text]}>
            Need a quick excuse?
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 47,
  },
  header: {
    gap: 18,
    marginBottom: 65,
  },
  text: {
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 27,
  },
  itemWrapper: {
    flex: 1,
  },
});
