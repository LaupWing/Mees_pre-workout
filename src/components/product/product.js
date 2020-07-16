import React, {useState, useContext, useEffect} from 'react'
import styles from './product.module.css'
import {Link} from 'gatsby'
import {GlobalDispatchContext, GlobalStateContext} from '../../context/GlobalContext'
import formatPrice from '../../helpers/formatprice'

const Product = ({productNaam, prijs, fotoUrl, id})=>{
    const [quantity, setQuantity] = useState(1)
    const [showQuantity, setShowQuantity] = useState(false)
    const [inShoppingQuantity, setInShoppingQuantity] = useState(false)
    const dispatch = useContext(GlobalDispatchContext)
    const state = useContext(GlobalStateContext)

    useEffect(()=>{
        const inShoppingcart = state.shoppingCart.find(item=>item.id === id) 
        if(inShoppingcart){
            setInShoppingQuantity(inShoppingcart.quantity)
        }
    },[state.shoppingCart])

    const addOrAbduct = (add)=>{
        if(add){
            setQuantity(quantity+1)
        }else{
            if(quantity === 1){
                return
            }else{
                setQuantity(quantity-1)
            }
        }
    }

    const addToCart = ()=>{
        setQuantity(1)
        dispatch({
            type: 'ADD_TO_SHOPPINGCART',
            id,
            quantity
        })
    }

    return(
        <div
            className={styles.product}
            onMouseEnter={()=>setShowQuantity(true)}
            onMouseLeave={()=>setShowQuantity(false)}
        >
            <h2>{productNaam}</h2>
            <div className={styles.img_container}>
                {inShoppingQuantity && <p className={styles.currently}>In winkelwagen: {inShoppingQuantity}</p>}
                <Link to={`/producten/${id}`}>
                    <img alt="afbeelding" src={fotoUrl}/>
                </Link>
            </div>
            <p className={styles.price}>{formatPrice(prijs)}</p>
            <div className={[styles.buyNow, (showQuantity ? styles.show : '')].join(' ')}>
                <button onClick={addToCart}>
                    Koop Nu
                </button>
                <p className={styles.quantity}>{quantity}</p>
                <button 
                    onClick={()=>addOrAbduct(true)} 
                    className={styles.calc}
                >+</button>
                <button 
                    onClick={()=>addOrAbduct(false)}
                    className={styles.calc}
                >-</button>
            </div>
        </div>
    )
}

export default Product