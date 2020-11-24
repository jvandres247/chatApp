import {Row} from 'native-base';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import letterColors from '../utils/letterColors';

export default function Message(props) {
  const {
    message: {userName, text, time},
    name,
  } = props;
  const isMyMessage = name === userName;
  const [bgColorLetter, setBgColorLetter] = useState(null);

  useEffect(() => {
      const char = userName.trim()[0].toUpperCase();
      const indexLetter = char.charCodeAt() - 65;
      setBgColorLetter(letterColors[indexLetter])
  }, [])

  const conditionalStyle = {
    container: {
      justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
    },
    viewMessage: {
      backgroundColor: isMyMessage ? '#f0f0f1' : '#4b86f0',
    },
    message: {
      color: isMyMessage ? '#000' : '#fff',
      textAlign: isMyMessage ? 'right' : 'left',
    },
  };
  return (
    <View style={[styles.container, conditionalStyle.container]}>
      {!isMyMessage && (
        <View style={[styles.letterView, {backgroundColor: `rgb(${bgColorLetter})`}]}>
          <Text style={styles.letter}>{userName.substr(0,1)}</Text>
        </View>
      )}
      <View style={[styles.viewMessage, , conditionalStyle.viewMessage]}>
        <Text style={[styles.message, conditionalStyle.message]}>{text}</Text>
        <Text
          style={[
            styles.time,
            isMyMessage ? styles.timeLeft : styles.timeRight,
          ]}>
          {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  viewMessage: {
    borderRadius: 10,
    minHeight: 35,
    minWidth: '40%',
    maxWidth: '80%',
  },
  message: {
    padding: 5,
    paddingBottom: 25,
  },
  time: {
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
  timeRight: {
    right: 8,
    color: '#fff',
  },
  timeLeft: {
    left: 8,
    color: 'grey',
  },
  letterView: {
    height: 35,
    width: 35,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: 'red',
  },
  letter: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
