import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import ButtonLogin from '../custom_components/ButtonLogin';
import styles from '../styles/Styles';

export default function BetScreen({navigation, route}){
    return(
        <View style={styles.container}>
            <ButtonLogin
                title={"NOME DA APOSTA"}
            />

            <View style={{alignItems: 'center', marginTop: 10}}>
                <Card style={styles.cardContent}>
                    <Text style={styles.title}>Titulo</Text>
                    <View style={styles.rowHorizontal}>
                        <Text>time1</Text>
                        <Text> X </Text>
                        <Text>time2</Text>
                    </View>                            
                </Card>
            </View>
            

        </View>
    );
}