import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function CancelArticle(props) {

    const [textInput,setTextInput] = useState('')

    function RecupInput(enteredText) {
        console.log(enteredText)
    }


  return (
    <Modal visible={props.visible}>
    <View style={styles.container}>
        <Text style={styles.title}>Retirer des articles</Text>
        <TextInput onChangeText={RecupInput} value={textInput}/>
        <Button title="Retirer" onPress={props.closeModal2}></Button>
        <Button title='Retourner à la liste' onPress={props.closeModal2}/>
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
})