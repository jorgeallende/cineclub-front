import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './styles.css'

type RegisterInputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement> &
  (
    | {
        variant?: 'birthday'
        day: number | null
        month: number | null
        year: number | null
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
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  return (
    <div className="bg-system-white flex h-screen items-center justify-center">
      <div className="rounded-lg py-32 overflow-hidden relative bg-gradient-to-r from-system-orange to-orange-800 min-h-[70vh] w-[800px] px-44 flex flex-col gap-6 items-center">
        <div className="absolute left-2 top-2 flex flex-col gap-3 side-animation">
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
        </div>

        {/*  */}
        <div className="flex justify-between w-full">
          <button>
            <BsFillArrowLeftCircleFill size={26} color={''} />
          </button>
          <h1 className="text-white font-title font-semibold text-xl">
            Faça parte do clube
          </h1>
          <div></div>
        </div>
        <RegisterInput
          inputValue={user}
          inputCallback={setUser}
          label="Usuário"
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
          dayCallback={setDay as () => void}
          monthCallback={setMonth as () => void}
          yearCallback={setYear as () => void}
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
          className="bg-system-blue px-16 py-5 mt-7 h-[54px] rounded-2xl text-white font-title font-semibold"
        >
          REGISTRAR
        </button>
        {/*  */}

        <div className="absolute right-2 top-2 group flex flex-col gap-3 side-animation">
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
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
            value={props.day as number}
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
            value={props.month as number}
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
            value={props.year as number}
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
