import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/authentication.service';
import {StudentService} from '../../service/student.service';
import { Student } from 'src/app/models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentlist: Student[];

  constructor(private studentService: StudentService, private auth:AuthService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      if(localStorage.getItem('token') == null){
      this.router.navigate(['/login']);
    }});
  }

}
