import { View, FlatList, StyleSheet } from "react-native";
import { MealItem } from "./MealItem";
export function MealsList({items}){
    // viết ỏ trong để sau này cần truy cập navigation
  function renderMealsItem(itemDataa) {
    const item = itemDataa.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem {...mealItemProps} /> //phan phoi props tu object tren
    );
  }
  return (
    <View style={styles.container}>
      {/* <Text>Meal overview - {catId}</Text> */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  