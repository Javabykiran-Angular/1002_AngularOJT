import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
username:string='default username..';

count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onShowAlert(){
    alert("Hi Welcome "+this.username);
  }

  increment(){
    this.count=this.count+1;
  }

  decrement(){
    this.count=this.count-1;
  }


}
