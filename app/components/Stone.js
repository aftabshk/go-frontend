import React, {Component} from "react";
import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import httpClient from "../HttpClient";

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

        if (color === "WHITE") {
            style = styles.whiteStone
        }
        if (color === "BLACK") {
            style = styles.blackStone
        }

        return (
            <TouchableWithoutFeedback onPress={this.playStone.bind(this)}>
                <View style={style}/>
            </TouchableWithoutFeedback>
        );
    }
}

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