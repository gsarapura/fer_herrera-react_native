import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {
  const {opacity, topPosition, fadeIn, fadeOut} = useAnimation(400);

  return (
    <View style={styles.wrapper}>
      <Animated.View 
        style={[
          styles.purpleBox,
          {
            opacity,
            transform: [{
              translateY: topPosition,
            }]
          },
        ]}
      >
      </Animated.View>
      <Button
        title='Fade In'
        onPress={fadeIn}
      />
      <Button
        title='Fade Out'
        onPress={fadeOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  purpleBox: {
    backgroundColor: 'purple',
    width: 150,
    height: 150,
  },
});


