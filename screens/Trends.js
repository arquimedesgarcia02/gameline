const TrendsScreen =({navigation}) =>{
    // Função que renderiza items na lista:
    const renderItem = ({ item }) => (
        <Item title={item.title} />
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
                    />
        
                    <Button
                    title="Ao Vivo"
                    />
        
                </View>
            
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} overScrollMode="never">
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
    )
}

export default TrendsScreen;