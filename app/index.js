import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider, connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';
// import CurrencyList from './screens/CurrencyList';
// import Home from './screens/Home';
// import Options from './screens/Options';
// import Themes from './screens/Themes';
import Navigator from './config/routes';
import AlertProvider from './components/Alert/AlertProvider';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#008D90',
  $primaryPurple: '#9E768F',
  $white: '#ffffff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
});
const App = ({dispatch, nav}) => (
  <Navigator navigation={addNavigationHelpers({
    dispatch,
    state: nav,
  })}/>
);

const mapStateToProps = (state) =>({
  nav: state.nav,
})

const AppWithNavigation = connect(mapStateToProps)(App)
export default () =>(
  <Provider store={store}>
    <AlertProvider>
      <AppWithNavigation/>
    </AlertProvider>
  </Provider>
);
