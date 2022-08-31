import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

// others
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

//screens
import Home from "./components/HomeScreen";
import Community from "./components/CommunityScreen";
import Settings from "./components/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return focused ? (
                <Ionicons
                  name="home-sharp"
                  size={24}
                  color="rgbrgb(0, 199, 190)"
                />
              ) : (
                <Ionicons
                  name="home-outline"
                  size={24}
                  color="rgb(174, 174, 178)"
                />
              );
            } else if (route.name === "Settings") {
              return focused ? (
                <Ionicons
                  name="ios-settings-sharp"
                  size={24}
                  color="rgb(0, 199, 190)"
                />
              ) : (
                <Ionicons
                  name="ios-settings-outline"
                  size={24}
                  color="rgb(174, 174, 178)"
                />
              );
            } else if (route.name === "Community") {
              return focused ? (
                <Ionicons
                  name="ios-people-sharp"
                  size={24}
                  color="rgb(0, 199, 190)"
                />
              ) : (
                <Ionicons
                  name="ios-people-outline"
                  size={24}
                  color="rgb(174, 174, 178)"
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "rgb(0, 199, 190)",
          inactiveTintColor: "rgb(174, 174, 178)",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
