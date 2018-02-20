import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, FlatList, View, StatusBar} from 'react-native';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator'
import currencies from '../Data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';
class CurrenyList extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handlePress = () => {
        console.log('row press');
        this.props.navigation.goBack(null);
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content" translucent={false}/>
                <FlatList
                data={currencies}
                renderItem={({item})=>(
                    <ListItem 
                    text={item}
                    selected={item===TEMP_CURRENT_CURRENCY} 
                    onPress={this.handlePress}/>
                )}
                keyExtractor={item=> item}
                ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

export default CurrenyList;