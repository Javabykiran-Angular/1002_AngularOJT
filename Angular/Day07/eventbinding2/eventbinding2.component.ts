import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }


  onSend(myname:any){
    console.log(myname);
    myname.style.background='green';
    myname.style.color='white';
    console.log("data=> "+myname.value)

  }

  onSend1(myvalue:any){
    console.log(" =>  " +myvalue);

  }

  onAddition(num1:any,num2:any){

    let n1=+num1;
    let n2=+num2;

    // this.result=num1+num2;
    this.result=n1+n2;

  }


}
