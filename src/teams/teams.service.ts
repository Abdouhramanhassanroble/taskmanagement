import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  async getTeams() {

    return [
        { id: 1, name: 'Team 1', city: 'City 1' , players: ['Player 1', 'Player 2', 'Player 3']},
        { id: 2, name: 'Team 2', city: 'City 2' , players: ['Player 4', 'Player 5', 'Player 6']},
        { id: 3, name: 'Team 3', city: 'City 3' , players: ['Player 7', 'Player 8', 'Player 9']},
        { id: 4, name: 'Team 4', city: 'City 4' , players: ['Player 10', 'Player 11', 'Player 12']},
        { id: 5, name: 'Team 5', city: 'City 5' , players: ['Player 13', 'Player 14', 'Player 15']},
    ];
  }

}
