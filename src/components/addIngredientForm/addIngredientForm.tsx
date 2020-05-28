import React from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { Formik } from 'formik';
import { addIngredientInitialValues } from './addIngredientForm.initialValues';
import { addIngredientSchema } from './addIngredientForm.schema';
import { IAddIngredientData } from './addIngredientForm.types';
import InputSpinner from 'react-native-input-spinner';
import { useMutation } from '@apollo/react-hooks';
import { ADD_INGREDIENT } from '../../mutations/addIngredient.mutation';
import { ToastAndroid } from 'react-native';

export const AddIngredientForm = (props: any) => {
  const { setShowModal } = props;
  const [createIngredient, { loading }] = useMutation(ADD_INGREDIENT);
  return (
    <Formik
      onSubmit={(ingredient: IAddIngredientData) => {
        createIngredient({ variables: { ingredient } })
          .then((res: any) => {
            console.log(res.data.createIngredient.name);
            ToastAndroid.show(
              `${res.data.createIngredient.name} agregado`,
              1000
            );
            setShowModal(false);
          })
          .catch(error => {
            console.log(error);
            ToastAndroid.show(`${ingredient.name} no se pudo agregar`, 1000);
          });
      }}
      initialValues={addIngredientInitialValues}
      validationSchema={addIngredientSchema}
    >
      {({
        handleSubmit,
        errors,
        handleChange,
        setFieldTouched,
        values,
        setFieldValue
      }) => (
        <>
          <Input
            placeholder="Nombre del Ingrediente"
            value={values.name}
            errorMessage={errors.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />
          <Text>Precio estimado</Text>
          <InputSpinner
            rounded={false}
            type={'float'}
            step={0.5}
            value={values.standardPrice}
            onChange={(number: number) =>
              setFieldValue('standardPrice', number)
            }
          />
          <Input
            multiline={true}
            label="Descripción breve"
            numberOfLines={3}
            placeholder="Descripción breve"
            value={values.description}
            errorMessage={errors.description}
            onChangeText={handleChange('description')}
            onBlur={() => setFieldTouched('description')}
          />
          <Button
            title="Entrar"
            type="solid"
            onPress={handleSubmit}
            loading={loading}
          />
        </>
      )}
    </Formik>
  );
};
