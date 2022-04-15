import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, FlatList } from "react-native";
import NewsCard from "../components/NewsCard";

export default function ScienceScreen({ navigation }) {
  const [news, setNews] = useState([]);

  const getScienceNews = () => {
    fetch(
      "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=hGnqFMiblkwdIMQxVLlPk2AWyMwW5YHK"
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
    getScienceNews();
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
