import React, { useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import { useLazyQuery } from '@apollo/react-hooks';
import { LOG_IN } from '../../querys/login.query';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { loginInitialValues } from './loginForm.initialValues';
import { loginFormSchema } from './loginForm.schema';
import { ILoginData } from './loginForm.types';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { ACTION_LOG_IN } from '../../utils/actions.consts';

export const LoginForm = () => {
  const [logIn, { data, error, loading }] = useLazyQuery(LOG_IN);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data != undefined) {
      AsyncStorage.setItem('token', data.login.token);
      dispatch({ type: ACTION_LOG_IN });
    }
  }, [data]);
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
            placeholderTextColor="white"
            leftIcon={<Icon name="user" color="white" size={20} />}
            inputStyle={{ color: 'white', fontSize: 20 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: 10,
              width: 400,
              height: 50,
              margin: 5
            }}
            value={values.user}
            errorMessage={errors.user}
            onChangeText={handleChange('user')}
            onBlur={() => setFieldTouched('user')}
          />
          <Input
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor="white"
            inputStyle={{ color: 'white', fontSize: 20 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            containerStyle={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: 10,
              width: 400,
              height: 50,
              margin: 5
            }}
            leftIcon={<Icon name="lock" color="white" size={20} />}
            value={values.password}
            errorMessage={errors.password}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
          />
          <Button
            title="Entrar"
            loading={loading}
            type="solid"
            containerStyle={{
              backgroundColor: '#4388D6',
              borderRadius: 10,
              height: 50,
              width: 100
            }}
            onPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
};
