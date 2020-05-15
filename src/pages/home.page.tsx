import React, { useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { CustomHeader } from '../components/header/header';
import { Card } from 'react-native-elements';
import Modal from 'react-native-modal';

import Icon from 'react-native-vector-icons/FontAwesome';

interface INavigationDrawer extends NavigationProp<any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface IHomeProps {
  navigation: INavigationDrawer;
}

const screenWidth = Math.round(Dimensions.get('window').width);
export const HomePage = ({ navigation }: IHomeProps) => {
  return (
    <View style={styles.wrapper}>
      <CustomHeader navigation={navigation} />
      <View style={styles.content}>
        <Card containerStyle={styles.addCard}>
          <Icon
            name="plus"
            size={50}
            color="white"
            onPress={() => Alert.alert('hola')}
          />
        </Card>
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
