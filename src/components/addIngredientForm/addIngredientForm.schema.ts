import * as Yup from 'yup';
export const addIngredientSchema = Yup.object().shape({
  name: Yup.string().required('favor de llenar este campo'),
  standardPrice: Yup.number(),
  description: Yup.string()
});
