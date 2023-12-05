import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi reprehenderit velit veniam, laborum ut qui voluptates quae a quis saepe facilis et praesentium quia aliquid ab quod consequatur optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi reprehenderit velit veniam, laborum ut qui voluptates quae a quis saepe facilis et praesentium quia aliquid ab quod consequatur optio?';
  constructor() { }

  ngOnInit(): void {
  }

}
