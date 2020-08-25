import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
logOut() {
  this.auth.logOut()
  .then(() => {
    this.router.navigate(['/entrar']);
  }).catch(err => {
    console.log(err);
  });
}
isOnline() {
  this.auth.isLogin()
  .subscribe(user => {

  });
}
}
