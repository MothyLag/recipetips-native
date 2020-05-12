import React, { useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Text, View, SafeAreaView } from 'react-native';

interface INavigationDrawer extends NavigationProp<any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface IHomeProps {
  navigation: INavigationDrawer;
}

export const HomePage = ({ navigation }: IHomeProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hola</Text>
      </View>
    </SafeAreaView>
  );
};
