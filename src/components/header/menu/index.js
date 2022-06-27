import { Link } from "gatsby"
import React from "react"
import route from "../../../config/route"
import "./index.css"

const Menu = () => {
  const path = location.pathname
  return (
    <div className="hidden md:block">
      <div className="flex flex-row space-x-3">
        <Link
          to={route.Kalkulator}
          className={`item${path == route.Kalkulator ? "-active" : ""}`}
        >
          Kalkulator
        </Link>
        <Link
          to={route.Berkurban}
          className={`item${path == route.Berkurban ? "-active" : ""}`}
        >
          BerQurban
        </Link>
        <Link
          to={route.Tentang}
          className={`item${path == route.Tentang ? "-active" : ""}`}
        >
          Tentang
        </Link>
      </div>
    </div>
  )
}

export default Menu
