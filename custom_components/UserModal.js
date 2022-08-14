import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image,} from 'react-native';
import Modal from "react-native-modal";
import styles from "../styles/Styles";
import { UserLabel, UserModalButton, UserModalOptions} from './ModalButtons';

const UserModal = () =>{
    const [isModalVisible, setModalVisible] = useState(false);
    const [depositVisible, setDepositVisible] = useState(false);
    const [withdrawVisible, setWithdrawVisible] = useState(false);
    const [accountVisible, setAccountVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleDeposit = () => {
        setDepositVisible(!depositVisible);
    };

    return (
        <View>
            <Pressable onPress={()=> toggleModal()} style={styles.headerRow}>
                <View style={styles.usertext}>
                    <Text>NomeUsuario</Text>
                    <Text>Saldo: R$1.99</Text>
                </View>

                <View>
                    <Image
                        source={{
                        uri: 'https://img.icons8.com/material/96/1A1A1A/user-male-circle--v1.png',
                        }}
                        style={{ width: 50, height: 54, marginLeft: 10,}}
                    />
                </View>
            </Pressable>

            <Modal isVisible={isModalVisible}  onBackdropPress={() => setModalVisible(false)}>
                <View style={styles.userModal}>
                    <UserLabel
                        userName={"Usuario"}
                        wallet={"1.50"}
                    />
                    <UserModalButton
                        title={"DEPOSITAR"}
                        icon={"https://img.icons8.com/ios-glyphs/60/FFFFFF/money-bag.png"}
                        onPress={() => toggleDeposit()}
                    />
                    <UserModalButton
                        title={"SACAR"}
                        icon={"https://img.icons8.com/material-outlined/48/FFFFFF/money--v1.png"}
                        onPress={() => alert('indo pra tela de saque')}
                    />
                    <UserModalButton
                        title={"MINHA CONTA"}
                        icon={"https://img.icons8.com/material-outlined/48/FFFFFF/engineering.png"}
                        onPress={() => alert('indo pra tela da sua conta')}
                    />

                    <View style={styles.rowButtons}>
                        <UserModalOptions
                            style={styles.buttonClose}
                            textStyle={styles.userLabelTextBlack}
                            onPress={() => setModalVisible(false)}
                            title={"FECHAR"}
                        />

                        <UserModalOptions
                            style={styles.buttonExit}
                            textStyle={styles.userLabelText}
                            onPress={() => alert('saindo da conta')}
                            title={"SAIR"}
                        />
                    </View>
                    
                </View>
            </Modal>

            <Modal isVisible={depositVisible}>
                <View style={styles.userModal}>
                    <UserModalButton
                        title={"DEPOSITAR"}
                        icon={"https://img.icons8.com/ios-glyphs/60/FFFFFF/money-bag.png"}
                    />
                    
                    <View style={{alignItems: 'center', marginBottom: '25%', marginTop: '5%'}}>
                        <Text style={{fontSize: 16, fontWeight: '700'}}>O DEPOSITO É FEITO COM SUA CHAVE PIX JÁ REGISTRADA!</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder = 'DIGITE O VALOR DO DEPOSITO'
                        />
                    </View>

                    <UserModalOptions
                        textStyle={styles.userLabelText}
                        style={styles.userLabel}
                        onPress={() => alert('Deposito Confirmado!')}
                        title={"CONFRIMAR"}
                    />
                    
                    <UserModalOptions
                        style={styles.buttonClose}
                        textStyle={styles.userLabelTextBlack}
                        onPress={() => setDepositVisible(false)}
                        title={"FECHAR"}
                    />
                </View>
            </Modal>


        </View>
    );
}

export default UserModal;