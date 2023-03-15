import { StyleSheet, Text, View, Modal, TextInput, Button, Image, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function AddArticle(props) {

    const [textInput,setTextInput] = useState('')

    function RecupInput(enteredText) {
        console.log(enteredText)
        setTextInput(enteredText)
    }

    // const newArticle = setTextInput(enteredText)

    function AddNewArticle(article){
        console.log("ajout d'un articcle à ma liste"+article);
        setArticles(articlesList=> [
          ...articlesList, { shoppingItem : article, id : Math.random().toString()}
        ])
        setModal1Visible(false)
      }


  return (
    <Modal visible={props.visible}>
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter des articles</Text>
            <Pressable onPress={props.closeModal}>
            <Image source={require('./assets/38234.png')} style={styles.img}></Image>
            </Pressable>
            <TextInput style={styles.textInput} placeholder="Ajouter un article..." onChangeText={RecupInput} value={textInput}/>
        <View style={styles.btnContainer}>
        <View style={styles.btn}>
            <Button title="Ajouter"  onPress={(article)=>{AddNewArticle}}></Button>
            {/* onPress={props.closeModal} */}
        </View>   
            <View style={styles.btn}>
            <Button title='Retourner à la liste' onPress={props.closeModal}></Button>
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
        alignItems: "center",
        justifyContent: "center"
      },
    textInput:{
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        borderRadius: 4,
        margin: 10,
    },
    btnContainer:{
        margin:5,
        padding: 5,
        },
    btn: {
        marginTop:5,
        },
    img:{
        width:100,
        height: 100,
    }
})