import React from 'react'
import styles from './header.module.css'
import {Link} from 'gatsby'
import img from './logo2.jpg'

const Header = () => (
    <header className={styles.header}>
        <ul>
            <Link to="/">
                <img src={img}/>
            </Link>
            <li>
                <Link to="/producten">
                    Shop Nu
                </Link>
            </li>
        </ul>
        <ul>
            <li>Login</li>
            <li>Winkelwagen</li>
        </ul>
    </header>
)

export default Header