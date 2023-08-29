import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import CarroselMoviePoster from '../../components/CarroselMoviePoster'
import { Movie, movies } from '../../data/movies.ts'
import ProfilePicture from '../../assets/profile_pic.jpg'
import { AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'

const Dashboard = () => {
  const username = Cookies.get('username')
  const token = Cookies.get('token')
  console.log(username, token)

  const movieList = movies['movies']
  const slicedMovieList = movieList.slice(0, 10)

  console.log(movieList)

  async function getUserInfos() {
    if (username && token) {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/username/${username}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        console.log(response.data)
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
      <nav className="flex flex-col gap-2 min-w-[360px]">
        <div className="rounded-lg h-1/3 flex flex-col gap-2 p-4 justify-around bg-opacity-25">
          {/* User bullet */}
          <div className="bg-system-orange p-3 rounded-full flex gap-2 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-neutral-400 overflow-hidden">
              <img src={ProfilePicture} alt="" />
            </div>
            <div className="flex flex-col text-sm justify-center">
              <strong>Nome</strong>
              <span>@usuario</span>
            </div>
          </div>

          {/* User menu */}
          <div className="flex flex-col gap-2">
            <button className="rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600">
              <AiOutlineUser className="text-system-orange" size={24} />
              <span>Meu perfil</span>
            </button>
            <button className="rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600">
              <IoMdNotifications className="text-system-orange" size={24} />
              <span>Notificações</span>
            </button>
            <button className="rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600">
              <AiOutlineUnorderedList
                className="text-system-orange"
                size={24}
              />
              <span>Listas</span>
            </button>
            <button className="rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600">
              <BsFillGearFill className="text-system-orange" size={24} />
              <span>Configurações</span>
            </button>
          </div>
        </div>

        <div className="h-[1px] bg-system-orange m-4 opacity-30"></div>

        <div className="px-4 text-zinc-700">
          <h3 className="text-xl font-bold text-center text-system-orange-light">
            Meus clubes
          </h3>
          <div className="w-full bg-neutral-600 bg-opacity-25 hover:bg-opacity-50 mt-2 rounded-xl">
            <div className="flex p-4 items-center gap-4 text-sm">
              <div className="w-12 h-12 rounded-full bg-system-blue bg-opacity-50 overflow-hidden object-fill">
                <img
                  src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg"
                  alt=""
                  className="h-full"
                />
              </div>
              <div className="flex flex-col">
                <strong>GHH - Gore Horror House Club</strong>
                <div>13 notificações</div>
              </div>
            </div>
          </div>
          <div className="w-full bg-neutral-600 bg-opacity-25 hover:bg-opacity-50 mt-2 rounded-xl">
            <div className="flex p-4 items-center gap-4 text-sm">
              <div className="w-12 h-12 rounded-full bg-system-blue bg-opacity-50 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/51340/rat-pets-eat-51340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="h-full object-fill"
                />
              </div>
              <div className="flex flex-col">
                <strong>Haters do Scorsese</strong>
                <div>6 notificações</div>
              </div>
            </div>
          </div>
          <div className="w-full bg-neutral-600 bg-opacity-25 hover:bg-opacity-50 mt-2 rounded-xl">
            <div className="flex p-4 items-center gap-4 text-sm">
              <div className="w-12 h-12 rounded-full bg-system-blue bg-opacity-50"></div>
              <div className="flex flex-col">
                <strong>Movies to make you think...</strong>
                <div>8 notificações</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex flex-col gap-2 overflow-x-hidden">
        <section className="bg-system-dark-gray rounded-lg flex-1 px-3 py-6 bg-opacity-25 min-h-[300px]">
          <div className="flex w-full justify-between gap-2 h-full overflow-x-scroll overflow-y-hidden">
            {slicedMovieList.map((movie: Movie) => {
              return (
                <CarroselMoviePoster
                  key={movie.posterUrl}
                  director={movie.director}
                  image={movie.posterUrl}
                  title={movie.title}
                  year={Number(movie.year)}
                />
              )
            })}
          </div>
        </section>
        <section className="bg-system-dark-gray rounded-lg p-4 h-2/3 bg-opacity-25">
          Atividade recente
        </section>
      </main>
    </div>
  )
}

export default Dashboard
