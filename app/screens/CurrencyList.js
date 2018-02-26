import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, FlatList, View, StatusBar} from 'react-native';

// redux things
import {connect} from 'react-redux';
import {changeBaseCurrency, changeQuoteCurrency} from '../Actions/currencies';

// my components
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator'
import currencies from '../Data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';
class CurrencyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    }
    handlePress = (currency) => {
        const {type} = this.props.navigation.state.params;
        if(type==='base'){
            // dispatch change base
            this.props.dispatch(changeBaseCurrency(currency))
        } else if (type==='quote'){
            // dispatch change quote
            this.props.dispatch(changeQuoteCurrency(currency))
        }
        this.props.navigation.goBack(null);
    }
    render() {
        let comparisonCurrency = this.props.baseCurrency;
        if(this.props.navigation.state.params.type ==='quote'){
            comparisonCurrency = this.props.quoteCurrency;
        }
        return(
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content" translucent={false}/>
                <FlatList
                data={currencies}
                renderItem={({item})=>(
                    <ListItem 
                    text={item}
                    selected={item===comparisonCurrency} 
                    onPress={() => this.handlePress(item)}
                    iconBackground={this.props.primaryColor} />
                )}
                keyExtractor={item=> item}
                ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.themes.primaryColor,
    }
}

export default connect(mapSateToProps)(CurrencyList);