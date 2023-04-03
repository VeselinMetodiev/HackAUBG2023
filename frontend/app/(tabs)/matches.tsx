import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import styles, { DARK_GRAY } from "../../assets/styles";
import Icon from "../../components/Icon";
import demo from "../../assets/demo/demo";
import CardItem from "../../components/CardItem";

const Matches = () => (
  <ImageBackground
    source={{
      uri: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg",
    }}
    style={styles.bg}
  >
    <View style={styles.containerMatches}>
      <View style={styles.top}></View>

      <FlatList
        numColumns={2}
        data={demo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <CardItem
              image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant
            />
          </TouchableOpacity>
        )}
      />
    </View>
  </ImageBackground>
);

export default Matches;
