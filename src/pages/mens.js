import React from "react"
import Categories from "../components/mens/Categories"
import Layout from "../components/Layout"
import Herosection from "../components/mens/Herosection"
import Offers from "../components/mens/Offers"

const mens = () => {
  return (
    <React.Fragment>
      <Layout>
        <Herosection />
        <Categories />
        <Offers />
      </Layout>
    </React.Fragment>
  )
}

export default mens
