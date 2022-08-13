import * as React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      marginLeft: 120,
  
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
        width: '85%',
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    footer: {
        marginTop: '70%',
    },
    footerText: {
      textAlign: 'center', 
      fontSize: 20, 
      margin: 5,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    textLogin: {
      fontSize: 40,
      fontWeight: 'bold',

    },
    login:{
      alignItems: 'center',
      padding: 8,
      paddingTop: '20%',
      marginTop: Constants.statusBarHeight,
    },
    logo:{
      width: '25%',
      height: '200%',
      marginTop: 50,
      marginBottom: 50,
    },
    circle:{
        backgroundColor: '#d5d5d5',
        height: 64,
        width: 64,
        borderRadius: 50,
        padding: 14,
        marginRight: 10,

    },
    buttonLogin: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 120,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#14D97D',
    },
    textButttonLogin: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    registration:{
      display: 'flex',
      padding: 10,
      alignItems: 'center',
      margin: 10,
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
});

export default styles;