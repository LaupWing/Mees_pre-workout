import React from 'react'
import styles from './header.module.css'

const Header = () => (
    <header className={styles.header}>
        <ul>
            <img src={`/logo.jpeg`}/>
            <li>Shop Nu</li>
        </ul>
        <ul>
            <li>Login</li>
            <li>Winkelwagen</li>
        </ul>
    </header>
)

export default Header