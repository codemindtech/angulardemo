import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }


  postDataWithBearerToken(data: any) {
    const url = 'https://www.aspiresoft.co.ke/Wt/APIs.aspx/additem'; // Replace with your API endpoint URL
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer WebAuth1234'     // Replace with your bearer token
    });
  
    return this.http.post(url, data, { headers });
  }
  
}
