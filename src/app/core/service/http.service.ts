import { HttpConfig } from './../config/http.config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpParameter } from '../model/http-parameter.model';
import { Observable, throwError } from 'rxjs';
import { timeout, catchError, retry } from 'rxjs/operators';


@Injectable()
export class HttpService {

  constructor(public http: HttpClient,
              public config: HttpConfig) { }


  get<TResult>(params: HttpParameter): Observable<TResult> {

    return this.http.get<TResult>(params.hostUrl, params)
      .pipe(
        timeout(this.config.MAX_TIME_OUT),
        catchError(this.errorHandler),
        retry(this.config.RETRY_COUNT)
      )
  }

  post<TResult>(params : HttpParameter) : Observable<TResult>{

    return this.http.post<TResult>(params.hostUrl , params.body , params)
            .pipe(
              timeout(this.config.MAX_TIME_OUT),
              catchError(this.errorHandler),
              retry(this.config.RETRY_COUNT)
    )

  }


  errorHandler(error: HttpErrorResponse) {

    /**
     * DO SOMETHING
     */
    console.log(error)

    return throwError(error);
  }


}
