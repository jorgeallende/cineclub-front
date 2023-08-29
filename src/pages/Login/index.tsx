import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Cookies from 'js-cookie'
import 'react-toastify/dist/ReactToastify.css'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

type TokenResponse = {
  token: string
}

const LoginPage = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [logado, setLogado] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (Cookies.get('autheticated') === 'true') {
      setLogado(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    }
  }, [])

  async function handleLogin(username: string, password: string) {
    setLoadingSubmit(true)
    try {
      await axios
        .post('http://localhost:8080/auth/login', {
          username: '@' + username,
          password,
        })
        .then(response => {
          setLogado(true)
          toast.success('Bem-vindo(a)!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })

          Cookies.set('autheticated', 'true', { expires: 1 })
          Cookies.set('username', username, { expires: 1 })

          const tokenResponse = response.data as TokenResponse
          Cookies.set('token', tokenResponse.token, { expires: 1 })

          navigate('/dashboard')
        })
    } catch (error) {
      console.log(error)
      toast.error('Erro ao logar. Cheque suas credenciais.', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } finally {
      setLoadingSubmit(false)
    }
  }

  return (
    <div className="bg-system-white flex items-center justify-center h-screen overflow-hidden relative">
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
      <div className="absolute left-2 top-2 flex flex-col gap-3 side-animation">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"
          ></div>
        ))}
      </div>
      <div className="absolute right-2 top-2 flex flex-col gap-3 side-animation">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"
          ></div>
        ))}
      </div>
      <div className="bg-system-blue px-16 py-16 rounded-lg">
        <div className="w-96 min-h-[480px] flex flex-col gap-12 relative">
          <div className="absolute top-1">
            <button onClick={() => navigate('/')}>
              <BsFillArrowLeftCircleFill size={26} color={''} />
            </button>
          </div>
          <h1 className="text-system-orange-light font-logo text-4xl tracking-widest text-center">
            CINECLUB
          </h1>
          <div className="flex flex-col gap-6">
            <Input
              variant="default"
              label="Usuário"
              inputValue={user}
              inputCallback={setUser}
            />
            <Input
              variant="default"
              label="Senha"
              inputValue={password}
              inputCallback={setPassword}
              type="password"
            />
          </div>
          <button
            onClick={() => void handleLogin(user.toLowerCase(), password)}
            disabled={loadingSubmit}
            className="font-title font-semibold text-xl px-12 py-3 bg-system-orange text-white self-center rounded-full hover:bg-system-orange-light disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Entrar
          </button>
          <div className="text-center">
            <p className="underline text-blue-500 cursor-pointer">
              Esqueci minha senha
            </p>
            <p>
              Não faz parte do clube?{' '}
              <span
                onClick={() => navigate('/register')}
                className="underline text-blue-500 cursor-pointer"
              >
                Criar conta
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
