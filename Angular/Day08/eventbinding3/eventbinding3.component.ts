import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:string='';
  addition:number=0;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onChange(myname:any){
    console.log("Change Event Occur...");
    console.log(myname.value)
  }

  onKeyUp(msgValue:string){
    console.log("Key Up Event Occurs...");
    this.result=msgValue;

    if(msgValue.length>6){
      alert("ur character limit is exceed..")
    }

  }

  onKeyDown(){
    console.log("Key down Event Occurs...")
  }

  onkeyEnter(){
    console.log("Enter Key is up....")
  }

}
