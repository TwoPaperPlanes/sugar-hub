import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";
import {auth} from "/Users/priyankha/Developer/React Native Self-Learnt/sugar-hub/components/firebase.js";
import { useNavigation } from "@react-navigation/core";

const Stack = createStackNavigator();

function LocalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentGlucoseLevel, setCurrentGlucoseLevel] = useState(0)
  const [image, setImage] = useState(
    "https://i.pinimg.com/474x/fb/0b/94/fb0b94f7446c6f6787fc319e6b7c37dc.jpg"
  );

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(242, 242, 247)",
        padding: 8,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Helvetica",
          fontWeight: "bold",
          fontSize: 35,
          width: 325,
        }}
      >
        Login
      </Text>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={{ uri: image }}
          style={{ margin: 30, width: 200, height: 200, borderRadius: "100%" }}
        />
      </TouchableOpacity>
      <TextInput
        style={{
          padding: 5,
          margin: 10,
          width: 350,
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "rgb(229, 229, 234)",
        }}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={{
          padding: 5,
          margin: 10,
          width: 350,
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: "rgb(229, 229, 234)",
        }}
        placeholder="Password."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity style={{ height: 30, marginBottom: 30 }} onPress={null}>
        <Text style={{ color: "rgb(0, 199, 190)" }}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 350,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(0, 199, 190)",
          borderRadius: 10,
          margin: 5,
        }}
        onPress={handleLogin}
      >
        <Text
          style={{
            fontSize: 18,
            color: "rgb(255, 255, 255)",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 350,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: 10,
          margin: 5,
          borderWidth: 1,
          borderColor: "rgb(0, 199, 190)",
        }}
        onPress={handleSignUp}
      >
        <Text
          style={{
            fontSize: 18,
            color: "rgb(0, 199, 190)",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function LoginScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LocalLogin}
        options={{ headerShown: null }}
      />
    </Stack.Navigator>
  );
}