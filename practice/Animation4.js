import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export default () => {

    const translation = useRef(
        new Animated.Value(0)
    ).current;

    useEffect(() => {
        Animated.timing(translation, {
            toValue: 300,
            duration: 5000,
            useNativeDriver: false,
        }).start()
    }, []);

    return (
        <Animated.View
            style={{
                width: 100,
                height: 100,
                marginTop: 400,
                backgroundColor: translation.interpolate({
                    inputRange: [0, 100, 300],
                    outputRange: ['green', 'black', 'orange']
                }),
                opacity: translation.interpolate({
                    inputRange: [0, 100, 300],
                    outputRange: [0, 1, 1],
                }),

                transform: [{ translateX: translation },
                {
                    rotate: translation.interpolate({
                        inputRange: [0, 100],
                        outputRange: ['0deg', '360deg']
                    })
                }
                ],

            }}
        />
    )

}