import React from "react"
import ItemAnimal from "../../../components/animal"
import Cow from "../../../assets/cow.svg"
import Sheep from "../../../assets/sheep.svg"
import CowResult from "./cow"
import SheepResult from "./sheep"

const Results = ({ data }) => {
  return (
    <div className="flex flex-col md:w-3/4 md:pt-10">
      <ItemAnimal image={data.animal === "sapi" ? <Cow /> : <Sheep />} />
      {data.animal === "sapi" ? (
        <CowResult data={data} />
      ) : (
        <SheepResult data={data} />
      )}
      <div className="p-5 bg-teal-50 rounded-lg text-slate-500 font-regular text-sm mx-7 md:mx-0">
        Perhitungan ini hanya perkiraan dan tidak pasti. Hanya mempermudah
        Panitia Qurban untuk menyesuaikan jumlah mustahik, terlepas dari daging
        yg tercecer maupun yg masih melekat pada tulang.
      </div>
    </div>
  )
}

export default Results
