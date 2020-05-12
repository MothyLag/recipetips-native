import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AsyncStorage } from 'react-native';

const httpLink = createHttpLink({
  //uri: 'http://192.168.0.6:4000/'
  uri: 'https://recipetips.herokuapp.com/'
});

const authLink = setContext((_: any, { headers }: any) => {
  const token = AsyncStorage.getItem('token').then(res => res);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
