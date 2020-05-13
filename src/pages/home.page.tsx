import React, { useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { Text, View, SafeAreaView, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';

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
      <Text>Hello madafacka</Text>
      </ScrollView>
  );
};

