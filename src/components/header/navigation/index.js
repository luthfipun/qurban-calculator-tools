import React, { useState } from "react"
import Menu from "../menu"
import { CgMenuLeft } from "@react-icons/all-files/cg/CgMenuLeft"
import { CgMenuRight } from "@react-icons/all-files/cg/CgMenuRight"
import "./index.css"
import MobileMenu from "../menu/index.mobile"

const Navigation = () => {
  const [isCollapse, setCollapse] = useState(true)

  return (
    <div>
      <div className="flex flex-wrap justify-between p-5 items-center bg-slate-50 rounded-lg">
        {isCollapse ? (
          <CgMenuLeft
            className="mobile-menu"
            onClick={() => setCollapse(!isCollapse)}
          />
        ) : (
          <CgMenuRight
            className="mobile-menu"
            onClick={() => setCollapse(!isCollapse)}
          />
        )}
        <h2 className="text-2xl font-bold text-slate-700 antialiased">
          Qurban
        </h2>
        <Menu />
      </div>
      <div>
        <MobileMenu isCollapse={isCollapse} />
      </div>
    </div>
  )
}

export default Navigation
