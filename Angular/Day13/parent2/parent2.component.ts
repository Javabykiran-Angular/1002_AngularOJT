import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  strdataReceived:string='';

  arrobjDataReceived:any[]=[];

  @Output() childDataDateEvent=new EventEmitter();

  msgData:string='';
  


  constructor() { }

  ngOnInit(): void {
  }

  onReceivedMsg(data:any){
    this.msgData=data;
  }

  onReceived(data:any){
      this.childDataDateEvent.emit(data);
  }

}
