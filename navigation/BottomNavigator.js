import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home";
import ScienceScreen from "../screens/Science";
import WorldScreen from "../screens/World";
import SportsScreen from "../screens/Sports";
import MoviesScreen from "../screens/Movies";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Science") {
            iconName = focused ? "ios-planet" : "ios-planet-outline";
          } else if (route.name === "World") {
            iconName = focused ? "ios-globe" : "ios-globe-outline";
          } else if (route.name === "Sports") {
            iconName = focused ? "ios-football" : "ios-football-outline";
          } else if (route.name === "Movies") {
            iconName = focused ? "ios-film" : "ios-film-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen name="World" component={WorldScreen} />
      <Tab.Screen name="Science" component={ScienceScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sports" component={SportsScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
    </Tab.Navigator>
  );
}
