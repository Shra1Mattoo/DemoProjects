import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, SafeAreaView, Text, StyleSheet, SectionList, StatusBar } from 'react-native';

const data = [
    {
        title: 'Fruit',
        data: ['Orange', 'Apple']
    },
    {
        title: 'Vegetable',
        data: ['Potato', 'Tomato']
    },
    {
        title: 'Cold Drink',
        data: ['Pepsi', 'Coke']
    },
];
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
const Tab = createBottomTabNavigator();

const Sectionlist = (navigation) => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        marginTop:100
    },
    item: {
        backgroundColor: "orange",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
    },
});

export default Sectionlist;
