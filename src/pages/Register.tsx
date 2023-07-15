import React, { useState } from 'react'

type RegisterInputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  (
    | {
        variant?: 'birthday'
        day: number
        month: number
        year: number
        dayCallback: (day: number) => void
        monthCallback: (month: number) => void
        yearCallback: (year: number) => void
      }
    | {
        variant?: 'default'
        inputValue: string
        inputCallback: (value: string) => void
      }
  )

const Register = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  return (
    <div className="bg-system-white flex h-screen items-center justify-center">
      <div className="rounded-lg py-32 overflow-hidden relative bg-gradient-to-r from-system-orange to-system-orange-light min-h-[70vh] w-[700px] px-24 flex flex-col gap-6 items-center">
        <div className="absolute top-2 flex gap-3">
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
        </div>

        {/*  */}
        <h1 className="text-white font-title font-semibold text-xl">
          Faça parte do clube
        </h1>
        <RegisterInput
          inputValue={name}
          inputCallback={setName}
          label="Nome"
          type="text"
        />
        <RegisterInput
          inputValue={password}
          inputCallback={setPassword}
          label="Senha"
          type="password"
        />
        <RegisterInput
          inputValue={passwordConfirmation}
          inputCallback={setPasswordConfirmation}
          label="Confirmar senha"
          type="password"
        />
        <RegisterInput
          day={day}
          month={month}
          year={year}
          dayCallback={setDay}
          monthCallback={setMonth}
          yearCallback={setYear}
          label="Data de nascimento"
          type="number"
          variant="birthday"
        />
        <button
          onClick={() => {
            console.log(day)
            console.log(month)
            console.log(year)
          }}
          className="bg-system-blue px-16 py-5 h-[54px] rounded-2xl text-white font-title font-semibold"
        >
          REGISTRAR
        </button>
        {/*  */}

        <div className="absolute bottom-2 group flex gap-3">
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}

const RegisterInput = (props: RegisterInputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-white font-title text-sm font-semibold">
        {props.label}
      </label>
      {!props.variant && (
        <input
          type={props.type}
          name=""
          id=""
          className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
        />
      )}
      {props.variant === 'birthday' && (
        <div className="flex justify-between gap-8">
          <input
            placeholder="Dia"
            type={props.type}
            name=""
            value={props.day}
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (input.value.length > 2) {
                if (props.variant === 'birthday') {
                  props.dayCallback(parseInt(input.value.slice(0, 2)))
                  input.value = input.value.slice(0, 2)
                }
              } else {
                if (props.variant === 'birthday') {
                  props.dayCallback(parseInt(input.value))
                }
              }
            }}
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
          <input
            placeholder="Mês"
            type={props.type}
            value={props.month}
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (input.value.length > 2) {
                if (props.variant === 'birthday') {
                  props.monthCallback(parseInt(input.value.slice(0, 2)))
                  input.value = input.value.slice(0, 2)
                }
              } else {
                if (props.variant === 'birthday') {
                  props.monthCallback(parseInt(input.value))
                }
              }
            }}
            name=""
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
          <input
            placeholder="Ano"
            type={props.type}
            value={props.year}
            onChange={e => {
              const input = e.target as HTMLInputElement
              if (input.value.length > 4) {
                if (props.variant === 'birthday') {
                  props.yearCallback(parseInt(input.value.slice(0, 4)))
                  input.value = input.value.slice(0, 4)
                }
              } else {
                if (props.variant === 'birthday') {
                  props.yearCallback(parseInt(input.value))
                }
              }
            }}
            name=""
            id=""
            className="h-[54px] bg-system-white-light rounded-2xl w-full text-system-black px-4 font-title font-semibold"
          />
        </div>
      )}
    </div>
  )
}

export default Register
