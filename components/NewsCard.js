import react from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function NewsCard(props) {
  if (props.item.multimedia != null && props.item.title != "") {
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: props.item.multimedia[1].url }}
        />
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.caption}>{props.item.byline}</Text>
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    //padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  caption: {
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 10,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
