import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
const Header = ({ navigation }) => {
  return (
    <View className="flex-row mt-10 px-4 py-4 justify-between items-center bg-white shadow-lg">
      <Text className="text-base font-semibold text-red-900">Country Live</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <MagnifyingGlassIcon color="#000" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
