import { Injectable } from "@nestjs/common";

@Injectable()
export class PlayersService {
    async getPlayers() {

        return [
            { id: 1, name: 'Player 1', age: 20 },
            { id: 2, name: 'Player 2', age: 21 },
            { id: 3, name: 'Player 3', age: 22 },
            { id: 4, name: 'Player 4', age: 23 },
            { id: 5, name: 'Player 5', age: 24 },
            { id: 6, name: 'Player 6', age: 25 },
            { id: 7, name: 'Player 7', age: 26 },
            { id: 8, name: 'Player 8', age: 27 },
            { id: 9, name: 'Player 9', age: 28 },
            { id: 10, name: 'Player 10', age: 29 },
            { id: 11, name: 'Player 11', age: 30 },
            { id: 12, name: 'Player 12', age: 31 },
            { id: 13, name: 'Player 13', age: 32 },
            { id: 14, name: 'Player 14', age: 33 },
            { id: 15, name: 'Player 15', age: 34 },

        ];
    }
}

    