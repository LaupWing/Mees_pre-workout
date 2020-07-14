const path = require('path')

module.exports.createPages = async({graphql, actions})=>{
    const {createPage} = actions
    const productTemplate = path.resolve('./src/templates/productDetail.js')
    const res = await graphql(`
        query {
            allContentfulProduct {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)
    res.data.allContentfulProduct.edges.forEach(edge=>{
        console.log(edge)
        createPage({
            component: productTemplate,
            path: `/producten/${edge.node.id}`,
            context:{
                id: edge.node.id
            }
        })
    })
}