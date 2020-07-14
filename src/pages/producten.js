import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styles from './producten.module.css'
import Product from '../components/product/product'

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
                        id
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
    
    return(
        <section>
            <h1>Alle Producten ({producten && producten.allContentfulProduct.totalCount})</h1>
            <div className={styles.producten}>
                {producten && producten.allContentfulProduct.edges.map(({node})=>(
                    <Product
                        productNaam={node.productNaam}
                        fotoUrl={node.foto.file.url}
                        prijs={node.prijs}
                        id={node.id}
                        key={node.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default Producten