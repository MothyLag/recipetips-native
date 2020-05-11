import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation createUserMutation($user: CreateUserInput!) {
    createUser(user: $user) {
      token
    }
  }
`;
