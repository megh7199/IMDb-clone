import MovieCard from "./MovieCard"

const PopularMovies = ({movies}) => {
    console.log(movies)
  return (
    <div>
        <h1>Trending</h1>
        <div>
            <MovieCard title={'the'}/>
        </div>
        {
            movies.map((movie)=> (<MovieCard {...movie} key={movie.id} />))
           // movies.map(movie => {<MovieCard title = {movie.title} key={movie.id} />})
        }
    </div>
  )
}

export default PopularMovies