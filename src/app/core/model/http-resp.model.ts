export class HttpResponseModel<TValue> {  
    IsSuccess : boolean;
    Message : string;
    Element : TValue;
    Extension : any;
    Token : string
}