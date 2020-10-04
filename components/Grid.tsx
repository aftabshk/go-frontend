import {StyleSheet, View} from "react-native";
import React from "react";

const Grid = function () {
    return <View style={styles.grid} pointerEvents={"none"}/>;
};

const styles = StyleSheet.create({
    grid: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "white"
    },
});

export default Grid;
