import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './cartItem.module.css'

const CartItem = (props)=>{
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
    console.log(props)
    return ( 
        <div className={styles.cartItem}>
            <img alt="cart_item" src={product.foto.file.url}/>
            <div className={styles.info}>
                <h2>{product.productNaam}</h2>
                <p>{product.prijs}</p>
            </div>
            <div className={styles.quantity}>
                <p>{props.item.quantity}</p>
                <button>+</button>
                <button>-</button>
            </div>
            <div className={styles.totalPrice}>
                <h3>Total Price</h3>
                <p>{props.item.quantity * product.prijs}</p>
            </div>
        </div>
    )
}

export default CartItem