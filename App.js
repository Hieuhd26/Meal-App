import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, Button } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverviewScreeen } from "./screens/MealsOverviewScreen";
import { MealDetailScreen } from "./screens/MealDetailScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoriteScreen } from "./screens/FavoriteScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' }, // mau nen draw
        drawerInactiveTintColor: 'white', // mau chu trong draw
        drawerActiveTintColor: '#351401', //
        drawerActiveBackgroundColor: '#e4baa1', // mau vien khi chon
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // chinh mau nen, de chung no se an tat ca cac trang
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          {/* trinh ho tro stack */}
          <Stack.Screen
            name="Drawer"
            // component={CategoriesScreen}
            component={DrawerNavigator}
            options={{ title: "All Categories" , headerShown:false}}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreeen}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{title:"helo"}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
