import React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { useState } from 'react'
import { z } from 'zod'
import axios from 'axios'
import {
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'

const NewMovie = () => {
  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [duration, setDuration] = useState('')
  const [genres, setGenres] = useState<string[]>([])
  const [posterUrl, setPosterUrl] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAERCAMAAAD/iZ1nAAAAgVBMVEX////4+Pj39/f7+/vz8/Px8fHu7u7o6Ojr6+vl5eXe3t7j4+M3Nzc9PT0zMzPX19dAQEDa2tphYWEvLy+wsLBnZ2fS0tJvb2/MzMx9fX0qKiq1tbVbW1ubm5ulpaWSkpK+vr6JiYlVVVWFhYVNTU1JSUl1dXWgoKDDw8MgICAYGBjbEoExAAAMz0lEQVR4nO1dC5uaOhDNgzcJIoiuiOJ77f3/P/DOJEHt7nYru9Q6/Ry6lZdyGMJkcjgJjE3liOM0FmMvCeIwSv1EjOTosVeP2ZQnl8mLgygKYi8VyWOvTgSDE4plzGMe8lBEXuB7kQh5LOPHXg0eF6kM7MR97gnhCZ8H8mp6xNWpYFB4QulJ4SbOOX54DCfxqKvR4yORcp9JN51N/jQ92OqLxzmjZBePe38bSk/zJUQVMeIRQY+PSHo8kAkHjwuCHpfo8Vh48vd7P5IZj3tjEXFyHoeoknghOY9DHPdYkHiBoAWcy0gkLA0ijxhw6YkwYGEc+MSAcx74KQtDcsCl50URS6PII3ZzSuEHIQtSLyAWDhF4zJKAXDiUwoObE5pv1Kp8LgIvZSMvhoYEKYNwGHu2ISH+NpZexjlWQNhYJuZx5mHTTdLzuE2yKHr80lim6PHR0+N3s2tCiJb5kqzHJVlCiKPHqeUqHT0BHqeVHRImhGLw+JggIWSiip+QawFBGYfsMPFDcvSEj/l4lPrUWvmQj0MLKI4iasClh23OOAyoFRVoc/oxi2Kf2s0pPeRVkogiPRFFGA6pVUBYVFI29mNqSZa9OcVYUEtrLT1BsOlGnBAi6XGijWX+pCfubITpCdoe50964l7m6AmCHg+oepzFVq9C0+NPvcod7axX6edxyCqNXZ2tn0yTq1rMS0ajUFztagxc5V0tdNv6X+2v6lVeytxYswzsivE8q+s6O04d7I2GxXrfhmztdgXTDeOFxhn8KxibZHb9dpP2BI56Ff8LehUArhWYzvYxLk8ypZX5W+Ei32YwmylVt2xd4355Dv9nDZOFNl+EBQvc/ozS037AOcdH4v31Ki+lLtq23Ry0OsLiotRq206WTabLCZ5HqQ/LxWJZAfDpbrPZbLWebza7pQGOK8wCANcz+JkWNm/7pRxOrxL2Lypqg5+h1nnIolxnO/w+bzOdwVWfq2xt9psu7P5HXcf2gAD8AnGSZXiezN/qctQP+Bf1Kh1wVmiVsFdwnNswV6plbAf//+QIAJ6cgV+qDAC+sl/T5Utv4F/RqwDwFj+nSh8CVl0OO4YVDMp1rrab08W1PwFfrsBeU3bx+BiKetwTOBaV/noVKOP7qqoalWcb5u216jB6W52BR3c13INZ3nbx8Rp4DrdtltUvBrjeN00DRTyb98L9Zb1KF1VUPZMsOGjdXS/Z6Boj5KmoM4wfLx8ALzFS/ndiXVSB+ySb9WwOID3hMz7u25AA4PuqKKodHl7ArRW5DXASyp5EsKgA+g//HXCdBBEYN8B1sdtBqHztB/vr9ERXxq0dlS2qYOtMV+f1IZSbyXvgl0PZMn6qdd6vhH+dEDpHlQ6ttkeO9rqECDhxJWepnC9/DRyjyiZTVc9U6RsevwLOKqgaT0KKF7hNG4Cw3y6gKMgxnMb6PfDUt3YGzuHK9C0sXySE3gAP90qXh+YAFegBw9weqv9tBfW+zuU74Lm2lkfnOJ5A7tAvjn9Vr/Lyo9xdL4ezEhMOVVYmW1rlmYk55dbCZbPsh53jjd0CuYoO2aSubQU0qbND0AvBF+mJZNMu3pzKpmogyLiiGk12VVPMJ92PrtqNjTvytT2bB1/aOEe/tpt1HwBDEkKSy08WhzbKehVLT1Cj4Dp6gl6XsZguISRJdhljVPUqAUYVj55ehZPXqwzRgelS5cjLHSOiNHJVBJdn+/blRb1KgnqVITzeNoXjdeZNYdPcuIXET29brO+TbXG25rvHch2YhtGrQAu/sM6tlDKnsM6VNrRRDi2lsWGGLB9Uf/dY2IFpML3KHJrONmesIOmGj1MGGeO8PeYma02LqppBu7iZVVXx3WNJzwtC7MA0RDgE4LnNry1wbH8eMVkNZ9DQsDXcsqOKvmlS+KhXSQfRqwBwaK8jCWiBLzPtPMsL7Zif4YBjURlIrwLAC3Bt0AEvdNlRmS/dOQwG3OpVEjFEkjVXOimUahzwC1MBDYuD1mZmKODI1iZDdWCCqJIGyH9a4GGObJw1R3AN6XGsgERvQuhDA+AJe1F5vT4aj18xc1E+uMcdPTGQx6FFvMpyvTVlvNLlyW0680SP63EbFXMEvoI60945yH/bxvUDexx5TwscWdwC1sgxBBt3CkMBH3S0DwecxRATTc05hRpeVccCK3r3wGEo4IPqVeZZaVmfl9rlKtM9cs1al9vuQUlb1uvvH4kNq1dZzmaOdF3NjqGZ8VbVQR+qybl6m8xm/bi2X5jrpPcn6Qnh/RHG5kJPUCOEsLH8Rz3+h8zQExQ9zggTQhzVzDT1KmOqehWSHZgIj6/iQyuf3DAlffQqSVOYB9fTajbvytVmVq3xc140XU1+qqoJtByq2ebnr7dF0z02WlczY/OFsIvV5YHSbtbZp0/3rV4lDm8ZX2WTaZMgSa06sURYK41JyTSDLNDttijLJWwpVfXTt0PItvZuflKifihTqmx8s1iuzvs1qlMQHdgnxo1e5SZCyNeQrBowS6WcN2DOMECGUXH02yJTCPz60TjaK+7iGkSTTDfz+Xym8qw1i+oCvND51tqnpJEV2tykV4EmmcrLMcxFZfcEHLyI+WqsYVP3xPZj4GKP6e2sA26RnpQhLd4Ah1QeedHP0fTQq+z1fqUsurmyT7BP4Dn8hNbBKu+4qo+BrzPVNto2NBCp+b6fq9kHwMPfIEFzHZhuoCdeSrWTe0syTGur/aq0ac6gN1nbKSg+Bl7pOoYtmw74EuJZ0Kp68QHw9WgK9vmDZhsOb+nANMNSsXTyvMa035PMPqpfowYkhpP5NfARqrZkZmguo69RKLZRFvDbMp6VYP+9eXL9xiw/fgMhlNYIJIYCYQ+ljxDgFEI0jjdkhNURfAh8ZwJRd1VQGITyJij1kw+AG+nTj/WneDp64rcU3EapBVyUo6VKfBR/8YMusTiiN7mQp8xIED8EHuZ6LwQfwz0h7XnP14vFYqN1fXpfVCYntM9LekdP/M7jss7zQ45/lrwEZ6/WTrS3U25TrpNfAIeIhNvhX2Y1ZA7pSuFeX7k5byWEsFRm5urmRniSKN0UVrQXanvdYZORO30AXKDMzZYNc1W6qIIVV/4e+C0yJ/vU7ff0xMGpBSdzV+XMUCpjasJXKO8T3AbuO/jXwM+heF3qyu5yMBGxQyo3CuPp+zh+g91GCEH8c/VYBE7DczzBxTd3GsZCp6Y5GulYBzw/VMaKMZxlRyIujRDU1ZzzBq7fyixu7b6VuTkL98XPGmU3EkKVctoqw/qge8zVx19e1/aeZIYHgntvUWYmV+lUy/V0XCtHwLEYClRgchW3cS5N6tItA3B13vYppJv0KpDqFd11HzWFKbyr/d4I+K7yQnksmilbNw2cWdScnwyOl03TqfswR1zDLnaTlS2eF8Hw95xVx9943NIT5DrpmcaynEqa9MRU0iWEImoelzHZAXdRr0KSEBJjo1ch5nHpc8hVAtSr0PK4zcfTYfQq97TzgLvUgFu9ShgG1LjD54C797Z/YcBdWlW+7cB0CyH0YHY7IfRgdjMh9Gh2RQiR8/hwepV7mvQ4zTGEbFpL0OPEx1ehSE+Y8VVIDuPt6AlyHjf0BF1CiKZCyOpVqHVgcnoVeoSQieNk9SoJSb1K7FMecJec0IbygLsB0QF3PaoD7g7Ygemedu7AJIhJVIm/gQkJIWoe7wghch4/E0L0PP4khO5rT3ri3mb0Kk964o5GXq9C0eOS8Ig2OOAurXzcRhXKehVqLSBm9Sr4gmhaHufS6FVIEkLPF0Tf1fp0YHoosx2YgpgcW9ujA9NjWdeBiRwhZF/WlfjknkhYtvZJCN3P7BMJmoSQIKwQIklPRJT1KiTpCaqEEFl6whFCCUWPE9erEKs5n3qVu5uJ4wQH3O30KiQH3CWtVyH4gmjSHZgiwh2YqIXDcwcmavz4kxC6t9kRbQg+kaBLCPEnIXRfo6tX8XDYQJKEEFV6wulV6DWWadMTjCw9QVWvIinqVULKehWaA+4Kki+ItuOrEOzA9NUXRP91cwPupuRkH27AXZIdmIxehSIhRLYDUzTYG5juaZZX8Z8j2tzNKBNCSE8Q7DJm+HFBkRAiPaINJ9iBSVIlhCjrVcjSE5wyPUHQ44yoXoXyG5jwnVfkas6nXuXe5vQqFAfcFZQH3B3oBdH3tH+hAxOtokK4AxMSQgFJQsi8kpsgPdGNaEPN48L3qRJCRPUq/0AHJmgzm9eSmVeTScbP00OuFhe9ivRgEhwm+IcLzK560NXmNZdIT/CIByIQvgcGMzyC1lwoo8dd3b2uOBahCL3IDwI/8kIR81TC9MirE2glT/lYJF7qx0EYRnGQQpgZyxFciMdeDbhHYuwlQRKlYRxHMOONxFQ++mrxPxexB326YO/1AAAAAElFTkSuQmCC',
  )
  const [synopsis, setSynopsis] = useState('')
  const [day, setDay] = useState(-1)
  const [month, setMonth] = useState(-1)
  const [year, setYear] = useState(-1)
  const navigate = useNavigate()
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const genresList = [
    'ANIMATION',
    'MUSIC',
    'FANTASY',
    'DRAMA',
    'WAR',
    'SCI_FI',
    'HORROR',
    'ADVENTURE',
    'CRIME',
    'BIOGRAPHY',
    'SPORT',
    'ACTION',
    'THRILLER',
    'COMEDY',
    'MYSTERY',
    'FAMILY',
    'MUSICAL',
    'WESTERN',
    'HISTORY',
    'ROMANCE',
    'FILM_NOIR',
  ]

  const movieSchema = z.object({
    name: z
      .string()
      .min(3, { message: 'O titulo precisa ter pelo menos 3 caracteres' })
      .max(60, { message: 'O titulo precisa ter até 60 caracteres' }),
    releaseDate: z.date().refine(
      data => {
        const today = new Date()
        const releaseDate = new Date(data)
        if (releaseDate > today) {
          return false
        }
        return true
      },
      { message: 'A data de lançamento precisa ser anterior a data atual' },
    ),
    duration: z
      .string()
      .min(1, { message: 'Insira uma duração' })
      .max(3, { message: 'Insira uma duração válida' })
      .nullable(),
    genres: z
      .array(z.string())
      .min(1, { message: 'Escolha pelo menos um gênero para o filme' }),
    banner: z
      .string()
      .url({ message: 'O banner precisa de uma URL' })
      .nonempty({ message: 'Insira a URL do banner' }),
    director: z
      .string()
      .min(3, { message: 'O diretor precisa ter pelo menos 3 caracteres' })
      .max(50, { message: 'O titulo precisa ter até 50 caracteres' }),
    synopsis: z
      .string()
      .min(3, { message: 'O sinópse precisa ter pelo menos 3 caracteres' })
      .max(500, { message: 'O titulo precisa ter até 500 caracteres' }),
  })

  const handleChange = (event: SelectChangeEvent<typeof genres>) => {
    const {
      target: { value },
    } = event
    setGenres(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const handleSubmit = async () => {
    setLoadingSubmit(true)

    const releaseDate = new Date(year, month, day)

    try {
      await movieSchema.parseAsync({
        name: title,
        releaseDate,
        duration,
        genres,
        banner: posterUrl,
        director,
        synopsis,
      })

      await axios
        .post('http://localhost:8080/movie/create', {
          name: title,
          releaseDate,
          duration,
          genres,
          banner: posterUrl,
          director,
          synopsis,
        })
        .then(response => {
          toast.success('Filme cadastradado com sucesso!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })

          setTimeout(() => {
            navigate('/dashboard')
          }, 1000)
          console.log(response)
        })
    } catch (error) {
      setLoadingSubmit(false)
      if (error instanceof z.ZodError) {
        toast.warn(error.errors[0].message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      } else {
        toast.error('Erro ao criar filme', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      }
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
                disabled={loadingSubmit}
              />
              <Input
                variant="default"
                label="Diretor"
                inputValue={director}
                inputCallback={setDirector}
                disabled={loadingSubmit}
              />
              <Input
                variant="birthday"
                label="Data de lançamento"
                day={day}
                dayCallback={setDay}
                month={month}
                monthCallback={setMonth}
                year={year}
                yearCallback={setYear}
                disabled={loadingSubmit}
              />
              <Input
                variant="default"
                label="Duração (em minutos)"
                inputValue={duration}
                inputCallback={setDuration}
                disabled={loadingSubmit}
              />
              <div>
                <label className="text-white font-title text-sm mb-1 font-semibold">
                  Gêneros
                </label>
                <Select
                  id="demo-simple-select"
                  value={genres}
                  multiple
                  className="h-[40px] text-sm bg-system-white-light rounded-md w-full text-system-black font-title font-semibold outline outline-2 outline-system-white hover:outline-system-orange hover:outline focus:outline-slate-100"
                  label="Age"
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={selected => selected.join(', ')}
                  disabled={loadingSubmit}
                >
                  {genresList.map(genre => (
                    <MenuItem key={genre} value={genre}>
                      <Checkbox checked={genres.indexOf(genre) > -1} />
                      <ListItemText primary={genre} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <Input
                variant="default"
                label="URL do poster"
                inputValue={posterUrl}
                inputCallback={setPosterUrl}
                disabled={loadingSubmit}
              />
              <Input
                variant="default"
                label="Sinópse"
                inputValue={synopsis}
                inputCallback={setSynopsis}
                type="text"
                className="h-32 w-full"
                disabled={loadingSubmit}
              />
              <button
                disabled={loadingSubmit}
                type="submit"
                className='className="font-title font-semibold text-xl px-12 py-3 bg-system-blue text-white self-center rounded-full hover:bg-system-blue hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-md focus:shadow-none"'
              >
                Cadastrar
              </button>
            </form>
            <div className="self-center w-80 min-h-[440px] rounded-lg overflow-hidden border-2 border-system-blue">
              {posterUrl && (
                <img
                  src={posterUrl}
                  alt="poster"
                  className="w-80 object-cover"
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
