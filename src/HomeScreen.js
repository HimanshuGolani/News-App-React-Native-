import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Header from "./Components/Header.js";
import Card from "./Components/Card.js";

const HomeScreen = ({ navigation }) => {
  const [headlines, setHeadlines] = useState([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = React.useState([
    { id: 1, name: "Top Headlines", category: "general" },
    { id: 5, name: "Sports", category: "sports" },
    { id: 2, name: "Business", category: "business" },
    { id: 3, name: "Entertainment", category: "entertainment" },
    { id: 4, name: "Health", category: "health" },
    { id: 6, name: "Science", category: "science" },
    { id: 7, name: "Technology", category: "technology" },
  ]);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0dba5e1df34a42b9a748558ef2434f73&category=${categories[active].category}`
    );
    const data = await response.json();
    setHeadlines(data.articles);
    setLoading(false);
  };

  const getDataNav = async (category) => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=0dba5e1df34a42b9a748558ef2434f73&category=${category}`
    );
    const data = await response.json();
    setHeadlines(data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color="#db393c" size={40} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Header navigation={navigation} />

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <FlatList
              data={categories}
              horizontal
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    marginHorizontal: 8,
                    marginVertical: 4,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: index === active ? "#FFD700" : "#FFEB3B",
                    borderRadius: 8,
                  }}
                  onPress={() => {
                    setActive(index);
                    getDataNav(categories[index].category);
                  }}
                >
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ flex: 1 }}>
            <FlatList
              data={headlines}
              renderItem={({ item, index }) => (
                <Card item={item} key={index} navigation={navigation} />
              )}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default HomeScreen;
