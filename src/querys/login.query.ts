import gql from 'graphql-tag';

export const TEST_QUERY = gql`
  {
    greet
  }
`;

export const LOG_IN = gql`
  query loginQuery($user: LoggUserInput!) {
    login(user: $user) {
      token
      userName
    }
  }
`;
