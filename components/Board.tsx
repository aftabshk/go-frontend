import React from "react";
import {StyleSheet, View} from "react-native";
import Row from "./Row";

const Board = function (props) {
    return <View style={styles.board}>{
        new Array(9).fill("").map((_, index) => {
            return <Row rowIndex={index} currentColor={props.currentColor} playStone={props.playStone}/>
        })}</View>
};

const styles = StyleSheet.create({
    board: {
        position: "absolute",
        backgroundColor: "#f6d887",
        zIndex: -1
    }
});

export default Board;