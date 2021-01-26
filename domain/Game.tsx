import Point from "./Point";

class Game {
    players: Array<Player>

    constructor(players: Array<Player>) {
        this.players = players
    }

    placeStone(point: Point) {
        this.players[0].moves.push(point)
        this.players = this.players.reverse()
        return this
    }

    isPlayed(point: Point) {
        return this.players.some((player) => {
            return player.moves.some((move) => {
                return move.x == point.x && move.y == point.y
            })
        })
    }
}

class Player {
    name: String
    stone: String
    moves: Array<Point>

    constructor(name: String, stone: String, moves: Array<Point>) {
        this.name = name
        this.stone = stone
        this.moves = moves
    }
}

export {Game, Player}