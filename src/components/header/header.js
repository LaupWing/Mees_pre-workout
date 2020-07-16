import React, {useContext, useEffect, useState} from 'react'
import styles from './header.module.css'
import {Link} from 'gatsby'
import img from './logo2.jpg'
import {GlobalStateContext} from '../../context/GlobalContext'

const Header = () => {
    const state = useContext(GlobalStateContext)
    const [totalInCart,setTotalInCart] = useState(false) 

    useEffect(() => {
        if(state.shoppingCart.length>0){
            const sum = state.shoppingCart.reduce((acc, val)=> acc + val.quantity,0)
            setTotalInCart(sum)
        }else{
            setTotalInCart(false)
        }
    }, [state.shoppingCart])
    return (
    <header className={styles.header}>
        <div className={'container ' + styles.content}>
            <ul>
                <Link to="/">
                    <img alt="img" src={img}/>
                </Link>
                <li>
                    <Link to="/producten">
                        Shop Nu
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">
                        Login
                    </Link>
                </li>
                <li className={styles.shoppingCart}>
                    <Link to="/winkelwagen">
                        Winkelwagen
                    </Link>
                    {totalInCart && <p className={styles.quantity}>{totalInCart}</p>}
                </li>
            </ul>
        </div>
    </header>)
}

export default Header