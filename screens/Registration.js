import React, { useState } from "react" 
import {Text, TextInput, View, Image} from 'react-native';
import { Camera, CameraType } from 'expo-camera'
import styles from "../styles/Styles";
import ButtonReg from "../custom_components/ButtonRegistration";
import { cadastrar } from "../data/DataUsuarios";

const RegistrationScreen =({navigation}) =>{
    const [nomeUsuario, setNomeUsusario] = useState('');
    const [cpf, setCpf] = useState('');
    const [chavePix, setChavePix] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    function handleSignIn(){
        if (nomeUsuario === "" || cpf === "" || chavePix === "" || senha === "") {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }
        else if (senha !== confirmaSenha) {
            alert("A senha não foi confirmada corretamente!")
            return;
        } else {
            confirmarCadastro();
        }
        
    }

    function confirmarCadastro(){
        cadastrar(nomeUsuario, cpf, chavePix, senha);
        alert("Cadastro feito com sucesso");
        navigation.navigate('Login');
    }

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
                    value={nomeUsuario}
                    onChangeText={setNomeUsusario}
                />

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SEU CPF'
                    value={cpf}
                    onChangeText={setCpf}
                />

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE A SUA CHAVE PIX'
                    value={chavePix}
                    onChangeText={setChavePix}
                />             

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SUA SENHA'
                    secureTextEntry = {true}
                    value={senha}
                    onChangeText={setSenha}
                />

                <TextInput
                    style={styles.input}
                    placeholder = 'DIGITE SUA SENHA NOVAMENTE'
                    secureTextEntry = {true}
                    value={confirmaSenha}
                    onChangeText={setConfirmaSenha}
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
                        onPress={()=> handleSignIn()}
                    />
                </View>
                
            </View>
            
        </View>
       
    )
}

export default RegistrationScreen;