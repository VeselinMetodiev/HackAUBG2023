import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text } from '../../components/Themed';
import { AuthService } from '../services/auth-service';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
  const authService =  new AuthService();
  const [text, setText] = useState('');

  useEffect(() => {
    authService.login({
      email: '',
      password: ''
    }).then(
      (value) => setText(value.title)
    );}
    , []);
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
