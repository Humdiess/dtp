import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Alert, Pressable, SafeAreaView, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Flatlist from "./screens/Flatlist";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login}/> */}
        <Stack.Screen name="Flatlist" component={Flatlist}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;