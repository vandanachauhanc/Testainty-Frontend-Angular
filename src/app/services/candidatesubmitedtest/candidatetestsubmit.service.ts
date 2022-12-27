import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { HttpheaderService } from './../httpHeader/httpheader.service';


@Injectable({
  providedIn: 'root'
})

export class CandidatetestsubmitService {

  constructor(private _http: HttpClient,  private _header: HttpheaderService) { }

  submitedTest(data:any) {

    return this._http.post(this._header.apiUrl + "create/testanswers", data)

  }
  
  
}
