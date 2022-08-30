// Variables
import React, { useState } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  Box,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { WebView } from "react-native-webview";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { auth } from "/Users/priyankha/Developer/React Native Self-Learnt/sugar-hub/components/firebase.js";
import { useNavigation } from "@react-navigation/core";

const image = {
  uri: "https://exploringbits.com/wp-content/uploads/2022/01/cat-pfp-1.jpg",
};

//icons
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//Screens
import ProductScannerScreen from "./ProductScannerScreen.js";
import BloodSugarTrend from "./BloodSugarTrendScreen";
import LoginScreen from "./LoginPage.js";
import { useEffect } from "react/cjs/react.development";

//Date
var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var date = day + "/" + month + "/" + year;



function ZucchiniVideo() {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{ uri: "https://youtu.be/WKmLHwplFPk" }}
    />
  );
}

function ChickenVideo() {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{ uri: "https://youtu.be/BQa1wMo2_-8" }}
    />
  );
}

function IndianVideo() {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{ uri: "https://youtu.be/ltLgU4tOxKk" }}
    />
  );
}

function KneeVideo() {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{ uri: "https://youtu.be/pt-EDqihR9Y" }}
    />
  );
}

function StretchingVideo() {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{ uri: "https://youtu.be/kfjVFQWWiZw" }}
    />
  );
}

function SimpleVideo() {
  return (
    <WebView
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      source={{ uri: "https://youtu.be/LYJ3U0Fs4dg" }}
    />
  );
}

