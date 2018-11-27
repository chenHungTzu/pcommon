import * as fromCommonReducer from '../reducers/common.reducers';

export interface IndexState {
    example : fromCommonReducer.State
}

/**
 *  this will extend root Reducer
 */
export interface State {
    root : IndexState
}

export const reducers = {
    example : fromCommonReducer.reducer
}