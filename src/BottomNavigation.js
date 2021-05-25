import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Components
import Search from './components/Search/Search';
import Fav from './components/Fav/Fav';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="ShortForm"
      activeColor="#EB3B5D"
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarLabel: 'Fav',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-star" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

