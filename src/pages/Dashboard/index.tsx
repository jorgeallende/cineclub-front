import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Screens, UserByUsername } from '../../types/types.ts'
import Navbar from '../../components/Navbar/index.tsx'
import FeedAndPopular from '../../components/FeedAndPopular.tsx/index.tsx'
import Movies from '../../components/Movies/index.tsx'
import Clubs from '../../components/Clubs/index.tsx'

const Dashboard = () => {
  const username = Cookies.get('username')
  const token = Cookies.get('token')
  const [nome, setNome] = useState('')
  const [currentScreen, setCurrentScreen] = useState<Screens>('home')

  const navigate = useNavigate()

  function handleLogout() {
    Cookies.remove('autheticated')
    Cookies.remove('username')
    Cookies.remove('token')
    navigate('/')
  }

  async function getUserInfos() {
    if (username && token) {
      try {
        await axios
          .get<UserByUsername>(
            `http://localhost:8080/user/username/@${username}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          )
          .then(response => {
            setNome(response.data.name)
            console.log(response)
          })
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    void getUserInfos()
  }, [username, token])

  return (
    <div className="h-screen w-screen flex gap-4 p-6 bg-zinc-100">
      <Navbar
        username={username as string}
        nome={nome}
        handleLogout={handleLogout}
        currentScreen={currentScreen}
        changeScreen={setCurrentScreen}
      />
      {currentScreen == 'home' && <FeedAndPopular />}
      {currentScreen == 'profile' && <h1>profile</h1>}
      {currentScreen == 'movies' && <Movies />}
      {currentScreen == 'settings' && <h1>settings</h1>}
      {currentScreen == 'clubs' && <Clubs />}
    </div>
  )
}

export default Dashboard
