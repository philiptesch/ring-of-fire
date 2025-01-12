import { Component } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
pickCardAnimation = false;
game: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  pickCard() {
    this.pickCardAnimation = true
  }

  newGame() {
    this.game =  new Game();
  }

}
