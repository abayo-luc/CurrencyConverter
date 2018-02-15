import React, {Component} from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import TextInputWithButton from '../components/TextInput/TextInputWithButton';
import ClearButton from '../components/Button/ClearButton';
import Lastconverted from '../components/Text/LastConverted';
import {Header} from '../components/Header';
const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handldePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote')
  };
  handleTextChange = (text) => {
    console.log('change text', text);
  };
  handleSwapCurrency = () => {
    console.log('pressed reverse currency');
  }
  handleOptionsPress = () => {
    console.log('handle options press')
  }
  render (){
    return(
    <Container>
      <StatusBar transucent={false} barStyle="light-content"/>
      <Header onPress={this.handleOptionsPress}/>
      <KeyboardAvoidingView behavior="padding">
        <Logo/>
        <TextInputWithButton 
          buttonText={TEMP_BASE_CURRENCY} 
          onPress={this.handldePressBaseCurrency} 
          defaultValue={TEMP_BASE_PRICE} 
          keyboardType="numeric"
          onChangeText={this.handleTextChange}/>
        <TextInputWithButton 
          buttonText={TEMP_QUOTE_CURRENCY} 
          onPress={this.handlePressQuoteCurrency} 
          editable={false}
          value={TEMP_QUOTE_PRICE}/>
        <Lastconverted date={TEMP_CONVERSION_DATE} 
          base={TEMP_BASE_CURRENCY} 
          quote={TEMP_QUOTE_CURRENCY} 
          conversionRate={TEMP_CONVERSION_RATE}/>
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency}/>
      </KeyboardAvoidingView>
    </Container>
    );
  }
}

export default Home;