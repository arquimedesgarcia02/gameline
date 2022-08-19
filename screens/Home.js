import * as React from 'react';
import { Text, View, Button, ScrollView, FlatList } from 'react-native';
import styles from '../styles/Styles';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { ContentHorizontal } from '../custom_components/ContentComponent';

// constante CATEGORIAS(Array) de items da lista:
const CATEGORIAS = [
    {
        id: '001',
        title: 'Categoria',
    },
    {
        id: '002',
        title: 'Categoria',
    },
    {
        id: '003',
        title: 'Categoria',
    },
    {
        id: '004',
        title: 'Categoria',
    },
    {
        id: '005',
        title: 'Categoria',
    },
    {
        id: '006',
        title: 'Categoria',
    },
]

// Componente Item:
const Item = ({ title }) => (
    <Card style={styles.cardCat}>
        <Text>{title}</Text>
    </Card>
);

const HomeScreen =({navigation}) =>{
    // Função que renderiza items na lista:
    const renderItem = ({ item }) => (
        <Item title={item.title}/>
    );

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                <Card style={styles.cardPub}>
                    <Text style={{textAlign: "center"}}>PUBLICIDADE</Text>
        
                </Card>
            
                <View style={styles.rowButtons}>
                    <Button
                        title="Em Alta"
                        onPress={() => navigation.navigate('Trends')}
                    />
        
                    <Button
                        title="Ao Vivo"
                        onPress={() => navigation.navigate('Live')}
                    />
        
                </View>
            
                <ContentHorizontal
                    title={"EM ALTA"}
                    onPress={()=>{navigation.navigate('Aposta')}}
                />

                <View style={styles.categories}>
                    <View style={styles.label}>
                        <Text style={styles.title}> CATEGORIAS </Text>
                    </View>
        
                    <FlatList
                        data={CATEGORIAS}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
        
                </View>
    
            </ScrollView>

      </View>
    )
}

export default HomeScreen;