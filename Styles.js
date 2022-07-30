import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#fff',
      padding: 8,
    },
    title: {
      margin: 25,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: "center",
    },
    row: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
  
    },
    rowButtons: {
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 25,
    },
    usertext: {
      alignItems: 'center',
  
    },
    card: {
      backgroundColor: '#e5e5e5',
      alignItems: "center",
      width: 180,
      height: 142,
      margin: 5,
      paddingTop: 10,
      borderRadius: 15,
  
    },
    cardPub:{
      marginTop: 0, 
      width: '100%', 
      height:100,
      backgroundColor: '#e5e5e5',
    },
    cardCat:{
      backgroundColor: '#e5e5e5',
      alignItems: "center",
      width: 164,
      height: 142,
      marginLeft: 10,
      marginBottom: 20,
  
    },
    categories:{
      padding: 8,
      marginBottom: Constants.statusBarHeight,
    },
    input: {
        width: 250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    footer: {
        marginTop: 50,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    circle:{
        backgroundColor: '#d5d5d5',
        height: 64,
        width: 64,
        borderRadius: 50,
        padding: 14,
        marginRight: 10,

    },

    categoryItem:{
      margin: 10, 
      width: '100%', 
      height:100,
      backgroundColor: '#e5e5e5',

    }
  
});

export default styles;