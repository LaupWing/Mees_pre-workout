import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './producten.module.css'

const Producten = ()=>{
    const producten = useStaticQuery(graphql`
        query{
            allContentfulProduct(
                sort:{
                    fields:datum,
                    order: DESC
                }
                ){
                totalCount
                edges{
                    node{
                    productNaam
                        foto{
                            file{
                                url
                            }
                        }
                        prijs
                        datum(fromNow:true)
                    }
                }
            }
        }
    `)
    const converPrice = (price)=>{
        const fullNumber = String(price).split('.')[0] 
        const decimalNumber = String(price).split('.')[1]
        return `€ ${fullNumber},${decimalNumber < 10 && !decimalNumber.includes('0') ? decimalNumber + '0' : decimalNumber}`
    }
    return(
        <div>
            <h1>Dit is de Producten pagina</h1>
            <div className={styles.producten}>
                {producten && producten.allContentfulProduct.edges.map(({node}, i)=>(
                    <div
                        key={i}
                        className={styles.product}
                    >
                        <h2>{node.productNaam}</h2>
                        <div>
                            <img src={node.foto.file.url}/>
                        </div>
                        <p>{converPrice(node.prijs)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Producten