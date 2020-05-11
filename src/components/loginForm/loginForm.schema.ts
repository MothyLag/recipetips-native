import * as Yup from 'yup';
export const loginFormSchema = Yup.object().shape({
  user: Yup.string().required('favor de llenar este campo'),
  password: Yup.string().required('favor de llenar este campo')
});
