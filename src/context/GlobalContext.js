import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    shoppingCart: null 
}
console.log(localStorage.getItem('test'))

function reducer(state ,action){
    switch(action.type){
        case 'ADD_TO_SHOPPINGCART':{
            return {
                ...state,
                shoppingCart: []
            }
        }
        default:
            throw new Error('Bad Action Type')
    }
}

const GlobalContextProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
    <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>)
}

export default GlobalContextProvider