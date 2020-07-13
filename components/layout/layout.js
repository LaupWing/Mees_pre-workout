import React from 'react'
import '../../styles/index.css'
import Header from '../header/header'

const Layout = (props)=>{
    return (
        <div>
            <Header/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout