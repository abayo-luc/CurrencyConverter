import React, {Component} from 'react';
import {Text, FlatList, View, StatusBar} from 'react-native';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator'
import currencies from '../Data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';
class CurrenyList extends Component {
    handlePress = () => {
        console.log('row press');
    }
    render() {
        return(
            <View style={{flex: 1, paddingTop: 30}}>
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