import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
    let auth_token = "WebAuth1234...";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    const requestOptions1 = { headers: headers };
  const requestOptions = { headers: headers };
   
  this.http
      .get('https://www.aspiresoft.co.ke/Wt/APIs.aspx/additem', requestOptions)
      .subscribe((res: any) => {
          console.log(res);
      });
  }

}
