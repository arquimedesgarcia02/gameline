import * as React from 'react';
import { View } from 'react-native';
import { ContentTrendsHorizontal } from '../custom_components/ContentComponent';
import styles from '../styles/Styles';

const TrendsScreen =({navigation}) =>{
    
    return (
        <View style={styles.container}>
            <ContentTrendsHorizontal
                title={"Principais em Alta"}
            />
        </View>
    )
}

export default TrendsScreen;