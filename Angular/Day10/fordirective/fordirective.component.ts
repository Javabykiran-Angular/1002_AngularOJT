import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core Java','Advanced java','Spring Boot','Angular 12','HTML,CSS,JS','Docker','AWS'];

  arrobj:any[]=[
    {
      name:"Redmi",
      price:15000,
      qty:1
    },
    {
      name:"OnePlus",
      price:45000,
      qty:1
    },
    {
      name:"Apple",
      price:150000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Motorolla",
      price:30000,
      qty:1
    }
  ];
selected:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse over Event Occur...");

    this.selected=item.name;
  }

  onMouseOut(){
    console.log("===== Mouse out event occur==========");
    this.selected='';
  }

}
