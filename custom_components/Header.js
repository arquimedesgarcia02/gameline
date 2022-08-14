import React from "react";
import { View, Image } from 'react-native';
import UserModal from "./UserModal";
import styles from "../styles/Styles";

const HeaderComponent = () =>{
    return (
        <View style={styles.header}>
          <Image
            source={require('../images/gameline_logo.png')}
            style={{width: 60, height: 64}}
          />

          <UserModal/>

      </View>
    )
};

export default HeaderComponent;