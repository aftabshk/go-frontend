import {StyleSheet, View} from "react-native";
import React from "react";
import Grid from "./Grid";

const TableRow = function (props) {
    return <View style={styles.row} pointerEvents={"none"}>{
        new Array(8).fill("").map((_, index) => {
            return <Grid key={`grid-${props.rowIndex}-${index}`}/>
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