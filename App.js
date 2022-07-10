import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


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

export default function App() {
  // Função que renderiza items na lista:
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}> Logo </Text>

        <View style={styles.row}>
          <View style={styles.usertext}>
            <Text>NomeUsuario</Text>
            <Text>Saldo: R$1.99</Text>
          </View>

          <View>
            <Image
              source={{
                uri: 'https://www.nicepng.com/png/full/128-1280406_user-icon-png.png',
              }}
              style={{ width: 40, height: 40, marginLeft: 10}}
            />
          </View>
        </View>

      </View>

      <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
        <Card style={styles.cardPub}>
          <Text style={{textAlign: "center"}}>PUBLICIDADE</Text>

        </Card>
      
        <View style={styles.rowButtons}>
          <Button
            title="Em Alta"
          />

          <Button
            title="Ao Vivo"
          />

        </View>
        
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          overScrollMode="never">
          <Card style={styles.card}>
            <Text>Card 1</Text>
          </Card>

          <Card style={styles.card}>
            <Text>Card 2</Text>
          </Card>

          <Card style={styles.card}>
            <Text>Card 3</Text>
          </Card>

        </ScrollView>

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
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  title: {
    margin: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: "center",
  },
  row: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  rowButtons: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
  },
  usertext: {
    alignItems: 'center',

  },
  card: {
    backgroundColor: '#e5e5e5',
    alignItems: "center",
    width: 180,
    height: 142,
    margin: 5,
    paddingTop: 10,
    borderRadius: 15,

  },
  cardPub:{
    marginTop: 25, 
    width: '100%', 
    height:100,
    backgroundColor: '#e5e5e5',
  },
  cardCat:{
    backgroundColor: '#e5e5e5',
    alignItems: "center",
    width: 164,
    height: 142,
    marginLeft: 10,
    marginBottom: 20,

  },
  categories:{
    justifyContent: 'center',
    padding: 8,
    marginBottom: Constants.statusBarHeight,
  },

});
