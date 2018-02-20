import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StatusBar, Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ListItem from '../components/List/ListItem';
import Seperator from '../components/List/Separator';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
class Options extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    }
    handleThemesPress = () => {
        console.log('press themse')
        this.props.navigation.navigate('Themes');
    };
    handleSitePress = () => {
        console.log('press site');
        Linking.openURL('http://fixer.io').catch(()=> alert('An Error Accured'));

    };

    render(){
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem
                text="Themes"
                onPress={this.handleThemesPress}
                customIcon={
                    <Ionicons name="ios-arrow-forward" color={ICON_COLOR} size={ICON_SIZE}/>
                }/>
                <Seperator/>
                <ListItem 
                text="Fixer.io"
                onPress={this.handleSitePress}
                customIcon={
                    <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE}/>
                }/>
                <Seperator/>
            </ScrollView>
        );
    }
};

export default Options;