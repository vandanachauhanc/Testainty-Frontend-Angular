import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class BackdoreentryGuard implements CanActivate {

  constructor(private loginService: LoginService, private _router: Router) { }

  canActivate() {

    console.log("AlwaysAuthGuard");

    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      window.alert("You don't have permission to view this page");
      return false;
    }

  }

}
