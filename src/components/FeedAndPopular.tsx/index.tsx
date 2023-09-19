import CarroselMoviePoster from '../../components/CarroselMoviePoster'
import { Movie, movies } from '../../data/movies.ts'

const FeedAndPopular = () => {
  const movieList = movies['movies']
  const slicedMovieList = movieList.slice(0, 10)

  return (
    <main className="flex flex-col gap-2 overflow-x-hidden">
      <section className=" rounded-lg flex-1 px-3 py-6 bg-opacity-25 min-h-[300px]">
        <p className="font-title font-bold text-system-black">
          Filmes populares entre clubes
        </p>
        <div className="flex w-full justify-between gap-2 h-full overflow-x-scroll overflow-y-hidden mt-1">
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
      <section className="bg-system-dark-gray rounded-lg p-4 h-2/3 bg-opacity-25 ml-3"></section>
    </main>
  )
}

export default FeedAndPopular
