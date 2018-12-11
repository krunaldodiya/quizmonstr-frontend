import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

renderItem = (data, navigation) => {
  const { item } = data;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("NewsDetailScreen", { news: item })}
    >
      <View style={styles.newsWrapper}>
        <View style={styles.newsImageWrapper}>
          <Image
            source={{ uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/puzzle-88-429750.png" }}
            style={styles.newsImage}
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.newsTitle}>
            {item.category.name}
          </Text>

          <Text numberOfLines={2} style={styles.newsDescription}>
            {item.host.name}
          </Text>

          <Text style={styles.newsDate}>{item.published_at}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

QuizList = props => {
  const { quiz, navigation } = props;
  const { data } = quiz;

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={data => this.renderItem(data, navigation)}
    />
  );
};

export default QuizList;
