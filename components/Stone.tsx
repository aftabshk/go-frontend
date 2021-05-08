import React, {useState} from "react";
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import Point from "../domain/Point"

const Stone = function (props) {
    const [style, setStyle] = useState(styles.hiddenStone)

    const playStone = function () {
        const isPlayed = props.placeStone(new Point(props.x, props.y))
        const gameId = "bd13002c-bf17-41b2-9fd3-15b81395e74b"

        if (isPlayed) return

        fetch(`http://localhost:8080/games/${gameId}/play`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                color: props.currentColor,
                point: {
                    x: props.x,
                    y: props.y
                }
            })
        })

        if (props.currentColor == "BLACK")
            setStyle(styles.blackStone)
        else
            setStyle(styles.whiteStone)
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
        alignItems: "center",
        justifyContent: "center",
        opacity: 0
    }
});

export default Stone;