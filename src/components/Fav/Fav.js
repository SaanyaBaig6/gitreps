import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FavList from './FavList';

const Stack = createStackNavigator();

const Fav = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="FavList" component={FavList} />
    </Stack.Navigator>
  );
};

export default Fav;
