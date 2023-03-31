import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { increment } from "../../reducers/counter";
import { useAppDispatch, useAppSelector } from "../../store";

export default function TabOneScreen() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(increment());
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={handlePress} />
    </View>
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
