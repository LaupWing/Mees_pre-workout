import React from 'react'
import styles from './footer.module.css'
import {Link} from 'gatsby'

const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <div className={'container ' + styles.content}>
                <ul>
                    <li><Link activeClassName={styles.active} to="/">Home</Link></li>
                    <li><Link activeClassName={styles.active} to="/producten">Producten</Link></li>
                    <li><Link activeClassName={styles.active} to="/over_ons">Over Ons</Link></li>
                    <li><Link activeClassName={styles.active} to="/koopvoorwaarden">Koopvoorwaarden</Link></li>
                    <li><Link activeClassName={styles.active} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer