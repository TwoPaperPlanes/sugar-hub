import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { NavigationHelpersContext } from "@react-navigation/native";
import { collection, onSnapshot, query, addDoc } from "firebase/firestore"
import { db } from "/Users/priyankha/Developer/React Native Self-Learnt/sugar-hub/components/firebase.js";

function alertConnectGlucometer() {
  Alert.alert(
    "New feature coming soon!",
    "Once bluetooth enabled glucometers start rolling out, this feature would work!"
  );
}

// linechart labels
var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var date = day + "/" + month + "/" + year;

function BloodSugarTrendScreen({ navigation, route }) {
  const [sugarData, setSugarData] = useState([0]);

  async function saveSugarData() {
    await addDoc(collection(db, "sugatdata"), { value: sugarData });
    navigation.goBack();
  }

  useEffect(() => {
    const q = query(collection(db, "sugardata"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newSugar = querySnapshot.docs.map((doc, index) => {
        return { ...doc.data(), id: index };
      });
      setSugarData(newSugar);
    })

    return () => {
      unsubscribe();
    };
  }, [])
  useEffect(() => {
    if (isNaN(route.params?.sugarValue)) {
      null;
    } else {
      setSugarData((sugarData) => [...sugarData, route.params?.sugarValue]);
      console.log(sugarData);
    }
  });

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView
        style={{
          width: "85%",
          height: 430,
          backgroundColor: "white",
          margin: 20,
          borderRadius: 10,
        }}
      >
        <ScrollView
          horizontal={true}
          style={{ width: 1000, height: 430, padding: 20 }}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LineChart
            data={{
              labels: [0],
              datasets: [
                {
                  data: sugarData,
                },
              ],
            }}
            width={1800} // from react-native
            height={400}
            chartConfig={{
              backgroundGradientFrom: "rgb(255, 255, 255)",
              backgroundGradientTo: "rgb(255, 255, 255)",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 199, 190, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: "4",
                strokeWidth: "0.1",
                stroke: "rgb(0, 0, 0)",
              },
            }}
            style={{
              borderRadius: 16,
              marginTop: 50,
            }}
          />
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Add")}
        style={{
          width: "85%",
          height: 35,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          borderRadius: 10,
          backgroundColor: "rgb(0, 199, 190)",
        }}
      >
        <Text style={{ color: "rgb(255, 255, 255)", fontSize: 16 }}>
          Enter value manually
        </Text>
      </TouchableOpacity>
      <Text style={{ width: "85%", marginTop: 20, fontSize: 16 }}>
        Alternatively,
      </Text>
      <TouchableOpacity
        onPress={alertConnectGlucometer}
        style={{
          width: "85%",
          height: 35,
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
          borderRadius: 10,
          backgroundColor: "rgb(255, 255, 255)",
          borderWidth: 0.5,
          borderColor: "rgb(0, 199, 190)",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "rgb(0, 199, 190)", fontSize: 16 }}>
            Connect to Bluetooth
          </Text>
          <FontAwesome5
            name="bluetooth-b"
            size={20}
            color="rgb(0, 199, 190)"
            style={{ marginLeft: 5 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

function addValue({ navigation }) {
  // adding state variables for the 2 text inputs
  const [sugarValue, setSugarValue] = useState("");

  //Date
  var day = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var date = day + "/" + month + "/" + year;

  //Time
  var hours = new Date().getHours(); //To get the Current Hours
  var min = new Date().getMinutes(); //To get the Current Minutes
  if (min < 10) {
    var time = hours + ":0" + min;
  } else {
    var time = hours + ":" + min;
  }

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
        Add Reading
      </Text>

      <TextInput
        onChangeText={(text) => setSugarValue(text)}
        style={{
          padding: 5,
          margin: 10,
          width: 300,
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "rgb(229, 229, 234)",
        }}
        placeholder={"Reading on Glucometer"}
      />
      <Text style={{ margin: 5 }}>
        {date} at {time}, {sugarValue} mmol/L
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SugarStack", { sugarValue })}
        >
          <Text
            style={{
              fontSize: 18,
              color: "rgb(rgb(0, 199, 190))",
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
              color: "rgb(rgb(0, 199, 190))",
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

export default function BloodSugarTrend() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="SugarStack"
        component={BloodSugarTrendScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add"
        component={addValue}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
