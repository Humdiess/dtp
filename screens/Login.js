import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Pressable,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("test@gmail.com");
  const [name, setName] = useState("Anonym");
  const [name2, setName2] = useState("halo");

  return (
    <ScrollView className="flex flex-1 bg-[#171717] space-y-4">
      <StatusBar style="light" />
      <Pressable
        className="bg-[#2C3333] px-16 py-4 rounded-lg"
        onPress={() => Alert.alert("Awas sebelah mu Gay")}
      >
        <Text className="text-slate-100">Show All Apps & Games</Text>
      </Pressable>
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name2}
        onChangeText={(text) => setName2(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name2}
        onChangeText={(text) => setName2(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name2}
        onChangeText={(text) => setName2(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name2}
        onChangeText={(text) => setName2(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        className="flex items-center justify-center px-[75] py-4 bg-slate-100 border-[#2C3333] rounded-lg placeholder-slate-900 text-lg"
        value={name2}
        onChangeText={(text) => setName2(text)}
      />
    </ScrollView>
  );
}