import React from "react";
import { Text, ScrollView, StyleSheet, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const LEADERBOARD = [
  { id: 0, points: 150 },
  { id: 1, points: 150 },
  { id: 2, points: 150 },
  { id: 3, points: 150 },
];

export default function LeaderboardScreen() {
  function renderItem({ item }) {
    return (
      <View
        style={{
          height: 30,
          justifyContent: "center",
          paddingLeft: 20,
          flexDirection: "row",
        }}
      >
        <Text style={{ marginRight: 10 }}>User {item.id + 1}</Text>
        <Text style={{ marginLeft: 10 }}>{item.points}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "rgb(242, 242, 247)",
        padding: 8,
      }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", padding: 30 }}>
          <View style={{ flexDirection: "column", margin: 10, flex: 1 }}>
            <View
              style={{
                backgroundColor: "rgb(242, 242, 247)",
                width: 75,
                height: 200,
              }}
            />
            <Text>User 5</Text>
            <View
              style={{ backgroundColor: "#BD6E33", width: 75, height: 100 }}
            />
          </View>
          <View style={{ flexDirection: "column", margin: 10, flex: 1 }}>
            <Text>User 6</Text>
            <View
              style={{ backgroundColor: "#FFD700", width: 75, height: 300 }}
            />
          </View>
          <View style={{ flexDirection: "column", margin: 10, flex: 1 }}>
            <View
              style={{
                backgroundColor: "rgb(242, 242, 247)",
                width: 75,
                height: 100,
              }}
            />
            <Text>User 7</Text>
            <View
              style={{ backgroundColor: "#BEC2CB", width: 75, height: 200 }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: 400,
          backgroundColor: "rgb(255, 255, 255)",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          flex: 1,
        }}
      >
        <Text
          style={{ margin: 10, fontStyle: "italic", color: "rgb(99,99, 102)" }}
        >
          You're in 5th place
        </Text>
        <FlatList data={LEADERBOARD} renderItem={renderItem} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
