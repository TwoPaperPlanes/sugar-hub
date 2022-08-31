import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, StyleSheet } from "react-native";

// others
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icons
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(242, 242, 247)",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginLeft: 10,
          marginTop: 10,
          width: 350,
        }}
      >
        Chat
      </Text>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          width: 350,
          borderRadius: 15,
          padding: 8,
        }}
      >
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <View
            style={{
              backgroundColor: "rgb(52, 120, 246)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(255, 255, 255)" }}>Katniss!</Text>
          </View>
          <View
            style={{
              marginLeft: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(52, 120, 246)",
              marginTop: 25,
              borderBottomLeftRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: 10,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <View
            style={{
              marginRight: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(233, 233, 235)",
              marginTop: 25,
              borderBottomRightRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomRightRadius: 10,
                alignSelf: "flex-start",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(233, 233, 235)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(0, 0, 0)" }}>Hello, Finnick</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <View
            style={{
              backgroundColor: "rgb(52, 120, 246)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(255, 255, 255)" }}>
              Do you want a sugar cube? I mean it's supposed to be for the
              horses, but... I mean who cares about them, right? They got years
              to eat sugar, whereas you and I... well, if we see something sweet
              we better grab it.
            </Text>
          </View>
          <View
            style={{
              marginLeft: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(52, 120, 246)",
              marginTop: 93,
              borderBottomLeftRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: 10,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <View
            style={{
              marginRight: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(233, 233, 235)",
              marginTop: 43,
              borderBottomRightRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomRightRadius: 10,
                alignSelf: "flex-start",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(233, 233, 235)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(0, 0, 0)" }}>
              No thanks, but I would love to borrow that outfit someday
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <View
            style={{
              backgroundColor: "rgb(52, 120, 246)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(255, 255, 255)" }}>
              You look pretty terrifying in that get up. What happened to the
              pretty little girl dresses?
            </Text>
          </View>
          <View
            style={{
              marginLeft: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(52, 120, 246)",
              marginTop: 42,
              borderBottomLeftRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: 10,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <View
            style={{
              marginRight: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(233, 233, 235)",
              marginTop: 25,
              borderBottomRightRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomRightRadius: 10,
                alignSelf: "flex-start",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(233, 233, 235)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(0, 0, 0)" }}>I outgrew them</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <View
            style={{
              backgroundColor: "rgb(52, 120, 246)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(255, 255, 255)" }}>
              You certainly did. Shame about this quell thing. Now you... you
              could have made out like a bandit in the Capitol. Jewels, money,
              anything you wanted.
            </Text>
          </View>
          <View
            style={{
              marginLeft: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(52, 120, 246)",
              marginTop: 75,
              borderBottomLeftRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: 10,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <View
            style={{
              marginRight: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(233, 233, 235)",
              marginTop: 58,
              borderBottomRightRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomRightRadius: 10,
                alignSelf: "flex-start",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(233, 233, 235)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(0, 0, 0)" }}>
              Well, I don't like jewels and I have more money than I need, so...
              What did you do with all your wealth anyway?
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
          <View
            style={{
              backgroundColor: "rgb(52, 120, 246)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(255, 255, 255)" }}>
              I haven't dealt in anything as common as money in years
            </Text>
          </View>
          <View
            style={{
              marginLeft: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(52, 120, 246)",
              marginTop: 43,
              borderBottomLeftRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomLeftRadius: 10,
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
          <View
            style={{
              marginRight: -20,
              width: 20,
              height: 20,
              backgroundColor: "rgb(233, 233, 235)",
              marginTop: 43,
              borderBottomRightRadius: 10,
            }}
          >
            <View
              style={{
                width: 10,
                height: 20,
                backgroundColor: "rgb(255, 255, 255)",
                borderBottomRightRadius: 10,
                alignSelf: "flex-start",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(233, 233, 235)",
              padding: 10,
              margin: 10,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgb(0, 0, 0)" }}>
              Well, then, how do people pay for the pleasure of your company
            </Text>
          </View>
        </View>
      </ScrollView>
      <TextInput
        onChangeText={(text) => setInput(text)}
        style={{
          padding: 5,
          margin: 10,
          width: 350,
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "rgb(229, 229, 234)",
        }}
        placeholder={"Enter Text"}
      />
    </View>
  );
}
