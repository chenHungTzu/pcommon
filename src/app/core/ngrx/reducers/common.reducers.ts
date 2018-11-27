import * as fromCommonAction from '../actions/common.actions';


export interface State{

}

export const initialState : State = {

}

export function reducer(state :State, action: fromCommonAction.Actions) {
	switch (action.type) {
		case fromCommonAction.EXAMPLE:
			return state;
		default:
			return state;
	}
}