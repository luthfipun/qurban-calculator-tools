import React, { useEffect, useState } from "react"
import { calculateBeefQurban, firstCapital } from "../../../config/utils"
import InputNumber from "../../../components/animal/input"
import { BsFillPatchQuestionFill } from "react-icons/bs"
import Tooltip from "../../../components/tooltip"

const CowResult = ({ data }) => {
  const [calculateData, setCalculateData] = useState(null)

  useEffect(() => {
    calculates(data.weight, data.weight / 2)
  }, [])

  const calculates = (totalWeight, karkas) => {
    let datas = calculateBeefQurban(totalWeight, karkas)
    setCalculateData(datas)
  }

  const reCalculateKarkas = e => {
    if (e.length > 0) {
      calculates(calculateData.totalWeight, e)
    }
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
            setValue={e => calculates(e, e / 2)}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <div className="flex flex-row items-center space-x-3">
            <text className="font-semibold text-slate-500">Berat Karkas</text>
            <Tooltip
              type="hover"
              message="karkas didefinisikan sebagai bagian tubuh dari sapi sehat yang telah disembelih secara halal sesuai dengan CAC/GI 24-1997, telah dikuliti, dikeluarkan jeroan, dipisahkan kepala dan kaki mulai tarsus/karpus ke bawah, organ reproduksi dan ambing, ekor serta lemak yang berlebih"
            >
              <BsFillPatchQuestionFill className="text-slate-500 text-sm" />
            </Tooltip>
          </div>
          <InputNumber
            value={calculateData != null ? calculateData.karkas : ""}
            setValue={reCalculateKarkas}
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
          <text className="font-semibold text-slate-500">Berat Jeroan</text>
          <InputNumber
            value={calculateData != null ? calculateData.innards : ""}
            disable={true}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <text className="font-semibold text-slate-500">Berat Kepala</text>
          <InputNumber
            value={calculateData != null ? calculateData.head : ""}
            disable={true}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <text className="font-semibold text-slate-500">Berat Ekor</text>
          <InputNumber
            value={calculateData != null ? calculateData.tail : ""}
            disable={true}
          />
        </div>
      </li>
      <li>
        <div className="flex flex-col md:flex-row md:space-x-5 md:items-center md:place-content-between">
          <div className="flex flex-row items-center space-x-3">
            <text className="font-semibold text-slate-500">Berat 4 kaki</text>
            <Tooltip type="hover" message="Berat daging rata-rata dari 4 kaki">
              <BsFillPatchQuestionFill className="text-slate-500 text-sm" />
            </Tooltip>
          </div>
          <InputNumber
            value={calculateData != null ? calculateData.foot : ""}
            disable={true}
          />
        </div>
      </li>
    </ul>
  )
}

export default CowResult
