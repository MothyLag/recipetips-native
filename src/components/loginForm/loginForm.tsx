import React from 'react';
import { Input, Button } from 'react-native-elements';
import { useQuery } from '@apollo/react-hooks';
import { GET_DOGS } from '../../querys/login.query';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoginForm = () => {
  const { data, error } = useQuery(GET_DOGS);
  return (
    <>
      <Input placeholder="Nombre de Usuario" leftIcon={<Icon name="user" />} />
      <Input
        placeholder="Contraseña"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" />}
      />
      <Button
        title="Entrar"
        type="solid"
        buttonStyle={{ justifyContent: 'center', width: 1000 }}
        onPress={() => console.log(data.greet)}
      />
    </>
  );
};
