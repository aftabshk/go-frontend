import React from "react";
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import httpClient from "../HttpClient";

const Stone = function (props) {
    const playStone = function () {
        const isPlayed = props.placeStone({x: props.x, y: props.y})
        const gameId = "bd13002c-bf17-41b2-9fd3-15b81395e74b"

        if (isPlayed) return

        httpClient.post(`/games/${gameId}/play`, {
            color: props.currentColor,
            point: {
                x: props.x,
                y: props.y
            }
        })
    }

    const coordinates = `${props.x}, ${props.y}`
    const color = props.boardState && props.boardState[coordinates] && props.boardState[coordinates].color

    let style = styles.hiddenStone

    if (color == "WHITE") {
        style = styles.whiteStone
    }
    if (color == "BLACK") {
        style = styles.blackStone
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