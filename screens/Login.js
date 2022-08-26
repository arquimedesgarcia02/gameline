import * as React from 'react';
import {Text, View, TextInput,Image} from 'react-native';
import ButtonLogin from '../custom_components/ButtonLogin';
import { logar } from '../data/DataUsuarios';
import styles from '../styles/Styles';

const LoginScreen =({navigation}) =>{
    const [nome, setNome] = React.useState('');
    const [senha, setSenha] = React.useState('');

    async function handleSignIn(){
        if (nome === "" || senha === "") {
            alert("Todos os campos devem ser preenchidos!");
            return;
        } else if (await logar(nome, senha) === false) {
            alert("Suas credenciais estão erradas!");
            return;
        }else{
            await logar(nome, senha);
            navigation.navigate('Home');
            setNome("");
            setSenha("");
        }
        
    }

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
             value={nome}
             onChangeText={setNome}
             placeholder = 'DIGITE SEU NOME DE USUARIO'
            />
            <TextInput
             style={styles.input}
             placeholder = 'DIGITE SUA SENHA'
             value={senha}
             onChangeText={setSenha}
             secureTextEntry = {true}
            />
            <ButtonLogin
                title="CONFIRMAR"
                color={'#10D07B'}
                onPress={() => handleSignIn()}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>AINDA NÃO TEM UMA CONTA?</Text>
                
                <ButtonLogin 
                    title="CADASTRAR-SE"
                    onPress={() => navigation.navigate('Registration')}            
                />

            </View>

        </View>
    )
}

export default LoginScreen;