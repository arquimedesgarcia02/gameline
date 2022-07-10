import * as React from "react" 
import {Text, TextInput, View, Button, ScrollView} from 'react-native';
import styles from "../styles/Styles";

const RegistrationScreen =({navigation, route}) =>{
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}> Cadastre-se </Text>

            
            <View style={styles.row}>
                <View style={styles.circle}>
                    <Text style={styles.text}> foto </Text>
                </View>

                <View>
                    <Button 
                        title="Abrir galeria"
                    />
                </View>
                
            </View>
            
            <TextInput
                style={styles.input}
                placeholder = 'Username'
            />

            <TextInput
                style={styles.input}
                placeholder = 'CPF:'
            />

            <TextInput
                style={styles.input}
                placeholder = 'Chave Pix:'
            />             

            <TextInput
                style={styles.input}
                placeholder = 'Password'
                secureTextEntry = {true}
            />

            <TextInput
                style={styles.input}
                placeholder = 'Check Password'
                secureTextEntry = {true}
            />

            <View style={styles.rowButtons}>
                <Button
                    title='Cancelar'
                />
                
                <Button
                    title='Confirmar'

                />
            </View>

        </ScrollView>
       
    )
}

export default RegistrationScreen;