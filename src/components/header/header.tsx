import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
interface INavigationDrawer extends NavigationProp<any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}
interface IHeaderProps {
  navigation: INavigationDrawer;
}
export const CustomHeader = ({ navigation }: IHeaderProps) => {
  return (
    <Header
      backgroundColor="#8fe5da"
      containerStyle={{ display: 'flex', alignItems: 'center' }}
      leftComponent={
        <Icon
          name={'bars'}
          size={30}
          color="white"
          onPress={() => navigation.openDrawer()}
        />
      }
    />
  );
};
