import React, {useEffect} from 'react';
import GitRepsApp from './GitRepsApp';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    return () => {};
  }, []);
  return <GitRepsApp />;
};

export default App;
