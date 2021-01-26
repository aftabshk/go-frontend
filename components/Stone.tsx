import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {TouchableWithoutFeedback} from "react-native-web";
import Point from "../domain/Point"

const Stone = function (props) {
    const [style, setStyle] = useState(styles.hiddenStone)

    const playStone = function () {
        if (props.currentColor == "BLACK")
            setStyle(styles.blackStone)
        else
            setStyle(styles.whiteStone)

        props.playStone(new Point(props.rowIndex, props.columnIndex))
    }

    return (
        <TouchableWithoutFeedback onPress={playStone}>
            <View style={style}/>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    blackStone: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    whiteStone: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    hiddenStone: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0
    }
});

export default Stone;