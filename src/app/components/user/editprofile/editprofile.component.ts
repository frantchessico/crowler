import { Observable } from 'rxjs';
import { UserInterface } from './../../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
   public formEditProfile: FormGroup;
  constructor(
    private router: Router,
    private afs: AngularFirestore,
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEditProfile = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  // tslint:disable-next-line: typedef
  updateUser() {
      const firstName = this.formEditProfile.value.firstName;
      const lastName = this.formEditProfile.value.lastName;
      const phoneNumber = this.formEditProfile.value.phoneNumber;
      const role = this.formEditProfile.value.role;
      const displayName = firstName + ' ' + lastName;
      this.afAuth.currentUser.then(data => {
      data.updateProfile({
        displayName
      }).then(() => {
        const uid = data.uid;
        const email = data.email;
        this.auth.updateUser(
          email,
          firstName,
          lastName,
          uid,
          phoneNumber,
          role);
      }).then(() => {
        console.log('Feito');
      }).catch(err => {
        console.log(err);
      });
    });
  }

}
