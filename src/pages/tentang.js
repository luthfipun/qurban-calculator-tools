import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutPage from "../container/about"

const Index = () => (
  <Layout>
    <Seo title="Tentang" />
    <AboutPage />
  </Layout>
)

export default Index
