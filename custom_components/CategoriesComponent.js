import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from 'react-native-paper';
import styles from "../styles/Styles";
import { CATEGORIAS } from "../data/DataCategories";

// Componente Item:
const Item = ({ title }) => (
    <Card style={styles.cardCat}>
        <Text>{title}</Text>
    </Card>
);

const CategoriesComponent = () => {
    // Função que renderiza items na lista:
    const renderItem = ({ item }) => (
        <Item title={item.title}/>
    );

    return(
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
    )
}

export default CategoriesComponent;