import React from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const SignUpForm = () => {
  return (
    <>
      <Input placeholder="Nombre de Usuario" leftIcon={<Icon name="user" />} />
      <Input
        placeholder="Correo electronico"
        leftIcon={<Icon name="envelope" />}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" />}
      />
      <Input
        placeholder="Repita su contraseña"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" />}
      />
      <Button
        title="Entrar"
        type="solid"
        buttonStyle={{ justifyContent: 'center' }}
      />
    </>
  );
};
