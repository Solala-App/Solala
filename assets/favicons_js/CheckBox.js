import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { theme } from "../../solala-app/constants";

const { colorPalette, light, dark } = theme;

const SvgComponent = (props) => {
  let svgColor = light.secondary;
  let borderColor = light.secondary;
  switch (props.color) {
    case "dark":
      svgColor = dark.primary;
      borderColor = dark.secondary;
      break;
    case "light":
      svgColor = colorPalette.white;
      borderColor = light.secondary;
      break;
    case "black":
      svgColor = colorPalette.black;
      borderColor = colorPalette.white;
      break;
    case "white":
      svgColor = colorPalette.white;
      borderColor = colorPalette.black;
      break;

    default:
      svgColor = light.secondary;
      borderColor = colorPalette.black;
      break;
  }
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <Path
        style={{
          fill: borderColor,
        }}
        d="M256 505C119.4 505 9 393.9 9 256.5S119.4 8 256 8s247 111.1 247 248.5S392.6 505 256 505z"
      />
      <Path
        style={{
          fill: svgColor,
        }}
        fillRule="evenodd"
        d="M254.8.1c14.5-.1 22.6.4 33.4 2 7.9 1.1 19.2 3.1 25.3 4.5 6.1 1.3 16.9 4.4 24 6.8 7.1 2.4 17.1 6.2 22 8.4 4.9 2.3 13.7 6.7 19.5 9.8 5.8 3.1 14.3 8.3 19 11.4 4.7 3.1 13 9.3 18.5 13.7 5.5 4.4 14.7 12.7 20.4 18.4 5.7 5.7 14 14.9 18.4 20.4 4.4 5.5 10.6 13.8 13.7 18.5 3.1 4.7 8.3 13.2 11.4 19 3.1 5.8 7.5 14.6 9.8 19.5 2.2 4.9 6.2 15.5 8.8 23.5 2.7 8 6 20.1 7.4 27 1.4 6.9 3.2 17.9 4.1 24.5.8 6.6 1.5 19.2 1.5 28s-.7 21.6-1.5 28.5c-.9 6.9-2.7 18.1-4.1 25-1.4 6.9-4.7 19-7.4 27-2.6 8-6.6 18.6-8.8 23.5-2.3 4.9-6.7 13.7-9.8 19.5-3.1 5.8-8.3 14.3-11.4 19-3.1 4.7-9.3 13-13.7 18.5-4.4 5.5-12.7 14.7-18.4 20.4-5.7 5.7-14.9 14-20.4 18.4-5.5 4.4-13.8 10.6-18.5 13.7-4.7 3.1-13.2 8.3-19 11.4-5.8 3.1-14.6 7.5-19.5 9.8-4.9 2.2-14.9 6-22 8.4-7.1 2.4-17.9 5.5-24 6.8-6.1 1.4-17.4 3.4-25.3 4.5-10.1 1.5-19.3 2.1-32.2 2.1-12.9 0-22.1-.6-32.3-2.1-7.8-1.1-19.1-3.1-25.2-4.5-6.1-1.3-16.9-4.4-24-6.8-7.2-2.4-17.1-6.2-22-8.4-4.9-2.3-13.7-6.7-19.5-9.8-5.8-3.1-14.3-8.3-19-11.4-4.7-3.1-13-9.3-18.5-13.7-5.5-4.4-14.7-12.7-20.4-18.4-5.7-5.7-14-14.9-18.4-20.4C52.3 411 46.1 402.7 43 398c-3.1-4.7-8.3-13.2-11.4-19-3.1-5.8-7.5-14.6-9.8-19.5-2.2-4.9-6.2-15.5-8.8-23.5-2.7-8-6-20.1-7.4-27-1.4-6.9-3.2-17.9-4.1-24.5-.8-6.6-1.5-19.2-1.5-28s.7-21.6 1.5-28.5c.9-6.9 2.7-18.1 4.1-25 1.4-6.9 4.7-19 7.4-27 2.6-8 6.6-18.6 8.8-23.5 2.3-4.9 6.7-13.7 9.8-19.5 3.1-5.8 8.3-14.3 11.4-19 3.1-4.7 9.3-13 13.7-18.5 4.4-5.5 12.7-14.7 18.4-20.4 5.7-5.7 14.9-14 20.4-18.4C101 52.3 109.3 46.1 114 43c4.7-3.1 13.2-8.3 19-11.4 5.8-3.1 14.6-7.5 19.5-9.8 4.9-2.2 15.5-6.2 23.5-8.8 8-2.6 19-5.7 24.5-6.9 5.5-1.2 15.6-3 22.5-4 8.5-1.3 18.6-1.9 31.7-2zm-26.7 36c-4.7.5-13 1.9-18.5 3-5.5 1.2-16 4.1-23.3 6.5-7.2 2.4-18.3 6.8-24.5 9.7-6.1 2.9-15.5 8-20.7 11.1-5.2 3.2-13.8 9-19 13-5.2 3.9-15.4 12.9-22.5 20.1-7.2 7.1-16.2 17.3-20.1 22.5-4 5.2-9.8 13.8-13 19-3.1 5.2-8 14.2-10.7 20-2.8 5.8-6.7 15.2-8.7 21-2.1 5.8-4.9 15.2-6.3 21-1.4 5.8-3.4 15.7-4.4 22-1.2 8-1.7 17.4-1.7 31 0 13.6.5 23 1.7 31 1 6.3 3 16.2 4.4 22 1.4 5.8 4.2 15.2 6.3 21 2 5.8 5.9 15.2 8.7 21 2.7 5.8 7.6 14.8 10.7 20 3.2 5.2 9 13.8 13 19 3.9 5.2 12.9 15.4 20.1 22.5 7.1 7.2 17.3 16.2 22.5 20.1 5.2 4 13.8 9.8 19 13 5.2 3.1 14.2 8 20 10.7 5.8 2.8 15.2 6.7 21 8.7 5.8 2.1 15.2 4.9 21 6.3 5.8 1.4 15.7 3.4 22 4.4 8 1.2 17.4 1.7 31 1.7 13.6 0 23-.5 31-1.7 6.3-1 16.2-3 22-4.4 5.8-1.4 15.2-4.2 21-6.3 5.8-2 15.2-5.9 21-8.7 5.8-2.7 14.8-7.6 20-10.7 5.2-3.2 13.8-9 19-13 5.2-3.9 15.4-12.9 22.5-20.1 7.2-7.1 16.2-17.3 20.1-22.5 4-5.2 9.8-13.8 13-19 3.1-5.2 8-14.2 10.7-20 2.8-5.8 6.7-15.2 8.7-21 2.1-5.8 4.9-15.2 6.3-21 1.4-5.8 3.4-15.7 4.4-22 1.2-8 1.7-17.4 1.7-31 0-13.6-.5-23-1.7-31-1-6.3-3-16.2-4.4-22-1.4-5.8-4.2-15.2-6.3-21-2-5.8-5.9-15.2-8.7-21-2.7-5.8-7.6-14.8-10.7-20-3.2-5.2-9-13.8-13-19-3.9-5.2-12.9-15.4-20.1-22.5-7.1-7.2-17.3-16.2-22.5-20.1-5.2-4-13.8-9.8-19-13-5.2-3.1-14.2-8-20-10.7-5.8-2.8-15.2-6.7-21-8.7-5.8-2.1-15.2-4.9-21-6.3-5.8-1.4-15.2-3.3-21-4.2-5.8-.8-17.9-1.7-27-1.9-9.1-.2-18.3-.2-20.5 0-2.2.2-7.8.9-12.5 1.5z"
      />
    </Svg>
  );
};

export default SvgComponent;
