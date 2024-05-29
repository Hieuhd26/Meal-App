import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export function MealsOverviewScreeen({ route, navigation }) {
  const catId = route.params.categoryId; // truyen tu categori screen
  // params la 1 bien san co trong

  // lay mon anh tu danh muc
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    // Load tieu de dong thoi chu khon phai laod trang roi moi load tieu de
    const categoryTitle = CATEGORIES.find(
      (categori) => categori.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

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
        data={displayedMeals}
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
