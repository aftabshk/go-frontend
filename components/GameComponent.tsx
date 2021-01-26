import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Table from "./Table";
import Board from "./Board";
import Point from "../domain/Point";
import {Game, Player} from "../domain/Game";

class GameComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: new Game(
                [
                    new Player("Luffy", "WHITE", []),
                    new Player("Zoro", "BLACK", [])
                ]
            )
        }
    }

    placeStone(point: Point) {
        if (this.state.game.isPlayed(point))
            return true
        this.setState({game: this.state.game.placeStone(point)})
        return false
    }

    render() {
        const currentStone = this.state.game.players[0].stone
        return (
            <View style={styles.container}>
                <Table/>
                <Board
                    currentColor={currentStone}
                    placeStone={this.placeStone.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: "relative"
    }
});

export default GameComponent