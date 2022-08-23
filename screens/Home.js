import * as React from 'react';
import { Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../styles/Styles';
import { Card } from 'react-native-paper';
import { ContentHorizontal } from '../custom_components/ContentComponent';
import { UserModalOptions } from '../custom_components/ModalButtons';
import AdComponent from '../custom_components/AdComponent';
import dataEmAlta from '../data/DataTrends';
import { CATEGORIAS } from '../data/DataCategories';
import HeaderComponent from '../custom_components/Header';
import dataAoVivo from '../data/DataLive';
import CategoriesComponent from '../custom_components/CategoriesComponent';

const HomeScreen =({navigation}) =>{
    const [componentTitle, setComponentTitle] = React.useState('EVENTOS EM ALTA');
    const [nav, setNav] = React.useState('Trends');
    const [estiloEmAlta, setEstiloEmAlta] = React.useState(styles.buttonReg);
    const [estiloAoVivo, setEstiloAoVivo] = React.useState(styles.buttonReg);
    const [data, setData] = React.useState(dataEmAlta);

    const buttonActionLive = () =>{
        setComponentTitle('EVENTOS AO VIVO');
        setNav('Live');
        setData(dataAoVivo)
        setEstiloAoVivo(styles.buttonRegBordered)
        setEstiloEmAlta(styles.buttonReg)
    }

    const buttonActionTrends = () =>{
        setComponentTitle('EVENTOS EM ALTA');
        setNav('Trends');
        setData(dataEmAlta)
        setEstiloEmAlta(styles.buttonRegBordered)
        setEstiloAoVivo(styles.buttonReg)
    }

    return (
        <View style={styles.container}>
            <HeaderComponent onPress={() => navigation.navigate('Login')}/>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                <AdComponent/>
            
                <View style={styles.rowButtons}>
                    <UserModalOptions
                        title={"EM ALTA"}
                        style={estiloEmAlta}
                        textStyle={styles.userLabelText}
                        onPress={() => buttonActionTrends()}
                    />
        
                    <UserModalOptions
                        title={"AO VIVO"}
                        style={estiloAoVivo}
                        textStyle={styles.userLabelText}
                        onPress={() => buttonActionLive()}
                    />
        
                </View>
            
                <ContentHorizontal
                    title={componentTitle}
                    onPress={()=>{navigation.navigate('Bet', {itemId: "01"})}
                    }
                    buttonOnPress={()=>{navigation.navigate(nav)}}
                    data={data}
                />

                <CategoriesComponent/>
    
            </ScrollView>

      </View>
    )
}

export default HomeScreen;