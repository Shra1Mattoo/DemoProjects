import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";

const PtouchableOpacity = () => {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <SafeAreaView>
            <View style={styles.container} />
            <View style={styles.countContainer} >
                <Text>Count: {count}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={onPress}>
                <Text style={styles.btnText}>Count Here</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '40%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
    },
    countContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    },

});

export default PtouchableOpacity;