import React from "react";
import { Animated, Easing } from "react-native";

import * as Solala from "../../assets/solala_js";

export default function AnimatedWave() {
  const animOrder = [
    Solala.WaveDefault,
    Solala.WaveUp,
    Solala.WaveDefault,
    Solala.WaveDown,
  ];
  const [animIndex, setAnimIndex] = React.useState(0);
  const waveAnim = React.useRef(new Animated.Value(0)).current;
  const animationTime = 100;
  React.useEffect(() => {
    Animated.timing(waveAnim, {
      duration: animationTime,
      useNativeDriver: true,
    }).start(() => {
      setAnimIndex(() => {
        if (animIndex === animOrder.length - 1) {
          return 0;
        }
        return animIndex + 1;
      });
    });
  });

  return (
    <Animated.Image
      source={animOrder[animIndex]}
      style={[{ height: 525, width: 525 }]}
    />
  );
}
