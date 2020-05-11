/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/apolloClient';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from './src/pages/login.page';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { SignUp } from './src/pages/signUp.page';
declare var global: { HermesInternal: null | {} };
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="signUp" component={SignUp} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};
export default App;
