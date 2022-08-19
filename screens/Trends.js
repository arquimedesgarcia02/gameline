import * as React from 'react';
import { View, Text } from 'react-native';
import { ContentHorizontal } from '../custom_components/ContentComponent';
import { Card } from 'react-native-paper';
import styles from '../styles/Styles';

const TrendsScreen =({navigation}) =>{
    
    return (
        <View style={styles.container}>
            <Card style={styles.cardPub}>
                <Text style={{textAlign: "center"}}>PUBLICIDADE</Text>
            </Card>
            <ContentHorizontal
                title={"PRINCIPAIS EM ALTA"}
                
            />
            <ContentHorizontal
                title={"MAIS EM ALTA "}
            />
        </View>
    )
}

export default TrendsScreen;