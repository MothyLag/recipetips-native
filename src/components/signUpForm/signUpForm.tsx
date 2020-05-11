import React from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { signUpSchema } from './signUp.schema';

import { signUpInitialValues } from './signUp.initialValues';
import { ISignUpData } from './signUp.types';
export const SignUpForm = () => {
  return (
    <Formik
      initialValues={signUpInitialValues}
      onSubmit={(data: ISignUpData) => {
        console.log(data);
      }}
      validationSchema={signUpSchema}
    >
      {({
        handleChange,
        setFieldTouched,
        handleSubmit,
        isValid,
        values,
        errors
      }) => (
        <>
          <Input
            placeholder="Nombre de Usuario"
            leftIcon={<Icon name="user" />}
            errorMessage={errors.userName}
            value={values.userName}
            onChangeText={handleChange('userName')}
            onBlur={() => setFieldTouched('userName')}
          />
          <Input
            placeholder="Correo electronico"
            leftIcon={<Icon name="envelope" />}
            errorMessage={errors.email}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" />}
            errorMessage={errors.password}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
          />
          <Input
            placeholder="Repita su contraseña"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" />}
            errorMessage={errors.rePassword}
            value={values.rePassword}
            onChangeText={handleChange('rePassword')}
            onBlur={() => setFieldTouched('rePassword')}
          />
          <Button
            title="Registrar"
            type="solid"
            disabled={!isValid}
            buttonStyle={{ justifyContent: 'center' }}
            onPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
};
