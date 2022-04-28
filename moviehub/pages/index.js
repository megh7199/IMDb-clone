import Hero from "../components/Hero"
import axios from 'axios'
import PopularMovies from "../components/PopularMovies"

export default function Home({movies}) {
  console.log(movies)
  return (
    <div className="bg-gray-800">
      <Hero />
      <PopularMovies movies={movies.results} />
    </div>
  )
}

export async function getStaticProps(){
  
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data
  return {
    props: {movies}
  }
}