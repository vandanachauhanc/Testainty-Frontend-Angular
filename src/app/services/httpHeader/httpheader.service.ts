import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpheaderService {

  apiUrl: any;


  constructor() {

    this.apiUrl = environment.apiUrl;

  }

  httpOptions = {

    headers: new HttpHeaders({
      "Content-Type": "application/json", "Authorization": "Bearer"
    })


  }




}
