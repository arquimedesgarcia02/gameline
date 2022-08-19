import * as React from 'react';
import { View, Text } from 'react-native';
import { ContentHorizontal } from '../custom_components/ContentComponent';
import { Card } from 'react-native-paper';
import styles from '../styles/Styles';

const LiveScreen =({navigation}) =>{

    return (
        <View style={styles.container}>
            <Card style={styles.cardPub}>
                <Text style={{textAlign: "center"}}>PUBLICIDADE</Text>
            </Card>
            <ContentHorizontal
                title="PRINCIPAIS AO VIVO"
            />

            <ContentHorizontal
                title="MAIS AO VIVO"
            />
        </View>
    )
}

export default LiveScreen;