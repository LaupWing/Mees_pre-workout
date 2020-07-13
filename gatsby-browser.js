const React = require("react")
const Header = require("./src/components/header/header").default

exports.wrapPageElement = ({ element, props }) => {
  return <Header>{element}</Header>
}