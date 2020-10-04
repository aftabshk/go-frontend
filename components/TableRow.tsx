import {StyleSheet, View} from "react-native";
import React from "react";
import Grid from "./Grid";

const TableRow = function () {
    return <View style={styles.row} pointerEvents={"none"}>{
        new Array(8).fill("").map(() => {
            return <Grid/>
        })}</View>
};


const styles = StyleSheet.create(
    {
        row: {
            flexDirection: "row"
        }
    }
)
export default TableRow