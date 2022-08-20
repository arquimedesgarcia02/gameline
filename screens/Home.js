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

// Componente Item:
const Item = ({ title }) => (
    <Card style={styles.cardCat}>
        <Text>{title}</Text>
    </Card>
);


const HomeScreen =({navigation}) =>{
    const [componentTitle, setComponentTitle] = React.useState('EVENTOS EM ALTA');
    const [nav, setNav] = React.useState('Trends');

    const buttonActionLive = () =>{
        setComponentTitle('EVENTOS AO VIVO');
        setNav('Live');
    }

    const buttonActionTrends = () =>{
        setComponentTitle('EVENTOS EM ALTA');
        setNav('Trends');
    }
    
    // Função que renderiza items na lista:
    const renderItem = ({ item }) => (
        <Item title={item.title}/>
    );

    return (
        <View style={styles.container}>
            <HeaderComponent onPress={() => navigation.navigate('Login')}/>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                <AdComponent/>
            
                <View style={styles.rowButtons}>
                    <UserModalOptions
                        title={"EM ALTA"}
                        style={styles.buttonReg}
                        textStyle={styles.userLabelText}
                        onPress={() => buttonActionTrends()}
                    />
        
                    <UserModalOptions
                        title={"AO VIVO"}
                        style={styles.buttonReg}
                        textStyle={styles.userLabelText}
                        onPress={() => buttonActionLive()}
                    />
        
                </View>
            
                <ContentHorizontal
                    title={componentTitle}
                    onPress={()=>{navigation.navigate('Aposta', {itemID: "01"})}
                    }
                    buttonOnPress={()=>{navigation.navigate(nav)}}
                    data={dataEmAlta}
                />

                <View style={styles.categories}>
                    <View style={styles.buttonReg}>
                        <Text style={styles.userLabelText}> CATEGORIAS </Text>
                    </View>
        
                    <FlatList
                        data={CATEGORIAS}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        style={{marginTop: 25}}
                    />
        
                </View>
    
            </ScrollView>

      </View>
    )
}

export default HomeScreen;