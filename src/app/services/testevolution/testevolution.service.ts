import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { HttpheaderService } from './../httpHeader/httpheader.service';

@Injectable({
  providedIn: 'root'
})
export class TestevolutionService {

  constructor( private _http: HttpClient, private _header:HttpheaderService ) { }


  testEvolution(id:any){

   return this._http.get( this._header.apiUrl + 'get/testanswers/' + id)

  }
  testEvolutionSubmit(data:any){

   return this._http.post( this._header.apiUrl + 'create/testanswers', data)

  }

  candidateTestReviewSubmit(data:any){

   return this._http.post( this._header.apiUrl + 'create/result', data)

  }
}
