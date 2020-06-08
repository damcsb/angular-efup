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
  }

  onLogin() {
      this.fbAuth.loginEmailUser(this.email, this.password).then( () => {
        console.log("logging...")
      }).catch(() =>
      console.log("Log Error")
      )
      setTimeout(()=>{ this.router.navigate(['/home']);}, 2500)
    }
}
