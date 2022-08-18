import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../solala-app/constants";

const { colorPalette, light, dark } = theme;

const SvgScrollUp = (props) => {
  let svgColor = colorPalette.jade;
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
      svgColor = colorPalette.jade;
      break;
  }
  return (
    <Svg xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 220 114" {...props}>
      <Path
        d="M109.5.1c6.1 0 12.3.5 16 1.5 3.3.9 9.2 3.2 13 5.2 6.1 3.1 11.3 7.8 41.3 37.6 18.9 18.8 35.5 35.9 37 38 2.4 3.4 2.7 4.9 2.7 11.6 0 6.4-.4 8.2-2.3 11.1-1.3 1.9-4 4.5-6 5.9-2.6 1.8-5.2 2.6-9.6 2.9-3.7.2-7.4-.2-9.4-1-1.9-.8-17.6-15.7-38-36-32-32-35-34.8-39.2-35.7-2.9-.6-6.2-.6-9.5 0-4.9 1-6 2-39.7 35.7-20.6 20.5-36.1 35.1-38 36-2 .8-5.7 1.2-9.4 1-4.4-.3-7-1.1-9.6-2.9-2-1.4-4.7-4-6-5.9C.9 102.2.5 100.4.5 94c0-6.7.3-8.2 2.7-11.6 1.5-2.1 18.1-19.2 37-38C71.9 12.9 75.1 10 82 6.6c4.1-2 9.8-4.3 12.5-5 2.8-.8 9.5-1.5 15-1.5z"
        style={{
          fill: svgColor,
        }}
      />
    </Svg>
  );
};

export default SvgScrollUp;
