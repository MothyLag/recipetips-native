import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(user: $input) {
      userName
      token
    }
  }
`;
