import { Injectable } from "@angular/core";

@Injectable()
export class HttpConfig {

    MAX_TIME_OUT : number = 30000
    RETRY_COUNT : number =  0
}