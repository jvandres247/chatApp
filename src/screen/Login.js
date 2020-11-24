import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Image} from 'react-native';
import {Item, Input, Text, Button} from 'native-base';
import logoApp from '../assets/chatLogo.png';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <Image source={logoApp} resizeMode="contain" style={styles.logo} />
      </View>
      <Item>
        <Input
          style={styles.inputUserName}
          placeholderTextColor="grey"
          placeholder="Nombre de Usuario"
        />
      </Item>

      <Button style={styles.btnLogin}>
          <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  container: {
    marginHorizontal: 50,
    marginVertical: 100,
  },
  inputUserName: {
    color: '#fff',
  },
  btnLogin: {
      marginTop: 40,
      justifyContent: 'center',
      backgroundColor: '#0098d3',
      width: '100%'
  }
});
