import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  notifyData:string='';
  constructor(private rout:ActivatedRoute,
              private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.getDataFromUrl();
    this.getDataFromNotification();
  }

  getDataFromNotification(){
      this.notifyService.notifications
      .subscribe((data)=>{
          this.notifyData=data;
      })
  }

  getDataFromUrl(){
      this.rout.queryParamMap
      .subscribe((param)=>{
          console.log(param.get("id"))
          console.log(param.get("fname"))
          console.log(param.get("role"))
      })
  }

  onSend(msg:string){
      this.notifyService.sendMessage(msg);
  }

}
