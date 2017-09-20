import { Routes, Router } from '@angular/router';
import { RandomIdService } from './../random-id.service';
import { BoardComponent } from './../board/board.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private started: Boolean;


  //child-id
  boardId: number;

  constructor(private randomIdService : RandomIdService,
              private router: Router) { }

  ngOnInit() {
    this.getRandomId();
    // setTimeout((router: Router) => {
    //   this.router.navigate(['submit']);
    // }, 15000);
  }

  startGame() {
    this.start();
    setTimeout((router: Router) => {
      this.router.navigate(['submit']);
    }, 8000);
  }

  private start(){
    this.started = true;
    // setTimeout(() => console.log("Gameover"), 5000);
  }

  getRandomId(){
    this.boardId = this.randomIdService.GetId();
  }

}
