import React, { useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { CustomHeader } from '../components/header/header';

import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_DESPENSA } from '../mutations/createDespensa.mutation';
import { Card, Text } from 'react-native-elements';
import { CreateDespensaForm } from '../components/createDespensaForm/createDespensaForm';
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
  const createDespensa = useMutation(CREATE_DESPENSA);
  const toogleModal = () => setShowModal(!showModal);
  return (
    <View style={styles.wrapper}>
      <Modal isVisible={showModal} onBackdropPress={toogleModal}>
        <View style={{ flex: 1 }}>
          <Card>
            <Text h3>Agregar despensa</Text>
            <CreateDespensaForm />
          </Card>
        </View>
      </Modal>
      <CustomHeader navigation={navigation} />
      <View style={styles.content}>
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
