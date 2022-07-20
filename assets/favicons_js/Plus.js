import * as React from "react";

const SvgPlus = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} {...props}>
    <path
      fillRule="evenodd"
      d="M254.5.1c15.6-.1 23.1.3 34 1.9 7.7 1.2 18.9 3.2 25 4.6 6.1 1.3 15.3 3.8 20.5 5.5 5.2 1.7 14.4 5.1 20.5 7.6 6.1 2.4 15.5 6.8 21 9.8 5.5 2.9 14.7 8.4 20.5 12.2 5.8 3.8 15 10.6 20.5 15s14.7 12.7 20.4 18.4c5.7 5.7 14 14.9 18.4 20.4 4.4 5.5 10.6 13.8 13.7 18.5 3.2 4.7 8.2 13 11.3 18.5 3.1 5.5 7.8 15.2 10.5 21.5 2.7 6.3 6.8 17.1 9 24 2.2 6.9 4.9 16.8 6 22 1.2 5.2 3 15.9 4.1 23.8 1.5 10 2.1 19.3 2.1 31.5 0 11.9-.6 21.8-2.1 32.2-1.1 8.3-3.3 20.4-4.9 27-1.6 6.6-4.5 16.9-6.6 23-2 6.1-5.9 15.9-8.6 22-2.7 6.1-7.4 15.5-10.5 21-3.1 5.5-7.3 12.5-9.3 15.5-2 3-5.4 6.6-7.6 8-3.1 2-5.2 2.5-10.5 2.5s-7.3-.5-10.5-2.6c-2.1-1.4-5-4.3-6.4-6.5-2-3.1-2.5-5.2-2.5-10.4 0-6.2.3-7 5.9-16 3.3-5.2 8.8-15.4 12.2-22.5 3.5-7.1 8.1-18.4 10.3-25 2.2-6.6 5.1-17.4 6.5-24 1.3-6.6 2.9-16.9 3.5-23 .6-6.1 1.1-15.3 1.1-20.5 0-5.2-.5-14.2-1-20-.6-5.8-2-15.4-3.1-21.5-1.2-6.1-4.3-17.5-6.9-25.5-2.6-8-7-19.2-9.7-25-2.7-5.8-7.6-14.8-10.8-20-3.3-5.2-9.3-14-13.5-19.5-4.1-5.5-12-14.5-17.5-20-5.5-5.6-13.4-12.8-17.5-16.2-4.1-3.3-12.4-9.3-18.5-13.3s-16.4-9.9-23-13.1c-6.6-3.2-18.7-8-27-10.8-8.2-2.7-19.9-5.8-26-7-6.1-1.1-15.7-2.5-21.5-3.1-5.8-.6-14.8-1-20-1-5.2 0-14.2.5-20 1-5.8.6-15.4 2-21.5 3.1-6.1 1.2-17.5 4.3-25.5 6.9-8 2.6-20.1 7.4-27 10.7-6.9 3.4-17.4 9.3-23.5 13.3-6.1 4-14.4 10-18.5 13.4-4.1 3.4-10.3 8.8-13.9 12.1-3.5 3.3-10 10.3-14.4 15.5-4.4 5.2-11.6 14.9-15.9 21.5-4.4 6.6-10.7 17.4-13.9 24-3.2 6.6-8 18.8-10.8 27-2.7 8.3-5.8 19.9-7 26-1.1 6.1-2.5 15.7-3.1 21.5-.6 5.8-1 14.8-1 20 0 5.2.5 14.2 1 20 .6 5.8 2 15.4 3.1 21.5 1.2 6.1 4.3 17.8 7 26 2.8 8.3 7.6 20.4 10.8 27 3.2 6.6 9.1 16.9 13.1 23 4 6.1 10 14.4 13.3 18.5 3.4 4.1 10.6 12 16.2 17.5 5.5 5.5 14.5 13.4 20 17.5 5.5 4.2 14.3 10.2 19.5 13.5 5.2 3.2 14.7 8.3 21 11.2 6.3 2.9 17.1 7.2 24 9.4 6.9 2.3 17.7 5.1 24 6.4 6.3 1.3 16.4 2.8 22.5 3.4 6.1.6 15.7 1.1 21.5 1.1 5.8 0 16.2-.7 23.3-1.5 7-.8 16-2.2 20-3.1 3.9-.9 11.3-2.7 16.2-4.1 4.9-1.4 13.9-4.6 20-7 6.1-2.4 15.3-6.7 20.5-9.5 5.2-2.8 10.9-5.8 12.5-6.7 1.8-1 5.4-1.6 9.2-1.6 5.2 0 6.8.5 10.4 3 2.4 1.7 5.3 5 6.6 7.5 1.5 2.8 2.3 6.2 2.3 9 0 2.6-1 6.4-2.3 8.9-1.2 2.5-3.6 5.5-5.2 6.7-1.6 1.2-7.3 4.5-12.5 7.4-5.2 2.8-14.4 7.3-20.5 9.9-6.1 2.7-16.2 6.5-22.5 8.6-6.3 2-16.2 4.7-22 6-5.8 1.3-16.8 3.3-24.5 4.4-10.3 1.6-18.9 2.1-32.5 2.1-13.6 0-22.2-.5-32.5-2.1-7.7-1.1-18.3-3-23.5-4.1-5.2-1.1-15.1-3.8-22-6s-17.4-6.2-23.5-8.7c-6.1-2.6-15.7-7.4-21.5-10.6-5.8-3.2-14.3-8.3-19-11.5-4.7-3.1-13-9.3-18.5-13.7-5.5-4.4-14.7-12.7-20.4-18.4-5.7-5.7-14-14.9-18.4-20.4C52.3 411 46.1 402.7 43 398c-3.1-4.7-8-12.6-10.8-17.5-2.8-4.9-7.2-13.7-9.7-19.5-2.6-5.8-6.6-16.1-9-23-2.3-6.9-5.4-17.7-6.9-24-1.4-6.3-3.5-18-4.6-26-1.4-9.9-2-19.9-2-31.5 0-11.1.6-22 1.9-31.5 1.1-8 3.1-19.9 4.6-26.5 1.5-6.6 4.7-17.6 7-24.5 2.4-6.9 6.4-17.2 9-23 2.5-5.8 6.9-14.6 9.7-19.5 2.8-5 7.7-12.8 10.8-17.5 3.1-4.7 9.3-13 13.7-18.5 4.4-5.5 13.2-15.1 19.4-21.2 6.3-6.2 15.5-14.5 20.4-18.4 5-4 12.8-9.8 17.5-12.9 4.7-3.2 13-8.2 18.5-11.3 5.5-3.1 15.2-7.8 21.5-10.5 6.3-2.7 17.1-6.8 24-9 6.9-2.2 17.2-5 23-6.3 5.8-1.2 15.7-3 22-3.9C230.5.9 241.4.2 254.5.1zm3.5 146.4c3.5.3 6.8 1.3 9 2.8 1.9 1.3 4.6 4.1 8.5 10.2l.5 76.5 76.5.5 3.9 2.5c2.2 1.4 5.1 4.3 6.5 6.4 2.1 3.2 2.6 5.2 2.6 10.5s-.5 7.4-2.5 10.5c-1.4 2.2-4.3 5.1-10.4 9.1l-76.6.5-.5 76.5-2.5 3.9c-1.4 2.2-4.3 5.1-6.4 6.5-3.2 2.1-5.2 2.6-10.6 2.6-5.4 0-7.4-.5-10.6-2.6-2.1-1.4-5-4.3-8.9-10.4L236 276l-76.5-.5-3.9-2.5c-2.2-1.4-5.1-4.3-6.5-6.4-2.1-3.2-2.6-5.2-2.6-10.5s.5-7.4 2.5-10.5c1.4-2.2 4.3-5.1 10.4-9.1l76.6-.5v-36.3c0-20.8.4-37.8 1-40 .6-2.1 2.7-5.4 5-7.7 2.2-2.2 5.5-4.4 7.3-5 1.7-.5 5.7-.7 8.7-.5z"
      style={{
        fill: "#126760",
      }}
    />
  </svg>
);

export default SvgPlus;
