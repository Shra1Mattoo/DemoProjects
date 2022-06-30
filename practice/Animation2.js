import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default () => {
    const translation = useRef(
        new Animated.ValueXY({ x: 250, y: 60 })
    ).current;

    useEffect(() => {
        Animated.sequence([
            Animated.spring(translation.x, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.parallel([
                Animated.spring(translation.x, {
                    toValue: 1,
                    useNativeDriver: true,
                }),
                Animated.spring(translation.y, {
                    toValue: 400,
                    useNativeDriver: true,
                }),
            ]),
            Animated.sequence([
                Animated.spring(translation.x, {
                    toValue: 300,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.spring(translation.y, {
                        toValue: 700,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.sequence([
                    Animated.spring(translation.x, {
                        toValue: 10,
                        useNativeDriver: true,
                    }),
                ]),

            ]),
        ]).start();
    }, []);
    return (
        <Animated.View
            style={{
                width: 100,
                height: 100,
                backgroundColor: 'orange',
                transform: [
                    { translateY: translation.y },
                    { translateX: translation.x }],
            }}
        />
    );

}