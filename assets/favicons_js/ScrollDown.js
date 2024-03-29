import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../solala-app/constants";

const { colorPalette, light, dark } = theme;

const SvgScrollDown = (props) => {
  let svgColor = light.secondary;
  switch (props.iconColor) {
    case "dark":
      svgColor = dark.primary;
      break;
    case "light":
      svgColor = light.primary;
      break;
    case "black":
      svgColor = colorPalette.black;
      break;
    case "white":
      svgColor = colorPalette.white;
      break;

    default:
      svgColor = light.secondary;
      break;
  }
  return (
    <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 220 114" {...props}>
      <Path
        style={{
          fill: svgColor,
        }}
        d="M20 .1c3 0 6.8.5 8.3 1.2 1.5.7 18.4 16.8 37.5 35.8 32.1 32.1 35 34.8 39.2 35.7 2.9.6 6.2.6 9.5 0 4.9-1 6-2 39.7-35.7 20.4-20.3 36.1-35.2 38-36 2-.8 5.7-1.2 9.4-1 4.4.3 7 1.1 9.6 2.9 2 1.4 4.7 4 6 5.9 1.9 2.9 2.3 4.7 2.3 11.1 0 6.7-.3 8.2-2.7 11.6-1.5 2.1-18.1 19.2-37 38-29.9 29.6-35.2 34.5-41.3 37.6-3.9 2-9.9 4.4-13.5 5.2-3.6.9-10.2 1.6-14.8 1.6-4.5 0-10.6-.5-13.5-1.1-2.8-.6-9-2.9-13.7-5.1-8.3-4-9.3-4.8-42.8-38.2-18.9-18.7-35.5-35.9-37-38C1.3 28.8.4 26.1.1 22.1c-.2-3.1.1-7.2.7-9.1.7-1.9 2.6-5 4.4-6.9 1.8-1.9 4.6-4 6.3-4.7C13.1.7 17 .1 20 .1z"
      />
    </Svg>
  );
};

export default SvgScrollDown;
