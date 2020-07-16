import React, {useContext} from 'react'
import {GlobalStateContext} from '../context/GlobalContext'
import CartItem from '../components/cartItem/cartItem'

const Winkelwagen = ()=>{
    const state = useContext(GlobalStateContext)
    return(
        <div>
            <h1>Dit is de Winkelwagen pagina</h1>
            {state.shoppingCart.length>0&&state.shoppingCart.map(item=>(
                <CartItem key={item.id} item={item}></CartItem>
            ))}
        </div>
    )
}

export default Winkelwagen