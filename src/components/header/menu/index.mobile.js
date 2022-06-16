import { Link } from "gatsby"
import React from "react"
import route from "../../../config/route"

const MobileMenu = ({ isCollapse }) => {
  const path = location.pathname
  return (
    <div
      className={`${
        isCollapse ? "h-0" : "h-36"
      } transition-all duration-300 delay-150 overflow-hidden w-full`}
    >
      <div className="md:hidden">
        <div className="flex flex-col divide-y">
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
            Berkurban
          </Link>
          <Link
            to={route.Tentang}
            className={`item${path == route.Tentang ? "-active" : ""}`}
          >
            Tentang
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
