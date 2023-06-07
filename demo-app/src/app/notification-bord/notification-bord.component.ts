import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification-bord',
  templateUrl: './notification-bord.component.html',
  styleUrls: ['./notification-bord.component.css'],
})
export class NotificationBordComponent implements OnInit {
notificationMessage:string;
  constructor(private notificationS:NotificationService) { }

  ngOnInit() {
    this.notificationS.notificationSubject.subscribe(d =>{
this.notificationMessage=d;
    })
  }

}
