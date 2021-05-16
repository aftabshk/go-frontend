import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Table from "./Table";
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

    componentDidMount() {
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
                <Table/>
                <Board
                    gameId={this.props.gameId}
                    currentColor={currentStone}
                    board={this.state.game.board}
                    placeStone={this.placeStone.bind(this)}
                />
            </View>
        );
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