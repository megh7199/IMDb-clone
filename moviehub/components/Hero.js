import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <div className='text-center bg-white pb-10'>
      <div className='w-60 mx-auto'>
        <Image src={"/home_cinema.png"} width={200} height={200} layout="responsive" />
      </div>
      <h1 className="text-gray-800 font-bold">MovieHub</h1>
      <p className="text-gray-500">Explore the world of cinema</p>
      <Link href="/contact">
      <button className="text-white bg-gray-800 py-3 px-6 rounded text-sm mt-4">Contact Us</button>
      </Link>
    </div>
  )
}
export default Hero