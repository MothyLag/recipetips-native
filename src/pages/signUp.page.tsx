import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tile, Button } from 'react-native-elements';
import { SignUpForm } from '../components/signUpForm/signUpForm';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

interface ISignUpProps {
  navigation: NavigationProp<any>;
}
export const SignUp = ({ navigation }: ISignUpProps) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.body}>
        <Tile
          imageSrc={require('../img/recipe.jpeg')}
          title="Bienvenido a RecipeTips"
          featured
          caption="El mejor lugar para tu comida"
        />
        <SignUpForm />
        <Button
          title="Registrarse"
          type="solid"
          buttonStyle={{
            justifyContent: 'center',
            backgroundColor: 'green'
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    height: '100%',
    flexDirection: 'column',
    width: '100%'
  }
});
