export class Game {
  constructor(templateName: string, minPlayers: number, maxPlayers: number){
      this.gameTemplate = {_id: templateName, id: templateName};
      this.minPlayers = minPlayers;
      this.maxPlayers = maxPlayers;
  }

  _id: string;
  createdBy: {
      _id: string;
      name: string;
    };
    createdOn: string;
    gameTemplate: {
      _id: string;
      id: string;
    };
    players: [
      {
        _id: string;
        name: string;
      }
    ];
    maxPlayers: number;
    minPlayers: number;
    state: string;
    id: string;
}