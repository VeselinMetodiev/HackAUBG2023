import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

// import * as firebase from "firebase";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const dbRef = firebase.database().ref('messages');

  //   dbRef.on('child_added', snapshot => {
  //     const newMessage = snapshot.val();
  //     setMessages(previousMessages =>
  //       GiftedChat.append(previousMessages, newMessage),
  //     );
  //   });

  //   return () => dbRef.off('child_added');
  // }, []);

  const onSend = useCallback((newMessages = []) => {
    console.warn("message was sent");
    // setMessages(previousMessages =>
    //   GiftedChat.append(previousMessages, newMessages),
    // );
    // const dbRef = firebase.database().ref('messages').push();
    // dbRef.set(newMessages[0]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Alexa</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
