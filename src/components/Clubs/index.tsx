import { useNavigate } from 'react-router-dom'

const Clubs = () => {
  const navigate = useNavigate()

  return (
    <div className="text-system-black w-full pt-4">
      <div className="w-full flex justify-between">
        <h1>Clubes</h1>
        <button
          onClick={() => navigate('/new-club')}
          className="bg-system-blue px-16 h-[54px] rounded-2xl text-white font-title font-semibold disabled:opacity-50 disabled:cursor-not-allowed 
                      transition ease-in-out duration-200 hover:bg-system-orange-light shadow-lg hover:shadow-md focus:shadow-none"
        >
          Criar novo clube
        </button>
      </div>
    </div>
  )
}

export default Clubs
