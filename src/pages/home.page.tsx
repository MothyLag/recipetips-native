import React, { useState, useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { CustomHeader } from '../components/header/header';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useQuery } from '@apollo/react-hooks';
import { Card, Text } from 'react-native-elements';
import { CreateDespensaForm } from '../components/createDespensaForm/createDespensaForm';
import { GET_USER_DESPENSAS } from '../querys/getDespensas.query';
interface INavigationDrawer extends NavigationProp<any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface IHomeProps {
  navigation: INavigationDrawer;
}

const screenWidth = Math.round(Dimensions.get('window').width);
export const HomePage = ({ navigation }: IHomeProps) => {
  const [showModal, setShowModal] = useState(false);
  const { loading, data, refetch } = useQuery(GET_USER_DESPENSAS);
  const toogleModal = () => setShowModal(!showModal);
  if (loading) return <Text>Cargando...</Text>;
  return (
    <View style={styles.wrapper}>
      <Modal isVisible={showModal} onBackdropPress={toogleModal}>
        <View style={{ flex: 1 }}>
          <Card>
            <Text h3>Agregar despensa</Text>
            <CreateDespensaForm setModal={setShowModal} refetch={refetch} />
          </Card>
        </View>
      </Modal>
      <CustomHeader navigation={navigation} />
      <View style={styles.content}>
        {data.getUserDespensas.map((despensa: any, index: number) => {
          return (
            <TouchableOpacity style={styles.addCard}>
              <View>
                <Text h4 style={{ color: 'white' }}>
                  {despensa.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={styles.addCard} onPress={toogleModal}>
          <View>
            <Icon name="plus" size={50} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    justifyContent: 'center'
  },
  content: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    width: screenWidth / 3 - 11,
    height: screenWidth / 3 - 11,
    margin: 5
  },
  addCard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 3 - 11,
    height: screenWidth / 3 - 11,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 1,
    margin: 5
  }
});
