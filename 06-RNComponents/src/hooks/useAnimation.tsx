import React, { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = (initPosition: number) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const topPosition = useRef(new Animated.Value(initPosition)).current;

  const fadeIn = ( duration: number = 300) => {
    Animated.timing(
      opacity, 
      {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }
    ).start()

    Animated.timing(
      topPosition,
      {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
        easing: Easing.bounce,
      }
    ).start()
  };

  const fadeOut= () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  };

  return {
    opacity,
    topPosition,
    fadeIn,
    fadeOut
  }
}
