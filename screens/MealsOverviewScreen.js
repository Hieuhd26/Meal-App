import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect, useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";

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
  return <MealsList items={displayedMeals}/>
}
