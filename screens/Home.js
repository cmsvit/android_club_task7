import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, FlatList } from "react-native";
import NewsCard from "../components/NewsCard";

export default function HomeScreen({ navigation }) {
  const [news, setNews] = useState([]);

  const getHomeNews = () => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=hGnqFMiblkwdIMQxVLlPk2AWyMwW5YHK"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setNews(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getHomeNews();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          data={news}
          renderItem={({ item }) => <NewsCard item={item} />}
          keyExtractor={(item) => item.updated_date}
        />
      </View>
    </SafeAreaView>
  );
}
