import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _toster: ToastrService) {

    this.loginForm = this._fb.group({

      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }


  currentUserLogin: any = {

    userName: 'admin',
    password: 'admin123'

  }

  ngOnInit(): void {


  }

  submit(loginForm: FormGroup) {

    if (loginForm.value.email === 'admin' && loginForm.value.password === 'admin123') {
      this._toster.success('Login Successfully !!', '', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
      localStorage.setItem('AuthToken', JSON.stringify(this.currentUserLogin))
      this._router.navigateByUrl('pages/candidate-profile');
      
    } 
    else {
      this._toster.error('Login Failed', 'Enter correct username or password', {
        timeOut: 2000,
        progressBar: true,
        progressAnimation: 'decreasing'
      });
    }

  }

}
