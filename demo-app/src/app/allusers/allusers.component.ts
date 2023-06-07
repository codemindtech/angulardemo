import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private userService:UserService) { }
 users:{name:string,job:string,gender:string,country:string,age:number,avtar:string}[]= [];

  ngOnInit() {
    this.users=this.userService.users;
  }
  showDetails(user:{name:string,job:string,gender:string,country:string,age:number,avtar:string}){
this.userService.showUserDetails(user);

  }

}
