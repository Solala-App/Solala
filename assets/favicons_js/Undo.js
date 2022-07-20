import * as React from "react";

const SvgUndo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} {...props}>
    <path
      d="M288.3 33.1c9.1-.1 18.5.6 27.9 1.9 7.9 1.2 19 3.2 24.8 4.6 5.8 1.3 15.2 4.1 21 6 5.8 2 16.8 6.6 24.5 10.4 7.7 3.7 18.7 9.9 24.5 13.7 5.8 3.8 13.2 9.1 16.5 11.8 3.3 2.7 9.4 7.9 13.5 11.6 4.1 3.7 10.9 10.6 15 15.4 4.1 4.8 9.9 11.9 12.8 15.8 3 4 7.5 10.8 10.2 15.2 2.6 4.4 6.9 12.1 9.4 17 2.6 4.9 6.4 13.5 8.6 19 2.1 5.5 5.5 16.1 7.4 23.5 1.9 7.4 4.2 18.2 5.1 24 .9 5.8 1.9 17 2.2 25 .3 8.1 0 20.1-.7 27-.6 6.9-2 17.2-3.2 23-1.1 5.8-2.6 12.1-3.4 14-.8 1.9-2.7 4.8-4.2 6.3-1.5 1.6-4.4 3.7-6.5 4.8-2.3 1.2-5.8 1.9-9.5 1.9-3.9 0-7.1-.7-10.2-2.2-2.5-1.3-5.9-4.2-7.7-6.6-2.2-2.7-3.5-5.8-4-9-.4-2.9 0-7.8 1.1-13.2.9-4.7 2.1-11.9 2.6-16 .6-4.1 1.1-14.3 1.1-22.5 0-8.8-.7-19.1-1.6-25-.9-5.5-2.5-13.6-3.6-18s-3.3-11.6-4.8-16c-1.6-4.4-4.7-11.8-6.8-16.5-2.2-4.7-6.2-12.1-8.9-16.5s-7.7-11.6-11-16c-3.4-4.4-10.3-12.2-15.5-17.4-5.2-5.1-12.8-11.9-16.9-15.1-4.1-3.1-10.5-7.6-14.3-9.9-3.7-2.2-10.8-6.1-15.7-8.6-5-2.5-12.7-5.9-17.3-7.5-4.5-1.7-12.5-4.1-17.7-5.4-5.2-1.3-13.3-3-18-3.7-4.8-.8-16.1-1.4-26-1.4-9.6.1-21.1.7-25.5 1.4-4.4.7-12.3 2.3-17.5 3.6-5.2 1.3-12.9 3.6-17 5.1-4.1 1.4-12.5 5.1-18.5 8.1-6.1 2.9-15.3 8.3-20.5 11.8-5.2 3.5-13.8 10.2-19 14.8-5.2 4.6-13.2 12.8-17.7 18.3-4.5 5.4-10.5 13.5-13.4 17.9-2.8 4.4-6.8 11.4-8.9 15.5-2.1 4.1-5 10.4-6.5 14-1.5 3.6-3.8 10.1-5.1 14.5-1.4 4.4-3.3 12.1-4.4 17-1 4.9-2.1 12.8-3.2 26l15.8-15.7c8.8-8.6 17.5-16.4 19.4-17.3 2.6-1.3 5.3-1.6 10.2-1.4 5.4.3 7.4 1 11 3.4 2.8 2 5.2 4.9 7.1 8.5 1.8 3.6 2.7 7 2.7 10 0 2.5-1 6.5-2.1 9-1.5 3.4-11.1 13.6-38.2 40.7-35.8 35.7-36.3 36.1-42.2 37.8-5.1 1.5-6.8 1.6-11.5.5-5.5-1.2-5.8-1.5-42.8-38.3-20.6-20.5-38.2-38.9-39.3-41C.8 240.6 0 237 0 234.2s1-6.7 2.3-9.7c1.3-2.8 3.9-6.2 5.8-7.7s4.7-3.2 6.4-3.8c1.6-.6 5.2-1.2 8-1.2 3.2 0 6.6.8 9.5 2.2 2.7 1.4 10.5 8.3 34.9 32.5l.6-7.5c.4-4.1 1.3-11.8 2.1-17 .8-5.2 2.4-13.6 3.6-18.5 1.1-4.9 3.8-14.2 6-20.5 2.2-6.3 6.3-16.4 9.2-22.5 2.9-6.1 8.4-15.9 12.2-22 3.8-6.1 9.6-14.4 12.9-18.5 3.2-4.1 9.1-11 13-15.3 3.8-4.3 11.1-11.3 16-15.6 4.9-4.3 12.4-10.2 16.5-13.3 4.1-3 11.3-7.7 16-10.5 4.7-2.9 13.7-7.6 20-10.7 6.3-3 16.9-7.3 23.5-9.5 6.6-2.2 16.3-5 21.5-6.1 5.2-1.2 15.1-3 22-4 6.9-.9 18.7-1.8 26.2-1.9zm47.5 396.5c2.4.2 5.8 1.1 7.5 2 1.8.9 4.4 2.6 5.6 3.8 1.3 1.1 3.2 3.7 4.2 5.6 1 1.9 2.1 5.3 2.5 7.5.3 2.2.2 5.9-.4 8.2-.6 2.4-2.6 6.2-4.4 8.5-2.3 3-4.9 4.9-8.7 6.5-3 1.1-10 2.8-15.5 3.7-5.5.8-13.3 2-17.3 2.5-3.9.6-11 1.1-15.7 1.1-7.3 0-9.2-.4-13.7-2.8-2.9-1.5-6.4-4.4-8-6.7-1.6-2.2-3.4-5.8-3.9-8-.6-2.2-.8-5.7-.5-7.8.3-2 1.5-5.4 2.5-7.5 1-2 3-4.7 4.3-5.9 1.2-1.2 4.3-3.1 6.8-4.1 3.3-1.4 8-2.1 17.5-2.6 7.1-.4 17.5-1.5 23-2.6 5.5-1 11.9-1.7 14.2-1.4zm108.8-69.5c1.6-.1 5 .6 7.5 1.4 2.5.9 6.2 3.3 8.3 5.3 2.1 2 4.5 5.5 5.3 7.7 1 2.5 1.4 5.9 1.2 9-.2 2.7-1.3 6.7-2.4 8.7-1 2.1-5.3 7.7-9.6 12.5-4.2 4.9-12 12.6-17.3 17.3-5.3 4.7-11.5 9.6-13.8 11-3.3 1.9-5.6 2.4-10.2 2.4-4 0-7.4-.7-10-2.1-2.2-1.1-5.4-3.8-7.2-5.9-1.8-2.1-3.8-5.9-4.4-8.4-.7-2.5-1-6.1-.7-8 .3-1.9 1.4-5.3 2.4-7.4 1.2-2.5 6-7.6 12.9-13.7 6.1-5.4 13.7-12.9 17-16.9 3.3-3.9 7.6-8.1 9.5-9.2 1.9-1.2 4.6-2.5 6-2.9 1.4-.4 3.9-.8 5.5-.8z"
      style={{
        fill: "#126760",
      }}
    />
  </svg>
);

export default SvgUndo;
