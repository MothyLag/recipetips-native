import gql from 'graphql-tag';

export const CREATE_DESPENSA = gql`
  mutation createDespensaMutation($despensa: createDespensaInput!) {
    createDespensa(despensa: $despensa) {
      id
      name
      items
    }
  }
`;
