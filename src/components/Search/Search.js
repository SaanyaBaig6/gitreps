import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchList from './SearchList';
import Details from '../Details/Details';

const Stack = createStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SearchList" component={SearchList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Search;
