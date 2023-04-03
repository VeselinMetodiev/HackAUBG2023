import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import TabBarIcon from "../../components/TabBarIcon";
import { PRIMARY_COLOR } from "../../assets/styles";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: "#FFE5B4",
          height: 90,
        },
        headerStyle: {
          backgroundColor: "#FFE5B4",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Team RESTless",
          tabBarIcon: () => <TabBarIcon name="search" focused={true} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Chat",
          tabBarIcon: () => <TabBarIcon name="chatbubble" focused={false} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "TEAM RESTless",
          tabBarIcon: () => <TabBarIcon name="search" focused={false} />,
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: "Matches",
          tabBarIcon: () => <TabBarIcon name="heart" focused={false} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => <TabBarIcon name="person" focused={false} />,
        }}
      />
    </Tabs>
  );
}
