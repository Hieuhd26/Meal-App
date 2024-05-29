import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import { SubTitle } from "../components/MealDetail/SubTitle";
import { List } from "../components/MealDetail/List";
import { IconButton } from "../components/IconButton";

export function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId; // kieu nhu la truyen du lieu
  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });
  function headerButtonPressHandler() {
    console.log("press");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    // <Text>Meal detail Screen {mealId}</Text>
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
