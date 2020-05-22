import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private fbAuth: AuthService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("token") != null){
      this.router.navigate(['/home'])
    }
  }

  onLogin() {
      this.fbAuth.loginEmailUser(this.email, this.password).then( () => {
        this.router.navigate(['/home']);
      }).catch(() =>
      console.log("Log Error")
      )}
}
