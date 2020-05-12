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
import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './src/apolloClient';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from './src/pages/login.page';
import { NavigationContainer } from '@react-navigation/native';

import { SignUp } from './src/pages/signUp.page';
import { createStore } from 'redux';
import { rootReducer } from './src/store/index.store';
import { Provider } from 'react-redux';
import { RouterComponent } from './src/components/router/router';
declare var global: { HermesInternal: null | {} };
let store = createStore(rootReducer());
const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <RouterComponent />
        </ApolloProvider>
      </Provider>
    </NavigationContainer>
  );
};
export default App;
