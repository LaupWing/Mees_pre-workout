import React from 'react'
import {graphql} from 'gatsby'

export const query = graphql`
    query($id:String){
        contentfulProduct(id: {eq:$id}){
            id
            productNaam
            foto{
                file{
                    url
                }
            }
            prijs
            datum(fromNow:true)
            beschrijving{
                beschrijving
            }
        }
    }
`

const ProductDetail = ({data})=>{
    console.log(data)
    return(
        <div>Test</div>
    )
}

export default ProductDetail