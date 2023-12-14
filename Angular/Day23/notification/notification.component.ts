import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  dataNotification:string='';

  constructor(private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.getNotificationData();
  }

  getNotificationData(){
      this.notifyService.notifications
      .subscribe((data)=>{
        this.dataNotification=data;
      })
  }

}
