import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  constructor(private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
      this.rout.queryParamMap
      .subscribe((param)=>{
          console.log(param.get("id"))
          console.log(param.get("fname"))
          console.log(param.get("role"))
      })
  }

}
