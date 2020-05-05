import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {
  //
  //Builder
  //
  constructor(public fbAuth: AngularFireAuth) {}
  //
  //Methods
  //
  async login(email: string, password: string): Promise<any> {
    try {
      const result = await this.fbAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string): Promise<any> {
    try {
      const result = await this.fbAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.fbAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.fbAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}