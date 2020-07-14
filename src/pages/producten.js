import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

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
    console.log(producten)
    return(
        <div><h1>Dit is de Producten pagina</h1></div>
    )
}

export default Producten