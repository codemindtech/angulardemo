import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit() {
    this.getapidata();
  }

  getapidata(){
    this.service.getalldata().subscribe(res=>{
      console.log(res);

      console.log("guhasassa");
     })
  }

}
