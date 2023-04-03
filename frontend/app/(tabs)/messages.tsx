import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import Icon from "../../components/Icon";
import Message from "../../components/Message";
import styles, { DARK_GRAY } from "../../assets/styles";
import data from "../../assets/demo/demo";
import { Link } from "expo-router";

const Messages = () => {
  const onMessagePress = (item: any) => {
    <Link key="1" href={`/${item.name}`}></Link>;
  };
  return (
    <ImageBackground
      source={{
        uri: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg",
      }}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <View style={styles.top}></View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Message
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

export default Messages;
