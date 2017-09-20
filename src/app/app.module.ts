import { Http, HttpModule } from '@angular/http';
import { EmailService } from './email.service';
import { Message } from './meassage';
import { RandomIdService } from './random-id.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { ScoreSubimitComponent } from './score-subimit/score-subimit.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    ScoreSubimitComponent,
    TimerComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/game', pathMatch: 'full' },
      { path: 'game', component: GameComponent},
      { path: 'submit', component: ScoreSubimitComponent }
    ])
  ],
  providers: [RandomIdService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
