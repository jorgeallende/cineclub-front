export interface CarroselMoviePosterProps {
  image: string
  title: string
  year: number
  director: string
}

const CarroselMoviePoster = ({
  image,
  title,
  year,
  director,
}: CarroselMoviePosterProps) => {
  return (
    <div className="min-w-[150px] rounded-lg mb-1">
      <div className="relative h-full">
        <img
          className="rounded-lg absolute bottom-0 min-h-full min-w-full filter brightness-50"
          src={image}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center font-title">
          <h1 className="font-bold text-sm">{title}</h1>
          <span className="text-xs">
            {year} • {director}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CarroselMoviePoster
