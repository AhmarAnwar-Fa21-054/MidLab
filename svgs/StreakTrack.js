import React from "react";
import { Svg, Path, Text } from "react-native-svg";

function StreakTrack(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            {...props}
        >
            <Path
            fill={"#005390"}
                d="M511.99 960.22C264.84 960.22 63.77 759.15 63.77 512S264.84 63.78 511.99 63.78 960.23 264.85 960.23 512 759.14 960.22 511.99 960.22zm0-823.81C304.88 136.41 136.4 304.89 136.4 512s168.48 375.59 375.59 375.59c207.13 0 375.61-168.48 375.61-375.59S719.12 136.41 511.99 136.41z"
            />
            <Text textAnchor="middle" x="512" y="580" fontWeight="bold" fontSize={200} fill="black">
                {props.streak}
            </Text>
        </Svg>
    )
}

export default StreakTrack