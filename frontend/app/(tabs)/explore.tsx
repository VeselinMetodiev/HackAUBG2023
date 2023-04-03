import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Image,
} from "react-native";
import { Fragment, useEffect, useRef, useState } from "react";

//   import Config from 'react-native-config';
import React from "react";
import { SvgUri } from "react-native-svg";
import axios from "axios";

interface Person {
  id: number;
  name: string;
  age: number;
  photo: string;
  description: string;
}

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

//   const apiKey = Config.API_KEY;

const api = {
  names(quantity: number) {
    return `https://randommer.io/api/Name?nameType=firstname&quantity=${quantity}`;
  },
  avatar(name: string) {
    return `https://avatars.dicebear.com/api/micah/:${name}.svg`;
  },
};

function generateAge(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Explore(): JSX.Element {
  const [personList, setPersonList] = useState<Person[]>([
    {
      id: 1,
      name: "Vesko",
      age: 22,
      photo:
        "https://trading212.slack.com/files/U029KRXSL6P/F0518Q98MDZ/trading212_photo_-232.jpg",
      description:
        "And Vasil Kamburov, Dimitar Milushev, Alex Human, Nadezhda Iribozova",
    },
  ]);
  const [liked, setLiked] = useState<number>(0);
  const [disLiked, setDisLiked] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const position = useRef(new Animated.ValueXY());

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_e, gestureState) => {
        position.current.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (_e, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(position.current, {
            useNativeDriver: true,
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          }).start(() => {
            setCurrentIndex((prev) => prev + 1);
            setLiked((prev) => prev + 1);
            position.current.setValue({ x: 0, y: 0 });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(position.current, {
            useNativeDriver: true,
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          }).start(() => {
            setCurrentIndex((prev) => prev + 1);
            setDisLiked((prev) => prev + 1);
            position.current.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.spring(position.current, {
            useNativeDriver: true,
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    })
  );

  // useEffect(() => {
  //   async function fetchNames() {
  //     const response = await axios.get<string[]>(api.names(100), {
  //       headers: { 'X-API-Key': apiKey },
  //     });
  //     if (response.status !== 200) {
  //       return;
  //     }
  //     const uniqueNames = [...new Set(response.data)];
  //     const newPersonList = uniqueNames.map<Person>((name) => ({
  //       name,
  //       age: generateAge(18, 36),
  //       photo: api.avatar(name),
  //     }));
  //     setPersonList(newPersonList);
  //   }
  //   fetchNames();
  // }, []);

  return (
    <View style={styles.screenContainer}>
      {personList
        .map((person, index) => {
          const currentCard = index === currentIndex;
          const propsSpread = currentCard
            ? panResponder.current.panHandlers
            : undefined;
          const cardStyles = getCardStyles(position.current, currentCard);

          if (index < currentIndex) {
            return null;
          }
          return (
            <Animated.View
              {...propsSpread}
              key={person.id}
              style={cardStyles.card}
            >
              {currentCard && (
                <>
                  <Animated.View style={cardStyles.leftTextContainer}>
                    <Text style={cardStyles.leftText}>LIKE</Text>
                  </Animated.View>
                  <Animated.View style={cardStyles.rightTextContainer}>
                    <Text style={cardStyles.rightText}>DISLIKE</Text>
                  </Animated.View>
                </>
              )}

              <Text style={styles.nameLabel}>{person.name}</Text>
              <Text style={styles.ageLabel}>From Team RESTless</Text>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: "https://activebulgariansociety.org/uploads//blog/ad533bfcfdaee82ebc54cf69d5561e6c.jpg",
                  }}
                  style={{
                    width: 300,
                    height: 300,
                    alignSelf: "center",
                    position: "relative",
                    bottom: 0,
                  }}
                />
              </View>
              <Text style={styles.descriptionLabel}>{person.description}</Text>
            </Animated.View>
          );
        })
        .reverse()}
    </View>
  );
}

interface Styles {
  descriptionLabel: TextStyle;
  screenContainer: ViewStyle;
  imageContainer: ViewStyle;
  nameLabel: TextStyle;
  ageLabel: TextStyle;
}

const styles: Styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: "#FEFBF3",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  imageContainer: {
    borderRadius: 150,
    overflow: "hidden",
    backgroundColor: "#FED2AA",
  },
  nameLabel: {
    fontSize: 48,
    fontWeight: "bold",
    padding: 16,
  },
  ageLabel: {
    fontSize: 32,
    padding: 10,
  },
  descriptionLabel: {
    fontSize: 24,
    padding: 16,
  },
});

interface CardStyles {
  card: ViewStyle;
  leftTextContainer: ViewStyle;
  leftText: TextStyle;
  rightTextContainer: ViewStyle;
  rightText: TextStyle;
}

function getCardStyles(
  position: Animated.ValueXY,
  topCard: boolean
): CardStyles {
  let card: ViewStyle = {
    height: SCREEN_HEIGHT - 192,
    width: SCREEN_WIDTH - 32,
    left: 16,
    top: 64,
    padding: 12,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#EBE6E6",
    borderRadius: 8,
    backgroundColor: "#E8F6EF",
    alignItems: "center",
  };
  if (topCard) {
    card = {
      ...card,
      transform: [
        {
          // @ts-ignore
          rotate: position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ["-10deg", "0deg", "10deg"],
            extrapolate: "clamp",
          }),
        },
        // @ts-ignore
        ...position.getTranslateTransform(),
      ],
    };
  } else {
    card = {
      ...card,
      transform: [
        {
          // @ts-ignore
          scale: position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: "clamp",
          }),
        },
      ],
    };
  }

  const leftTextContainer: ViewStyle = {
    // @ts-ignore
    opacity: position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    }),
    transform: [{ rotate: "-40deg" }],
    position: "absolute",
    top: 60,
    left: 40,
    zIndex: 2,
  };
  const rightTextContainer: ViewStyle = {
    // @ts-ignore
    opacity: position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    }),
    transform: [{ rotate: "40deg" }],
    position: "absolute",
    top: 60,
    right: 40,
    zIndex: 2,
  };
  const text: TextStyle = {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#FF5151",
    color: "#FF5151",
    fontSize: 32,
    fontWeight: "800",
    padding: 8,
    lineHeight: 0,
  };

  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      padding: 8,
    },
    card,
    leftTextContainer,
    leftText: {
      ...text,
      borderColor: "#4E9F3D",
      color: "#4E9F3D",
    },
    rightTextContainer,
    rightText: {
      ...text,
      borderColor: "#FF5151",
      color: "#FF5151",
    },
  });
}
