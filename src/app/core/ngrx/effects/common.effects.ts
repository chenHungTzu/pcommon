import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import * as fromCommonAction from '../actions/common.actions';

@Injectable()
export class CommonEffects {
    constructor(
        private http: Http,
        private actions$: Actions
    ) { }

    @Effect({dispatch: false})
    example$ = this.actions$
        .ofType(fromCommonAction.EXAMPLE)


}