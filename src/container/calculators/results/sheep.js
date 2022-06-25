import React, { useEffect, useState } from "react"
import { calculateMuttonQurban, firstCapital } from "../../../config/utils"
import InputNumber from "../../../components/animal/input"
import Tooltip from "../../../components/tooltip"
import { BsFillPatchQuestionFill } from "react-icons/bs"

const SheepResult = ({ data }) => {
  const [calculateData, setCalculateData] = useState(null)

  useEffect(() => {
    calculates(data.weight)
  }, [])

  const calculates = totalWeight => {
    let datas = calculateMuttonQurban(totalWeight)
    setCalculateData(datas)
  }

  return (
    <ul className="py-5 mr-7">
      <li className="flex flex-row space-x-2">
        <label className="font-semibold text-slate-500">Hewan Qurban</label>
        <text className="font-semibold text-teal-500">
          {firstCapital(data.animal)}
        </text>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <text className="font-semibold text-slate-500">Berat Hidup</text>
          <InputNumber
            value={calculateData != null ? calculateData.totalWeight : ""}
            setValue={e => calculates(e)}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <div className="flex flex-row items-center space-x-3">
            <text className="font-semibold text-slate-500">Berat Karkas</text>
            <Tooltip
              type="hover"
              message="karkas didefinisikan sebagai bagian tubuh dari kambing sehat yang telah disembelih secara halal sesuai dengan CAC/GI 24-1997, telah dikuliti, dikeluarkan jeroan, dipisahkan kepala dan kaki mulai tarsus/karpus ke bawah, organ reproduksi dan ambing, ekor serta lemak yang berlebih"
            >
              <BsFillPatchQuestionFill className="text-slate-500 text-sm" />
            </Tooltip>
          </div>
          <InputNumber
            value={calculateData != null ? calculateData.karkas : ""}
            disable={true}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <text className="font-semibold text-slate-500">Berat Daging</text>
          <InputNumber
            value={calculateData != null ? calculateData.meat : ""}
            disable={true}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <div className="flex flex-row items-center space-x-3">
            <text className="font-semibold text-slate-500">
              Berat Jeroan Merah
            </text>
            <Tooltip
              type="hover"
              message="jeroan merah adalah jantung, paru, hati dan limpa"
            >
              <BsFillPatchQuestionFill className="text-slate-500 text-sm" />
            </Tooltip>
          </div>
          <InputNumber
            value={calculateData != null ? calculateData.redInnards : ""}
            disable={true}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <div className="flex flex-row items-center space-x-3">
            <text className="font-semibold text-slate-500">
              Berat Jeroan Hijau
            </text>
            <Tooltip
              type="hover"
              message="jeroan hijau adalah lambung dan usus"
            >
              <BsFillPatchQuestionFill className="text-slate-500 text-sm" />
            </Tooltip>
          </div>
          <InputNumber
            value={calculateData != null ? calculateData.greenInnards : ""}
            disable={true}
          />
        </div>
      </li>
    </ul>
  )
}

export default SheepResult
