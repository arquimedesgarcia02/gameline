import * as React from 'react';
import { View } from 'react-native';
import { ContentLiveHorizontal } from '../custom_components/ContentComponent';
import styles from '../styles/Styles';

const LiveScreen =({navigation}) =>{

    return (
        <View style={styles.container}>
            <ContentLiveHorizontal
                title="PRINCIPAIS AO VIVO"
            />
        </View>
    )
}

export default LiveScreen;