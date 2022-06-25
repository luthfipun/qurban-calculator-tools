import React from "react"

const Tooltip = ({ message, children }) => (
  <div className="relative flex flex-col items-center group cursor-help">
    {children}
    <div className="absolute bottom-0 flex-col items-center pb-6 hidden group-hover:flex w-52 md:w-96">
      <span className="relative z-10 p-2 text-xs leading-4 text-white whitespace-no-wrap bg-slate-600 shadow-lg rounded-md">
        {message}
      </span>
      <div className="w-3 h-3 -mt-2 rotate-45 bg-slate-600"></div>
    </div>
  </div>
)

export default Tooltip
