const React = require('react')
const GlobalContextProvider = require('./src/context/GlobalContext')

exports.wrapRootElement = ({element})=>{
    return (
        <GlobalContextProvider>
            {element}
        </GlobalContextProvider>)
}