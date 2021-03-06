import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// redux things 
import {connect} from 'react-redux';
import {ChangePrimaryColor, changePrimaryColor} from '../Actions/themes';

import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
})

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
    }
    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color))
        this.props.navigation.goBack(null);
    }

    render(){
        return(
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem
                text="blue"
                onPress={() => this.handleThemePress(styles.$blue)}
                selected
                checkmark={false}
                iconBackground={styles.$blue}/>
                <Separator/>
                <ListItem
                text="Orange"
                onPress={()=>this.handleThemePress(styles.$orange)}
                selected
                checkmark={false}
                iconBackground={styles.$orange}/>
                <Separator/>
                <ListItem
                text="Green"
                onPress={()=>this.handleThemePress(styles.$green)}
                selected
                checkmark={false}
                iconBackground={styles.$green}/>
                <Separator/>
                <ListItem
                text="Purple"
                onPress={()=>this.handleThemePress(styles.$purple)}
                selected
                checkmark={false}
                iconBackground={styles.$purple}/>
                <Separator/>
            </ScrollView>
        )
    }
}


export default connect()(Themes);