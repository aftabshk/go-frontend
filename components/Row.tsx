import React from "react";
import {StyleSheet, View} from "react-native";
import Stone from "./Stone";

const Row = function (props) {
    return <View style={styles.row}>{
        new Array(9).fill("").map((_, index) => {
            return <Stone rowIndex={props.rowIndex} columnIndex={index} currentColor={props.currentColor} playStone={props.playStone}/>
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