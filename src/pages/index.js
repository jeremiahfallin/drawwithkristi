import React from "react"

import Layout from "../components/layout"
import Products from "../components/Products"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Products />
  </Layout>
)

export default IndexPage
