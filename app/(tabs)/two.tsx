import { Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { decrement, increment } from "../../reducers/counter";
import { useAppDispatch, useAppSelector } from "../../store";

export default function TabTwoScreen() {
  const count = useAppSelector((state: any) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View>
      <Text>Counter Screen</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
      <Button title="Decrement" onPress={handleDecrement} />
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
