import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  constructor(private service :AuthService) { }
  ngOnInit(): void { }
constdata={ UserName: 'sandy', ItemCode: '21323334' };//Replace with your data

  //   this.postDataWithBearerToken(data).subscribe(
  //   response => {
  //     // Handle the response
  //     console.log(response);
  //   },
  //   error => {
  //     // Handle the error
  //     console.error(error);
  //   }
  // );
  
  }







