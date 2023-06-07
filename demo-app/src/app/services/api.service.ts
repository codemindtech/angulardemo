import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiurl="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getalldata(){
    return this.http.get(this.apiurl);
  }

}
