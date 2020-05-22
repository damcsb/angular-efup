import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database'

import { AuthService } from '../../service/authentication.service';
import {StudentService} from '../../service/student.service';

import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  studentlist: Student[];

  constructor(private studentService: StudentService, private auth:AuthService, private router:Router, private mDatabase: AngularFireDatabase) { }

  ngOnInit() {
    setTimeout(() => {
      if(localStorage.getItem('token') == null){
      this.router.navigate(['/login']);
    }});
  }

  logout(){
    this.auth.logout();
    setTimeout(()=>{
      this.router.navigate(['/login']);
    })
  }
}
