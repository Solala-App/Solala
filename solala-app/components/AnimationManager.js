import React from "react";
import { Animated, Easing, Image, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Solala from "../../assets/solala_js";

export default function AnimationManager({
  size = RFValue(215),
  faceType = Solala.DefaultFace,
  animateFloat = false,
  animateSpin = false,
  animateWave = false,
}) {
  const styles = StyleSheet.create({
    backgroundContainer: {
      position: "relative",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: size,
      height: size,
    },
    component: {
      height: size,
      width: size,
      position: "absolute",
    },
  });

  const [animIndex, setAnimIndex] = React.useState(0);
  const waveAnim = React.useRef(new Animated.Value(0)).current;
  const spinAnim = React.useRef(new Animated.Value(0)).current;
  const floatAnim = React.useRef(new Animated.Value(0)).current;

  const floatTime = 2000;
  const floatDistance = 100;
  const waveAnimTime = 100;
  const spinAnimTime = 1000;
  React.useEffect(() => {
    // Animate Waving Motion
    if (animateWave) {
      Animated.timing(waveAnim, {
        duration: waveAnimTime,
        useNativeDriver: true,
      }).start(() => {
        setAnimIndex(() => {
          if (animIndex === 3) {
            return 0;
          }
          return animIndex + 1;
        });
      });
    }

    // Animate Floating Motion
    if (animateFloat) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatAnim, {
            toValue: floatDistance,
            duration: floatTime,
            useNativeDriver: true,
          }),
          Animated.timing(floatAnim, {
            toValue: 0,
            duration: floatTime,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }

    // Animate Flower Spinning Motion
    if (animateSpin) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(spinAnim, {
            toValue: 1,
            duration: spinAnimTime,
            useNativeDriver: true,
            easing: Easing.linear,
          }),
        ])
      ).start();
    }
  });

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View
      style={[
        styles.backgroundContainer,
        { transform: [{ translateY: floatAnim }] },
      ]}>
      <View style={[styles.component, { overflow: "hidden" }]}>
        <Animated.Image
          source={Solala.WaveAnimation}
          style={[
            {
              position: "absolute",
              height: size,
              width: size * 4,
              transform: [{ translateX: animIndex * -size }],
            },
          ]}
        />
      </View>

      <Image source={Solala.Body} style={styles.component} />
      <Animated.Image source={faceType} style={styles.component} />
      <Animated.Image
        source={Solala.Flower}
        style={[
          styles.component,
          { bottom: "25%", transform: [{ rotate: spin }] },
        ]}
      />
    </Animated.View>
  );
}
