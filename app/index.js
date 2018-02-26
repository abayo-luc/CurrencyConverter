import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import CurrencyList from './screens/CurrencyList';
// import Home from './screens/Home';
// import Options from './screens/Options';
// import Themes from './screens/Themes';
import Navigator from './config/routes';
import AlertProvider from './components/Alert/AlertProvider';

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

export default () =><AlertProvider><Navigator/></AlertProvider>;
