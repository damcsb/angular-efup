import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
const ident = "token"



@Injectable()
export class AuthService {
 
  public token:string;
  //
  //Builder
  //
  constructor(public fbAuth: AngularFireAuth) { }
  //
  //Methods
  //
  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.fbAuth.signInWithEmailAndPassword(email, pass)
        .then(userData => {
          this.setUp();
          resolve(userData)}, err => reject(err));
    });
  }
  //
  //
  logout(){
    return this.fbAuth.signOut().then(()=>{
      localStorage.removeItem("token");
    });
  }
  //
  //
  setUp(){
    this.fbAuth.authState.subscribe((firebaseUser)=>{
    if(firebaseUser){
      localStorage.setItem(ident, firebaseUser.uid)
      this.token=firebaseUser.uid
      console.log(this.token)

    }else{
      localStorage.removeItem(ident);
      this.token= null;
      console.log(this.token)
    }
    })
  }
}