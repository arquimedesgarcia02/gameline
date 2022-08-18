import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styles from "../styles/Styles";
import { UserModalOptions } from "./ModalButtons";

const dataAoVivo = [
    {
        id: "01",
        title: "CS GO: CAMPEONATO",
        time1: "INTZ",
        time2: "C4 GAMING",
    },
    {
        id: "02",
        title: "LOL: CAMPEONATO",
        time1: "RED CANIDS",
        time2: "VIVO",
    },
    {
        id: "03",
        title: "LOL: CAMPEONATO",
        time1: "Cloud",
        time2: "Flamengo",
    },
]

const dataEmAlta = [
    {
        id: "01",
        title: "CS GO: CAMPEONATO",
        time1: "INTZ",
        time2: "C4 GAMING",
    },
    {
        id: "02",
        title: "LOL: CAMPEONATO",
        time1: "RED CANIDS",
        time2: "VIVO",
    },
    {
        id: "03",
        title: "LOL: CAMPEONATO",
        time1: "Cloud",
        time2: "Flamengo",
    },
]

export const ContentLiveHorizontal = (props) =>{
    const {title} = props;
    return(
        <View>
            <View style={styles.rowButtons}>
                <Text style={styles.titleHorizontalComponent}>{title}</Text>
                <UserModalOptions
                    title={"Ver Mais"}
                    style={styles.buttonReg}
                    textStyle={styles.userLabelText}
                />
            </View>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} overScrollMode="never">
                {
                    dataAoVivo.map(objeto =>{
                        return(
                            <Card style={styles.card}>
                                <Text style={styles.textHorizontalComponent}>{objeto.title}</Text>
                                <View style={styles.rowButtons}>
                                    <Text>{objeto.time1}</Text>
                                    <Text>  X  </Text>
                                    <Text>{objeto.time2}</Text>
                                </View>                            
                            </Card>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

export const ContentTrendsHorizontal = () =>{

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} overScrollMode="never">
            {
                dataAoVivo.map(objeto =>{
                    return(
                        <Card style={styles.card}>
                            <Text style={styles.title}>{objeto.title}</Text>
                            <View style={styles.rowButtons}>
                                <Text>{objeto.time1}</Text>
                                <Text>{objeto.time2}</Text>
                            </View>                            
                        </Card>
                    )
                })
            }
        </ScrollView>
    );
}