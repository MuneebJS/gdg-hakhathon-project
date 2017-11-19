import Actions from "./../actions/Const"



const INITIAL_STATE = {
    isReqSubmitted: false,
    refId: ""
}

export const requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.REQUEST_SERVICE_SUCCESS:
            return {
                ...state,
                isReqSubmitted: true,
                refId: action.paylaod
                // errorMessage : {}
            }
            case Actions.REQUEST_SERVICE_ERROR:
            return {
                ...state,
                isReqSubmitted: false,
                // errorMessage : {}
            }
        default: return state
    }
}
