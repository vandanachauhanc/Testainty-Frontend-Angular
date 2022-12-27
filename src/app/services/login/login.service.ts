import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient, private _router: Router ) { }


  logout(){

    localStorage.removeItem('AuthToken');
    this._router.navigateByUrl('login');
    return false;
  }

  getToken(){

    return localStorage.getItem('AuthToken');

  }

  isLoggedIn(){
    
    if(localStorage.getItem("AuthToken")){
      return true;
    }
    else{
      return false;
    }
  }

}
