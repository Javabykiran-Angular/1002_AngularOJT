import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../utility/employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  allCountry:any[]=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';
  @Input() parentdata=<Employee>{};
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getAllCountry();
  }

  getAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allCountry=response;
      })
  }

  onUpdate(){
      this.parentdata.updateddtm=Date.now();
      this.parentdata.updatedby=sessionStorage.getItem("username");
      this.service.UpdateRecord(this.parentdata)
      .subscribe((response)=>{
        console.log(response);
        this.issubmitDissabled=false;
        this.backendResponse=response;
      })
  }

}
