import gql from 'graphql-tag';

export const CREATE_DESPENSA = gql`
  mutation createDespensaMutation($despensa: CreateDespensaInput!) {
    createDespensa(despensa: $despensa) {
      id
      name
    }
  }
`;
