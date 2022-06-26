import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Calculator from "../container/calculators"

const IndexPage = () => (
  <Layout>
    <Seo title="Perhitungan Daging Qurban" />

    <Calculator />

    {
      /* <p>Source: </p>
    <p>
      https://disnakkan.grobogan.go.id/info/berita/503-mengenal-jenis-jenis-potongan-daging-sapi#:~:text=Karkas%20didefinisikan%20sebagai%20bagian%20tubuh,ekor%20serta%20lemak%20yang%20berlebih.
    </p>
    <p>
      https://dispertan.bantenprov.go.id/cara-praktis-menghitung-daging-qurban
    </p> */
      // https://pontren.com/2021/07/17/rumus-menghitung-karkas-daging-sapi-dan-kambing/
      // https://yatimmandiri.org/blog/inspirasi/syarat-qurban/
    }
  </Layout>
)

export default IndexPage
