import React, {useContext, useReducer, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import StatusBar from './components/StatusBar';

//CONTEXTS
import AppContext from './context';
import NavigationContext from './context/navigation';
import SearchContext from './context/search';
import FavContext from './context/fav';

//REDUCERS
import navigationReducer from './reducer/navigation';
import searchReducer from './reducer/search';
import favReducer from './reducer/fav';

const AppState = {};

const App = () => {
  //navigation
  let initialState = useContext(NavigationContext);
  let [state, dispatch] = useReducer(navigationReducer, initialState);
  AppState.navigationRedux = {state, dispatch};
  //search
  initialState = useContext(SearchContext);
  [state, dispatch] = useReducer(searchReducer, initialState);
  AppState.searchRedux = {state, dispatch};
  //fav
  initialState = useContext(FavContext);
  [state, dispatch] = useReducer(favReducer, initialState);
  AppState.favRedux = {state, dispatch};

  console.log('AppState' + JSON.stringify(AppState));
  console.log('AppState2 ' + AppState);

  return (
    <AppContext.Provider value={AppState}>
      <NavigationContainer>
        <StatusBar />
        <BottomNavigation />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
