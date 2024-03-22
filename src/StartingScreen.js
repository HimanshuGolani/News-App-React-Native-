import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Animatable from "react-native-animatable";

const StartingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Animatable.Text
        className="text-4xl text-white font-SemiBold"
        animation="fadeInDownBig"
        duration={2000}
      >
        Country Live
      </Animatable.Text>
    </View>
  );
};

export default StartingScreen;
const styles = StyleSheet.create({});
