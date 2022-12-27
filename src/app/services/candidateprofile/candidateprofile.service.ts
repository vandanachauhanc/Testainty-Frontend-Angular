import { HttpheaderService } from './../httpHeader/httpheader.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidateprofileService {

  constructor(private _http:HttpClient, private _header: HttpheaderService) { }

  candidateProfileData(data:any){

    return this._http.post(this._header.apiUrl + "create/candidateprofile", data)

  }


}
