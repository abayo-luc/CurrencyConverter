import React from 'react';
import PropTypes from 'prop-types'
import {Image, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Header = ({onPress}) =>(
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image  style={styles.icon} source={require('./images/gear.png')}/>
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: PropTypes.func,
};

export default Header;