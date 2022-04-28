import Image from "next/image"
import Link from "next/link"

const MovieCard = ({movie}) => {
   //console.log(title)
    return (
    <Link href={`movie/${movie.id}`}>  
      <div className="text-black bg-white rounded-lg hover:opacity-100 opacity-60 hover:scale-105 border-2">
        <Image className="rounded-t-lg border-white border-4" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="100%" height="100%" layout="responsive"/>
        <div className="px-2 py-2">
          <div className="font-bold">{movie.title}</div>
          <p>{movie.release_date}</p>  
        </div>
      </div>
    </Link>
  )
}

export default MovieCard