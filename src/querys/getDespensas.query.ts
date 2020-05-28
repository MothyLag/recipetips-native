import gql from 'graphql-tag';

export const GET_USER_DESPENSAS = gql`
  {
    getUserDespensas {
      name
    }
  }
`;
