import React, {useState} from 'react';
import { View, Text, Button, Pressable, Image} from 'react-native';
import Modal from "react-native-modal";
import styles from "../styles/Styles";

const UserModal = () =>{
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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
                        uri: 'https://www.nicepng.com/png/full/128-1280406_user-icon-png.png',
                        }}
                        style={{ width: 40, height: 40, marginLeft: 5,}}
                    />
                </View>
            </Pressable>

            <Modal isVisible={isModalVisible}>
                <View style={styles.userModal}>
                    <Text style={styles.title}>Hello!</Text>

                    <Button title="Fechar" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    );
}

export default UserModal;