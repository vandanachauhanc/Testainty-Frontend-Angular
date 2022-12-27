import { LoginService } from './services/login/login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'InterviewTest';

  constructor(private _router: Router, public _loginServcie: LoginService) { }


  ngOnInit() {

    // if (this._loginServcie.getToken()?.length)
    //   this._router.navigateByUrl('pages/candidate-profile')
    // else
    //   this._router.navigateByUrl('login')
  }



  ngOnDestroy() {
  }


}
