import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
count:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.count==0){
      console.log("Click Event Occur...");
      this.count++;
    }
    
  }

  onImage(){
    console.log("image click occur...")
  }

  onDollerEvent(myevent:any){
    console.log(myevent);
    console.log("=> "+myevent.target.value);
  }

}
