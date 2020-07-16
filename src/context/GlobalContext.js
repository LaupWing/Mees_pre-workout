import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    shoppingCart: (localStorage && localStorage.getItem('shopping_cart')) ? JSON.parse(localStorage.getItem('shopping_cart')) :  [] 
}

function reducer(state ,action){
    switch(action.type){
        case 'ADD_TO_SHOPPINGCART':{
            let updatedCart
            if(state.shoppingCart.find(x=>x.id===action.id)){
                updatedCart = state.shoppingCart.map(x =>{
                    if(x.id === action.id){
                        return {
                            id: x.id,
                            quantity: x.quantity + action.quantity
                        }
                    }
                    return x
                })
            }else{
                updatedCart = [...state.shoppingCart,{
                    id: action.id,
                    quantity: action.quantity
                }]
            }
            localStorage.setItem('shopping_cart', JSON.stringify(updatedCart))
            return {
                ...state,
                shoppingCart: updatedCart 
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