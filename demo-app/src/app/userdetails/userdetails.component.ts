import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userService:UserService) { }
user: {name:string,job:string,gender:string,country:string,age:number,avtar:string};
  ngOnInit() {
    this.userService.OnShowDetailsClicked.subscribe((data: {name:string,job:string,gender:string,country:string,age:number,avtar:string})=>{
      this.user=data;
    })
  }

}
