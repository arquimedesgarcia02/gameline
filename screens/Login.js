import React from 'react';
import {Text,View,TextInput, Image} from 'react-native';
import ButtonLogin from '../styled_components/ButtonLogin';
import Button from '../styled_components/ButtonLogin';
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
             placeholder = 'DIGITE SEU NOME DE USUARIO'
            />
            <TextInput
             style={styles.input}
             placeholder = 'DIGITE SUA SENHA'
             secureTextEntry = {true}
            />
            <ButtonLogin
                title="CONFIRMAR"
                color={'#10D07B'}
                onPress={() => navigation.navigate('Home')}
            />

            <View style={styles.footer}>
                <Text style={{textAlign: 'center', fontSize: 20,}}>AINDA NÃO TEM UMA CONTA?</Text>
                
                <ButtonLogin 
                    title="CADASTRAR-SE"
                    onPress={() => navigation.navigate('Registration')}                
                />

            </View>

        </View>
    )
}

export default LoginScreen;