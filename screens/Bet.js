import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { UserModalOptions } from '../custom_components/ModalButtons'
import HeaderComponent from '../custom_components/Header';
import styles from '../styles/Styles';

export default function BetScreen({route, navigation}){
    const {itemId, itemTitle, itemTime1, itemTime2} = route.params;
    
    return(
        <View style={styles.container}>
            <HeaderComponent onPress={() => navigation.navigate('Login')}/>

            <View style={styles.buttonReg}>
                <Text style={styles.userLabelText}>{itemTitle}</Text>
            </View>

            <View style={{alignItems: 'center', marginTop: 10}}>
                <Card style={styles.cardContent}>
                    <View style={styles.rowHorizontal}>
                        <Image
                            source={{uri: itemTime1}}
                            style={styles.teamLogo}
                        />
                        <Text style={{fontSize: 20}}> X </Text>
                        <Image
                            source={{uri: itemTime2}}
                            style={styles.teamLogo}
                        />
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
                    title={"VOLTAR"}
                    style={styles.buttonClose}
                    textStyle={styles.userLabelTextBlack}
                    onPress={() => navigation.goBack()}
                />
            </View>

        </View>
    );
}