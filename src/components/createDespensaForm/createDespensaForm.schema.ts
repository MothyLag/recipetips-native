import * as Yup from 'yup';
export const createDespensaFormSchema = Yup.object().shape({
  name: Yup.string().required('favor de llenar este campo'),
  items: Yup.string()
});
