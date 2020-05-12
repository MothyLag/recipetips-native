import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../../pages/login.page';
import { SignUp } from '../../pages/signUp.page';
import { useSelector } from 'react-redux';
import { IAppState } from '../../utils/state.types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from '../..//pages/home.page';

export const RouterComponent = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const isLogged = useSelector<IAppState, boolean>(
    state => state.session.isLogged
  );
  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);
  if (!isLogged) {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage} />
      </Drawer.Navigator>
    );
  }
};
