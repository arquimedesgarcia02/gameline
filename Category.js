import {React} from 'react';
import { Text, View, Button, ScrollView, FlatList } from 'react-native';
import styles from '../styles/Styles';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// constante CATEGORIAS(Array) de items da lista:
const CATEGORIAS = [
    {
        id: '001',
        title: 'jogo',
    },
    {
        id: '002',
        title: 'jogo',
    },
    {
        id: '003',
        title: 'jogo',
    },
    {
        id: '004',
        title: 'jogo',
    },
    {
        id: '005',
        title: 'jogo',
    },
    {
        id: '006',
        title: 'jogo',
    },
]

// Componente Item:
const Item = ({ title }) => (
    <Card style={styles.categoryItem}>
        <Text>{title}</Text>
    </Card>
);

const CategoryScreen =({navigation}) =>{
    // Função que renderiza items na lista:
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>

            
          
                <View style={styles.categories}>
                    <View style={styles.label}>
                        <Text style={styles.title}> JOGO </Text>
                    </View>
        
                    <FlatList
                    data={CATEGORIAS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    />
        
                </View>
    
       
  
      </View>
    )
}

export default CategoryScreen