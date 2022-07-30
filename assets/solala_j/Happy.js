import * as React from "react";
import Svg, {
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
  G,
  Path,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 834 834" {...props}>
    <Defs>
      <RadialGradient
        id="g3"
        cx={335.6}
        cy={389.8}
        r={296.1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#4aa19a" />
        <Stop offset={0.5} stopColor="#126760" />
        <Stop offset={1} stopColor="#043f3a" />
      </RadialGradient>
      <RadialGradient
        id="g4"
        cx={278.8}
        cy={523.4}
        r={396}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#4aa19a" />
        <Stop offset={0.5} stopColor="#126760" />
        <Stop offset={1} stopColor="#043f3a" />
      </RadialGradient>
      <RadialGradient
        id="g6"
        cx={387.8}
        cy={145.5}
        r={404.3}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#f7dc83" />
        <Stop offset={0.5} stopColor="#e1ad01" />
        <Stop offset={1} stopColor="#997602" />
      </RadialGradient>
      <RadialGradient
        id="g7"
        cx={413.4}
        cy={201.6}
        r={54.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#595959" />
        <Stop offset={1} stopColor="#141414" />
      </RadialGradient>
      <LinearGradient
        id="g1"
        x1={698.4}
        x2={766.1}
        y1={292.1}
        y2={610.6}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#043f3a" />
        <Stop offset={0.5} stopColor="#126760" />
        <Stop offset={1} stopColor="#4aa19a" />
      </LinearGradient>
      <LinearGradient
        id="g2"
        x1={-75.5}
        x2={205.5}
        y1={520.6}
        y2={429.3}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#043f3a" />
        <Stop offset={0.5} stopColor="#126760" />
        <Stop offset={1} stopColor="#4aa19a" />
      </LinearGradient>
      <LinearGradient
        id="g5"
        x1={447.5}
        x2={601.6}
        y1={446.7}
        y2={848.1}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#141414" />
        <Stop offset={0.4} stopColor="#141414" />
        <Stop offset={1} stopColor="#474848" />
      </LinearGradient>
    </Defs>
    <G id="Leaves">
      <G id="Hi">
        <Path
          id="Right leaf up"
          fill="url(#g1)"
          d="M712.3 436.1q-19.8-.2-34.2 6.4-14.4 6.6-29.5 22.7-2.2 2.4-7.3 8.5-5.2 6.1-8.2 9.2-2.3 2.4-4.9 2.4-2.9 0-4.9-2.5-2-2.5-2-5.9 0-3.2 2.1-5.9 13.5-17.5 26-28.4 12.5-10.9 28.5-17.2 15.9-6.2 34.6-6 2.9 0 4.9 2.5 2 2.5 2 5.9 0 3.4-2.1 5.9-2.1 2.4-5 2.4zm62.4-46q-.8-7.6-2.4-16.3-1.7-8.6-5-14.7-3.4-6-7.6-6.1-2.6 0-4.8.6-2.1.5-4 2-1.8 1.5-2.9 2.6-1.1 1.1-3.3 3.6-2.1 2.5-3.2 3.8-4.3 4.8-12.5 7.3-8.1 2.4-17.8 2.9-9.7.5-19.4.5-9.8.1-19.6 1-9.8.8-15.8 3.1-11.9 4.6-22.3 12.2-10.5 7.7-18.8 18-8.4 10.3-13.2 23.9-4.9 13.7-5.1 28.7-.1 7 .8 13.6.2 1.3 1.7 5.8 1.4 4.5 1.4 5 0 2.5-3.4 6.2-3.4 3.8-7.5 7.3-4.1 3.4-7.5 8.4-3.4 5-3.5 9.6 0 .9.2 1.8.1.8.3 1.2.1.4.6 1.3.4.9.6 1.5 1.8 3.8 2.9 5.5 1 1.7 3.3 3.2 2.3 1.4 5.5 1.5 3.2 0 6.6-4.1 3.4-4.2 5.8-9.1 2.4-5 5-9.1 2.6-4.2 4.4-4.1 2.5 0 10.4 4.9t9.5 5.6q14.9 6.3 31 6.5 24.4.3 47.9-13.5 23.9-14 39.3-34.6 15.3-20.6 20.6-49.8 2.4-12.8 2.5-25.2.1-4.9-.7-12.5z"
        />
        <Path
          id="Left leaf default"
          fill="url(#g2)"
          d="M103.2 464.7q-2.7.8-5.4-1.1-2.6-1.8-3.6-5.1-.9-3.2.4-6.2 1.4-2.9 4.1-3.7 18-5.1 35-3.1 17.1 1.9 32 9.2 14.8 7.3 32.4 20.7 2.7 2.1 3.6 5.1.9 3.3-.4 6.2-1.4 3-4.1 3.7-2.5.7-5.4-1-3.6-2.3-10.2-6.8t-9.4-6.3q-18.7-11.6-34.3-14.3-15.6-2.6-34.7 2.7zM31 436.4q-1.2-7.6-1.8-16.3-.7-8.8 1-15.5 1.7-6.7 5.8-7.9 2.5-.7 4.7-.7t4.4.9q2.2 1 3.5 1.8 1.4.7 4.1 2.6 2.7 1.9 4.1 2.9 5.4 3.5 13.9 3.7 8.5.3 18-1.8 9.5-2 18.9-4.5 9.4-2.4 19.1-4.1 9.7-1.7 16.1-1.1 12.7 1.4 24.8 6.1 12 4.7 22.7 12.4 10.7 7.8 19 19.8 8.3 11.9 12.3 26.4 1.9 6.6 2.8 13.3.1 1.3-.2 6-.2 4.7-.1 5.2.7 2.4 5 5.1 4.2 2.8 9.1 5.1 4.8 2.3 9.4 6.2 4.6 4 5.8 8.4.3.8.4 1.7v1.3q-.1.4-.2 1.4-.2 1-.3 1.6-.7 4.1-1.3 6-.6 2-2.4 4-1.8 2-5 2.9-3 .8-7.4-2.3-4.4-3.1-8-7.3-3.6-4.1-7.2-7.5-3.5-3.3-5.2-2.8-2.4.7-8.8 7.5-6.3 6.8-7.7 7.8-12.8 10-28.3 14.4-23.5 6.5-49.7-.8-26.8-7.2-46.9-23.2-20.2-15.9-32.9-42.7-5.5-11.8-8.9-23.7-1.3-4.8-2.6-12.3z"
        />
      </G>
    </G>
    <G id="Body">
      <Path
        id="Left leg"
        d="M273.5 784c-16.3 0-29.5-12.5-29.5-28s13.2-28 29.5-28 29.5 12.5 29.5 28-13.2 28-29.5 28z"
        className="s2"
      />
      <Path
        id="Right leg"
        d="M561.5 784c-16.3 0-29.5-12.5-29.5-28s13.2-28 29.5-28 29.5 12.5 29.5 28-13.2 28-29.5 28z"
        className="s2"
      />
      <Path
        id="Stem"
        fill="url(#g3)"
        d="M348.1 487.7c0-22.2 1.2-42.9 12.3-56 12.6-14.7 28.3-20.4 33-31.2l14.9-100.9c-.3-3.9-2.6-64.4-3-68.3-.6-6.7 1-25 2.7-31.7h20.7c1.3 3.7 3.3 24.7 3.6 31.7.2 3.9-4 65-4.3 69l13.6 100.1c7.7 12.6 24.1 18.2 33.1 31.1 9.8 14.1 12.4 33.8 12.4 56"
      />
      <Path
        fill="url(#g4)"
        d="M418 781c-132.7 0-240-72-240-161s107.3-161 240-161 240 72 240 161-107.3 161-240 161z"
      />
      <Path
        id="Face"
        fill="url(#g5)"
        d="M417 750c-106.2 0-192-49.8-192-111.5S310.8 527 417 527s192 49.8 192 111.5S523.2 750 417 750z"
      />
    </G>
    <G id="Happy">
      <Path
        id="Mouth"
        d="M404 699c0-2.8 2.2-5 5-5h18c2.8 0 5 2.2 5 5s-2.2 5-5 5h-18c-2.8 0-5-2.2-5-5z"
        className="s6"
      />
      <Path
        id="Right Eye"
        d="M453.2 637q0-11.4 5.6-21t15.2-15.2q9.6-5.6 21-5.6t21 5.6q9.6 5.6 15.2 15.2t5.6 21m17.2 0q0-16.1-7.9-29.6-7.9-13.6-21.5-21.5-13.5-7.9-29.6-7.9t-29.6 7.9q-13.6 7.9-21.5 21.5-7.9 13.5-7.9 29.6"
        className="s6"
      />
      <Path
        id="Left Eye"
        d="M298.2 637q0-11.4 5.6-21t15.2-15.2q9.6-5.6 21-5.6t21 5.6q9.6 5.6 15.2 15.2t5.6 21m17.2 0q0-16.1-7.9-29.6-7.9-13.6-21.5-21.5-13.5-7.9-29.6-7.9t-29.6 7.9q-13.6 7.9-21.5 21.5-7.9 13.5-7.9 29.6"
        className="s6"
      />
    </G>
    <G id="Flower">
      <Path
        id="flower"
        fill="url(#g6)"
        d="M479.3 337.2q2.9-14.3-.6-25.8T464 286.3q-1.7-2-6.1-6.7-4.3-4.8-6.5-7.4-1.7-2.1-1.3-4 .4-2 2.8-3.1t5.2-.5q2.6.5 4.5 2.5 12.7 12.6 20 23.4 7.3 10.8 10.3 23.4 3 12.6.3 26.1-.5 2.1-2.8 3.2-2.4 1-5.2.5-2.8-.6-4.6-2.5-1.7-2-1.3-4zm29.6 52.7q6.4.6 13.8.8 7.4.2 12.9-1.2 5.5-1.5 6.1-4.6.4-1.9.2-3.5t-1.1-3.2q-1-1.6-1.8-2.6-.7-1-2.5-2.9l-2.7-3q-3.4-3.9-4.3-10.2-.9-6.3 0-13.4 1-7.1 2.3-14.2 1.2-7.1 1.9-14.3.6-7.3-.4-12-2.2-9.4-7.1-18.2-4.9-8.8-12.3-16.5-7.4-7.7-18-13.4-10.7-5.8-23.2-8.3-5.7-1.2-11.4-1.6-1.1-.1-5 .2-3.9.4-4.3.3-2.1-.4-4.7-3.5-2.7-3.1-5-6.6-2.3-3.5-6-6.8-3.6-3.3-7.4-4.1-.8-.1-1.5-.2-.7 0-1.1.1-.3 0-1.2.2-.8.1-1.3.2-3.4.7-4.9 1.2-1.6.5-3.1 1.9-1.6 1.4-2 3.8-.5 2.3 2.5 5.4 2.9 3.2 6.7 5.7 3.7 2.5 6.8 5.1c2.1 1.7 4.4 5.9 4.2 6.8-.3 1.2-3.2 2.1-6.8 5.2-3.6 3-5.4 4.6-6.9 6.7-4.6 6.7-7.3 11.6-8.9 19.3q-3.6 17.7 4.7 36.9 8.2 19.6 23.2 34.1 15 14.4 38.5 23 10.3 3.7 20.6 5.9 4.1.8 10.5 1.5zM554.1 223q-10.9-9.7-22.6-12.5-11.7-2.7-29.1.3-2.6.5-8.8 1.9-6.3 1.3-9.7 1.9-2.7.4-4.1-.9-1.6-1.3-1.3-3.9.2-2.6 2.2-4.8 1.7-1.9 4.4-2.7 17.2-4.6 30.2-5.5 13.1-1 25.5 2.7t22.7 12.9q1.6 1.4 1.3 4-.2 2.5-2.1 4.7-1.9 2.1-4.5 2.7-2.5.6-4.1-.8zm60.4.7q3.8-5.3 7.7-11.6 3.9-6.3 5.3-11.8 1.5-5.4-.8-7.5-1.5-1.3-3-2-1.5-.6-3.3-.6-1.9.1-3.1.2-1.3.2-3.9.8-2.6.5-3.9.8-5.1 1-11-1.4-5.9-2.3-11.5-6.7-5.7-4.4-11.2-9-5.5-4.7-11.5-8.8-5.9-4.2-10.6-5.7-9.1-2.8-19.2-3-10.1-.1-20.5 2.4-10.3 2.6-20.6 9-10.4 6.3-18.8 15.8-3.9 4.4-7.1 9.1-.6.9-2.2 4.5-1.7 3.5-2 3.9-1.4 1.5-5.4 2.3-4 .7-8.2 1-4.2.2-8.9 1.8-4.6 1.5-7.2 4.4-.5.6-.9 1.2t-.5.9q-.2.4-.4 1.2-.3.7-.5 1.2-1.1 3.3-1.4 4.9-.4 1.6.1 3.6.4 2.1 2.2 3.7 1.8 1.5 6 .5t8.3-3q4.1-2 7.8-3.4c2.5-.9 7.3-.7 8-.2.9.8.2 3.9 1.1 8.6.8 4.5 1.2 6.9 2.4 9.2 3.5 7.4 6.3 12.1 12.2 17.4q13.5 11.9 34.3 14.4 21.1 2.7 41.1-3.1 20-5.7 39.2-21.8 8.4-7 15.4-14.9 2.8-3.1 6.5-8.3zM492.4 100.2q-13.9 4.6-22.1 13.4-8.2 8.8-14.3 25.3-.9 2.5-2.8 8.6t-3.2 9.3q-.9 2.5-2.7 3.2-2 .6-4.1-.9-2.1-1.5-3-4.2-.9-2.5-.2-5.2 4.6-17.3 10.3-29 5.7-11.8 15.1-20.7 9.4-8.9 22.5-13.2 2-.7 4.1.8 2.2 1.5 3.1 4.3.9 2.7.1 5.2-.8 2.4-2.8 3.1zm30.8-52q-2.6-5.8-6.1-12.4-3.6-6.5-7.6-10.5-4-4-7-3-1.8.6-3.1 1.6-1.3.9-2.2 2.6-.9 1.6-1.4 2.7-.5 1.2-1.3 3.7l-1.2 3.9q-1.7 4.8-6.7 8.8-5 3.9-11.6 6.6-6.6 2.8-13.4 5.2-6.8 2.4-13.4 5.5-6.6 3.1-10.1 6.4-7.1 6.5-12.2 15.2-5.2 8.6-8.2 18.9-3 10.2-2.6 22.3.3 12.1 4.3 24.2 1.9 5.5 4.4 10.7.5 1 2.7 4.2 2.3 3.2 2.4 3.6.7 2-.7 5.8-1.3 3.8-3.2 7.6-1.9 3.8-2.9 8.6t.2 8.5q.2.7.6 1.4.3.6.5.9.3.3.8.9.6.6.9 1 2.3 2.6 3.5 3.7 1.2 1.1 3.2 1.8 2 .6 4.3-.2 2.2-.7 3.4-4.9 1.3-4.1 1.6-8.6.3-4.6 1-8.5c.4-2.7 2.9-6.7 3.7-7 1.2-.4 3.5 1.7 8 3.3 4.4 1.5 6.6 2.3 9.2 2.6 8.1.6 13.7.5 21.2-2q17.1-5.7 29.6-22.4 12.9-17 17.9-37.2 5-20.2.7-44.9-1.9-10.7-5.2-20.7-1.3-4-4-9.9zM355.4 92.5q-3 14.4.5 25.9 3.5 11.5 14.8 25 1.7 2 6 6.7 4.4 4.8 6.5 7.4 1.7 2.1 1.3 4-.4 2.1-2.7 3.1-2.4 1.1-5.2.5-2.6-.5-4.6-2.5-12.6-12.6-19.9-23.4-7.4-10.8-10.4-23.4-3-12.6-.2-26.1.4-2 2.8-3.1t5.2-.5q2.8.6 4.5 2.5 1.8 1.9 1.4 3.9zm-29.6-52.6q-6.4-.7-13.8-.9-7.4-.2-12.9 1.3-5.5 1.4-6.1 4.5-.4 1.9-.3 3.5.2 1.7 1.2 3.3 1 1.6 1.7 2.5.8 1 2.6 3 1.8 1.9 2.7 2.9 3.4 3.9 4.3 10.2.9 6.3-.1 13.4-.9 7.1-2.2 14.2-1.3 7.1-1.9 14.4-.7 7.2.4 11.9 2.1 9.4 7.1 18.2 4.9 8.8 12.2 16.5 7.4 7.7 18.1 13.5 10.7 5.7 23.1 8.3 5.8 1.2 11.4 1.6 1.1 0 5-.3 3.9-.4 4.4-.3 2 .5 4.7 3.5 2.6 3.1 4.9 6.6 2.4 3.5 6 6.8 3.7 3.3 7.5 4.1.7.2 1.5.2h1.1q.3-.1 1.1-.2.8-.2 1.3-.3 3.4-.7 5-1.2t3.1-1.9q1.5-1.4 2-3.7.5-2.3-2.5-5.5-3-3.1-6.7-5.7-3.8-2.5-6.9-5.1c-2-1.7-4.3-5.9-4.1-6.7.2-1.2 3.2-2.2 6.8-5.3 3.5-3 5.3-4.5 6.8-6.6 4.7-6.8 7.3-11.6 8.9-19.4q3.6-17.6-4.6-36.9-8.3-19.6-23.3-34-14.9-14.5-38.4-23.1-10.3-3.7-20.6-5.8-4.1-.9-10.5-1.5zm-45.3 166.9q11 9.7 22.7 12.4 11.7 2.7 29-.2 2.6-.5 8.9-1.9 6.3-1.4 9.7-1.9 2.6-.5 4.1.8 1.5 1.4 1.3 4-.3 2.5-2.2 4.7-1.8 2-4.4 2.7-17.3 4.6-30.3 5.6-13 .9-25.4-2.8-12.4-3.7-22.8-12.8-1.5-1.4-1.3-4 .3-2.6 2.2-4.8 1.9-2.1 4.4-2.7 2.6-.5 4.1.9zm-60.4-.7q-3.7 5.2-7.6 11.5-3.9 6.3-5.4 11.8-1.5 5.5.9 7.6 1.4 1.2 2.9 1.9t3.4.6q1.9 0 3.1-.2 1.2-.2 3.8-.7 2.6-.6 4-.9 5-1 10.9 1.4t11.6 6.7q5.7 4.4 11.2 9 5.5 4.7 11.4 8.9 6 4.2 10.6 5.6 9.2 2.8 19.3 3 10.1.1 20.4-2.4 10.4-2.6 20.7-8.9 10.3-6.4 18.8-15.9 3.8-4.4 7-9.1.7-.9 2.3-4.4 1.7-3.6 1.9-3.9 1.4-1.6 5.4-2.3 4-.8 8.2-1.1 4.2-.2 8.9-1.7 4.7-1.6 7.3-4.5.5-.5.9-1.2.4-.6.5-.9.1-.3.4-1.1.3-.8.4-1.3 1.1-3.3 1.5-4.9.3-1.6-.1-3.6-.5-2-2.3-3.6-1.7-1.6-5.9-.6t-8.3 3q-4.1 2-7.9 3.4c-2.5.9-7.3.8-7.9.2-.9-.8-.3-3.9-1.1-8.5-.9-4.6-1.3-6.9-2.4-9.3-3.5-7.4-6.4-12.1-12.3-17.4q-13.4-11.9-34.2-14.4-21.2-2.7-41.2 3.1-20 5.8-39.2 21.8-8.3 7.1-15.3 14.9-2.8 3.2-6.6 8.4zm122.1 123.4q13.9-4.6 22.1-13.4 8.2-8.8 14.4-25.2.8-2.5 2.8-8.7 1.9-6.1 3.1-9.3 1-2.5 2.8-3.1 2-.7 4.1.8 2.1 1.5 3 4.3.8 2.5.1 5.2-4.6 17.2-10.3 29-5.7 11.7-15.1 20.6-9.4 8.9-22.5 13.3-2 .6-4.1-.9-2.1-1.5-3-4.2-.9-2.8-.1-5.2.8-2.5 2.7-3.2zm-30.8 52q2.7 5.9 6.2 12.4t7.5 10.5q4 4 7 3.1 1.8-.7 3.2-1.6 1.3-1 2.2-2.6.9-1.7 1.4-2.8.4-1.2 1.2-3.7.8-2.5 1.2-3.8 1.7-4.9 6.7-8.8 5-4 11.7-6.7 6.6-2.7 13.4-5.2 6.7-2.4 13.3-5.5 6.6-3 10.2-6.3 7-6.6 12.2-15.2 5.2-8.7 8.2-18.9 2.9-10.3 2.6-22.4-.4-12.1-4.4-24.2-1.8-5.5-4.3-10.6-.5-1-2.8-4.2-2.2-3.2-2.3-3.7-.7-2 .6-5.8 1.4-3.8 3.3-7.6 1.8-3.7 2.9-8.6 1-4.8-.2-8.5-.3-.7-.6-1.3-.4-.7-.6-1-.2-.2-.8-.9-.5-.6-.8-1-2.3-2.6-3.5-3.7-1.2-1.1-3.2-1.7-2-.6-4.3.1-2.2.8-3.5 4.9-1.2 4.1-1.5 8.7-.3 4.5-1 8.5c-.4 2.6-3 6.7-3.8 6.9-1.1.4-3.5-1.7-7.9-3.3-4.4-1.5-6.6-2.3-9.2-2.5-8.2-.7-13.7-.6-21.2 1.9q-17.1 5.7-29.6 22.5-12.9 17-17.9 37.2-5 20.1-.7 44.8 1.9 10.8 5.2 20.7 1.3 4 3.9 9.9z"
      />
      <Path
        id="Flower center"
        fill="url(#g7)"
        d="M417 237c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"
      />
    </G>
  </Svg>
);

export default SvgComponent;
