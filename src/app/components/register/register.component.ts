import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel;
  repeatPass: string= '';

  constructor() { 
    this.user = new UserModel('', '', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }
  //Todos los metodos adicionales vas despues del ngOnInit
  checkPass(){
    if(this.repeatPass != this.user.password){
      alert('Password does not match');
    }else{
      alert('Password match')
    }
  }

  register(){
    console.log(this.user, this.repeatPass);
  }
}
