import React from "react";
import { View, Image, Text } from 'react-native';
import UserModal from "./UserModal";
import styles from "../styles/Styles";

const HeaderComponent = (props) =>{
    const {onPress} = props;
    return (
        <View style={styles.header}>
          
          <Image
            source={require('../images/gameline_logo.png')}
            style={{width: 50, height: 54, marginTop: 15}}
          />

          <UserModal
            modalOnPress={onPress}
          />

      </View>
    )
};

export default HeaderComponent;