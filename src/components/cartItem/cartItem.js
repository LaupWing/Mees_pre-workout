import React, {useContext} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './cartItem.module.css'
import formatPrice from '../../helpers/formatprice'
import {GlobalDispatchContext} from '../../context/GlobalContext'

const CartItem = (props)=>{
    const dispatch = useContext(GlobalDispatchContext)
    
    const product = useStaticQuery(graphql`
        query{
            allContentfulProduct{
                edges{
                    node{
                        id
                        productNaam
                        foto{
                            file{
                                url
                            }
                        }
                        prijs
                    }
                }
            }
        }
    `).allContentfulProduct
        .edges
        .find(x=>x.node.id===props.item.id)
        .node
        
    return ( 
        <div className={styles.cartItem}>
            <img alt="cart_item" src={product.foto.file.url}/>
            <div className={styles.info}>
                <h2>{product.productNaam}</h2>
                <p>{formatPrice(product.prijs)}</p>
            </div>
            <div className={styles.quantity}>
                <p>{props.item.quantity}</p>
                <button 
                    onClick={()=>dispatch({
                        type: 'MODIFY_SHOPPINGCART',
                        id: props.item.id,
                        quantity: 1,
                        add: true
                    })}
                >
                    +
                </button>
                <button
                    onClick={()=>dispatch({
                        type: 'MODIFY_SHOPPINGCART',
                        id: props.item.id,
                        quantity: 1,
                        add: false
                    })}
                    className={props.item.quantity === 1 ? styles.disabled : ''}
                >
                    -
                </button>
            </div>
            <div className={styles.totalPrice}>
                <h3>Total Price</h3>
                <p>{formatPrice(Math.round(props.item.quantity * product.prijs*100)/100)}</p>
            </div>
        </div>
    )
}

export default CartItem