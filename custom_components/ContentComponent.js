import React from "react";
import { Pressable, ScrollView, Text, View, Image} from "react-native";
import { Card } from "react-native-paper";
import styles from "../styles/Styles";
import { UserModalOptions } from "./ModalButtons";

export const ContentHorizontal = (props) =>{
    const {title, onPress, buttonOnPress, data} = props;
    
    return(
        
        <View style={{marginBottom: 10}}>
            <View style={styles.rowHorizontal}>
                <Text style={styles.titleHorizontalComponent}>{title}</Text>
                <UserModalOptions
                    title={"Ver Mais"}
                    style={styles.buttonGreen}
                    textStyle={styles.userLabelText}
                    onPress={buttonOnPress}
                />
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} overScrollMode="never">
                {
                    data.map(objeto =>{

                        return (
                            <Pressable onPress={onPress}>
                                <Card style={styles.cardContent}>
                                    <Text style={styles.titleContent}>{objeto.title}</Text>
                                    <View style={styles.rowHorizontal}>
                                        <Image
                                            source={{uri: objeto.time1}}
                                            style={styles.teamLogo}
                                        />
                                        <Text style={{fontSize: 20}}> X </Text>
                                        <Image
                                            source={{uri: objeto.time2}}
                                            style={styles.teamLogo}
                                        />
                                    </View>                            
                                </Card>
                            </Pressable>
                            
                        );
                    })
                }

             </ScrollView>
        </View>
        
    );
}