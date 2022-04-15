import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, FlatList } from "react-native";
import NewsCard from "../components/NewsCard";

export default function MoviesScreen({ navigation }) {
  const [news, setNews] = useState([]);

  const getMoviesNews = () => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=<lmao-what-are-you-looking-at>"
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
    getMoviesNews();
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
