import React from "react"
import ItemAnimal from "../../components/animal"
import Cow from "../../assets/cow.svg"
import Sheep from "../../assets/sheep.svg"

const PickAnimal = ({ animal, setAnimal }) => (
  <div className="flex flex-col items-center">
    <p className="text-slate-500 font-semibold text-lg">Pilih Hewan Qurban</p>
    <div className="flex flex-row space-x-5">
      <ItemAnimal
        title="Sapi"
        image={<Cow />}
        isSelected={animal === "sapi"}
        onTap={() => setAnimal("sapi")}
      />
      <ItemAnimal
        title="Kambing"
        image={<Sheep />}
        isSelected={animal === "kambing"}
        onTap={() => setAnimal("kambing")}
      />
    </div>
  </div>
)

export default PickAnimal
