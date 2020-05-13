import React, { useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Text, ScrollView } from 'react-native';
import { CustomHeader } from '../components/header/header';

interface INavigationDrawer extends NavigationProp<any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface IHomeProps {
  navigation: INavigationDrawer;
}

export const HomePage = ({ navigation }: IHomeProps) => {
  return (
    <ScrollView>
      <CustomHeader navigation={navigation} />
      <Text>Hello madafacka</Text>
    </ScrollView>
  );
};
