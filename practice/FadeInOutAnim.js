import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';

const FadeInOutAnim = () => {
    const startValue = new Animated.Value(5);
    const endValue = new Animated.Value(1);
    const duration = 5000;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(startValue, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: false,
                }),

                Animated.sequence([
                    Animated.timing(endValue, {
                        toValue: 5,
                        duration: 5000,
                        useNativeDriver: false,
                    })
                ])
            ])).start()
    }, [startValue, endValue, duration]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.breath,
                    {
                        opacity: startValue.interpolate({
                            inputRange: [1, 5, 5],
                            outputRange: [0, 1, 1]
                        }),
                        transform: [
                            {
                                scale: startValue,
                            },
                        ],
                    },
                ]}
            >
                <Text style={styles.outText}>Breath Out</Text>
            </Animated.View>
            <Animated.View
                style={[
                    styles.breathIn,
                    {
                        opacity: startValue.interpolate({
                            inputRange: [1, 1, 5],
                            outputRange: [1, 0, 0]
                        }),

                        transform: [
                            {
                                scale: endValue,
                            },
                        ],
                    },
                ]}
            >
                <Text style={styles.InText}>Breath In</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InText: {
        color: 'orange',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    outText: {
        color: 'orange',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default FadeInOutAnim;