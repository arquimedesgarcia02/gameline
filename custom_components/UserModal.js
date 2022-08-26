import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView,} from 'react-native';
import Modal from "react-native-modal";
import { Card } from 'react-native-paper';
import styles from "../styles/Styles";
import { UserLabel, UserModalButton, UserModalOptions} from './ModalButtons';
import { usuario } from '../data/DataUsuarios';
import { apostas, deposito, saque } from '../data/DataBets';

const UserModal = (props) =>{
    const {modalOnPress} = props

    const [isModalVisible, setModalVisible] = useState(false);
    const [depositVisible, setDepositVisible] = useState(false);
    const [withdrawVisible, setWithdrawVisible] = useState(false);
    const [accountVisible, setAccountVisible] = useState(false);

    const [valorSaque, setValorSaque] = useState('');
    const [valorDeposito, setValorDeposito] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleDeposit = () => {
        setDepositVisible(!depositVisible);
    };

    const toggleWithdraw = () => {
        setWithdrawVisible(!withdrawVisible);
    };

    const toggleAccount = () => {
        setAccountVisible(!accountVisible);
    };

    return (
        <View>
            <Pressable onPress={()=> toggleModal()} style={styles.headerRow}>
                <View style={styles.usertext}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>{usuario.nome}</Text>
                    <Text>Saldo: R${usuario.saldo}</Text>
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
                        userName={usuario.nome}
                        wallet={`${usuario.saldo}`}
                    />
                    <UserModalButton
                        title={"DEPOSITAR"}
                        icon={"https://img.icons8.com/ios-glyphs/60/FFFFFF/money-bag.png"}
                        onPress={() => toggleDeposit()}
                    />
                    <UserModalButton
                        title={"SACAR"}
                        icon={"https://img.icons8.com/material-outlined/48/FFFFFF/money--v1.png"}
                        onPress={() => toggleWithdraw()}
                    />
                    <UserModalButton
                        title={"MINHA CONTA"}
                        icon={"https://img.icons8.com/material-outlined/48/FFFFFF/engineering.png"}
                        onPress={() => toggleAccount()}
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
                            onPress={modalOnPress}
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
                            value={valorDeposito}
                            onChangeText={setValorDeposito}
                            keyboardType={'numeric'}
                        />
                    </View>

                    <UserModalOptions
                        textStyle={styles.userLabelText}
                        style={styles.buttonReg}
                        onPress={() => deposito(usuario.saldo, valorDeposito, usuario.id)}
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
            
            <Modal isVisible={withdrawVisible}>
                <View style={styles.userModal}>
                    <UserModalButton
                        title={"SACAR"}
                        icon={"https://img.icons8.com/material-outlined/48/FFFFFF/money--v1.png"}
                    />

                    <View style={{alignItems: 'center', marginBottom: '25%', marginTop: '5%'}}>
                        <Text style={{fontSize: 16, fontWeight: '700'}}>O SAQUE É FEITO PARA SUA CONTA PIX JÁ REGISTRADA!</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder = 'DIGITE O VALOR DO SAQUE'
                            keyboardType={'number-pad'}
                            value={valorSaque}
                            onChangeText={setValorSaque}
                        />

                        <Text style={{fontSize: 16, fontWeight: '700'}}>O SAQUE DEVE SER MENOR QUE SEU SALDO ATUAL. SALDO: R$xx.xx</Text>
                    </View>

                    <UserModalOptions
                        style={styles.buttonReg}
                        textStyle={styles.userLabelText}
                        title={"SACAR AGORA"}
                        onPress={()=> saque(usuario.saldo, valorSaque, usuario.id)}
                    />

                    <UserModalOptions
                        style={styles.buttonClose}
                        textStyle={styles.userLabelTextBlack}
                        onPress={() => setWithdrawVisible(false)}
                        title={"FECHAR"}
                    />
                </View>
            </Modal>

            <Modal isVisible={accountVisible}>
                <View style={styles.userModal}>
                    <UserModalButton
                        title={"MINHA CONTA"}
                        icon={"https://img.icons8.com/material-outlined/48/FFFFFF/engineering.png"}
                    />

                    <View style={styles.userLabel}>
                        <Text style={styles.userLabelText}>Informações do Usuario</Text>
                    </View>

                    <View style={{alignItems: 'flex-start', justifyContent:'center', marginHorizontal: 15}}>
                        <Text style={styles.userLabelTextBlack}>Usuario: {usuario.nome}</Text>
                        <Text style={styles.userLabelTextBlack}>Saldo: R$ {usuario.saldo}</Text>
                        <Text style={styles.userLabelTextBlack}>Chave Pix: {usuario.chavepix}</Text>
                    </View>

                    <View style={styles.userLabel}>
                        <Text style={styles.userLabelText}>Apostas</Text>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
                        {
                            apostas.map(objeto =>{
                                return(
                                    <View style={{alignItems: 'center', marginTop: 5,}}>
                                        <Card style={styles.cardPub}>
                                            <Text>dados da aposta: </Text>
                                            <Text>{objeto.horarioAposta}</Text>
                                            <Text>{objeto.placar1}x{objeto.placar2}</Text>
                                            <Text>{objeto.resultado ? "ganhou":"perdeu"}</Text>
                                            <Text>{objeto.status ? "em curso": "partida finalizada"}</Text>
                                        </Card>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    
                    <UserModalOptions
                        style={styles.buttonClose}
                        textStyle={styles.userLabelTextBlack}
                        onPress={() => setAccountVisible(false)}
                        title={"FECHAR"}
                    />
                </View>
            </Modal>

        </View>
    );
}

export default UserModal;