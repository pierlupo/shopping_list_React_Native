import { StyleSheet, Text, View, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function AddArticle(props) {

    const [textInput,setTextInput] = useState('')

    function RecupInput(enteredText) {
        console.log(enteredText)
    }

  return (
    <Modal visible={props.visible}>
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter des articles</Text>
            <TextInput onChangeText={RecupInput} value={textInput}/>
            <Button title="Ajouter" onPress={props.closeModal}></Button>
            <Button title='Retourner à la liste' onPress={props.closeModal}/>
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