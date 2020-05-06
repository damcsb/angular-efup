import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  //
  //Builder
  //
  constructor(public fbAuth: AngularFireAuth) {}
  //
  //Methods
  //
  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.fbAuth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
}