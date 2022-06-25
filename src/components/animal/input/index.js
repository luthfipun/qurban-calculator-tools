import React from "react"
import { filterOnlyNumber } from "../../../config/utils"
import "./index.css"

const InputNumber = ({ value, setValue, disable = false }) => (
  <div className="relative">
    <input
      type="text"
      value={value}
      placeholder="cth: 350"
      onChange={e => setValue(filterOnlyNumber(e.target.value))}
      disabled={disable}
    />
    <label className="absolute inset-y-0 right-0 mr-5 my-1.5 font-semibold text-slate-500">
      kg
    </label>
  </div>
)

export default InputNumber
