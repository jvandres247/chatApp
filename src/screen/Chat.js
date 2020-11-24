import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import firebase from '../utils/firebase';
import 'firebase/database';
import moment from 'moment';

export default function Chat(props) {
  const {userName} = props;
  const sendMessage = (message) => {
    const time = moment().format('hh:mm a');
    firebase.database().ref('general').push({
      userName,
      text: message,
      time,
    });
  };
  return (
    <>
      <View style={styles.content}>
        <Text>Chat</Text>
        <Input sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
