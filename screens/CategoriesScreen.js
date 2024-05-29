import React from "react";
import { FlatList } from "react-native";
import { CategoryGridTitle } from "../components/CategoriesGridTitle";
import { CATEGORIES } from "../data/dummy-data";

export function CategoriesScreen({ navigation }) {

  function renderItemCategories(itemDataa) {
    
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemDataa.item.id, // truyen du liệu sang mealOverview
      });
    }
    return (
      <CategoryGridTitle
        title={itemDataa.item.title}
        color={itemDataa.item.color}
        onPress={pressHandler}
        // navigation={navigation}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={renderItemCategories}
      numColumns={2}
    />
  );
}
