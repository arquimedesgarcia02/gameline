import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { Card } from 'react-native-paper';
import styles from "../styles/Styles";
import { CATEGORIAS } from "../data/DataCategories";

// Componente Item:
const Item = ({ title, icon}) => (
    <Card style={styles.cardCat}>
        <Text style={{textAlign: "center", fontWeight: "600",}}>{title}</Text>
        <Image
            source={{uri: icon}}
            style={{height: 90, width:128}}
        />
    </Card>
);

const CategoriesComponent = () => {
    // Função que renderiza items na lista:
    const renderItem = ({ item, icon}) => (
        <Item title={item.title} icon={item.icon}/>
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