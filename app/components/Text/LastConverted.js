import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';

const LastConverted = ({date, base, quote, conversionRate}) => (
    <View>
        <Text style={styles.smallText}>
            1 {base} = {conversionRate} {quote} as of  {moment(date).format('MMM D, YYYY')}
        </Text>
    </View>
);


LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
};

export default LastConverted;