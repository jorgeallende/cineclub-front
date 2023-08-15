import { useState } from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { set, z } from 'zod'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [day, setDay] = useState(-1)
  const [month, setMonth] = useState(-1)
  const [year, setYear] = useState(-1)
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const navigate = useNavigate()

  const userSchema = z
    .object({
      name: z
        .string()
        .min(3, { message: 'Usuário precisa ser maior que 3 caracteres.' })
        .max(50, { message: 'Usuário precisa ser menor que 50 caracteres.' }),
      user: z
        .string()
        .min(3, {
          message: 'Usuário precisa ser maior que 3 caracteres.',
        })
        .max(20, {
          message: 'Usuário precisa ser menor que 20 caracteres.',
        }),
      password: z
        .string()
        .min(6, { message: 'Senha precisa ser maior que 6 caracteres.' })
        .max(20, { message: 'Senha precisa ser menor que 20 caracteres' }),
      passwordConfirmation: z.string().min(6).max(20),
      email: z.string().email({ message: 'Insira um email válido.' }),
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
    setLoadingSubmit(true)
    try {
      const userValidation = userSchema.parse({
        name,
        user,
        password,
        passwordConfirmation,
        email,
      })

      const birthday = new Date(year, month, day)
      const age = Math.floor(
        (new Date().getTime() - birthday.getTime()) / 31556952000,
      )

      console.log(age)

      await axios
        .post('http://localhost:8080/user/register', {
          username: '@' + userValidation.user.toLowerCase(),
          email: userValidation.email,
          password: userValidation.password,
          age: age,
          name: userValidation.name,
          bio: '',
        })
        .then(response => {
          toast.success('Usuário criado com sucesso!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })

          setTimeout(() => {
            navigate('/login')
          }, 3000)
        })
    } catch (error) {
      setLoadingSubmit(false)
      if (error instanceof z.ZodError) {
        toast.warn(error.errors[0].message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      } else {
        toast.error('Erro ao criar usuário', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      }
    }
  }

  return (
    <div className="bg-system-black bg-register bg-cover bg-bottom bg-blend-hard-light flex h-screen items-center justify-center">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
          inputValue={name}
          inputCallback={setName}
          label="Nome completo"
          type="text"
          variant="default"
        />
        <Input
          inputValue={user}
          inputCallback={setUser}
          label="Usuário"
          type="text"
          variant="default"
        />
        <Input
          inputValue={email}
          inputCallback={setEmail}
          label="Email"
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
          className="bg-system-blue px-16 mt-7 h-[54px] rounded-2xl text-white font-title font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loadingSubmit}
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
