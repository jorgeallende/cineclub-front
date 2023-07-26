import React, { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { z } from 'zod'
import axios from 'axios'
import { hashPassword } from '../../utils/auth'

const Register = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [day, setDay] = useState(-1)
  const [month, setMonth] = useState(-1)
  const [year, setYear] = useState(-1)

  const navigate = useNavigate()

  const userSchema = z
    .object({
      user: z.string().min(3).max(20),
      password: z.string().min(6).max(20),
      passwordConfirmation: z.string().min(6).max(20),
    })
    .superRefine(({ password, passwordConfirmation }, ctx) => {
      if (password !== passwordConfirmation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'As senhas precisam ser iguais',
          path: ['passwordConfirmation'],
        })
      }
    })

  const handleSubmit = async () => {
    try {
      const userValidation = userSchema.parse({
        user,
        password,
        passwordConfirmation,
      })

      console.log(userValidation)

      await axios
        .post('http://localhost:8080/user', {
          username: '@' + userValidation.user,
          password: await hashPassword(userValidation.password),
          age: 12,
          name: userValidation.user,
          bio: 'OIEEE',
        })
        .then(response => {
          console.log(response)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-system-black bg-register bg-cover bg-bottom bg-blend-hard-light flex h-screen items-center justify-center">
      <div className=" overflow-hidden relative bg-gradient-to-r from-system-orange to-orange-800 h-screen w-[800px] px-44 flex flex-col gap-4 items-center justify-center">
        <div className="absolute left-2 top-2 flex flex-col gap-3 side-animation">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"
            ></div>
          ))}
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
          variant="default"
        />
        <Input
          inputValue={password}
          inputCallback={setPassword}
          label="Senha"
          type="password"
          variant="default"
        />
        <Input
          inputValue={passwordConfirmation}
          inputCallback={setPasswordConfirmation}
          label="Confirmar senha"
          type="password"
          variant="default"
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
          onClick={() => void handleSubmit()}
          className="bg-system-blue px-16 mt-7 h-[54px] rounded-2xl text-white font-title font-semibold"
        >
          REGISTRAR
        </button>
        {/*  */}

        <div className="absolute right-2 top-2 group flex flex-col gap-3 side-animation">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Register
