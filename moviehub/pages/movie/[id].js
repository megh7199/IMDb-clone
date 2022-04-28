import axios from "axios"
import Image from "next/image"

const movie = ({movie}) => {
  console.log(movie)
  return (
    <div className="container max-w-md mx-auto pt-4 mt-4">
      <Image className="rounded-lg border-gray-800 border-4" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width="50%" height="50%" layout="responsive"/>
    </div>
  )
}

export default movie

export async function getStaticProps(context){
  const {id} = context.params
  const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
  const movie = res.data
  return {
    props: {movie}
  }
}

export async function getStaticPaths(){
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data.results

  const ids = movies.map(movie => movie.id)
  const paths = ids.map(id => ({params:{id: id.toString()}}))

  return {
    paths:paths,
    fallback:false
  }

}