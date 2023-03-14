import {Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import React, { useState }from 'react'
import CancelArticle from './CancelArticle';
import AddArticle from './AddArticle';


export default function ShoppingList() {

    const [modalVisible1,setModal1Visible] = useState(false);
    const [modalVisible2,setModal2Visible] = useState(false);

    const Tab =[
        { shoppingItem : "Amandes", id : 1 },
        { shoppingItem : "Yaourts", id : 2},
        { shoppingItem:  "Poulet", id : 3},
        { shoppingItem : "Pommes de terre", id : 4},
        { shoppingItem : "Crème fraîche", id : 5 },
        { shoppingItem : "Abricots", id : 6 },
        { shoppingItem : "Ail", id : 7 },
        { shoppingItem : "Oignons", id : 8 },
        { shoppingItem : "Sel", id : 9 },
        { shoppingItem : "Papier toilette", id : 10 },
        { shoppingItem : "Serpillière", id : 11 },
    ]
    function OpenModal() {
        console.log("clic");
        setModal1Visible(true)
    }

    function OpenModal2() {
        console.log("clic");
        setModal2Visible(true)
    }

    function closeModal(){
        console.log("close modal")
        setModal1Visible(false)
    }

    function closeModal2(){
        console.log("close modal")
        setModal2Visible(false)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title} >ShoppingList</Text>
      <FlatList data={Tab} renderItem={(itemData) => {
        return (
            <>
            <View>
                <Text style={styles.monTexte2}>{itemData.item.shoppingItem}</Text>
            </View>
            
            </>
        )
      }} keyExtractor={(item,index) => {
        return item.id;
      }}/>

    <TextInput />
            <Button title="Ajouter" onPress={OpenModal}></Button>
            <Button title="Retirer" onPress={OpenModal2}></Button>
            <AddArticle visible={modalVisible1} closeModal={closeModal} />
            <CancelArticle visible={modalVisible2} closeModal2={closeModal2} />
    </View>
    
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
    monTexte: {
        color:"white",
        fontSize: 50,
        textAlign: "center",
        padding: 50
      },
      monTexte2: {
        color:"white",
        fontSize: 20,
        textAlign: "center",
        padding: 10
      },
})