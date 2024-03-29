import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../solala-app/constants";

const { colorPalette, light, dark } = theme;

const SvgScrollRight = (props) => {
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
    <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 114 220" {...props}>
      <Path
        d="M21.1.2c5.2.2 7.4.8 10.5 3 2.1 1.5 19.2 18.1 38 37C101.2 71.9 104 75.1 107.4 82c2 4.1 4.3 10 5.1 13 .8 3 1.5 9.4 1.5 14.3 0 4.8-.5 11.1-1.1 14-.6 2.8-2.9 9-5.1 13.7-4 8.3-4.8 9.3-38.2 42.8-18.7 18.9-35.9 35.5-38 37-3.4 2.4-4.9 2.7-11.6 2.7-6.4 0-8.2-.4-11.1-2.3-1.9-1.3-4.5-4-5.9-6-1.8-2.6-2.6-5.2-2.9-9.6-.2-3.7.2-7.4 1-9.4.9-1.9 15.5-17.4 36-38 33.7-33.7 34.7-34.8 35.7-39.7.6-3.3.6-6.6 0-9.5-.9-4.2-3.7-7.2-35.7-39.2-19-19.1-35.1-36-35.8-37.5-.7-1.6-1.2-5.2-1.3-8 0-2.9.6-6.8 1.4-8.5C2.1 10 4 7.2 5.6 5.6 7.2 4 9.9 2.1 11.5 1.3 13.3.5 17.1.1 21.1.2z"
        style={{
          fill: svgColor,
        }}
      />
    </Svg>
  );
};

export default SvgScrollRight;
