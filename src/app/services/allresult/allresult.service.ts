import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { HttpheaderService } from './../httpHeader/httpheader.service';


@Injectable({
  providedIn: 'root'
})
export class AllresultService {

  constructor(private _http: HttpClient, private _header: HttpheaderService) { }



  seeAllResults() {

    return this._http.get(this._header.apiUrl + 'get/allresults')

  }


  singleResult(id:any) {
    console.log(id);
    return this._http.get(this._header.apiUrl + 'get/testresult/'+id)
  }


  seeAllCandidates() {

    return this._http.get(this._header.apiUrl + 'get/allcandidates')
  }




}


