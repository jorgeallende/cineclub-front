import { Container, TextField, Button, Typography } from '@mui/material'
import CarroselMoviePoster from '../../components/CarroselMoviePoster'
import { Movie, movies } from '../../data/movies.ts'
import { Link } from 'react-router-dom'

const Movies = () => {
  const movieList = movies['movies']
  const slicedMovieList = movieList.slice(0, 10)

  return (
    <Container className="py-4 overflow-x-hidden">
      <div className="flex gap-2">
        <TextField
          id="outlined-basic"
          label="Pesquisar"
          variant="outlined"
          className="w-full"
        />
        <Button variant="contained" className="text-blue-950 w-[250px]">
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
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">
            Escolha dos amigos
          </h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
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
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">
            Escolha dos amigos
          </h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
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
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">
            Escolha dos amigos
          </h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
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
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">
            Escolha dos amigos
          </h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
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
        <section className="mt-4">
          <h1 className="text-xl font-bold text-system-blue">
            Escolha dos amigos
          </h1>
          <div className="mt-2 flex w-full justify-between gap-2 min-h-[250px] h-full overflow-x-scroll overflow-y-hidden">
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
      </main>
    </Container>
  )
}

export default Movies
