import ProfilePicture from '../../assets/profile_pic.jpg'
import { AiOutlineUser, AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { Screens } from '../../types/types'
import { FaLayerGroup } from 'react-icons/fa'

interface NavbarProps {
  username: string
  nome: string
  currentScreen: string
  handleLogout: () => void
  changeScreen: (screen: Screens) => void
}

const Navbar = ({
  nome,
  username,
  currentScreen,
  handleLogout,
  changeScreen,
}: NavbarProps) => {
  return (
    <nav className="flex flex-col gap-2 min-w-[360px]">
      <div className="rounded-lg flex flex-col gap-2 p-4 justify-around bg-opacity-25">
        {/* User bullet */}
        <div className="bg-system-orange p-3 rounded-full flex gap-2 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-neutral-400 overflow-hidden">
            <img src={ProfilePicture} alt="" />
          </div>
          <div className="flex flex-col text-sm justify-center">
            <strong>{nome}</strong>
            <span>@{username}</span>
          </div>
        </div>

        {/* User menu */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => changeScreen('home')}
            className={`${
              currentScreen == 'home' ? 'bg-neutral-600 bg-opacity-25' : ''
            } rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600 transition ease-in-out duration-200`}
          >
            <IoMdNotifications className="text-system-blue" size={24} />
            <span>Home</span>
          </button>
          <button
            onClick={() => changeScreen('profile')}
            className={`${
              currentScreen == 'profile' ? 'bg-neutral-600 bg-opacity-25' : ''
            } rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600 transition ease-in-out duration-200`}
          >
            <AiOutlineUser className="text-system-blue" size={24} />
            <span>Meu perfil</span>
          </button>
          <button
            onClick={() => changeScreen('movies')}
            className={`${
              currentScreen == 'movies' ? 'bg-neutral-600 bg-opacity-25' : ''
            } rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600 transition ease-in-out duration-200`}
          >
            <AiOutlineUnorderedList className="text-system-blue" size={24} />
            <span>Filmes</span>
          </button>
          <button
            onClick={() => changeScreen('settings')}
            className={`${
              currentScreen == 'settings' ? 'bg-neutral-600 bg-opacity-25' : ''
            } rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600 transition ease-in-out duration-200`}
          >
            <BsFillGearFill className="text-system-blue" size={24} />
            <span>Configurações</span>
          </button>
          <button
            onClick={() => changeScreen('clubs')}
            className={`${
              currentScreen == 'clubs' ? 'bg-neutral-600 bg-opacity-25' : ''
            } rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600 transition ease-in-out duration-200`}
          >
            <FaLayerGroup className="text-system-blue" size={24} />
            <span>Clubes</span>
          </button>
          <button
            onClick={() => handleLogout()}
            className="rounded-full flex items-center w-full py-2 hover:bg-opacity-25 px-4 text-zinc-700 gap-4 hover:bg-neutral-600 transition ease-in-out duration-200"
          >
            <BiLogOut className="text-system-blue" size={24} />
            <span>Sair</span>
          </button>
        </div>
      </div>

      <div className="h-[1px] bg-system-orange m-4 opacity-30"></div>

      <div className="px-4 text-zinc-700">
        <h3 className="text-xl font-bold text-center text-system-orange-light">
          Meus clubes
        </h3>
        <div className="w-full bg-neutral-600 bg-opacity-25 hover:bg-opacity-50 mt-2 rounded-xl transition ease-in-out duration-200">
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
        <div className="w-full bg-neutral-600 bg-opacity-25 hover:bg-opacity-50 mt-2 rounded-xl transition ease-in-out duration-200 ">
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
        <div className="w-full bg-neutral-600 bg-opacity-25 hover:bg-opacity-50 mt-2 rounded-xl transition ease-in-out duration-200">
          <div className="flex p-4 items-center gap-4 text-sm">
            <div className="w-12 h-12 rounded-full bg-system-blue bg-opacity-50 overflow-hidden">
              <img
                src="https://api.time.com/wp-content/uploads/2023/07/top-100-movies-2000s-mulhollanddr.jpg"
                alt=""
                className="h-full object-fill"
              />
            </div>
            <div className="flex flex-col">
              <strong>Movies to make you think...</strong>
              <div>8 notificações</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
