import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Board from "./Board";
import httpClient from "../HttpClient";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {
                players: [],
                board: {},
                currentPlayer: "BLACK"
            }
        }
    }

    drawStartPoints(starPoints, ctx) {
        for (let i = 0; i < starPoints.length; i++) {
            for (let j = 0; j < starPoints.length; j++) {
                ctx.moveTo(starPoints[i], starPoints[j])
                ctx.arc(starPoints[i], starPoints[j], 5, 0, Math.PI * 2, true)
            }
        }
        const centerPoint = starPoints[0] + (starPoints[1] - starPoints[0])/2

        ctx.moveTo(centerPoint, centerPoint)
        ctx.arc(centerPoint, centerPoint, 5, 0, Math.PI * 2, true)
        ctx.fill()
    }

    componentDidMount() {
        const canvas = document.getElementById("board");
        const ctx = canvas.getContext("2d");
        const scale = [30, 510];

        ctx.beginPath();
        for (let cellSize = 30; cellSize <= 540; cellSize += 60) {
            ctx.moveTo(scale[0], cellSize);
            ctx.lineTo(scale[1], cellSize);
            ctx.moveTo(cellSize, scale[0]);
            ctx.lineTo(cellSize, scale[1]);
        }
        ctx.stroke();
        this.drawStartPoints([150, 390], ctx)

        httpClient.get(`/games/${this.props.gameId}`).then(game => {
            this.setState({game: game})
        })
    }

    placeStone(game) {
        this.setState({game: {...game}})
        return false
    }

    render() {
        const currentStone = this.state.game.currentPlayer
        return (
            <View style={styles.container}>
                <Board
                    gameId={this.props.gameId}
                    currentColor={currentStone}
                    board={this.state.game.board}
                    placeStone={this.placeStone.bind(this)}
                />
                <canvas id={"board"} width={540} height={540}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 540,
        height: 540,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f6d887",
    }
});

export default Game