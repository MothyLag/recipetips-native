import React, { useState } from 'react';
import { Input, Button, SearchBar, Text, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import { createDespensaValues } from './createDespensaForm.initialValues';
import { createDespensaFormSchema } from './createDespensaForm.schema';
import { ICreateDespensaData, IDespensaItem } from './createDespensaForm.types';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { SEARCH_INGREDIENTS } from '../../querys/getIngredientsByName.query';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacity, View, ToastAndroid } from 'react-native';
import Modal from 'react-native-modal';
import { AddIngredientForm } from '../addIngredientForm/addIngredientForm';
import { CREATE_DESPENSA } from '../../mutations/createDespensa.mutation';

export const CreateDespensaForm = (props: any) => {
  const { setModal, refetch } = props;
  const [searchText, setSearchText] = useState('');
  const [showItemList, setShowItemList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchIngredients, { data, loading }] = useLazyQuery(
    SEARCH_INGREDIENTS
  );
  const [createDespensa, { loading: loadingCreate }] = useMutation(
    CREATE_DESPENSA
  );
  const toogleModal = () => setShowModal(!showModal);

  interface IIngredient {
    _id: string;
    name: string;
    standardPrice: number;
    description: string;
  }

  return (
    <Formik
      onSubmit={(dataForm: ICreateDespensaData) => {
        const despensa = {
          name: dataForm.name,
          items: dataForm.items.map(item => {
            delete item.name;
            return item;
          })
        };
        createDespensa({ variables: { despensa } })
          .then(res => {
            ToastAndroid.show('Despensa creada con éxito', 2000);
            refetch();
            setModal(false);
          })
          .catch(error => {
            console.log(error.message);
            ToastAndroid.show(
              'Ocurrió un error al intentar crear la despensa',
              2000
            );
          });
      }}
      initialValues={createDespensaValues}
      validationSchema={createDespensaFormSchema}
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
          <Modal isVisible={showModal} onBackdropPress={toogleModal}>
            <View style={{ flex: 1 }}>
              <Card>
                <Text h3>Agregar ingrediente</Text>
                <AddIngredientForm setShowModal={setShowModal} />
              </Card>
            </View>
          </Modal>
          <Input
            label="Nombre de la despensa"
            placeholder="Nombre de la despensa"
            leftIcon={<Icon name="user" color="white" size={20} />}
            value={values.name}
            errorMessage={errors.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
          />
          {values.items.map((item, index) => {
            return (
              <View
                key={`${index}despensaItem`}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text>{item.quantity}</Text>
                  <Text>{item.unit}</Text>
                </View>
              </View>
            );
          })}
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
                data.getIngredientByName.map(
                  (ingredient: IIngredient, index: number) => {
                    return (
                      <TouchableOpacity
                        key={`${index}menuitem`}
                        style={styles.dropItem}
                        onPress={() => {
                          const newItem = {
                            ingredientID: ingredient._id,
                            name: ingredient.name,
                            quantity: 0,
                            unit: 'gr'
                          } as IDespensaItem;
                          let auxArray = values.items.map(item => item);
                          auxArray.push(newItem);
                          setFieldValue('items', auxArray);
                        }}
                      >
                        <Text>{ingredient.name}</Text>
                      </TouchableOpacity>
                    );
                  }
                )
              ) : (
                <View style={styles.dropItem}>
                  <Text>No se encontró ninguna coincidencia</Text>
                </View>
              )}
              <TouchableOpacity style={styles.dropItem} onPress={toogleModal}>
                <Icon name="plus" color="grey" />
                <Text style={{ marginLeft: 10 }}>Crear ingrediente</Text>
              </TouchableOpacity>
            </ScrollView>
          ) : null}

          <Button
            title="Entrar"
            type="solid"
            onPress={handleSubmit}
            loading={loadingCreate}
          />
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
