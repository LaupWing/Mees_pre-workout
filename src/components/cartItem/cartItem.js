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
    
    return ( 
        <div className={styles.cartItem}>
            test
        </div>
    )
}

export default CartItem