import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Table from "./Table";
import Board from "./Board";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {
                players: [
                    {
                        name: "Luffy",
                        stone: "WHITE",
                        moves: []
                    },
                    {
                        name: "Zoro",
                        stone: "BLACK",
                        moves: []
                    }
                ]
            }
        }
    }

    playStone() {
        this.setState({...this.state, players: this.state.game.players.reverse()})
    }


    render() {
        const currentPlayer = this.state.game.players[0]

        return (
            <View style={styles.container}>
                <Table/>
                <Board currentColor={currentPlayer.stone} playStone={this.playStone.bind(this)}/>
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

export default Game