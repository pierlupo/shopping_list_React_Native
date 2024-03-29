import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import CancelArticle from './CancelArticle';
import AddArticle from './AddArticle';
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ShoppingList() {

  const [modalVisible1, setModal1Visible] = useState(false);
  const [modalVisible2, setModal2Visible] = useState(false);

  const [articles, setArticles] = useState([]);

  useEffect (()=>{
    if(articles.length == 0){
    getData()
} else  {
    setData()
}

  },[articles])

  function OpenModal() {
    console.log('clic');
    setModal1Visible(true);
  }

  function OpenModal2() {
    console.log('clic');
    setModal2Visible(true);
  }

  function closeModal() {
    console.log('close modal');
    setModal1Visible(false);
  }

  function closeModal2() {
    console.log('close modal');
    setModal2Visible(false);
  }

  function AddNewArticle(article) {
    console.log("ajout d'un article à ma liste" + article);
    setArticles(articlesList => [
      ...articlesList,
      {shoppingItem: article, id: Math.random().toString()},
    ]);
    setModal1Visible(false);
  }

  function DeleteArticle(id) {
    setArticles(articlesList => {
      return articlesList.filter(a => a.id != id);
    });
    
  }
  const setData = async () => {
    try {
      const mesArticles = JSON.stringify(articles)
        // [{shoppingItem: 'Amandes', id: "1"},
        // {shoppingItem: 'Yaourts', id: "2"},
        // {shoppingItem: 'Poulet', id: "3"},
        // {shoppingItem: 'Pommes de terre', id: "4"},
        // {shoppingItem: 'Crème fraîche', id: "5"},
        // {shoppingItem: 'Abricots', id: "6"},
        // {shoppingItem: 'Ail', id: "7"},
        // {shoppingItem: 'Oignons', id: "8"},
        // {shoppingItem: 'Sel', id: "9"},
        // {shoppingItem: 'Papier toilette', id: "10"},
        // {shoppingItem: 'Serpillière', id: "11"},]
      
      await AsyncStorage.setItem('articles', mesArticles);

    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const mesArticles =  await AsyncStorage.getItem('articles');
      if(mesArticles !== null){
        setArticles(JSON.parse(mesArticles));
}
    } catch (error) {
      console.log(error);
    }
  };

  // const removeData = async () => {
  //   try {
      
  //     await AsyncStorage.removeItem('articles');
  //     setArticles({
  //       shoppingItem: '',
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // function PressArticle() {
  //   console.log("j'ai appuyé sur l'article");
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ShoppingList</Text>
      <FlatList
        data={articles}
        renderItem={itemData => {
          return (
            <Pressable  onPress={()=>{DeleteArticle(itemData.item.id)}}>
              <View>
                <Text style={styles.monTexte2}>
                  {itemData.item.shoppingItem}
                </Text>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
      <View style={styles.imgstyle}>
        <Image
          source={require('./assets/38234.png')}
          style={styles.img}></Image>
        <Image
          source={require('./assets/38234.png')}
          style={styles.img}></Image>
        <Image
          source={require('./assets/38234.png')}
          style={styles.img}></Image>
        <Image
          source={require('./assets/38234.png')}
          style={styles.img}></Image>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Button title="Ajouter" onPress={OpenModal}></Button>
        </View>
        <View style={styles.btn}>
          {/* <Button title="Retirer" onPress={OpenModal2}></Button> */}
        </View>
        <View>
      <Text>{articles.shoppingItem}</Text>
      <Button title="Set Data" onPress={setData} />
      <Button title="Get Data" onPress={getData} />
      {/* <Button title="Delete Data" onPress={removeData} /> */}
    </View>
      </View>
      <AddArticle
        visible={modalVisible1}
        closeModal={closeModal}
        AddNewArticle={AddNewArticle}
      />
      <CancelArticle
        visible={modalVisible2}
        closeModal2={closeModal2}
        DeleteArticle={DeleteArticle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#96ADC8',
    flex: 1,
  },
  monTexte: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    padding: 50,
  },
  monTexte2: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  btnContainer: {
    margin: 5,
    padding: 5,
  },
  btn: {
    marginTop: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
  imgstyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
