import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';

@Injectable()
export class RandomIdService {
 
  private data_old = -1;
  private data_new : number;
  
  // Observable string streams
  private caseNumber = new BehaviorSubject<number>(0);
  caseNumber$ = this.caseNumber.asObservable();
  
  private score_old = 0;
  private score_new : number;
  
  // Observable string streams
  private score = new BehaviorSubject<number>(0);
  score$ = this.score.asObservable();
  
  constructor() { }
  
  PublishScore(data:number) {
      this.score.next(data);
  }
    // this.RandomIdService.score$.subscribe(
    //           data => {
    //               console.log('Sibling1Component-received from search: ' + data);
    //               this.tittle= data;
    //                });
  
  GetId() {
    this.data_new = Math.ceil((Math.random()*4));
    
    while(this.data_new === this.data_old ){
      this.data_new = Math.ceil((Math.random()*4));
    }
    
    this.caseNumber.next(this.data_new);
    this.data_old=this.data_new;
    
    return this.data_new;
  }
}