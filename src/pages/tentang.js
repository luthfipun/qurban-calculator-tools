import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutPage from "../container/about"

const Index = () => (
  <Layout>
    <Seo
      title="Tentang"
      description="Sebuah tool atau aplikasi sederhana yang bersifat open source, untuk memudahkan panitia qurban menghitung atau menentukan jumlah berapa berat daging qurban yang akan di berikan kepada mustahik"
    />
    <AboutPage />
  </Layout>
)

export default Index
