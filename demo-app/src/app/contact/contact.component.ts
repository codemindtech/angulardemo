import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:NotificationService) { }

  ngOnInit() {
  }

  sendMessage(data){
this.service.sendnotification(data.value)
  }

}
