/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col h-screen">
      <Header siteTitle={data.site.siteMetadata?.title || `Qurban`} />
      <main className="flex-1 mt-20 md:mt-0">{children}</main>
      <footer className="w-full p-5 text-right text-base font-normal text-slate-500">
        © {new Date().getFullYear()} &middot;{" "}
        <a
          href="https://github.com/luthfipun"
          className="font-semibold text-base text-teal-700"
          target="__blank"
        >
          @luthfipun
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
