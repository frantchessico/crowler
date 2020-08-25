import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(private afsAuth: AngularFireAuth, private router: Router ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree | any> | Promise<boolean | UrlTree | any> | boolean | UrlTree | any {
      return this.afsAuth.authState.subscribe(auth => {
        if(auth) {
          this.router.navigate(['/'])
          return true
        }
        else {
         
          return false
        }
      })
  }

}
