
import React, { useEffect, useState } from 'react';

import { SafeAreaView, View, FlatList, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen')
const widthOne = width / 2
const widthTwo = width / 2

const FlatListAPIDemo = () => {

  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(false);

  let count = 0;

  const getData = () => {

    fetch("https://picsum.photos/v2/list?page=2&limit=50")

      .then(response => response.json())

      .then(responseJSON => {

        setData(responseJSON);


        setLoading(false);

      });
  };

  useEffect(() => {

    getData();

  }, []);

  renderItem = ({ item }) => {
    console.log(item)
    if (count == 0 || count == 1) {
      console.log('after count', count)
      count = count + 1;
      return (
        <Image style={styles.image} source={{ uri: item.download_url }} />
      )
    } else {
      count = count + 1;
      if (count == 6) {
        count = 0
      }
      return (
        <Image style={styles.image2} source={{ uri: item.download_url }} />

      )

    }
  };



  return (

    <SafeAreaView>

      {isLoading ? (

        <ActivityIndicator />

      ) : (
        <View style={styles.container} >
          <FlatList numColumns={2} data={data} renderItem={renderItem} />
        </View>
      )}

    </SafeAreaView>

  );

};

export default FlatListAPIDemo;

const styles = StyleSheet.create({

  container: {

    flexDirection: 'column',
    margin: 0.5,
    marginTop: 50,
  },

  image: {
    width: widthOne,
    height: 300,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 20,
  },

  image2: {
    width: widthTwo,
    height: 100,
    marginBottom: 5,
    marginRight: 5,
    borderRadius: 20

  }
});
