import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../solala-app/constants";

const { colorPalette, light, dark } = theme;

const SvgScrollLeft = (props) => {
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
        d="M95.1.2c4.9.2 7.4.9 10 2.6 1.9 1.3 4.5 4 5.9 6 1.8 2.6 2.6 5.2 2.9 9.6.2 3.7-.2 7.4-1 9.4-.9 1.9-15.5 17.4-36 38-32.1 32.1-34.8 35-35.7 39.2-.6 2.9-.6 6.2 0 9.5 1 4.9 1.9 5.9 35.6 39.7 20.9 20.9 35.2 36 36.1 38 .8 2 1.2 5.8 1 9.4-.3 4.2-1.1 7-2.7 9.5-1.3 1.9-4 4.5-6 5.9-3 2.1-4.7 2.5-11.2 2.5-6.7 0-8.2-.3-11.6-2.7-2.1-1.5-19.2-18.1-38-37C12.8 148.1 10 144.9 6.6 138c-2-4.1-4.3-10-5.1-13-.8-3-1.5-9.8-1.5-15 0-5.2.7-12 1.5-15s3.1-8.9 5.1-13c3.4-7 6.1-10 39.3-43.2C67.3 17.3 82.9 2.5 85 1.5 87.3.5 90.8.1 95.1.2z"
        style={{
          fill: svgColor,
        }}
      />
    </Svg>
  );
};

export default SvgScrollLeft;
