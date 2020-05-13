import React, { useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { ScrollView, View, StyleSheet } from 'react-native';
import { CustomHeader } from '../components/header/header';
import { Text, colors } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface INavigationDrawer extends NavigationProp<any> {
  openDrawer: () => void;
  closeDrawer: () => void;
}

interface IHomeProps {
  navigation: INavigationDrawer;
}

export const HomePage = ({ navigation }: IHomeProps) => {
  return (
    <View style={styles.srcollView}>
      <CustomHeader navigation={navigation} />
      {[].length < 1 ? (
        <View style={styles.emptyItems}>
          <Text h4 style={{ color: 'grey' }}>
            No tienes ninguna Despensa
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  srcollView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyItems: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
