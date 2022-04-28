import MovieCard from "./MovieCard"

const PopularMovies = ({movies}) => {
    //console.log(movies)
  return (
    <div className="container mx-auto px-4 rounded-lg max-w-full">
        <h1 className="text-white font-megh py-4 text-4xl pb-8 text-center">Trending</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-5xl mx-auto">
          {
              //movies.map((movie)=> (<MovieCard {...movie} key={movie.id} />))
            movies.map(movie => {
              return (<MovieCard movie ={movie} key={movie.id} />)
            })
          }
        </div>  
    </div>
  )
}

export default PopularMovies