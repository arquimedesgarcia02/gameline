import * as React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
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
      justifyContent: 'center',
      marginLeft: 120,
  
    },
    card: {
      backgroundColor: '#e5e5e5',
      alignItems: "center",
      width: 180,
      height: 142,
      margin: 5,
      borderRadius: 15,
  
    },
    cardPub:{
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
        marginTop: '50%',
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
    },
    logo:{
      width: '25%',
      height: '100%',
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
      borderRadius: 20,
      elevation: 3,
      backgroundColor: '#14D97D',
    },
    buttonReg: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      elevation: 3,
      marginHorizontal: 12,
      backgroundColor: '#14D97D',
    },
    buttonRed:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      elevation: 3,
      marginHorizontal: 12,
      backgroundColor: '#D90000',
    },
    textButttonLogin: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    textButttonReg: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    registration:{
      display: 'flex',
      paddingTop: Constants.statusBarHeight,
      alignItems: 'center',
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: Constants.statusBarHeight,
      marginBottom: 5,
      
    },
    headerRow:{
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 10,
      marginLeft: '14%',
    },
    userModal:{
      height: '75%',
      width: '100%',
      marginBottom: -20,
      marginTop: 'auto',
      paddingHorizontal: 10,
      paddingTop: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: '#ffffff'
      
    },
    userLabel:{
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection:'row',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderRadius: 14,
      elevation: 3,
      margin: 5,
      backgroundColor: '#14D97D',
    },
    userLabelText:{
      color: '#ffffff',
      fontSize: 20,
      fontWeight: '700',
    },
    userLabelTextBlack:{
      color: '#000',
      fontSize: 20,
      fontWeight: '700',
    },
    buttonClose:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderRadius: 14,
      elevation: 3,
      marginHorizontal: 12,
      marginTop: 15,
      backgroundColor: '#DEDEDE',
    },
    buttonExit:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderRadius: 14,
      elevation: 3,
      marginHorizontal: 12,
      marginTop: 15,
      backgroundColor: '#D90000',
    },
    titleHorizontalComponent: {
      textAlign: 'left',
      fontWeight: '500',
      fontSize: 22,
    },
    textHorizontalComponent:{
      fontSize: 16,
      color: '#000000',
      marginLeft: 20,
    },
    buttonGreen:{
      padding: 8,
      margin: 5,
      borderRadius: 20,
      backgroundColor: '#14D97D',
    },
    rowHorizontal:{
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 8,
    },
    cardContent:{
      backgroundColor: '#e5e5e5',
      alignItems: "center",
      justifyContent: 'center',
      width: 280,
      height: 190,
      paddingBottom: 10,
      margin: 5,
      borderRadius: 20,
    },
    titleContent: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent: "center",
    },
    
});

export default styles;