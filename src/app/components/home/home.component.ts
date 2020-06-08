import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';

import { AuthService } from '../../service/authentication.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  items: Observable<any[]>;
  token:any;

  constructor( private auth:AuthService, private router:Router, private db: AngularFireDatabase) { 
    this.items = db.list('Users').valueChanges();
  }

  ngAfterViewInit() {
      if(localStorage.getItem('token') == null){
        this.router.navigate(['/login']);
      }

  }

  logout(){
    this.auth.logout().then( () => {
      this.router.navigate(['/login']);
      console.log("hola");
    })
  }
}
