import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import Input from '../../components/Input'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

function Profile() {
  const [username, setUsername] = useState('')

  const navigate = useNavigate()

  const getUserInfo = async (username: string) => {
    await axios
      .get(`http://localhost:3333/users/username/${username}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  function handleLogout() {
    Cookies.remove('autheticated')
    Cookies.remove('username')
    Cookies.remove('token')
    navigate('/')
  }

  useEffect(() => {
    const token = Cookies.get('token')
    if (!token) {
      navigate('/')
    }
    getUserInfo(username)
  }, [username])

  return (
    <div className="flex justify-center">
      <div className="bg-system-blue mt-16 px-16 py-16 rounded-lg">
        <button onClick={() => navigate('/')}>
          <BsFillArrowLeftCircleFill size={26} color={''} />
        </button>
        <div>
          <h1>Perfil</h1>
          <h3>Bem-vindo, Fulano.</h3>
        </div>
        <button onClick={handleLogout}>Sair</button>
        <form>
          <div className="flex flex-col">
            <Input
              variant="default"
              label="Usuário"
              inputValue={username}
              inputCallback={setUsername}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
