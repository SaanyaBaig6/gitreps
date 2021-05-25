import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import AppContext from '../../context';

const Details = ({navigation}) => {

  const {navigationRedux, favRedux} = useContext(AppContext);
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
        centerElement: 'Repo Details'
      });
    };

  return (
    <>
      <Text>Details</Text>
    </>
  );
};

export default Details;
