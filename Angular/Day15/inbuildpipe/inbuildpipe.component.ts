import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {

    strData:string='U are learn angular 12 from Dynamic person from Sumit raokhande';
    num2:number=-452.78956324557;

    mydate=new Date();

    myname:string="Sumit Raokhande";

  constructor() { }

  ngOnInit(): void {
  }

}
