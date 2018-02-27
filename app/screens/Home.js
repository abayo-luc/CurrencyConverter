import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StatusBar, KeyboardAvoidingView} from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import TextInputWithButton from '../components/TextInput/TextInputWithButton';
import ClearButton from '../components/Button/ClearButton';
import LastConverted from '../components/Text/LastConverted';
import {Header} from '../components/Header';
import connectAlert from '../components/Alert/ConnectAlert';
import {swapCurrency, changeCurrencyAmount, getInitialConversion} from '../Actions/currencies';

class Home extends Component {
  static propTypes ={
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
    currencyError: PropTypes.string,
  };

  componentWillMount() {
      this.props.dispatch(getInitialConversion());
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.currencyError && nextProps.currencyError !== this.props.currencyError){
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }
  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency', type: 'base'});
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency', type:'quote'});
  };
  handleTextChange = (amount) => {
    // to connect this with redux use this.props.dispatch(then function)
    this.props.dispatch(changeCurrencyAmount(amount));
  };
  handleSwapCurrency = () => {
    // to connect this with redox use this.props.dispatch
    this.props.dispatch(swapCurrency());
  }
  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  }
  render (){
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    
    if(this.props.isFetching) {
      quotePrice = '...';
    };
    return(
    <Container backgroundColor= {this.props.primaryColor}>
      <StatusBar transucent={false} barStyle="light-content"/>
      <Header onPress={this.handleOptionsPress}/>
      <KeyboardAvoidingView behavior="padding">
        <Logo tintColor = {this.props.primaryColor}/>
        <TextInputWithButton 
          buttonText={this.props.baseCurrency} 
          onPress={this.handlePressBaseCurrency} 
          defaultValue={this.props.amount.toString()} 
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
          textColor={this.props.primaryColor}/>
        <TextInputWithButton 
          buttonText={this.props.quoteCurrency} 
          onPress={this.handlePressQuoteCurrency} 
          editable={false}
          value={quotePrice}
          textColor={this.props.primaryColor}/>
        <LastConverted date={this.props.lastConvertedDate} 
          base={this.props.baseCurrency} 
          quote={this.props.quoteCurrency} 
          conversionRate={this.props.conversionRate}/>
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency}/>
      </KeyboardAvoidingView>
    </Container>
    );
  }
}
const mpaStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return{
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.themes.primaryColor,
    currencyError: state.currencies.error
  };
}
export default connect(mpaStateToProps)(connectAlert(Home));