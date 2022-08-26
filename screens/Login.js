import * as React from 'react';
import {Text, View, TextInput,Image} from 'react-native';
import ButtonLogin from '../custom_components/ButtonLogin';
import { logar } from '../data/DataUsuarios';
import { UserModalOptions } from "../custom_components/ModalButtons";
import styles from '../styles/Styles';
import * as LocalAuthentication from 'expo-local-authentication';

const LoginScreen =({navigation}) =>{
    const [nome, setNome] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [digitalComp, setDigitalComp] = React.useState(false);
    
    React.useEffect(() => {
        (async ()=>{
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setDigitalComp(compatible)
        })();
    });
      
    const handleBiometricAuth = async () =>{
        const biometricalAv = await LocalAuthentication.hasHardwareAsync();

        let supportedBiometrics;
        if (biometricalAv) {
            supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

            const savedBiometrics = await LocalAuthentication.isEnrolledAsync();

            const biometricAuth = await LocalAuthentication.authenticateAsync({
                promptMessage: 'registrar sua digital',
                cancelLabel: 'cancelar',
                disableDeviceFallback: true,
            })

            if (biometricAuth) {
                alert('Login feito com a digital.')
            }
        }
    }

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

            <View style={{marginHorizontal: "10%", marginTop: "2%", padding: 0}}>
                <UserModalOptions
                    title="Login com digital"
                    onPress={() => handleBiometricAuth()}
                    style={styles.buttonGreen}
                    textStyle={styles.userLabelText}
                />
            </View>

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