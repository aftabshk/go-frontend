import React from "react";
import {StyleSheet, View} from "react-native";
import Row from "./Row";

const Board = function (props) {
    return <View style={styles.board}>{
        new Array(9).fill("").map((_, index) => {
            return <Row
                gameId={props.gameId}
                key={`row-${index}`}
                rowIndex={index}
                boardState={props.board.state}
                currentColor={props.currentColor}
                placeStone={props.placeStone}
            />
        })}</View>
};

const styles = StyleSheet.create({
    board: {
        position: "absolute"
    }
});

export default Board;