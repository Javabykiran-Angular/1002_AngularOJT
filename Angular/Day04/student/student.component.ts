import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { 
    console.log("U r in Student constructor")
  }

  ngOnInit(): void {
    console.log("U r in ngOnInit method of Student")
  }

}
