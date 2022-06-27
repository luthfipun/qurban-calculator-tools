import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Calculator from "../container/calculators"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Perhitungan Daging Qurban"
      description="kalkulator untuk penentuan dan perhitungan daging qurban, hewan qurban kambind dan hewan qurban sapi"
    />
    <Calculator />
  </Layout>
)

export default IndexPage
