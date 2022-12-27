import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public _logout:LoginService, private _router: Router) { }

  menuHide:boolean = false;

  ngOnInit(): void {

    if(this._logout.getToken()){this.menuHide = true}else{this.menuHide = false}

  }

}
