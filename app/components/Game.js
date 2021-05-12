import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Table from "./Table";
import Board from "./Board";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {
                players: [],
                board: {}
            }
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8080/games/${this.props.gameId}`).then((res) => {
            return res.json()
        }).then(game => {
            this.setState({game: game})
        })
    }

    placeStone(point) {
        if (this.isPlayed(point))
            return true
        this.setState({game: this.addStone(point)})
        return false
    }

    render() {
        const currentStone = (this.state.game.players[0] && this.state.game.players[0].stoneColor) || "WHITE"
        return (
            <View style={styles.container}>
                <Table/>
                <Board
                    currentColor={currentStone}
                    board={this.state.game.board}
                    placeStone={this.placeStone.bind(this)}
                />
            </View>
        );
    }

    isPlayed(point) {
        const coordinates = `${point.x}, ${point.y}`
        return this.state.game.board.state[coordinates] != undefined
    }

    addStone(point) {
        const game = {...this.state.game}
        const color = game.players[0].stoneColor
        game.players[0].moves.push(point)
        game.players = game.players.reverse()
        game.board.state[`${point.x}, ${point.y}`] = {color: color, point: point}
        return game
    }
}

const styles = StyleSheet.create({
    container: {
        width: 450,
        height: 450,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f6d887",
    }
});

export default Game