import * as React from 'react';
import { Image } from 'react-native';

export default function AdComponent(){
    return(
        <Image
            style={{width: '100%', height: 90, marginHorizontal: 0, marginBottom: 15, marginTop: 0}}
            source={require('../images/publicidade.png')}
        />
    )
}