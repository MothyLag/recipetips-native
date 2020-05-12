import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';
import { LoginForm } from '../components/loginForm/loginForm';
import { NavigationProp } from '@react-navigation/native';
interface ILoginProps {
  navigation: NavigationProp<any>;
}

export const LoginPage = ({ navigation }: ILoginProps) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../img/fondo.jpg')}
    >
      <View style={styles.body}>
        <StatusBar hidden />
        <Image source={require('../img/intro.png')} style={styles.logo} />
        <Text style={styles.title}>Bienvenido a RecipeTips</Text>
        <LoginForm />
        <Button
          title="Registrarse"
          type="solid"
          buttonStyle={{
            justifyContent: 'center',
            width: 1000,
            backgroundColor: 'green'
          }}
          onPress={() => navigation.navigate('signUp')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  },

  title: {
    color: 'black',
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20
  },

  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 16,
    margin: 60
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
