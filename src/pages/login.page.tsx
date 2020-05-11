import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Tile, Button } from 'react-native-elements';
import { LoginForm } from '../components/loginForm/loginForm';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationProp } from '@react-navigation/native';
interface ILoginProps {
  navigation: NavigationProp<any>;
}
export const LoginPage = ({ navigation }: ILoginProps) => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Tile
          imageSrc={require('../img/recipe.jpeg')}
          title="Bienvenido a RecipeTips"
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
  }
});
