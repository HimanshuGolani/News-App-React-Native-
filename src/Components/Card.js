import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const Card = ({ item, navigation }) => {
  return (
    <View className="max-w-sm rounded overflow-hidden shadow-lg">
      <View className="px-4 py-4  my-4">
        <Image
          className="h-52 w-full rounded-md "
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png",
          }}
          resizeMode="cover"
        />
        <View className="px-2 my-1">
          <View className="flex-col justify-between my-2">
            <Text className="font-bold text-xl">{item.title}</Text>
          </View>
          <View className="flex-row justify-center">
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <Text className="text-gray-700 text-base">
                  {item.description}
                </Text>
              </ScrollView>
            </SafeAreaView>
          </View>

          <View className="flex-row justify-center px-9 pb- overflow-clip">
            <Text className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.author ? `@${item.author}` : "un-named"}
            </Text>
            <Text className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`@${item.publishedAt.toLocaleString(
              "en-GB",
              { timeZone: "UTC" }
            )}`}</Text>
          </View>
          <View className="my-2">
            <TouchableOpacity
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onPress={() =>
                navigation.navigate("NewsViewer", {
                  url: item.url,
                })
              }
            >
              <Text className="text-center">Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 20,
  },
});

export default Card;
