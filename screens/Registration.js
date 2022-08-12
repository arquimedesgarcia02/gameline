import * as React from "react" 
import {Text, TextInput, View, Image} from 'react-native';
import Button from "../styled_components/ButtonLogin"
import { Camera, CameraType } from 'expo-camera'
import styles from "../styles/Styles";

const RegistrationScreen =({navigation, route}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    style={{width: 64, height: 64}}
                    source={require('../images/gameline_logo.png')}
                />
                <Text style={styles.textLogin}> CADASTRE-SE </Text>
            </View>
            
            <View style={styles.row}>
                <Image
                    style={{width: 64, height: 64}}
                    source={{
                        uri: 'https://img.icons8.com/material-outlined/48/000000/camera--v2.png',
                    }}
                />

                <View>
                    <Button 
                        title="GALERIA"
                        onPress={()=>{alert('olá')}}
                    />
                </View>
                
            </View>
            <View style={styles.registration}>
                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SEU NOME DE USUARIO'
                />

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SEU CPF'
                />

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE A SUA CHAVE PIX'
                />             

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SUA SENHA'
                    secureTextEntry = {true}
                />

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SUA SENHA NOVAMENTE'
                    secureTextEntry = {true}
                />

                <Button
                    title='Cancelar'
                    onPress={() => navigation.navigate('Login')}
                />
                {/* gambiarra VVV concertar posteriormente */}
                <View style={{margin: 10}}>
                    <Button
                        title='Confirmar'
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                
                

            </View>
            
        </View>
       
    )
}

export default RegistrationScreen;