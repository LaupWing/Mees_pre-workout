import React from 'react'
import '../../styles/index.css'
import Header from '../header/header'
import styles from './layout.module.css'

const Layout = (props)=>{
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={'container ' + styles.content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout