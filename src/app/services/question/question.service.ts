import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { HttpheaderService } from './../httpHeader/httpheader.service';


@Injectable({
  providedIn: 'root'
})


export class QuestionService {

  constructor( private _http: HttpClient, private _header:HttpheaderService ) { }


  addQuestion(data:any){

   return this._http.post( this._header.apiUrl + 'create/questionbank' , data).pipe(retry(1), catchError(this.handleError))

  }


  displayQuestions(uuid:any){

   return this._http.get( this._header.apiUrl + 'get/questions/' + uuid)

  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }

}
