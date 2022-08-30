import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  Box,
  View,
  TouchableOpacity,
  Switch,
  Animated,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// icons
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

// screens
import TermsAndConditions from "./TermsAndConditionsScreen.js";

const Stack = createStackNavigator();

function Settings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [state, setState] = useState(1);

  useEffect(() => {
    if (isEnabled == false) {
      setState(1);
    } else if (isEnabled == true) {
      setState(2);
    } else {
      setState(3);
    }
  }, [isEnabled]);

  // new back button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ margin: 20 }}
          onPress={() => navigation.navigate("Home", { state })}
        >
          <Text
            style={{
              fontSize: 18,
              color: "rgb(0, 199, 190)",
              height: 30,
              fontWeight: "bold",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "rgb(242, 242, 247)",
        padding: 8,
      }}
    >
      <Text
        style={{
          fontFamily: "Helvetica",
          fontWeight: "bold",
          fontSize: 35,
          margin: 5,
        }}
      >
        Settings
      </Text>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 350,
            height: 211,
            backgroundColor: "rgb(255, 255, 255)",
            margin: 5,
            borderRadius: 15,
          }}
        >
          <TouchableOpacity
            style={styles.component}
            onPress={() => {
              navigation.navigate("Language");
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "rgb(48, 176, 199)",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <MaterialIcons
                name="language"
                size={20}
                color="rgb(255, 255, 255)"
              />
            </View>

            <Text style={{ fontSize: 20 }}>Language</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="rgb(197, 197, 199)"
              style={{ marginLeft: 163 }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 350,
              height: 1,
              backgroundColor: "rgb(241, 240, 240)",
            }}
          />
          <View style={styles.component}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "rgb(255, 59, 48)",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Fontisto
                name="blood-drop"
                size={18}
                color="rgb(255, 255, 255)"
                style={{ margin: 5 }}
              />
            </View>

            <Text style={{ fontSize: 20 }}>Diabetic</Text>
            <Switch
              trackColor={{
                false: "rgb(255, 255, 255)",
                true: "rgb(0, 199, 190)",
              }}
              thumbColor={
                isEnabled ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)"
              }
              ios_backgroundColor="rgb(233, 233, 235)"
              onValueChange={toggleSwitch}
              value={isEnabled}
              vv
              style={{ marginLeft: 150 }}
            />
          </View>
          <View
            style={{
              width: 350,
              height: 1,
              backgroundColor: "rgb(241, 240, 240)",
            }}
          />
          <TouchableOpacity style={styles.component}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "rgb(142, 142, 147)",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Entypo
                name="help-with-circle"
                size={20}
                color="rgb(255, 255, 255)"
                style={{ margin: 1 }}
              />
            </View>

            <Text style={{ fontSize: 20 }}>Help</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="rgb(197, 197, 199)"
              style={{ marginLeft: 210 }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 350,
              height: 1,
              backgroundColor: "rgb(241, 240, 240)",
            }}
          />
          <TouchableOpacity style={styles.component}>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "rgb(0, 0, 0)",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Feather
                name="more-horizontal"
                size={24}
                color="rgb(255, 255, 255)"
              />
            </View>
            <Text style={{ fontSize: 20 }}>More</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="rgb(197, 197, 199)"
              style={{ marginLeft: 204 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: 400, height: 30 }} />
        <View
          style={{
            width: 350,
            height: 105,
            backgroundColor: "rgb(255, 255, 255)",
            margin: 5,
            borderRadius: 15,
          }}
        >
          <TouchableOpacity
            style={styles.component}
            onPress={() => {
              navigation.navigate("Display");
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "rgb(0, 122, 255)",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "rgb(255, 255, 255)", fontSize: 12 }}>
                A
              </Text>
              <Text
                style={{
                  color: "rgb(255, 255, 255)",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                A
              </Text>
            </View>
            <Text style={{ fontSize: 20 }}>Display</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="rgb(197, 197, 199)"
              style={{ marginLeft: 185 }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: 350,
              height: 1,
              backgroundColor: "rgb(241, 240, 240)",
            }}
          />
          <TouchableOpacity
            style={styles.component}
            onPress={() => {
              navigation.navigate("Accessibility");
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: "rgb(88, 86, 214)",
                margin: 15,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <MaterialIcons
                name="accessibility-new"
                size={24}
                color="rgb(255, 255, 255)"
              />
            </View>

            <Text style={{ fontSize: 20 }}>Accessibility</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="rgb(197, 197, 199)"
              style={{ marginLeft: 137 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: 400, height: 30 }} />
        <View
          style={{
            width: 350,
            height: 53,
            backgroundColor: "rgb(255, 255, 255)",
            margin: 5,
            borderRadius: 15,
          }}
        >
          <TouchableOpacity
            style={styles.component}
            onPress={() => {
              navigation.navigate("Terms & Conditions");
            }}
          >
            <Text style={{ fontSize: 20, marginLeft: 10 }}>
              Terms & Conditions
            </Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={22}
              color="rgb(197, 197, 199)"
              style={{ marginLeft: 123 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default function Settings2() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Terms & Conditions"
        component={TermsAndConditions}
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
  component: {
    flexDirection: "row",
    margin: 1,
    width: 350,
    height: 50,
    alignItems: "center",
  },
});
