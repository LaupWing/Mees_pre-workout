import React from 'react'
import styles from './header.module.css'

const Header = () => (
    <header className={styles.header}>
        <img src={`/logo.jpeg`}/>
        <ul>
            <li>Login</li>
            <li>Winkelwagen</li>
        </ul>
    </header>
)

export default Header