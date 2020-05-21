import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentlist : AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getStudents(){
   return this.studentlist = this.firebase.list('');
  }

  insertStudent(student:Student){
    this.studentlist.push({
      name: student.name,
      fsurname: student.fsurname,
      csurname: student.csurname,
    })
  }

  deleteStudent($id: string){
    this.studentlist.remove($id);
  }

}
