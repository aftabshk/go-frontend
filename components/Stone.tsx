import React, {useState} from "react";
import {StyleSheet, View} from "react-native";
import {TouchableWithoutFeedback} from "react-native-web";

const Stone = function () {
    const [style, setStyle] = useState(styles.hiddenStone)

    const playStone = function () {
        setStyle(styles.stone)
    }

    return (
        <TouchableWithoutFeedback onPress={playStone}>
            <View style={style}/>
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