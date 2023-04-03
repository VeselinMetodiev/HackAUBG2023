import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { TabBarIconT } from "../types";
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";


const TabBarIcon = ({ focused, name }: TabBarIconT) => {
  const iconFocused = focused ? PRIMARY_COLOR : DARK_GRAY;

  return (
    <View style={styles.iconMenu}>
      <Icon name={name} size={16} color={iconFocused} />
    </View>
  );
};

export default TabBarIcon;
