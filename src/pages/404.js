import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NotFound from "../assets/error.svg"

const NotFoundPage = () => (
  <Layout>
    <Seo title="Halaman Tidak Ditemukan" />
    <div className="flex flex-col w-full h-full justify-center items-center">
      <NotFound />
      <div className="mt-5 font-medium text-lg text-slate-400">
        Halaman Tidak Ditemukan
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
