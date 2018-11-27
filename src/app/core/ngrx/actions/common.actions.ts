import { Action } from "@ngrx/store";


export const EXAMPLE = '[Common] EXAMPLE';

export class Example implements Action {
    readonly type = EXAMPLE;
    constructor(public payload : any ) { }
}


export type Actions = Example;
