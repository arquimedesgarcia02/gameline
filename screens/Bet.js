import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { UserModalOptions } from '../custom_components/ModalButtons'
import HeaderComponent from '../custom_components/Header';
import styles from '../styles/Styles';
import { apostar, getSelected } from '../data/DataBets';

export default function BetScreen({route, navigation}){
    const {itemId, itemTitle, itemTime1, itemTime2, placar1, placar2} = route.params;
    const [estilo1, setEstilo1] = useState(styles.buttonReg);
    const [estilo2, setEstilo2] = useState(styles.buttonReg);
    const [selected, setSelected] = useState()

    function selecionarPlacar1() {
        setEstilo1(styles.buttonRegBordered);
        setEstilo2(styles.buttonReg);
        getSelected(placar1, placar2, true, itemId);
    }

    function selecionarPlacar2() {
        setEstilo2(styles.buttonRegBordered);
        setEstilo1(styles.buttonReg);
        getSelected(placar2, placar1, true, itemId);
    }
    
    return(
        <View style={styles.container}>
            <HeaderComponent onPress={() => navigation.navigate('Login')}/>

            <View style={styles.buttonReg}>
                <Text style={styles.userLabelText}>{itemTitle}</Text>
            </View>

            <View style={{alignItems: 'center', marginTop: 10}}>
                <Text style={styles.title}>Clique em um dos botões para apostar em uma equipe</Text>
                <Card style={styles.cardContent}>
                    <View style={styles.rowHorizontal}>
                        <Image
                            source={{uri: itemTime1}}
                            style={styles.teamLogo}
                        />
                        <Text style={{fontSize: 16}}> X </Text>
                        <Image
                            source={{uri: itemTime2}}
                            style={styles.teamLogo}
                        />
                    </View>

                    <View style={styles.rowButtons}>
                        <UserModalOptions
                            title={placar1}
                            style={estilo1}
                            textStyle={styles.userLabelText}
                            onPress={() => selecionarPlacar1()}
                        />
                        <UserModalOptions
                            title={placar2}
                            style={estilo2}
                            textStyle={styles.userLabelText}
                            onPress={() => selecionarPlacar2()}
                        />
                    </View>
                </Card>
            </View>

            <Text style={styles.title}>Ao clicar o resultado será informado, e o dinheiro </Text>

            <View style={{marginHorizontal: 25, marginVertical: "0%"}}>
                
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