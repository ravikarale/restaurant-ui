export const createReducer = (initialState, handlers) => {
    return (state=initialState, action) => {
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export const createNamespacer = namespace => action => `${namespace}:${action}`
