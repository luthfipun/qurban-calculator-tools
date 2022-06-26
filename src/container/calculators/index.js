import React, { useState } from "react"
import BasicButton from "../../components/animal/button"
import InputWeight from "./input_weight"
import PickAnimal from "./pick_animal"
import Results from "./results"

const Calculator = () => {
  const [data, setData] = useState({
    animal: null,
    weight: 0,
  })
  const [step, setStep] = useState(0)

  const nextStep = () => {
    if (step === 0) {
      if (data.animal === null) {
        return
      }
      setStep(1)
    }

    if (step === 1) {
      if (data.weight <= 0) {
        return
      }
      setStep(2)
    }

    if (step === 2) {
      resetResult()
    }
  }

  const previousStep = () => {
    if (step === 0 || step === 2) {
      return
    }

    if (step === 1) {
      setStep(0)
    }
  }

  const resetResult = () => {
    setData({ animal: null, weight: 0 })
    setStep(0)
  }

  const contentView = () => {
    if (step === 0) {
      return (
        <PickAnimal
          animal={data.animal}
          setAnimal={e => setData({ ...data, animal: e })}
        />
      )
    }

    if (step === 1) {
      return (
        <InputWeight
          value={data.weight}
          setValue={e => setData({ ...data, weight: e })}
          animal={data.animal}
        />
      )
    }

    if (step === 2) {
      return <Results data={data} />
    }
  }

  const buttonPrimaryEvent = () => {
    if (step === 0) {
      return data.animal === null ? "primary_disable" : "primary"
    }

    if (step === 1) {
      return data.weight <= 0 ? "primary_disable" : "primary"
    }

    if (step == 2) {
      return "primary"
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full md:h-full">
      {contentView()}
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 w-full md:w-auto px-7 md:px-0 md:space-x-3 py-9">
        <BasicButton
          type={step === 0 || step === 2 ? "disable" : "default"}
          text="Kembali"
          onTap={() => previousStep()}
        />
        <BasicButton
          onTap={() => nextStep()}
          type={buttonPrimaryEvent()}
          text={step === 0 ? "Lanjut" : step === 1 ? "Hitung" : "Hitung Ulang"}
        />
      </div>
    </div>
  )
}

export default Calculator
