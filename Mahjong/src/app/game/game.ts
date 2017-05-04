export class Game {
  _id: string;
  createdBy: {
      _id: string;
      name: string;
      __v: number;
    };
    createdOn: string;
    gameTemplate: {
      _id: string;
      __v: number;
      id: string;
    };
    __v: number;
    players: [
      {
        _id: string;
        name: string;
        __v: number;
      }
    ];
    maxPlayers: number;
    minPlayers: number;
    state: string;
    id: string;
}