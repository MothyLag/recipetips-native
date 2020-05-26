import gql from 'graphql-tag';

export const SEARCH_INGREDIENTS = gql`
  query SearchIngredients($name: String!) {
    getIngredientByName(name: $name) {
      _id
      name
      standardPrice
      description
    }
  }
`;
