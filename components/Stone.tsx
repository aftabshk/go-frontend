import React from "react";
import {StyleSheet, View} from "react-native";
import {TouchableWithoutFeedback} from "react-native-web";

const Stone = function () {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.stone}/>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    stone: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
});

export default Stone;