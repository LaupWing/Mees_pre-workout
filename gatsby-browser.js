import React from 'react'
import Layout from "./src/components/layout/layout"
import GlobalContextProvider from './src/context/GlobalContext'

export const wrapPageElement = ({ element, props })=>{
    return (
        <GlobalContextProvider>
            <Layout {...props}>{element}</Layout>
        </GlobalContextProvider>)
}