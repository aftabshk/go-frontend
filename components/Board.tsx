import React from "react";
import {View} from "react-native";
import Row from "./Row";

const Board = function () {
    return <View>{
        new Array(9).fill("").map(() => {
            return <Row/>
        })}</View>
};

export default Board;