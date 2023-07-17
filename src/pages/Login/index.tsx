import { useState } from 'react'
import Input from '../../components/Input'

const LoginPage = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="bg-system-white flex items-center justify-center h-screen">
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
            />
          </div>
          <button className="font-title font-semibold text-xl px-12 py-3 bg-system-orange text-white self-center rounded-full">
            Entrar
          </button>
          <div className="text-center">
            <p>Esqueci minha senha</p>
            <p>
              Não faz parte do clube? <span>Criar conta</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
