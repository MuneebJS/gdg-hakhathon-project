import Actions from "./../actions/Const"



const INITIAL_STATE = {
    shares: null
}

export const shareReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Actions.SET_SHARES:
            return {
                ...state,
                shares: [...action.payload]
            }
        default: return state
    }
}
