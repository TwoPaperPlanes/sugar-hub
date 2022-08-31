import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialIcons } from "@expo/vector-icons";

function ProductScannerScreen({ navigation, route }) {
  // new back button
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate("Home", { today })}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={39}
            color="rgb(0, 190, 199)"
            style={{ height: 30 }}
          />
          <Text
            style={{
              fontSize: 17,
              color: "rgb(0, 190, 199)",
              height: 30,
              marginTop: 9,
              marginLeft: -7,
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      ),
    });
  });

  // data graph thing
  const [thisMonth, setThisMonth] = useState(0);
  const [thisWeek, setThisWeek] = useState(0);
  const [today, setToday] = useState(0);

  //route.params from the addMeal screen
  useEffect(() => {
    if (isNaN(route.params?.calorie)) {
      null;
    } else {
      const newCalorie = Number(route.params?.calorie);
      setToday(today + newCalorie);
      setThisWeek(thisWeek + newCalorie);
      setThisMonth(thisMonth + newCalorie);
    }
  }, [route.params?.calorie]);

  //scanner settings (barcode/qr)
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }, { Linking }) => {
    setScanned(true);
    alert(
      <TouchableOpacity onPress={Linking.openURL(`${data}`)}>
        go to linking website
      </TouchableOpacity>
    );
  };
  /* if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } */

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(242, 242, 247)",
        padding: 8,
      }}
    >
      <View style={{ margin: 5 }}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Helvetica",
                fontWeight: "bold",
                fontSize: 35,
              }}
            >
              Calories
            </Text>
            <View
              style={{
                width: 140,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 70,
              }}
            >
              <Text
                style={{
                  fontStyle: "italic",
                  color: "rgb(99,99, 102)",
                  fontFamily: "Helvetica",
                  fontSize: 14,
                }}
              >
                Today's Target: 1500
              </Text>
            </View>
          </View>
          <Text>This month: {thisMonth}</Text>
          <View
            style={{
              width: (thisMonth / 1500) * 350 + 1,
              height: 10,
              backgroundColor: "rgb(255, 59, 48)",
            }}
          />
        </View>
        <View>
          <Text>This week: {thisWeek}</Text>
          <View
            style={{
              width: (thisWeek / 1500) * 350 + 1,
              height: 10,
              backgroundColor: "rgb(255, 149, 0)",
            }}
          />
        </View>
        <View>
          <Text>Today: {today}</Text>
          <View
            style={{
              width: (today / 1500) * 350 + 1,
              height: 10,
              backgroundColor: "rgb(255, 204, 0)",
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: 350, height: 400, borderRadius: 15 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "rgb(0, 199, 190)",
            width: 350,
            alignItems: "center",
            margin: 10,
            borderRadius: 10,
            height: 35,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "rgb(255, 255, 255)", fontSize: 16 }}>
            Enter Calorie Manually
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function addMeal({ navigation }) {
  // adding state variables for the 2 text inputs
  const [mealName, setMealName] = useState("");
  const [calorie, setCalorie] = useState("");

  return (
    <View
      style={{
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "Helvetica",
          fontWeight: "bold",
          fontSize: 35,
          margin: 5,
          width: 300,
        }}
      >
        Add Meal
      </Text>
      <TextInput
        onChangeText={(text) => setMealName(text)}
        style={{
          padding: 5,
          margin: 10,
          width: 300,
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "rgb(229, 229, 234)",
        }}
        placeholder={"Name of Meal"}
      />
      <TextInput
        onChangeText={(text) => setCalorie(text)}
        style={{
          padding: 5,
          margin: 10,
          width: 300,
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "rgb(229, 229, 234)",
        }}
        placeholder={"Calories of Meal"}
      />
      <Text style={{ margin: 5 }}>
        Just to check, the meal {mealName} has {calorie} calories
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ScannerStack", { mealName, calorie })
          }
        >
          <Text
            style={{
              fontSize: 18,
              color: "rgb(0, 199, 190)",
              fontWeight: "bold",
              margin: 20,
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
        <View style={{ width: 150 }} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 18,
              color: "rgb(0, 199, 190)",
              margin: 20,
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function ProductScanner() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="ScannerStack"
        component={ProductScannerScreen}
        options={{
          headerTitle: "Product Scanner",
          headerTitleStyle: {
            color: "rgb(0, 0, 0)",
          },
          headerStyle: {
            backgroundColor: "rgb(242, 242, 247)",
          },
          headerTintColor: "rgb(0, 199, 190)",
        }}
      />
      <Stack.Screen
        name="Add"
        component={addMeal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
