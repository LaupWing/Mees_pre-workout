import React, {useState} from 'react'
import styles from './product.module.css'

const Product = ({productNaam, prijs, fotoUrl})=>{
    const [quantity, setQuantity] = useState(1)

    const converPrice = (price)=>{
        const fullNumber = String(price).split('.')[0] 
        const decimalNumber = String(price).split('.')[1]
        return `€ ${fullNumber},${decimalNumber < 10 && !decimalNumber.includes('0') ? decimalNumber + '0' : decimalNumber}`
    }

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

    return(
        <div
            className={styles.product}
        >
            <h2>{productNaam}</h2>
            <div>
                <img alt="afbeelding" src={fotoUrl}/>
            </div>
            <p className={styles.price}>{converPrice(prijs)}</p>
            <div className={styles.buyNow}>
                <button>
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