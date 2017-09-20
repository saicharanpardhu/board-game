import { RandomIdService } from './../random-id.service';
import { Component, OnInit, Input } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  color1="black";
  color2="black";
  color3="black";
  color4="black";
  
  curr_id = 2;
  rand_id: number;

  score: number;

  first_click: boolean;

  //timeout variable
  timeout: any;

  colormap = {
    1: this.color1,
    2: this.color2,
    3: this.color3,
    4: this.color4
  }

  @Input('boardId') boardId: number;

  constructor(private randomIdService: RandomIdService,
              private router: Router) { }

  ngOnInit() {
    this.changeColor(4);
    this.curr_id = 4;

    this.score = 0;

    this.first_click = false;

    this.updateTimer()
    
  }

  private updateTimer(){
    this.timeout = setTimeout(() => {
      
      this.rand_id = this.randomIdService.GetId();
      this.changeColor(this.rand_id);


      this.updateTimer();
    }, 700);
  }

  onClick(id: number){
    clearTimeout(this.timeout);

    this.updateTimer();

    if(!this.first_click) { 
      this.first_click = true;
    }

    console.log("*************On Click***********")
    console.log("Previously selected id: " + this.curr_id);
    
    
    this.rand_id = this.randomIdService.GetId();
    if(id == this.curr_id) { 
      this.score++;
      this.changeColor(this.rand_id);

      this.randomIdService.PublishScore(this.score);
    }
    
    
    console.log("Id changed: " + this.curr_id);
    console.log("*********************************");
  }

  changeColor(id: number){
    if(this.curr_id > 0) {
      //change color
      if(this.curr_id == 1) {
        this.color1 = "black";
      } else if (this.curr_id == 2) {
        this.color2 = "black";
      } else if (this.curr_id == 3) {
        this.color3 = "black";
      } else {
        this.color4 = "black";
      }
    }

    if(id == 1) {
      this.color1 = "white";
    } else if (id == 2) {
      this.color2 = "white";
    } else if (id == 3) {
      this.color3 = "white";
    } else {
      this.color4 = "white";
    }

    this.curr_id = id;
  }

  play(){
    this.initialise();
  }

  initialise(){
    console.log(this.boardId);
    this.changeColor(this.boardId);
  }
}
