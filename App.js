import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container} from 'native-base';
import Login from './src/screen/Login';
import Chat from './src/screen/Chat';

export default function App() {
  const [userName, setUserName] = useState(null);
  return (
    <Container style={styles.container}>
      {!userName ? <Login /> : <Chat />}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b',
  },
});