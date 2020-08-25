import { UserInterface } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }
// tslint:disable: typedef
  loginUser(email, password){
             return this.auth.signInWithEmailAndPassword(email, password);
  }
updateUser(
  email,
  firstName,
  lastName,
  uid,

  phoneNumber,
  role,
) {
  this.afs.doc<UserInterface>(`users/${email}`).set({

    uid,
    role,
    firstName,
    lastName,
    displayName: firstName + ' '+ lastName,
    phoneNumber,
    email,
    createdAt: Date.now()
  }, { merge: true});
}



  isLogin() {
    return this.auth.authState.pipe(map(auth => auth));
  }


  logOut() {
    return this.auth.signOut();
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
}