function Home({ navigation, route }) {
  // leaderboard variable
  const [leadboard, setLeadboard] = useState(0);
  useEffect(() => {
    if (isNaN(route.params?.newSugarData) == true) {
      console.log(">:(");
    } else {
      if (Number(route.params?.sugarData) < 7) {
        console.log("YAYY");
      } else {
        console.log("NAYY");
      }
    }
  }, [route.params?.acceptableRange]);

  //route.params for the today
  const [scannerDay, setScannerDay] = useState(0);
  useEffect(() => {
    if (isNaN(route.params?.today)) {
      null;
    } else {
      const newCalorie = Number(route.params?.today);
      setScannerDay(scannerDay + newCalorie);
    }
  }, [route.params?.today]);

  useEffect(() => {
    console.log(leadboard);
  });

  //other stuff
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Image
            source={image}
            style={{ width: 30, height: 30, margin: 10, borderRadius: "100%" }}
          />
        </TouchableOpacity>
      ),
    });
  });

  // Sign out button
  const navigateOut = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigateOut.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  useEffect(() => {
    if (auth == false) {
      alert("Remember to sign up first!!");
    }
  });

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "rgb(242, 242, 247)",
        padding: 8,
      }}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              fontSize: 35,
              marginLeft: 25,
            }}
          >
            Home
          </Text>
          <View
            style={{
              width: 100,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 125,
            }}
          >
            <Text
              style={{
                fontStyle: "italic",
                color: "rgb(99,99, 102)",
                fontFamily: "Helvetica",
                marginLeft: 25,
                fontSize: 14,
              }}
            >
              {date}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontStyle: "italic",
            color: "rgb(99,99, 102)",
            fontFamily: "Helvetica",
            marginLeft: 25,
            fontSize: 14,
          }}
        >
          welcome back, {auth.currentUser?.email}
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: -10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 100,
              fontFamily: "Helvetica",
              color: "rgb(0, 199, 190)",
            }}
          >
            {scannerDay}
          </Text>
        </View>
        {/** ^^ Scanner
         *
         *
         *
         *
         *
         *
         *
         *
         *
         *
         * vv Options
         */}
        <View style={{ flexDirection: "row", padding: 5 }}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 200,
              backgroundColor: "rgb(255, 255, 255)",
              flex: 1,
              margin: 5,
              overflow: "hidden",
              borderRadius: 15,
            }}
            onPress={() => {
              navigation.navigate("Product Scanner");
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/productscanner.png")}
              resizeMode="cover"
              style={{
                justifyContent: "center",
                width: 200,
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
              <Text style={{ fontSize: 20 }}>Product Scanner</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 150,
              height: 200,
              backgroundColor: "rgb(255, 255, 255)",
              flex: 1,
              margin: 5,
              overflow: "hidden",
              borderRadius: 15,
            }}
            onPress={() => {
              navigation.navigate("Blood Sugar Trend");
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/glucoselevels.png")}
              resizeMode="cover"
              style={{
                justifyContent: "center",
                width: 200,
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
              <Text style={{ fontSize: 20 }}>Glucose Levels</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Recipes
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            width: 350,
            height: 285,
            backgroundColor: "rgb(255, 255, 255)",
            margin: 10,
            borderRadius: 15,
            padding: 5,
          }}
        >
          <View
            style={{
              width: 250,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: "rgb(255, 255, 255)",
              height: 250,
              alignItems: "center",
              margin: 10,
              borderWidth: 1,
              borderColor: "rgb(242, 242, 247)",
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/sweetzucchini.jpg")}
              resizeMode="cover"
              style={{
                justifyContent: "center",
                width: 250,
                height: 200,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  margin: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Sweet Zucchini Slices");
                }}
                onPressIn={() => setLeadboard(leadboard + 1)}
              >
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 10,
                    }}
                  >
                    <FontAwesome5
                      name="play"
                      size={50}
                      color="rgb(255, 255, 255)"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Sweet Zucchini Slices
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 250,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: "rgb(255, 255, 255)",
              height: 250,
              alignItems: "center",
              margin: 10,
              marginLeft: 0,
              borderWidth: 1,
              borderColor: "rgb(242, 242, 247)",
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/chicken.jpg")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                width: 400,
                height: 200,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Chicken Veggie Stir Fry");
                }}
                onPressIn={() => setLeadboard(leadboard + 1)}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <FontAwesome5
                    name="play"
                    size={50}
                    color="rgb(255, 255, 255)"
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <Text
              style={{
                fontSize: 20,
                color: "rgb(0, 0, 0)",
                marginBottom: 15,
              }}
            >
              Chicken Veggie Stir Fry
            </Text>
          </View>
          <View
            style={{
              width: 250,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: "rgb(255, 255, 255)",
              height: 250,
              alignItems: "center",
              margin: 10,
              marginLeft: 0,
              borderWidth: 1,
              borderColor: "rgb(242, 242, 247)",
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/indiandiabetic.jpg")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                width: 400,
                height: 200,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  margin: 50,
                  marginTop: 30,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Full Day Diabetic Indian");
                }}
                onPressIn={() => setLeadboard(leadboard + 1)}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 45,
                  }}
                >
                  <FontAwesome5
                    name="play"
                    size={50}
                    color="rgb(255, 255, 255)"
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <Text
              style={{
                fontSize: 20,
                color: "rgb(0, 0, 0)",
                marginTop: 10,
              }}
            >
              Full Day Diabetic Indian
            </Text>
          </View>
        </ScrollView>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Exercises
        </Text>
        <ScrollView
          horizontal={true}
          style={{
            width: 350,
            height: 285,
            backgroundColor: "rgb(255, 255, 255)",
            marginLeft: 10,
            borderRadius: 15,
            padding: 5,
          }}
        >
          <View
            style={{
              width: 250,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: "rgb(255, 255, 255)",
              height: 250,
              alignItems: "center",
              margin: 10,
              borderWidth: 1,
              borderColor: "rgb(242, 242, 247)",
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/gentleknee.png")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                width: 400,
                height: 200,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Gentle Knee Workout");
                }}
                onPressIn={() => setLeadboard(leadboard + 1)}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <FontAwesome5
                    name="play"
                    size={50}
                    color="rgb(255, 255, 255)"
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                width: 400,
                height: 50,
                backgroundColor: "rgb(255, 255, 255)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Gentle Knee Workout
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 250,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: "rgb(255, 255, 255)",
              height: 250,
              alignItems: "center",
              margin: 10,
              marginLeft: 0,
              borderWidth: 1,
              borderColor: "rgb(242, 242, 247)",
            }}
          >
            <ImageBackground
              source={require("/Users/priyankha/Developer/React Native Self-Learnt/sugar-hub/components/images/gentlestretching.png")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                width: 400,
                height: 200,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("Gentle Stretching");
                }}
                onPressIn={() => setLeadboard(leadboard + 1)}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <FontAwesome5
                    name="play"
                    size={50}
                    color="rgb(255, 255, 255)"
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                width: 400,
                height: 50,
                backgroundColor: "rgb(255, 255, 255)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "rgb(0, 0, 0)",
                }}
              >
                Gentle Stretching
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 250,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: "rgb(255, 255, 255)",
              height: 250,
              alignItems: "center",
              margin: 10,
              marginLeft: 0,
              borderWidth: 1,
              borderColor: "rgb(242, 242, 247)",
            }}
          >
            <ImageBackground
              source={require("sugar-hub/components/images/15minssimple.png")}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "center",
                width: 400,
                height: 200,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("15 Mins Simple");
                }}
                onPressIn={() => setLeadboard(leadboard + 1)}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <FontAwesome5
                    name="play"
                    size={50}
                    color="rgb(255, 255, 255)"
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                width: 400,
                height: 50,
                backgroundColor: "rgb(255, 255, 255)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "rgb(0, 0, 0)",
                }}
              >
                15 Mins Simple
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: 375,
            height: 75,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              backgroundColor: "red",
              borderRadius: 10,
            }}
            onPress={handleSignOut}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "rgb(242, 242, 247)" },
        }}
      />
      <Stack.Screen
        name="Product Scanner"
        component={ProductScannerScreen}
        options={{
          headerStyle: {
            backgroundColor: "rgb(242, 242, 247)",
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Blood Sugar Trend"
        component={BloodSugarTrend}
        options={{
          headerStyle: {
            backgroundColor: "rgb(242, 242, 247)",
          },
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Sweet Zucchini Slices"
        component={ZucchiniVideo}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Chicken Veggie Stir Fry"
        component={ChickenVideo}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Full Day Diabetic Indian"
        component={IndianVideo}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Gentle Knee Workout"
        component={KneeVideo}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Gentle Stretching"
        component={StretchingVideo}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="15 Mins Simple"
        component={SimpleVideo}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTintColor: "rgb(0, 199, 190)",
          headerTitle: "",
          headerStyle: {
            backgroundColor: "rgb()",
          },
        }}
      />
    </Stack.Navigator>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  header: null,
});
