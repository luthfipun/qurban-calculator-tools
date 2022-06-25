import React from "react"
import "./index.css"

const BasicButton = ({ type, text, onTap }) => (
  <button onClick={onTap} className={`basic_button${"_" + type}`}>
    {text}
  </button>
)

export default BasicButton
