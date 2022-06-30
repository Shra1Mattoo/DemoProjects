import React, { useState } from "react";
import { SafeAreaView, View, FlatList, Text, StyleSheet, } from "react-native";

const Flat1 = ({ navigation }) => {
  const [people, setPeople] = useState([
    { name: "Apple", key: '1' },
    { name: "Intex", key: '2' },
    { name: "Samsung", key: '3' },
    { name: "Lava", key: '4' },
    { name: "HCL", key: '5' },
    { name: "Xiaomi", key: '6' },
    { name: "Acer", key: '7' },
    { name: "Lenovo", key: '8' },
    { name: "Logitech", key: '9' },
    { name: "Panasonic", key: '10' },
    { name: "Micromax", key: '11' },

  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // numColumns={3}
        keyExtractor={(item) => item.key}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  item: {
    marginTop: 5,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 24,
    marginHorizontal: 10,

  }
})
export default Flat1;