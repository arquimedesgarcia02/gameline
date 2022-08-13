import * as React from 'react';
import { Text, Pressable } from "react-native";
import styles from "../styles/Styles";

export default function ButtonLogin(props) {
 
const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={styles.buttonLogin} onPress={onPress}>
            <Text style={styles.textButttonLogin}>{title}</Text>
        </Pressable>
    );
}