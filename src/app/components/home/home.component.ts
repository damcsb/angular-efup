import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

import { AuthService } from '../../service/authentication.service';

import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  items: Observable<any[]>;
  token:any;


  constructor( private auth:AuthService, private router:Router, private db: AngularFireDatabase) { 
    this.items = db.list('Student').valueChanges();
  
  }

  changeAsist(){
    /*this.items.forEach(student => {
      console.log(student);
    });*/
  }

  ngAfterViewInit() {
      if(localStorage.getItem('token') == null){
        this.router.navigate(['/login']);
      }

    }
    logout(){
      this.auth.logout().then(()=>{
        localStorage.removeItem("token");
      });
      this.router.navigate(['/login']);
    }
}
