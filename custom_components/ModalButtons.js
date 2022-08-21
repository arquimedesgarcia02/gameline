import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/Styles";

export function UserLabel(props) {
    const {userName, wallet} = props;

    return (
        <View style={styles.userLabel}>
            <View>
                <Text style={styles.userLabelText}>Usuario: {userName}</Text>
                <Text style={styles.userLabelText}>R$: {wallet}</Text>
            </View>

            <View>
                <Image
                    source={{uri: "https://img.icons8.com/material/48/FFFFFF/user-male-circle--v1.png",}}
                    style={{width: 50, height: 50}}
                />
            </View>
            
        </View>
    )
}

export function UserModalButton(props){
    const {title="Botão", icon="", onPress} = props;
    
    return(
        <Pressable style={styles.userLabel} onPress={onPress}>
            <Text style={styles.userLabelText}>{title}</Text>
            <Image
                source={{uri: icon}}
                style={{width: 50, height:50}}
            />
        </Pressable>
    )
}

export function UserModalOptions(props) {
    const {title, style, textStyle, onPress} = props;

    return(
        <Pressable style={style} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    )
}