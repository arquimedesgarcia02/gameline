import React from 'react';
import {Text,View,TextInput, Button, Image} from 'react-native';
import styles from '../styles/Styles';

const LoginScreen =({navigation}) =>{
    return (
        <View style = {styles.login}>
            
            <View style={styles.row}>
                <Image
                    style={styles.logo}
                    source={
                        require('../images/gameline_logo.png')
                    }
                />
                <Text style={styles.textLogin}>LOGIN</Text>
            </View>
            

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
                color={'#10D07B'}
                onPress={() => navigation.navigate('Home')}
            />

            <View style={styles.footer}>
                <Text>Ainda não tem uma conta?</Text>
                
                <Button 
                    title="Cadastrar-se"
                    color={'#10D07B'}
                    onPress={() => navigation.navigate('Registration')}                
                />

            </View>

        </View>
    )
}

export default LoginScreen;