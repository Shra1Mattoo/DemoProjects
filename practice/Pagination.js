import React, { useState, useEffect } from 'react';

import { SafeAreaView, View, Text, StyleSheet, FlatList, ActivityIndicator, } from 'react-native';

const Pagination = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [offset, setOffset] = useState(1);

    useEffect(() => getData(), []);

    const getData = () => {
        console.log('getData');
        setLoading(true);
        fetch('https://aboutreact.herokuapp.com/getpost.php?offset=' + offset).then((response) => response.json()).then((responseJson) => {

            setOffset(offset + 1);
            setDataSource([...dataSource, ...responseJson.results]);
            setLoading(false);

        })
            .catch((error) => {
                console.error(error);
            });
    };

    const renderFooter = () => {
        return (
            loading ?
            <View style={styles.footer}>
                    <ActivityIndicator color="grey" size='large' style={{ marginLeft: 8 }} />
            </View>:null
        );
    };

    const ItemView = ({ item }) => {
        return (
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()
                }
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        alert('Id : ' + item.id + ' Title : ' + item.title  );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <FlatList
                    data={dataSource}
                    renderFooter={renderFooter}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    enableEmptySections={true}
                    renderItem={ItemView}
                    ListFooterComponent={renderFooter}
                    onEndReached={getData}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 45
    },
    itemStyle: {
        fontSize: 18,
        padding: 10,
        color: 'black',
        backgroundColor: 'orange',
        marginTop: 1
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default Pagination;
