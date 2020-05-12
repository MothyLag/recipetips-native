import React from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import { Tile, Button } from 'react-native-elements';
import { LoginForm } from '../components/loginForm/loginForm';
import { NavigationProp } from '@react-navigation/native';
interface ILoginProps {
  navigation: NavigationProp<any>;
}
export const LoginPage = ({ navigation }: ILoginProps) => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <StatusBar hidden />
        <Tile
          imageSrc={require('../img/intro.jpg')}
          title="Bienvenido a RecipeTips"
          titleStyle={styles.title}
          featured
          caption="El mejor lugar para tu comida"
        />
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
    </SafeAreaView>
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
    color: 'black'
  }
});
