import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserByUsername } from '../../types/types'
import { Movie } from '../../data/movies'

type Club = {
  admUser: UserByUsername
  name: string
  movies: Movie[]
  users: UserByUsername[]
  id: number
  currentWeekMovie: Movie
}

const Clubs = () => {
  const navigate = useNavigate()
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [clubList, setClubList] = useState<Club[]>([])

  const getClubs = async () => {
    try {
      await axios.get<Club[]>('http://localhost:8080/club').then(response => {
        console.log('CLUBES: ', response.data)
        setClubList(response.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    void getClubs()
  }, [])

  return (
    <div className="text-system-black w-full pt-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-title text-lg font-bold text-system-orange-light">
          Clubes
        </h1>
        <button
          onClick={() => navigate('/new-club')}
          className="bg-system-blue px-16 h-[54px] rounded-2xl text-white font-title font-semibold disabled:opacity-50 disabled:cursor-not-allowed 
                      transition ease-in-out duration-200 hover:bg-system-orange-light shadow-lg hover:shadow-md focus:shadow-none"
        >
          Criar novo clube
        </button>
      </div>

      <div className="w-full bg-system-orange h-[1px] opacity-30 my-4"></div>

      <div className="flex flex-col gap-4">
        {clubList.map((club: Club) => (
          <div className="w-full flex justify-between items-center bg-system-white-light rounded-lg py-4 px-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-4 items-center">
                <div className="w-[40px] h-[40px] rounded-full bg-system-blue"></div>
                <h1 className="font-title text-md font-semibold text-system-blue">
                  {club.name}
                </h1>
              </div>
              <div className="flex flex-col text-white gap-2">
                <button className="py-2 px-3 bg-system-orange-light rounded-full hover:bg-opacity-40">
                  Ver clube
                </button>
                <button className="py-2 px-3 bg-system-blue rounded-full hover:bg-opacity-40">
                  Adicionar membros
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clubs
