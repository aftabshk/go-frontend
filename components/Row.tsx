import React from "react";
import {StyleSheet, View} from "react-native";
import Stone from "./Stone";

const Row = function () {
    return <View style={styles.row}>{
        new Array(9).fill("").map(() => {
            return <Stone/>
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