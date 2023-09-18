import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import ProfilePicture from '../../assets/profile_pic.jpg'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { useState, useEffect } from 'react'
import { z } from 'zod'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'
import { UserByUsername } from '../../types/types'

const NewClub = () => {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const username = Cookies.get('username')
  const token = Cookies.get('token')

  const [nome, setNome] = useState('')
  const [userToBeAdded, setUserToBeAdded] = useState({})
  const [usernameToBeAdded, setUsernameToBeAdded] = useState('')
  const [userList, setUserList] = useState<UserByUsername[]>([])

  async function getUserByUsername() {
    try {
      await axios
        .get<UserByUsername>(
          `http://localhost:8080/user/username/${usernameToBeAdded}`,
        )
        .then(response => {
          setUserToBeAdded(response.data)
          console.log(response.data)
          setUserList([...userList, response.data])
          setLoadingSubmit(false)
        })
    } catch (error) {
      console.error(error)
    }
  }

  async function getUserInfos() {
    if (username && token) {
      try {
        await axios
          .get<UserByUsername>(
            `http://localhost:8080/user/username/${username}`,
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

  const handleSubmit = () => {
    setLoadingSubmit(true)
  }

  return (
    <div className="bg-gradient-to-r from-system-blue to-orange-800 bg-cover bg-bottom bg-blend-hard-light flex h-screen items-center justify-center">
      <div className=" overflow-hidden relative bg-gradient-to-r from-system-blue to-orange-800 h-screen w-11/12 px-44 flex flex-col gap-4 items-center justify-center">
        <div className="absolute left-2 top-2 flex flex-col gap-3 side-animation">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"
            ></div>
          ))}
        </div>

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

        {/*  */}
        <div className=" w-full py-6 h-full overflow-y-scroll flex flex-col gap-2">
          <div className=" flex justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="shadow-lg hover:shadow-sm focus:shadow-none rounded-full"
            >
              <BsFillArrowLeftCircleFill size={26} color={''} />
            </button>
            <h1 className="text-white font-title font-semibold text-xl">
              Criar um clube
            </h1>
            <div></div>
          </div>

          <div className="flex w-full gap-4 h-screen flex-1 py-5 p-4">
            <form
              className="flex flex-1 flex-col gap-2 mt-6"
              onSubmit={e => {
                e.preventDefault()
                void handleSubmit()
              }}
            >
              <Input
                variant="default"
                label="Nome do clube"
                inputValue={title}
                inputCallback={setTitle}
                disabled={loadingSubmit}
              />
              <div className="flex gap-2 items-center">
                <Input
                  variant="default"
                  label="Adicionar membros"
                  inputValue={usernameToBeAdded}
                  inputCallback={setUsernameToBeAdded}
                  disabled={loadingSubmit}
                  placeholder="@username"
                />
                <button
                  onClick={() => {
                    void getUserByUsername()
                  }}
                  className="font-semibold text-xl px-12 py-2 bg-system-blue text-white mt-4 rounded-md hover:bg-system-blue hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-md focus:shadow-none"
                >
                  Adicionar
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-system-orange p-3 rounded-full flex gap-2 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-neutral-400 overflow-hidden">
                    <img src={ProfilePicture} alt="" />
                  </div>
                  <div className="flex flex-col text-sm justify-center">
                    <strong>ADMINITRADOR</strong>
                    <span>@{username}</span>
                  </div>
                </div>

                {userList.length > 0 &&
                  userList.map((user, index) => (
                    <div className="bg-system-blue p-3 rounded-full flex gap-2 cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-neutral-400 overflow-hidden">
                        <img src={ProfilePicture} alt="" />
                      </div>
                      <div className="flex flex-col text-sm justify-center">
                        <strong>MEMBRO</strong>
                        <span>@{username}</span>
                      </div>
                    </div>
                  ))}
              </div>

              <button
                disabled={loadingSubmit}
                type="submit"
                className='className="font-title font-semibold text-xl px-12 py-3 bg-system-blue text-white self-center rounded-full hover:bg-system-blue hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-md focus:shadow-none"'
              >
                Criar
              </button>
            </form>
          </div>
        </div>

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

export default NewClub
