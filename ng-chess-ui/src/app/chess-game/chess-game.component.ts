import { Component, OnInit, ViewChild } from '@angular/core';

import {
  MoveChange,
  NgxChessBoardComponent,
  NgxChessBoardService,
  NgxChessBoardView
} from 'ngx-chess-board';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})

export class ChessGameComponent implements OnInit {

  constructor(private ngxChessBoardService: NgxChessBoardService) { }
  @ViewChild('player', {static: false}) playerBoard: NgxChessBoardComponent;
  @ViewChild('plans', {static: true}) planningBoard: NgxChessBoardView
  ngOnInit(): void {
  }

  ngAfterInit(): void {

  }

  moveCallback(move): void {
    console.log(move)
  }

  reset(): void {
    this.playerBoard.reset();
  }
}