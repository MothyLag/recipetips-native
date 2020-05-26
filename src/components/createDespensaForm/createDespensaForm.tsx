import React, { useEffect, useState } from 'react';
import { Input, Button, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { createDespensaValues } from './createDespensaForm.initialValues';
import { createDespensaFormSchema } from './createDespensaForm.schema';
import { ICreateDespensaData } from './createDespensaForm.types';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_INGREDIENTS } from '../../querys/getIngredientsByName.query';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';

export const CreateDespensaForm = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchIngredients, { error, data, loading }] = useLazyQuery(
    SEARCH_INGREDIENTS
  );
  return (
    <Formik
      onSubmit={(dataForm: ICreateDespensaData) => {
        const despensa = { name: dataForm.name, items: dataForm.items };
      }}
      initialValues={createDespensaValues}
      validationSchema={createDespensaFormSchema}
    >
      {({
        handleSubmit,
        errors,
        setFieldValue,
        handleChange,
        setFieldTouched,
        values
      }) => (
        <>
          <Input
            placeholder="Nombre de la despensa"
            leftIcon={<Icon name="user" color="white" size={20} />}
            value={values.name}
            errorMessage={errors.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />
          <SearchBar
            placeholder="Ingredientes"
            lightTheme={true}
            showLoading={loading}
            value={searchText}
            onChangeText={async newText => {
              await setSearchText(newText);
              await searchIngredients({ variables: { name: newText } });
            }}
            // onChangeText={() => {
            //   searchIngredients({ variables: { name: values.name } });
            //   //setFieldValue('items', ['hola']);
            // }}
          />
          <View style={styles.dropMenu}>
            <TouchableOpacity style={styles.dropItem}>
              <Text>Data1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropItem}>
              <Text>Data2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropItem}>
              <Icon name="plus" color="grey" />
              <Text>Crear ingrediente</Text>
            </TouchableOpacity>
          </View>

          <Button title="Entrar" type="solid" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  dropMenu: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 5,
    overflow: 'scroll'
  },
  dropItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40
  }
});
