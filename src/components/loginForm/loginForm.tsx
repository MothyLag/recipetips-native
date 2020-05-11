import React, { useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { LOG_IN } from '../../querys/login.query';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { loginInitialValues } from './loginForm.initialValues';
import { loginFormSchema } from './loginForm.schema';
import { ILoginData } from './loginForm.types';
import { Alert } from 'react-native';

export const LoginForm = () => {
  const [logIn, { data, error, loading }] = useLazyQuery(LOG_IN);
  useEffect(() => {}, [data]);
  useEffect(() => {
    if (error && error.message != '')
      Alert.alert(error.message.split(':')[1].split('-')[0]);
  }, [error]);
  return (
    <Formik
      onSubmit={(dataForm: ILoginData) => {
        const user = { email: dataForm.user, password: dataForm.password };
        logIn({ variables: { user } });
      }}
      initialValues={loginInitialValues}
      validationSchema={loginFormSchema}
    >
      {({ handleSubmit, errors, handleChange, setFieldTouched, values }) => (
        <>
          <Input
            placeholder="Nombre de Usuario"
            leftIcon={<Icon name="user" />}
            value={values.user}
            errorMessage={errors.user}
            onChangeText={handleChange('user')}
            onBlur={() => setFieldTouched('user')}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" />}
            value={values.password}
            errorMessage={errors.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
          />
          <Button
            title="Entrar"
            loading={loading}
            type="solid"
            buttonStyle={{ justifyContent: 'center', width: 1000 }}
            onPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
};
