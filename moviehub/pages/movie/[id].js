import axios from "axios"
import Image from "next/image"
import Meta from "../../components/Meta"

const movie = ({movie}) => {
  console.log(movie)
  return (
    <div className="md:flex m-28 border-orange-600 border-4 rounded-lg bg-gray-700">
      <Meta title={movie.title}/>
      <div className="container max-w-md mx-auto m-4 ml-4 border-orange-600 border-4 rounded-lg">
        <Image className="rounded-lg " src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width="50%" height="40%" layout="responsive"/>
      </div>
      <div className="p-4 m-4">
        <h1 className="font-bold text-3xl text-white">{movie.title}</h1>
        <p className=" text-gray-300 font-bold">{movie.genres.map(genre => genre.name).join(' | ')}</p>
        <p className="pt-4 text-white">{movie.overview}</p>
      </div>
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