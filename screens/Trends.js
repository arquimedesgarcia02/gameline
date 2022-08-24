import * as React from 'react';
import { ScrollView, View} from 'react-native';
import { ContentHorizontal } from '../custom_components/ContentComponent';
import AdComponent from '../custom_components/AdComponent';
import { UserModalOptions } from '../custom_components/ModalButtons';
import styles from '../styles/Styles';
import dataEmAlta from '../data/DataTrends';
import HeaderComponent from '../custom_components/Header';

const TrendsScreen =({navigation}) =>{
    
    return (
        <View style={styles.container}>
            <HeaderComponent onPress={() => navigation.navigate('Login')}/>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                
                
                <AdComponent/>

                <ContentHorizontal
                    title={"PRINCIPAIS EM ALTA"}
                    data={dataEmAlta}
                />
                <ContentHorizontal
                    title={"MAIS EM ALTA "}
                    data={dataEmAlta}
                />

                <View style={{marginHorizontal: 25, marginVertical: 15}}>
                    <UserModalOptions
                        title={"Voltar"}
                        style={styles.buttonReg}
                        textStyle={styles.userLabelText}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </ScrollView>
        </View>
    
    )
}

export default TrendsScreen;