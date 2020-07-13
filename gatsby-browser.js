const React = require("react")
const Layout = require("./src/components/layout/layout").default

exports.wrapPageElement = ({ children, props }) => {
  return <Layout {...props}>{children}</Layout>
}