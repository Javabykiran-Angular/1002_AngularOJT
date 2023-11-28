import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  msgdata!:string;
  strdata:string='Welcome to Angular 12 Module...';

  jsonObj={
    id:9,
    fname:'sumit',
    lname:'Raokhande'
  }

  @Input() parentAppData:number=0;

mydate:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSend(inputname:string){
    this.msgdata=inputname;
  }

  onSendDate(inputdate:any){
      // console.log(inputdate);
      this.mydate=inputdate;
  }

}
