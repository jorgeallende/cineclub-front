import { useState } from 'react'
import Input from '../../components/Input'
import { verifyPassword } from '../../utils/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [logado, setLogado] = useState(false)

  const navigate = useNavigate()

  async function handleLogin(username: string, password: string) {
    try {
      await axios
        .post('http://localhost:8080/auth/login', {
          username,
          password,
        })
        .then(response => {
          console.log(response)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-system-white flex items-center justify-center h-screen overflow-hidden relative">
      <div className="absolute left-2 top-2 flex flex-col gap-3 side-animation">
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
        ))}
      </div>
      <div className="absolute right-2 top-2 flex flex-col gap-3 side-animation">
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"></div>
        ))}
      </div>
      <div className="bg-system-blue px-16 py-16 rounded-lg">
        <div className="w-96 min-h-[480px] flex flex-col gap-12">
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
          {logado ? <h1>LOGOU</h1> : <>Não logou</>}
          <button
            onClick={() => void handleLogin(user, password)}
            className="font-title font-semibold text-xl px-12 py-3 bg-system-orange text-white self-center rounded-full hover:bg-system-orange-light"
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
