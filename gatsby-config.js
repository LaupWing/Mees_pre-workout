module.exports = {
    siteMetadata:{
        title: 'Beast nutrition'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options:{
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options:{
                fonts:[`Open Sans`]
            }
        }
    ],
}
