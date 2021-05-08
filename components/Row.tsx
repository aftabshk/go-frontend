import React from "react";
import {StyleSheet, View} from "react-native";
import Stone from "./Stone";

const Row = function (props) {
    return <View style={styles.row}>{
        new Array(9).fill("").map((_, index) => {
            return <Stone
                key={`stone-${props.rowIndex}-${index}`}
                x={props.rowIndex + 1}
                y={index + 1}
                currentColor={props.currentColor}
                placeStone={props.placeStone}
            />
        })}</View>
};


const styles = StyleSheet.create(
    {
        row: {
            flexDirection: "row"
        }
    }
)


export default Row;