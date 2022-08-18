import React from 'react';
import { View } from 'react-native';
import ButtonLogin from '../custom_components/ButtonLogin';
import styles from '../styles/Styles';

const BetScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <ButtonLogin
                title={"Aposta"}
            />
        </View>
    );
}