import React from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function BadgesScreen() {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity style={styles.diet}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginRight: 30,
          }}
        >
          2 Weeks of Diet
        </Text>
        <MaterialCommunityIcons
          name="food-apple"
          size={40}
          color="rgb(255, 255, 255)"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bloodsugartrend}>
        <Fontisto name="blood-drop" size={40} color="rgb(255, 255, 255)" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginLeft: 30,
          }}
        >
          Stable Blood Sugar Level
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bloodsugarlevel}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginRight: 30,
          }}
        >
          Low Blood Sugar Level
        </Text>
        <Entypo
          name="bar-graph"
          size={40}
          color="rgb(255, 255, 255)"
          style={{ transform: [{ rotateY: "180deg" }] }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.streak}>
        <MaterialCommunityIcons
          name="medal"
          size={40}
          color="rgb(255, 255, 255)"
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginLeft: 30,
          }}
        >
          4 Day Streak
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.exercise}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "rgb(255, 255, 255)",
            marginRight: 30,
          }}
        >
          1 Week of Exercise
        </Text>
        <FontAwesome5 name="running" size={40} color="rgb(255, 255, 255)" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgb(242, 242, 247)",
    padding: 8,
  },
  diet: {
    width: 350,
    height: 100,
    backgroundColor: "rgb(255, 59, 48)",
    borderRadius: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bloodsugartrend: {
    width: 350,
    height: 100,
    backgroundColor: "rgb(255, 149, 0)",
    borderRadius: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  bloodsugarlevel: {
    width: 350,
    height: 100,
    backgroundColor: "rgb(255, 204, 0)",
    borderRadius: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  streak: {
    width: 350,
    height: 100,
    backgroundColor: "rgb(52, 199, 89)",
    borderRadius: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  exercise: {
    width: 350,
    height: 100,
    backgroundColor: "rgb(48, 178, 199)",
    borderRadius: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
