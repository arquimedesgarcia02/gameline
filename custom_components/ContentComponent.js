import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styles from "../styles/Styles";
import { UserModalOptions } from "./ModalButtons";

const dataEmAlta = [
    {
        id: "04",
        title: "CS GO: CAMPEONATO",
        time1: "INTZ",
        time2: "C4 GAMING",
    },
    {
        id: "05",
        title: "LOL: CAMPEONATO",
        time1: "RED CANIDS",
        time2: "VIVO",
    },
    {
        id: "06",
        title: "LOL: CAMPEONATO",
        time1: "Cloud",
        time2: "Flamengo",
    },
]

export const ContentHorizontal = (props) =>{
    const {title, onPress} = props;
    return(
        
        <View style={{marginBottom: 10}}>
            <View style={styles.rowHorizontal}>
                <Text style={styles.titleHorizontalComponent}>{title}</Text>
                <UserModalOptions
                    title={"Ver Mais"}
                    style={styles.buttonGreen}
                    textStyle={styles.userLabelText}
                />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} overScrollMode="never">
                {
                    dataEmAlta.map(objeto =>{
                        return(
                            <Pressable onPress={onPress}>
                                <Card style={styles.cardContent}>
                                    <Text style={styles.title}>{objeto.title}</Text>
                                    <View style={styles.rowHorizontal}>
                                        <Text>{objeto.time1}</Text>
                                        <Text>X</Text>
                                        <Text>{objeto.time2}</Text>
                                    </View>                            
                                </Card>
                            </Pressable>
                            
                        )
                    })
                }
             </ScrollView>
        </View>
        
    );
}