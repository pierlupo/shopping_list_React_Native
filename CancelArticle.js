import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function CancelArticle(props) {

    const [textInput,setTextInput] = useState('')

    function RecupInput(enteredText) {
        console.log(enteredText)
        setTextInput(enteredText)
    }


  return (
    <Modal visible={props.visible}>
    <View style={styles.container}>
        <Text style={styles.title}>Retirer des articles</Text>
        <TextInput style={styles.textInput} placeholder="Retirer un article..." onChangeText={RecupInput} value={textInput}/>
        <View style={styles.btnContainer}>
    <View style={styles.btn}>
        <Button title="Retirer" onPress={props.closeModal2}></Button>
    </View>
    <View style={styles.btn}>
        <Button title='Retourner à la liste' onPress={props.closeModal2}></Button>
    </View>
        </View>
    </View>
</Modal>
  )
}

const styles = StyleSheet.create({

    title: {
        fontSize : 35,
        textAlign: "center"
    },
    container: {
        backgroundColor: '#96ADC8',
        flex: 1,
      },
    btnContainer:{
        marginTop:5,
        marginBottom:5,
        padding: 5,
        },
    textInput:{
      borderWidth: 1,
      borderColor: "black",
      width: "80%",
      borderRadius: 4,
      margin: 10,
    },
    btn: {
      marginTop:5,
    }
})