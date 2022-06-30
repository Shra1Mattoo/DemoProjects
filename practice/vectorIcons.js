import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const App = () => {
    return (
        <SafeAreaView>

            <Text style={styles.icons}></Text>
            <Text>Helloo</Text>
            <Icon name='car' size={50} />

        </SafeAreaView >
    );
};

const styles = StyleSheet.create({

    icons: {
        flex: 1,
        marginTop: 40,
        marginBottom: 250,

    },
});
export default App;