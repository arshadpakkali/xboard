import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaton-menu',
  templateUrl: './notificaton-menu.component.html',
  styleUrls: ['./notificaton-menu.component.css']
})
export class NotificatonMenuComponent implements OnInit {

 
response= ["test" ]
 
 item={
  description:"test discription",
  email:"test email"
 }
//get the number of new messages
 counts:number =  Object.keys(this.item).length
 
  constructor() { }

  ngOnInit(): void {
    
  }


  

}
