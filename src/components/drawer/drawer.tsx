import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { ACTION_LOG_OUT } from '../../utils/actions.consts';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export const CustomDrawer = (props: any) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Hola</Text>
      <Button
        title="cerrar sesión"
        onPress={() => {
          AsyncStorage.removeItem('token');
          dispatch({ type: ACTION_LOG_OUT });
        }}
      />
    </View>
  );
};
