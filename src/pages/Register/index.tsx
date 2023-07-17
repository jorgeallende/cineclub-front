import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'

const Register = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [day, setDay] = useState(null)
  const [month, setMonth] = useState(null)
  const [year, setYear] = useState(null)

  const navigate = useNavigate()

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
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
        </div>

        {/*  */}
        <div className="flex justify-between w-full">
          <button onClick={() => navigate('/')}>
            <BsFillArrowLeftCircleFill size={26} color={''} />
          </button>
          <h1 className="text-white font-title font-semibold text-xl">
            Faça parte do clube
          </h1>
          <div></div>
        </div>
        <Input
          inputValue={user}
          inputCallback={setUser}
          label="Usuário"
          type="text"
        />
        <Input
          inputValue={password}
          inputCallback={setPassword}
          label="Senha"
          type="password"
        />
        <Input
          inputValue={passwordConfirmation}
          inputCallback={setPasswordConfirmation}
          label="Confirmar senha"
          type="password"
        />
        <Input
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
          <div className="bg-[#D9D9D9] opacity-40 group-hover:opacity-60 transition-opacity duration-300 h-[100px] aspect-square rounded-2xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Register
