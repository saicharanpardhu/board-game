import { Message } from './../meassage';
import { EmailService } from './../email.service';
import { RandomIdService } from './../random-id.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-score-subimit',
  templateUrl: './score-subimit.component.html',
  styleUrls: ['./score-subimit.component.css']
})
export class ScoreSubimitComponent implements OnInit {
  score_title: number;

  private name: string;
  private email: string;
  private location: string;
  private projectid: string;
  private giturl: string; 


  //post results variable
  private post_res: String;


  constructor (
    private randomIdService: RandomIdService,
    private emailService: EmailService) {
  }

  ngOnInit() {
    this.randomIdService.score$.subscribe(
      data => {
        console.log('Sibling1Component-received from search: ' + data);
        this.score_title = data;
      });
  }

  getForm(): Message{
    const message =  new Message();
    message.name =  this.name;
    message.emailId = this.email;
    message.location = this.location;
    message.projectId = this.projectid;
    message.gitUrl = this.giturl; 
    message.score = this.score_title;
    return message;
  }

  submitPost() {
    let message: string;
    //let message = this.getForm();
    message = JSON.stringify(this.getForm());
    this.emailService.postForm(message).subscribe(response => console.log(response));
    // .subscribe(results => {
    //   this.post_res = results;
    //   alert(this.post_res);
    // });
  }

}
