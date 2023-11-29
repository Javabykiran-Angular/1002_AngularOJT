import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childStrEvent=new EventEmitter();

   @Output() childArrObjEvent=new EventEmitter();

  @Output() childMsgEvent=new EventEmitter();

  @Output() childDateEvent=new EventEmitter();

  strdata:string='Hopes So u r Enjoying Angular Module';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrEvent.emit(this.strdata);
    this.childArrObjEvent.emit(this.arrobj);
  }

  onClick(msg:string){
    this.childMsgEvent.emit(msg);
  }

  onChange(dateData:any){
      this.childDateEvent.emit(dateData)
  }

}
