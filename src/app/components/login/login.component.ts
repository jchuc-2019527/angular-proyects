import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:UserModel;

  constructor() { 
    this.user = new UserModel('', '', '', '', '', '', '', '');
  }
  
  ngOnInit(): void {
  }
login(){
  console.log(this.user);
}
}
