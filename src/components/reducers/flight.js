import * as ActionType from '../../actions/ActionType';

const initial = {
    flights: {},
    label: ""

}

export const flight = (state = initial, action) => {
    switch (action.type) {
        case ActionType.ON_RESULT:
            return {
                flights: action.payload
            }
        case ActionType.ON_INIT:
            return initial;
        default:
            return state;
    }
} 