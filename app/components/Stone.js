import React, {Component} from "react";
import {StyleSheet, TouchableWithoutFeedback} from "react-native";
import httpClient from "../HttpClient";
import {Image} from "react-native-web";

class Stone extends Component {
    constructor(props) {
        super(props);
    }

    playStone() {
        const point = {x: this.props.x, y: this.props.y};
        const boardState = this.props.boardState;
        if (this.isPlayed(boardState, point)) return

        httpClient.post(`/games/${this.props.gameId}/play`, {
            color: this.props.currentColor,
            point: {
                x: this.props.x,
                y: this.props.y
            }
        })
            .then((res) => res.json())
            .then((game) => this.props.placeStone(game))
    }

    isPlayed(boardState, point) {
        const coordinates = `${point.x}, ${point.y}`
        return this.isPointOccupiedOnBoard(boardState, coordinates)
    }

    isPointOccupiedOnBoard(boardState, coordinates) {
        return boardState[coordinates] !== undefined;
    }

    render() {
        const coordinates = `${this.props.x}, ${this.props.y}`
        const color = this.props.boardState && this.props.boardState[coordinates] && this.props.boardState[coordinates].color

        let style = styles.hiddenStone
        let imageSource = ""

        if (color === "WHITE") {
            style = styles.whiteStone
            imageSource = require("../assets/white-stone.png")
        }
        if (color === "BLACK") {
            style = styles.blackStone
            imageSource = require("../assets/black-stone.png")
        }

        return (
            <TouchableWithoutFeedback onPress={this.playStone.bind(this)}>
                <Image source={imageSource} style={style}/>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    blackStone: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    whiteStone: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    hiddenStone: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0
    }
});

export default Stone;