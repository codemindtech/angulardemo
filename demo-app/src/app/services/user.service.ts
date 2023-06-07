import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users=[
    {name:'sandip',job:'teacher',gender:'male',country:'india',age:25,avtar:'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'},
    {name:'joya',job:'polic',gender:'female',country:'india',age:25,avtar:'data:image/jpeg;base64,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'},
    {name:'neha',job:'Ips',gender:'female',country:'india',age:25,avtar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmDuSZ1rtIEar2mMYU9mFbZA3FI9Fjhr0LQ&usqp=CAU'},
    {name:'mahesh',job:'teacher',gender:'male',country:'india',age:25,avtar:'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'},
    {name:'priya',job:'doctor',gender:'male',country:'india',age:25,avtar:'data:image/jpeg;base64,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'},
    {name:'suraj',job:'farmer',gender:'male',country:'india',age:25,avtar:'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg'}
  ]
  OnShowDetailsClicked =new EventEmitter<{name:string,job:string,gender:string,country:string,age:number,avtar:string}>();
  
  showUserDetails(user:{name:string,job:string,gender:string,country:string,age:number,avtar:string}){
      this.OnShowDetailsClicked.emit(user);
      }  
}
