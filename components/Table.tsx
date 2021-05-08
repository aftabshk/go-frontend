import React from "react";
import {StyleSheet, View} from "react-native";
import TableRow from "./TableRow";

const Table = function () {
    return <View style={styles.table} pointerEvents={"none"}>{
        new Array(8).fill("").map((_, index) => {
            return <TableRow rowIndex={index} key={`table-row-${index}`}/>
        })}</View>
}

const styles = StyleSheet.create({
    table: {
        position: "absolute",
        borderWidth: 1
    }
});

export default Table