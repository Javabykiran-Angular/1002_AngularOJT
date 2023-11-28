import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

 @Input() parentStrData:string='';

 @Input() parentMsgData!:string;

 @Input() parentJsonData:any={};

 @Input() parentNumData:number=0;

 @Input() parentDateData:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
