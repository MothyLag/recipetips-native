import React, { useEffect } from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { signUpSchema } from './signUp.schema';
import DatePicker from 'react-native-datepicker';
import { signUpInitialValues } from './signUp.initialValues';
import { ISignUpData } from './signUp.types';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../mutations/createUser.mutation';
import { Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
import { ACTION_LOG_IN } from '../../utils/actions.consts';

export const SignUpForm = () => {
  const [addUser, { loading, data, error }] = useMutation(ADD_USER);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data != undefined) {
      AsyncStorage.setItem('token', data.createUser.token);
      dispatch({ type: ACTION_LOG_IN });
    }
  }, [data]);
  useEffect(() => {
    console.log(error);
    if (error && error.message != '') Alert.alert(error.message.split(':')[1]);
  }, [error]);
  return (
    <Formik
      initialValues={signUpInitialValues}
      onSubmit={(dataForm: ISignUpData) => {
        const newUser = {
          userName: dataForm.userName,
          password: dataForm.password,
          email: dataForm.email
        };
        addUser({
          variables: { user: { ...newUser } }
        }).catch(error => Alert.alert(error.message.split(':')[1]));
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
            placeholder="Nombre"
            leftIcon={<Icon name="user" />}
            errorMessage={errors.name}
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />
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
          <Text>Fecha de Nacimiento</Text>
          <DatePicker
            date={values.birthDay}
            format="DD-MM-YYYY"
            onDateChange={handleChange('birthDay')}
            placeholder="cual es tu fecha de nacimiento?"
          />
          <Input
            placeholder="Ocupación"
            leftIcon={<Icon name="user" />}
            errorMessage={errors.occupation}
            value={values.occupation}
            onChangeText={handleChange('occupation')}
            onBlur={() => setFieldTouched('occupation')}
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
            loading={loading}
          />
        </>
      )}
    </Formik>
  );
};
