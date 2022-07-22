import React from 'react';
import {Text,View,TextInput, Button} from 'react-native';
import styles from '../styles/Styles';

const LoginScreen =({navigation}) =>{
    return (
        <View style = {styles.container}>
            <Text>
                LOGIN
            </Text>
            <TextInput
             style={styles.input}
             placeholder = 'Username'
            />
            <TextInput
             style={styles.input}
             placeholder = 'Password'
             secureTextEntry = {true}
            />
            <Button 
                title="Confirmar"
                onPress={() => navigation.navigate('Home')}
            />

            <View style={styles.footer}>
                <Text>Ainda não tem uma conta?</Text>
                
                <Button 
                    title="Cadastrar-se"
                    onPress={() => navigation.navigate('Registration')}                
                />

            </View>

        </View>
    )
}

export default LoginScreen;