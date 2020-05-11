import * as Yup from 'yup';
export const signUpSchema = Yup.object().shape({
  userName: Yup.string()
    .min(7, 'El nombre de usuario debe tener minimo 7 caractéres')
    .required('este campo es requerido'),
  email: Yup.string()
    .required('este campo es requerido')
    .email('ingrese un correo valido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener minimo 8 caractéres')
    .required('este campo es requerido'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'las contraseñas no coinciden')
    .required('este campo es requerido')
});
