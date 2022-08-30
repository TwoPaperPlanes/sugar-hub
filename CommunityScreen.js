// defaults
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Card } from "react-native-paper";

//icons
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ChatScreen from "./ChatScreen.js";
import BadgesScreen from "./BadgesScreen.js";
import LeaderboardScreen from "./LeaderboardScreen.js";
const Stack = createStackNavigator();

function Community({ navigation }) {
  return (
    <ScrollView style={styles.screen}>
      <View style={{ width: 400, height: 10 }} />
      <Text
        style={{
          fontFamily: "Helvetica",
          fontWeight: "bold",
          fontSize: 35,
          margin: 5,
        }}
      >
        Community
      </Text>
      <TouchableOpacity
        style={{
          width: 350,
          height: 200,
          backgroundColor: "rgb(255, 255, 255)",
          flex: 1,
          margin: 5,
          overflow: "hidden",
          borderRadius: 15,
        }}
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        <ImageBackground
          source={require("sugar-hub/components/images/chat.png")}
          resizeMode="cover"
          style={{
            justifyContent: "center",
            width: 350,
            height: 150,
          }}
        />
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 350,
          height: 200,
          backgroundColor: "rgb(255, 255, 255)",
          flex: 1,
          margin: 5,
          overflow: "hidden",
          borderRadius: 15,
        }}
        onPress={() => {
          navigation.navigate("Badges");
        }}
      >
        <ImageBackground
          source={require("sugar-hub/components/images/badges.png")}
          resizeMode="cover"
          style={{
            justifyContent: "center",
            width: 350,
            height: 150,
          }}
        />
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Badges</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 350,
          height: 200,
          backgroundColor: "rgb(255, 255, 255)",
          flex: 1,
          margin: 5,
          overflow: "hidden",
          borderRadius: 15,
        }}
        onPress={() => {
          navigation.navigate("Leaderboard");
        }}
      >
        <ImageBackground
          source={require("sugar-hub/components/images/leaderboard.png")}
          resizeMode="cover"
          style={{
            justifyContent: "center",
            width: 350,
            height: 150,
          }}
        />
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Leaderboard</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function CommunityScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        component={Community}
        options={{
          headerStyle: {
            backgroundColor: "rgba(242, 242, 247, 0.0)",
          },
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
          headerTitle: "",
          headerStyle: {
            backgroundColor: "rgb(242, 242, 247)",
          },
        }}
      />
      <Stack.Screen
        name="Badges"
        component={BadgesScreen}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "rgb(242, 242, 247)",
    padding: 8,
  },
  leaderboard: {
    width: "95%",
    flex: 1,
    margin: 10,
    backgroundColor: "rgb(255, 204, 0)",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
