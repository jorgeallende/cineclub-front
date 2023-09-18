import { Container, TextField, Button, Typography } from '@mui/material'
import CarroselMoviePoster from '../../components/CarroselMoviePoster'
import { Movie, movies } from '../../data/movies.ts'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

interface MovieFromDb {
  avaregeRating?: number
  banner: string
  director: string
  genres: string[]
  id: number
  name: string
  releaseDate: number[]
  synopsis: string
}

const Movies = () => {
  const movieList = movies['movies']
  const slicedMovieList = movieList.slice(0, 10)
  const [moviesDb, setMoviesDb] = useState<MovieFromDb[]>([])
  const token = Cookies.get('token')
  const [searchInput, setSearchInput] = useState('')
  const [resultSearch, setResultSearch] = useState<MovieFromDb[]>([])
  const [searchMode, setSearchMode] = useState(false)

  const getMovies = async () => {
    const response = await axios.get<MovieFromDb[]>(
      'http://localhost:8080/movie',
    )

    setMoviesDb(response.data)
    console.log(response.data)
  }

  const searchMovies = async (input: string) => {
    const response = await axios
      .get<MovieFromDb[]>('http://localhost:8080/movie/search', {
        headers: {
          Authorization: `Bearer ${token!}`,
        },
      })
      .then(response => {
        console.log('MID pesquisa', response.data)
        setSearchMode(true)
      })
  }

  useEffect(() => {
    void getMovies()
  }, [])

  useEffect(() => {
    if (searchInput.length === 0) {
      setSearchMode(false)
    }
  }, [searchInput])

  return (
    <Container className="py-4 overflow-x-hidden">
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          label="Pesquisar"
          variant="outlined"
          className="w-full"
          onChange={e => setSearchInput(e.target.value)}
        />
        <Button
          variant="contained"
          className="text-blue-950 w-[250px]"
          onClick={() => void searchMovies(searchInput)}
        >
          Pesquisar
        </Button>
      </div>
      <span className="text-system-black text-xs">
        Não encontrou seu filme?{' '}
        <Link to="/new-movie" className="text-blue-900">
          Adicione um novo filme.
        </Link>
      </span>

      <main>
        {searchMode && (
          <section className="mt-4">
            <h1 className="text-xl font-bold text-system-blue">
              Resultados da pesquisa
            </h1>
            <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
              {resultSearch.map((movie: MovieFromDb) => {
                return (
                  <CarroselMoviePoster
                    key={movie.banner}
                    director={movie.director}
                    image={movie.banner}
                    title={movie.name}
                    year={movie.releaseDate ? movie.releaseDate[0] : 0}
                  />
                )
              })}
            </div>
          </section>
        )}
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">
            Escolha dos usuários
          </h1>
          <div className="mt-2 flex w-full gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
            {moviesDb.length > 0 ? (
              moviesDb.map(movie => (
                <CarroselMoviePoster
                  key={movie.banner}
                  director={movie.director}
                  image={movie.banner}
                  title={movie.name}
                  year={movie.releaseDate ? movie.releaseDate[0] : 0}
                />
              ))
            ) : (
              <div>Carregando</div>
            )}
          </div>
        </section>
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">Comédia</h1>
          <div className="mt-2 flex w-full gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
            {moviesDb.map((movie: MovieFromDb) => {
              console.log(movie.genres)
              if (movie.genres.includes('COMEDY')) {
                return (
                  <CarroselMoviePoster
                    key={movie.banner}
                    director={movie.director}
                    image={movie.banner}
                    title={movie.name}
                    year={movie.releaseDate ? movie.releaseDate[0] : 0}
                  />
                )
              }
            })}
          </div>
        </section>
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">Terror</h1>
          <div className="mt-2 flex w-full gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
            {moviesDb.map((movie: MovieFromDb) => {
              console.log(movie.genres)
              if (
                movie.genres.includes('HORROR') ||
                movie.genres.includes('THRILLER')
              ) {
                return (
                  <CarroselMoviePoster
                    key={movie.banner}
                    director={movie.director}
                    image={movie.banner}
                    title={movie.name}
                    year={movie.releaseDate ? movie.releaseDate[0] : 0}
                  />
                )
              }
            })}
          </div>
        </section>
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">Drama</h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
            {moviesDb.map((movie: MovieFromDb) => {
              console.log(movie.genres)
              if (movie.genres.includes('DRAMA')) {
                return (
                  <CarroselMoviePoster
                    key={movie.banner}
                    director={movie.director}
                    image={movie.banner}
                    title={movie.name}
                    year={movie.releaseDate ? movie.releaseDate[0] : 0}
                  />
                )
              }
            })}
          </div>
        </section>
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">Ação</h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
            {moviesDb.map((movie: MovieFromDb) => {
              console.log(movie.genres)
              if (movie.genres.includes('ACTION')) {
                return (
                  <CarroselMoviePoster
                    key={movie.banner}
                    director={movie.director}
                    image={movie.banner}
                    title={movie.name}
                    year={movie.releaseDate ? movie.releaseDate[0] : 0}
                  />
                )
              }
            })}
          </div>
        </section>
      </main>
    </Container>
  )
}

export default Movies
