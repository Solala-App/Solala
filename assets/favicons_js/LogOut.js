import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <Path
      fillRule="evenodd"
      d="m126.5 22.1 268-.2 2.8 2.6c1.5 1.4 2.7 3.5 2.7 4.7.1 1.3-.8 3.5-4 7.8H263.5c-115.6 0-132.9.2-136 1.5-2 .8-4.2 2.8-5 4.5-1.2 2.4-1.5 7.2-1.5 42h376V44l-5.8-6.5L424 37l-2-2.8c-1.2-1.5-2.1-3.5-2-4.5 0-.9 1.1-3.1 5-7.7h33c31.1 0 33.3.1 37.8 2.1 2.6 1.1 6.2 3.5 8.1 5.2 1.8 1.8 4.4 5.4 8.1 13.2v427l-2.4 5c-1.3 2.7-3.9 6.4-5.7 8.2-1.9 1.7-5.5 4.1-8.1 5.2-4.8 2.1-5.2 2.1-368.8 2.1l-5.2-2.4c-2.9-1.3-7-4.3-9-6.5-2.4-2.5-4.4-6.1-5.3-9.4-1.1-3.6-1.5-9.8-1.5-35.2l-23.7 23.6c-22.2 22.1-24.1 23.7-28.8 24.9-2.8.6-6.5.9-8.5.5-1.9-.4-4.8-1.4-6.5-2.2-1.6-.9-9.9-8.4-18.3-16.7-8.4-8.3-16.4-17.1-17.8-19.6-1.8-3.2-2.5-6-2.4-9.7 0-3.4.7-6.6 2.1-9 1.1-2.1 12.7-14.5 49.4-51.2l-4.7-5c-2.7-2.8-5.8-7.2-7-9.8-1.5-3.3-2.1-6.6-2.1-10.8.1-3.3.8-7.7 1.7-9.7.9-2.1 3.1-5.4 4.9-7.5 1.7-2 5.5-4.7 8.2-6 5-2.3 5.1-2.3 47.5-2.3 38.8 0 42.8.2 46.5 1.8 2.2 1 5.6 3.7 7.5 5.9 1.9 2.2 4.1 5.8 4.7 7.9.9 2.8 1.3 15.2 1.3 44.9 0 40.7 0 41-2.3 46-1.3 2.8-4.1 6.7-6.3 8.8-2.3 2.2-6 4.4-8.9 5.4-3.4 1-6.9 1.4-11 1-3.3-.3-7-.8-8.2-1.1-2.3-.6-2.3-.5-2.3 9.7 0 8.4.4 10.8 2 13.5 1.3 2.1 3.2 3.5 5.8 4.2 2.5.8 60.4 1 362.4.5l5.8-6.5V100l-375.5.5-.5 100.8c-.5 99.4-.5 100.9-2.5 102.3-1.1.8-3.5 1.4-5.2 1.4-2.4 0-3.8-.7-5.3-2.7-2.1-2.8-2.1-3.6-2-129.8 0-110.2.2-127.7 1.5-132.2.9-3.3 2.9-6.9 5.3-9.4 2-2.2 6-5.1 8.7-6.4zM53.1 348.2c-.5 1.8-.6 4.6-.3 6.3.4 1.9 3.6 6.1 8.9 11.7 5.4 5.7 8.3 9.6 8.3 11 0 1.6-8 10.2-27.5 29.8C18.7 430.8 15 434.9 15 437.5c.1 2.5 2.3 5.2 13.8 16.8 7.5 7.6 14.9 14.5 16.5 15.3 1.5.7 3.3 1.4 4 1.4.6 0 13.7-12.4 29-27.5 22.4-22.1 28.4-27.5 30.5-27.5 2 0 4.2 1.5 8.2 5.6 3 3.1 7.3 6.9 9.5 8.5 2.8 2.1 5.1 2.9 7.9 2.9 3 0 4.5-.7 7.2-3.5l3.4-3.5v-80l-5-5c-79.1 0-80.8.1-83.3 2-1.5 1.1-3.1 3.4-3.6 5.2zM153.9 54h38.3c38.3 0 38.3 0 40.6 2.3 1.4 1.4 2.2 3.3 2.2 5.4 0 2.4-.7 3.8-2.7 5.3-2.7 2-4.1 2.1-78.3 2l-2.5-2.5c-1.4-1.4-2.5-3.6-2.5-5.1.1-1.4 1.2-3.6 2.5-5zm311 0c1.4 0 3.5.6 4.6 1.4 1.1.7 2.3 2.5 2.7 4 .5 1.6.3 3.7-.6 5.4-.7 1.5-2.1 3.1-3 3.5-.9.4-2.4.8-3.4.8-.9 0-2.9-.9-4.5-2-1.8-1.4-2.8-3.1-2.9-5.2-.1-2.2.5-3.9 2.2-5.5 1.3-1.3 3.5-2.4 4.9-2.4zm-156.7 67.1c6.3 0 14 .6 18.5 1.5 4.3.9 11.2 3 15.3 4.6 4.1 1.7 10.9 5.2 15 7.8 4.2 2.7 11 8.5 15.5 13.3 4.4 4.6 9.8 11.5 12.1 15.3 2.2 3.8 5.2 9.9 6.6 13.4 1.5 3.6 3.3 10 4.2 14.3.9 4.3 1.6 12.2 1.6 17.7s-.7 13.5-1.6 17.8c-.8 4.3-3.1 11.3-5 15.7-1.9 4.4-4.9 10.4-6.7 13.4-1.8 2.9-5.9 8.3-9.2 11.9-3.3 3.6-8.9 8.8-12.5 11.5-3.6 2.7-10.1 6.6-14.5 8.8-4.4 2.1-11.6 4.7-16 5.9-4.4 1.1-11.8 2.3-16.5 2.7-4.9.3-12.3.1-17.5-.6-5-.7-12.8-2.6-17.5-4.2-4.7-1.6-12.1-5-16.4-7.6-4.4-2.6-11.4-8.1-15.7-12.3-4.2-4.1-10-11.1-12.8-15.5-2.9-4.4-6.5-11.3-8.1-15.5-1.5-4.1-3.6-11.3-4.4-16-.9-4.6-1.6-12.1-1.6-16.5s.8-12 1.9-17c1-4.9 3.3-12.6 5.2-17 1.9-4.4 5.2-10.6 7.4-13.9 2.2-3.3 6.5-8.7 9.5-11.9 3-3.3 8.2-7.9 11.5-10.4 3.3-2.5 8.9-5.9 12.5-7.7 3.6-1.8 9.4-4.2 13-5.4 3.6-1.2 8.5-2.6 11-3.1 2.5-.4 9.3-.9 15.2-1zm-31.7 22.4c-3.9 1.9-10 6-13.8 9-3.7 3.1-8.8 8.4-11.4 11.8-2.5 3.4-6.3 9.8-8.4 14.2-2.1 4.4-4.5 11.9-5.5 16.5-1.2 6.3-1.5 11.1-1.1 18 .3 5.3 1.6 12.7 2.8 16.5 1.1 3.9 3.3 9.3 4.7 12 1.3 2.8 3.5 6.7 4.8 8.8 1.3 2.1 2.8 3.5 3.4 3.2.5-.2 1-1.9 1-3.7 0-1.8 1.1-5.5 2.3-8.3 1.3-2.7 3.9-6.7 5.8-8.8 1.9-2.2 5.2-5 7.4-6.3 2.2-1.3 5.7-2.8 7.7-3.3l3.8-1.1c-5.1-9.8-5.5-11.9-5.8-22-.3-8.6 0-12.9 1.2-17.2.9-3.2 2.8-7.6 4.3-9.8 1.6-2.3 4.5-5.2 6.5-6.5 2.1-1.4 6.4-3.2 9.5-4.1 4.3-1.2 8.5-1.5 16.3-1.2 7.6.4 11.7 1.1 15 2.5 2.5 1.1 6 3.3 7.8 4.9 1.9 1.6 4.5 5.2 5.8 7.9 1.7 3.4 2.8 8.3 3.6 15 .8 7.5.8 11.5-.1 15.5-.6 3.1-2.1 7.7-3.4 10.3-1.2 2.5-1.8 4.7-1.2 4.7.5 0 3.7 1.3 7 2.9 3.3 1.6 7.8 4.8 10.1 7.2 2.2 2.5 4.6 5.6 5.4 6.9.8 1.4 2.1 5.5 3 9l1.7 6.5c5.9-9.3 8.9-15.1 10.4-19 1.5-3.8 3.3-10.1 3.9-14 .7-4 1-11.2.7-17-.3-6.9-1.3-12.4-3.1-18-1.4-4.4-4.3-10.9-6.3-14.5-2.1-3.5-7.4-10.1-11.8-14.5s-10.9-9.7-14.5-11.7c-3.6-2.1-10.1-5-14.5-6.4-6.5-2.2-10.4-2.7-20.5-3-10.2-.3-13.9 0-20 1.7-4.1 1.1-10.7 3.5-14.5 5.4zm15.1 38.9c-1.9 2.4-2.1 4.2-2.1 14.5 0 11.2.1 12 2.7 15.7 1.5 2.2 4.6 5.1 7 6.4 3.1 1.8 5.8 2.5 9.8 2.5 4 0 6.7-.7 10-2.5 2.4-1.3 5.5-4 6.7-6 1.3-1.9 2.9-5.3 3.4-7.5.7-2.3.8-7 .4-11.5-.4-4.1-1.4-9-2.4-10.9-1-2.3-3-4-5.6-5.2-2.8-1.3-6.5-1.8-12.5-1.8-6.2-.1-9.5.4-11.9 1.7-1.9 1-4.4 3-5.5 4.6zm-18.5 58.9c-1.2 1.3-2.9 3.5-3.7 5-.9 1.8-1.4 6.2-1.4 13.2V270c12.8 6.2 19.2 8.7 22.5 9.6 3.3.8 10 1.8 15 2.1 6.4.4 11.4.1 17.5-1.1 5.6-1.1 11.7-3.3 18-6.4l9.5-4.7c.5-12.4.1-17.6-.4-19.7-.6-2.1-2.3-5.2-3.9-6.9-1.5-1.7-3.9-3.7-5.5-4.5-1.8-.9-6.3-1.4-13.2-1.4H317c0 10.9-.5 15.1-1 16.3-.6 1.2-2.1 2.8-3.5 3.5-1.4.7-3.1 1.3-3.8 1.3-.6 0-2.4-.9-4-2-2.6-2-2.7-2.4-2.7-10.6V237c-16.7.1-22.6.6-24 1.2-1.4.5-3.6 1.9-4.9 3.1zm37.4 79.1c104.6.1 115.3.3 118 1.8 1.6.9 4.3 2.9 5.9 4.5 1.5 1.6 3.7 4.5 4.7 6.6 1.8 3.5 1.9 6.7 1.9 54-.1 46.8-.2 50.5-1.9 54.2-1 2.2-3.4 5.5-5.2 7.2-1.9 1.8-5.4 4-7.9 4.8-4 1.4-17.4 1.6-116.5 1.6-67.7-.1-113.4-.4-115.5-1-1.9-.5-5.1-2-7-3.3-1.9-1.2-4.8-4.2-9.5-10.9l-.3-50.2c-.1-34.1.1-51.4.9-54.2.7-2.5 2.8-5.6 5.7-8.5 2.6-2.5 6.3-5 8.2-5.6 2.5-.9 35.3-1.1 118.5-1zm-118.4 19.5L192 435l5 5c222.6.1 223.5.1 226.2-1.9l2.8-2.1v-97c-5.5-4-6.4-4-117.3-4H196.9zM402 351l3 3c2.3 2.4 2.9 3.6 2.5 5.8-.3 1.5-1.6 3.5-2.8 4.5-1.5 1.3-3.8 1.8-12.7 1.7v52l-2.7 2.1c-1.6 1.1-3.4 2-4 2-.7-.1-2.4-.6-3.8-1.3-1.4-.7-2.9-2.3-3.5-3.5-.6-1.3-1-12.5-1-51.3h-5.5c-4.8 0-5.7-.3-7.5-2.7-1.1-1.5-2-3.6-2-4.5 0-1 .6-2.7 1.2-3.8.7-1.2 2.1-2.5 3.3-3 1.1-.4 9.5-.9 35.5-1zm-154.5 2.4c3.3.2 8.7 1.5 12 2.7 4 1.6 7.6 4 10.8 7.1 2.6 2.7 5.9 7.4 7.5 10.6 2.3 4.9 2.7 7 2.7 14.7 0 7.7-.4 9.8-2.7 14.5-1.4 3.1-4.5 7.4-6.7 9.8-2.3 2.3-7.1 5.6-10.8 7.4-5.6 2.6-8 3.2-13.8 3.2-4 0-9.1-.7-12-1.7-2.7-.9-7.2-3.4-10-5.5-2.7-2-6.5-6.2-8.3-9.2-1.8-3-3.7-7.3-4.3-9.5-.6-2.2-.9-7.3-.7-11.5.3-4.9 1.2-9 2.6-12 1.2-2.4 3.8-6.4 5.9-8.9 2.1-2.4 5.8-5.5 8.3-6.9 2.5-1.5 6.5-3.2 9-3.9 2.5-.7 7.2-1.1 10.5-.9zm-14 19.1c-1.6 1.2-4 4.2-5.2 6.6-1.4 2.8-2.3 6.3-2.3 9.4 0 3.4.7 6.5 2.3 9.5 1.6 3 4 5.5 7.2 7.5 4 2.5 5.9 3 10.4 2.9 3.1 0 7-.7 8.6-1.6 1.7-.8 4.4-3 6.1-4.9 1.6-1.9 3.6-5.2 4.3-7.4.8-2.2 1.2-6 1-8.5-.3-3-1.4-6-3.4-8.9-1.9-2.7-4.8-5.1-8-6.7-2.7-1.3-6.6-2.4-8.5-2.3-1.9 0-4.8.6-6.5 1.1-1.6.6-4.3 2.1-6 3.3zm69.5-19.4c.8-.1 2.7.8 7 3.9v21.5c0 15.2.4 22.3 1.3 24.1.6 1.4 3 3.4 5.2 4.5 2.2 1 4.7 1.9 5.5 1.9.8 0 3.3-.9 5.5-1.9 2.2-1.1 4.6-3.1 5.3-4.5.8-1.8 1.2-8.8 1.2-23.6 0-20.9 0-21 2.5-23.5 1.3-1.3 3.5-2.5 4.7-2.5 1.3 0 3.4.8 7.3 3.9v48.8l-3 4.8c-1.7 2.7-5.2 6.3-8 8.2-2.9 2-7.3 3.8-10.5 4.4-3.8.8-7 .8-10.5 0-2.7-.6-7.2-2.5-9.9-4.3-2.7-1.8-5.8-4.6-6.9-6.3-1.2-1.6-2.7-5-3.4-7.5-.9-3-1.3-11-1.3-24.7 0-16.5.3-20.8 1.6-23.2.8-1.6 2.3-3.1 3.2-3.4 1-.2 2.4-.5 3.2-.6z"
      style={{
        fill: "#126760",
      }}
    />
  </Svg>
);

export default SvgComponent;