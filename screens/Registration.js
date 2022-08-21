import * as React from "react" 
import {Text, TextInput, View, Image} from 'react-native';
import { Camera, CameraType } from 'expo-camera'
import styles from "../styles/Styles";
import ButtonReg from "../custom_components/ButtonRegistration";

const RegistrationScreen =({navigation, route}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.registration}>
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
                    <ButtonReg
                        title={"ESCOLHER FOTO DA GALERIA"}
                        style={styles.buttonReg}
                        textStyle={styles.textButttonReg}
                    />
                    
                </View>

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

                <View style={styles.rowButtons}>
                    <ButtonReg
                        title={"CANCELAR"}
                        style={styles.buttonRed}
                        textStyle={styles.textButttonReg}
                        onPress={() => navigation.navigate('Login')}
                    />
                    <ButtonReg
                        title={"CONFIRMAR"}
                        style={styles.buttonReg}
                        textStyle={styles.textButttonReg}
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                
            </View>
            
        </View>
       
    )
}

export default RegistrationScreen;