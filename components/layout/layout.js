import React from 'react'

export default Layout = (props)=>{
    return (
        <div>
            <main>
                {props.children}
            </main>
        </div>
    )
}
