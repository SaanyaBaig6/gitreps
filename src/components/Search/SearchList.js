import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import AppContext from '../../context';

const SearchList = ({navigation}) => {
  const {navigationRedux, stateRedux} = useContext(AppContext);
  const navigationDispatch = navigationRedux.dispatch;

  useEffect(() => {
    setHeaders();
    return () => {};
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => setHeaders());
    return () => unsubscribe;
  }, [navigation]);

    const setHeaders = () => {
      navigationDispatch({
        type: 'SET_HEADER',
        centerElement: 'Search'
      });
    };

  return (
    <>
      <Text>SearchList</Text>
    </>
  );
};

export default SearchList;
