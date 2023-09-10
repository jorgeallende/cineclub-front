import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { useState } from 'react'
import { z } from 'zod'
import axios from 'axios'

const NewMovie = () => {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [duration, setDuration] = useState('')
  const [genres, setGenres] = useState('')
  const [posterUrl, setPosterUrl] = useState(
    'https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg',
  )
  const navigate = useNavigate()
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const movieSchema = z.object({
    title: z.string().min(3).max(60),
    year: z.string().min(4).max(4),
    duration: z.string().min(1).max(3),
    genres: z.array(z.string().min(3).max(20)),
    posterUrl: z.string().url(),
    director: z.string().min(3).max(50),
  })

  const handleSubmit = async () => {
    setLoadingSubmit(true)
    //transform genre string into an array divided by comma and that ignores spaces
    const genresArray = genres.split(',').map((genre: string) => genre.trim())
    console.log(genresArray)
    try {
      await movieSchema.parseAsync({
        title,
        year,
        duration,
        genres: genresArray,
        posterUrl,
        director: 'director',
      })

      await axios
        .post('http://localhost:8080/movie/create', {
          name: title,
          year,
          duration,
          genres: genresArray,
          posterUrl,
          director: 'director',
          synopsis: 'something',
        })
        .then(response => {
          console.log(response)
        })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-system-blue bg-cover bg-bottom bg-blend-hard-light flex h-screen items-center justify-center">
      <div className=" overflow-hidden relative bg-gradient-to-r from-system-orange to-orange-800 h-screen w-11/12 px-44 flex flex-col gap-4 items-center justify-center">
        <div className="absolute left-2 top-2 flex flex-col gap-3 side-animation">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] opacity-40 h-[100px] aspect-square rounded-2xl"
            ></div>
          ))}
        </div>

        {/*  */}
        <div className=" w-full py-6 h-full flex flex-col gap-2">
          <div className="flex justify-between">
            <button
              onClick={() => navigate('/dashboard')}
              className="shadow-lg hover:shadow-sm focus:shadow-none rounded-full"
            >
              <BsFillArrowLeftCircleFill size={26} color={''} />
            </button>
            <h1 className="text-white font-title font-semibold text-xl">
              Adicionar um filme
            </h1>
            <div></div>
          </div>

          <div className="flex w-full gap-4 h-screen flex-1 py-5 overflow-y-scroll p-4">
            <form
              className="flex flex-1 flex-col gap-2 mt-6"
              onSubmit={e => {
                e.preventDefault()
                void handleSubmit()
              }}
            >
              <Input
                variant="default"
                label="Título"
                inputValue={title}
                inputCallback={setTitle}
              />
              <Input
                variant="default"
                label="Ano"
                inputValue={year}
                inputCallback={setYear}
              />
              <Input
                variant="default"
                label="Duração"
                inputValue={duration}
                inputCallback={setDuration}
              />
              <Input
                variant="default"
                label="Gêneros"
                inputValue={genres}
                inputCallback={setGenres}
              />
              <Input
                variant="default"
                label="URL do poster"
                inputValue={posterUrl}
                inputCallback={setPosterUrl}
              />
              <Input
                variant="default"
                label="Sinópse"
                inputValue={posterUrl}
                inputCallback={setPosterUrl}
                type="text"
                className="h-32 text-xs w-full"
              />
              <Input
                variant="default"
                label="Sinópse"
                inputValue={posterUrl}
                inputCallback={setPosterUrl}
                type="text"
                className="h-32 text-xs w-full"
              />
              <Input
                variant="default"
                label="Sinópse"
                inputValue={posterUrl}
                inputCallback={setPosterUrl}
                type="text"
                className="h-32 text-xs w-full"
              />
              <button
                type="submit"
                className='className="font-title font-semibold text-xl px-12 py-3 bg-system-blue text-white self-center rounded-full hover:bg-system-blue hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-md focus:shadow-none"'
              >
                Cadastrar
              </button>
            </form>
            <div className="flex items-center justify-center w-80 rounded-lg overflow-hidden">
              {posterUrl && (
                <img
                  src={posterUrl}
                  alt="poster"
                  className="w-80 border-2 border-system-blue rounded-lg"
                />
              )}
            </div>
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

export default NewMovie
