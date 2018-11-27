import { HttpParams, HttpHeaders } from '@angular/common/http'

export class IHttpOptions
{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType? : 'json'
    withCredentials?: boolean;
}

export class HttpParameter extends IHttpOptions {

    hostUrl : string
    body? : any = {}


}