import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email : string = '';
  password : string = '';
  hide = true;
  constructor(private auth : AuthService,private userService:UsersService) { }

  ngOnInit(): void {
  }

  signup() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.signup(this.email,this.password);
    this.email = '';
    this.password = '';

  }
}
