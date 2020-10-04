import React from "react";
import {StyleSheet, View} from "react-native";
import Row from "./Row";

const Board = function () {
    return <View style={styles.board}>{
        new Array(9).fill("").map(() => {
            return <Row/>
        })}</View>
};

const styles = StyleSheet.create({
    board: {
        position: "absolute"
    }
});

export default Board;