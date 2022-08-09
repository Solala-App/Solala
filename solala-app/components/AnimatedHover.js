import React from "react";
import { Animated, Easing } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Solala from "../../assets/solala_js";

export default function AnimatedHover() {
  const animated = React.useRef(new Animated.Value(0)).current;
  const duration = 2000;
  const distance = 100;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animated, {
          toValue: distance,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(animated, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);
  return (
    <Animated.Image
      source={Solala.WaveDefault}
      style={[
        { height: 525, width: 525, transform: [{ translateY: animated }] },
      ]}
    />
    //<Solala.Happy />
  );
}
