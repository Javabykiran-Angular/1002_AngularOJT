import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  empData:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(id1:any,name1:any,sal1:any){
    let obj={
      id:id1,
      name:name1,
      sal:sal1
    }

    this.empData.push(obj);


  }

  onRemove(i:any){
    this.empData.splice(i,1);
  }

}
