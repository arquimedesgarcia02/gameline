import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { UserModalOptions } from '../custom_components/ModalButtons'
import HeaderComponent from '../custom_components/Header';
import styles from '../styles/Styles';

export default function BetScreen({route, navigation}){
    const {itemId} = route.params;
    
    return(
        <View style={styles.container}>
            <HeaderComponent onPress={() => navigation.navigate('Login')}/>

            <View style={styles.buttonReg}>
                <Text style={styles.userLabelText}>TITULO DA APOSTA</Text>
            </View>

            <View style={{alignItems: 'center', marginTop: 10}}>
                <Card style={styles.cardContent}>
                    <Text style={styles.title}>Titulo</Text>
                    <View style={styles.rowHorizontal}>
                        <Text>{itemId}</Text>
                        <Text>time1</Text>
                        <Text> X </Text>
                        <Text>time2</Text>
                    </View>
                </Card>
            </View>

            <View style={{marginHorizontal: 25, marginVertical: 15}}>
                <UserModalOptions
                    title={"CONFIRMAR APOSTA"}
                    style={styles.buttonReg}
                    textStyle={styles.userLabelText}
                    
                />
                
                <UserModalOptions
                    title={"Voltar"}
                    style={styles.buttonClose}
                    textStyle={styles.userLabelTextBlack}
                    onPress={() => navigation.goBack()}
                />
            </View>

        </View>
    );
}