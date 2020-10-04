import React from "react";
import {StyleSheet, View} from "react-native";
import TableRow from "./TableRow";

const Table = function () {
    return <View style={styles.table} pointerEvents={"none"}>{
        new Array(8).fill("").map(() => {
            return <TableRow/>
        })}</View>
}

const styles = StyleSheet.create({
    table: {
        position: "absolute"
    }
});

export default Table