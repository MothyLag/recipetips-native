import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
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
        <StatusBar backgroundColor= '#8fe5da' />
        <Image source={require('../img/intro.png')} style={styles.logo} />
        <Text style={styles.title}>Bienvenido a RecipeTips</Text>
        <LoginForm />
        <Grid style={{margin: 50, backgroundColor: 'transparent', width: 250, height: 50}}>
            <Col size={12}>
            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
              <Text style={{textAlign: 'center', margin: 7 , fontSize: 20, color: 'white', textShadowColor: 'black',
    textShadowOffset: { width: 1 , height: 1 },
    textShadowRadius: 1, }}>
                Registrate
              </Text>
            </TouchableOpacity>
            </Col>
            <Col>
              <Text style={{textAlign: 'center', fontSize: 25, color: 'white', fontWeight: 'bold', textShadowColor: 'black',
    textShadowOffset: { width: -0.1 , height: 0.5 },
    textShadowRadius: 1,}}>
                |
              </Text>
            </Col>
            <Col size={13}>
            <TouchableOpacity onPress={() => (alert('En construcción'))}>
              <Text style={{textAlign: 'center', textAlignVertical: 'center', margin: 2, fontSize: 16, color: 'white', textShadowColor: 'black',
    textShadowOffset: { width: 1 , height: 1 },
    textShadowRadius: 1, }}>
                ¿Se te olvido la contraseña?
              </Text>
            </TouchableOpacity>
            </Col>
          </Grid>

















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

  logo: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 16,
    margin: 70,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
