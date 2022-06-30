import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default () => {
  const translation = useRef(
    new Animated.ValueXY({ x: 150, y: 300 })
  ).current;
  const firstOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const secondOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const thirdOpacity = useRef(
    new Animated.Value(0)
  ).current;


  useEffect(() => {
    Animated.stagger(130, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
    ]).start();
  }, []);


  return (
    <>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: firstOpacity,
          transform: [
            { translateY: translation.y },
            { translateX: translation.x }],

        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          marginBottom: 10,
          opacity: secondOpacity,
          transform: [
            { translateY: translation.y },
            { translateX: translation.x }],

        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: thirdOpacity,
          transform: [
            { translateY: translation.y },
            { translateX: translation.x }],

        }}
      />
    </>
  );
};