import * as React from 'react';
import { Text, Pressable } from "react-native";
import styles from "../styles/Styles";

export default function ButtonReg(props) {
 
const { onPress, title = 'Save', style, textStyle } = props;
    return (
        <Pressable style={style} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
}