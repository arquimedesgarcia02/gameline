import * as React from "react";
import { Text, View, Image } from 'react-native';
import styles from "../styles/Styles";

const HeaderComponent = () =>{
    return (
        <View style={styles.header}>
          <Text style={styles.title}> Logo </Text>

          <View style={styles.row}>
            <View style={styles.usertext}>
              <Text>NomeUsuario</Text>
              <Text>Saldo: R$1.99</Text>
            </View>

            <View>
              <Image
                  source={{
                  uri: 'https://www.nicepng.com/png/full/128-1280406_user-icon-png.png',
                  }}
                  style={{ width: 40, height: 40, marginLeft: 10}}
              />
            </View>
          </View>

      </View>
    )
};

export default HeaderComponent;