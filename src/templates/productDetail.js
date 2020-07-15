import React, {useContext} from 'react'
import {graphql} from 'gatsby'
import {GlobalStateContext} from '../context/GlobalContext'

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
    const state = useContext(GlobalStateContext)

    console.log(state)
    return(
        <div>Test</div>
    )
}

export default ProductDetail