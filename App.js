import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import StartingScreen from "./src/StartingScreen";
import Search from "./src/Components/Search";
import NewsViewer from "./src/NewsViewer";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Starting"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Starting" component={StartingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="NewsViewer" component={NewsViewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
