import gql from 'graphql-tag';

export const ADD_INGREDIENT = gql`
  mutation AddIngredient($ingredient: CreateIngredientInput!) {
    createIngredient(ingredient: $ingredient) {
      name
      standardPrice
      description
    }
  }
`;
