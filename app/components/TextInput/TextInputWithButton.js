import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import styles from './styles';
import color from 'color';

const TextInputWithButton = (props) => {
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier,
      );
    
      const containerStyles = [styles.container];
      if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
      }
    
      const buttonTextStyles = [styles.buttonText];
      if (props.textColor) {
        buttonTextStyles.push({ color: props.textColor });
      }
    
      return (
        <View style={containerStyles}>
          <TouchableHighlight
            onPress={props.onPress}
            style={styles.buttonContainer}
            underlayColor={underlayColor}
          >
            <Text style={buttonTextStyles}>{props.buttonText}</Text>
          </TouchableHighlight>
          <View style={styles.separator} />
          <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    );
};


TextInputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,

}
export default TextInputWithButton;