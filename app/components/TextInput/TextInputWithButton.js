import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import styles from './styles';
import color from 'color';

const TextInputWithButton = (props) => {
    const {onPress, buttonText, editable=true} = props;
    const underlayColor = 'rgba(0, 0, 0, 0.1)';
    const containerStyles = [styles.container];
    if(editable === false) {
        containerStyles.push(styles.containerDisabled);
    };
   return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props}/>
        </View>
    )
};


TextInputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool

}
export default TextInputWithButton;