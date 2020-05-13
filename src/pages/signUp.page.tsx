import React from 'react';
<<<<<<< HEAD
import { View, StyleSheet, Text } from 'react-native';
=======
import { StyleSheet } from 'react-native';
>>>>>>> 9c15bf032c6064d3ea2a7b1b12dae4d9fd0b00c7
import { SafeAreaView } from 'react-native-safe-area-context';
import { Tile, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { SignUpForm } from '../components/signUpForm/signUpForm';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

interface ISignUpProps {
  navigation: NavigationProp<any>;
}
export const SignUp = ({ navigation }: ISignUpProps) => {
  return (
    <View style={styles.body}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.title}>SingUp</Text>
        <SignUpForm />
        <Button
          title="Registrarse"
          type="solid"
          buttonStyle={{
            justifyContent: 'center',
            backgroundColor: 'green'
          }}
        />
        </LinearGradient>
      </View>
  );
};
const styles = StyleSheet.create({
  body: {
    height: '100%',
    flexDirection: 'column',
    width: '100%'
  },

  title: {
    color: '#262626',
    textShadowColor: 'silver',
    textShadowOffset: { width: -1 , height: 1 },
    textShadowRadius: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 10,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 100,
  },


});
