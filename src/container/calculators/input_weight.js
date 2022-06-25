import React from "react"
import InputNumber from "../../components/animal/input"

const InputWeight = ({ animal, value, setValue }) => (
  <div className="flex flex-col items-center">
    <p className="text-slate-500 font-semibold text-lg">
      Berapa total berat hidup <span className="text-teal-500">{animal}</span>{" "}
      kurban?
    </p>
    <InputNumber value={value === 0 ? "" : value} setValue={setValue} />
  </div>
)

export default InputWeight
