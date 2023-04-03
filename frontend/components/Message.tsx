import React from "react";
import { Text, View, Image } from "react-native";
import { MessageT } from "../types";
import styles from "../assets/styles";
import { Link } from "expo-router";

const Message = ({ image, lastMessage, name }: MessageT) => (
  <View style={styles.containerMessage}>
    <Image source={image} style={styles.avatar} />
    <View>
      <Link href="/modal">
        <View>
          <Text>{name}</Text>
          <Text style={styles.message}>{lastMessage}</Text>
        </View>
      </Link>
    </View>
  </View>
);

export default Message;
