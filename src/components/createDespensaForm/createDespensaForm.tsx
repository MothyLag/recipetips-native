import React, { useState } from 'react';
import { Input, Button, SearchBar, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { createDespensaValues } from './createDespensaForm.initialValues';
import { createDespensaFormSchema } from './createDespensaForm.schema';
import { ICreateDespensaData } from './createDespensaForm.types';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { SEARCH_INGREDIENTS } from '../../querys/getIngredientsByName.query';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Alert, TouchableOpacity, View } from 'react-native';

export const CreateDespensaForm = () => {
  const [searchText, setSearchText] = useState('');
  const [showItemList, setShowItemList] = useState(false);
  const [searchIngredients, { error, data, loading }] = useLazyQuery(
    SEARCH_INGREDIENTS
  );

  interface IIngredient {
    _id: string;
    name: string;
    standardPrice: number;
    description: string;
  }

  return (
    <Formik
      onSubmit={(dataForm: ICreateDespensaData) => {
        const despensa = { name: dataForm.name, items: dataForm.items };
      }}
      initialValues={createDespensaValues}
      validationSchema={createDespensaFormSchema}
    >
      {({ handleSubmit, errors, handleChange, setFieldTouched, values }) => (
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
              if (newText) setShowItemList(true);
              else setShowItemList(false);
            }}
          />
          {showItemList && data != null ? (
            <ScrollView style={styles.dropMenu}>
              {data.getIngredientByName.length > 0 ? (
                data.getIngredientByName.map((ingredient: IIngredient) => {
                  return (
                    <TouchableOpacity
                      style={styles.dropItem}
                      onPress={() => Alert.alert(ingredient.name)}
                    >
                      <Text>{ingredient.name}</Text>
                    </TouchableOpacity>
                  );
                })
              ) : (
                <View style={styles.dropItem}>
                  <Text>No se encontró ninguna coincidencia</Text>
                </View>
              )}
              <TouchableOpacity style={styles.dropItem}>
                <Icon name="plus" color="grey" />
                <Text style={{ marginLeft: 10 }}>Crear ingrediente</Text>
              </TouchableOpacity>
            </ScrollView>
          ) : null}

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
    borderRadius: 2,
    marginBottom: 5,
    maxHeight: 200
  },
  dropItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#e3e3e3',
    height: 40
  },
  itemName: {},
  itemDescription: {}
});
