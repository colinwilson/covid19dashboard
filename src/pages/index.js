import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import VirusMap from "../components/virusmap"

const IndexPage = () => (
  <Layout>
    <SEO title="Dashboard" />
    <VirusMap />

  </Layout>
)

export default IndexPage
